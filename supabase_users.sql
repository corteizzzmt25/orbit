-- Orbit: kullanıcı hesapları, günlük talep limiti (Asia/Damascus), admin kullanıcı yönetimi.
-- supabase.sql çalıştırıldıktan SONRA çalıştırın (admins tablosu ve is_admin() gerekir). Tekrar çalıştırılabilir.

create or replace function public.daily_limit() returns int language sql immutable as $$ select 3 $$;

create table if not exists public.registration_settings (
  id int primary key default 1 check (id = 1),
  username_enabled boolean not null default false
);
insert into public.registration_settings (id) values (1) on conflict (id) do nothing;
alter table public.registration_settings enable row level security;
drop policy if exists "admins manage registration settings" on public.registration_settings;
create policy "admins manage registration settings" on public.registration_settings for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  phone text not null unique check (phone ~ '^\+[1-9][0-9]{7,14}$'),
  username text check (username is null or char_length(username) between 3 and 30),
  status text not null default 'active' check (status in ('active','suspended')),
  created_at timestamptz not null default now()
);
create unique index if not exists profiles_username_ci on public.profiles (lower(username)) where username is not null;
alter table public.profiles enable row level security;
drop policy if exists "users read own profile" on public.profiles;
create policy "users read own profile" on public.profiles for select to authenticated using (id = auth.uid());
drop policy if exists "admins read profiles" on public.profiles;
create policy "admins read profiles" on public.profiles for select to authenticated using (public.is_admin());
drop policy if exists "admins update profiles" on public.profiles;
create policy "admins update profiles" on public.profiles for update to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.flight_requests (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  req_date date not null,
  created_at timestamptz not null default now()
);
create index if not exists flight_requests_user_day on public.flight_requests (user_id, req_date);
alter table public.flight_requests enable row level security;   -- politika yok: doğrudan erişim kapalı, sadece aşağıdaki fonksiyonlar

-- Kayıt anında profil oluşturur (telefon benzersizliği + kullanıcı adı kuralı veritabanında zorlanır)
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path = public as $$
declare v_phone text := new.raw_user_meta_data->>'phone'; v_user text := nullif(trim(new.raw_user_meta_data->>'username'), ''); v_en boolean;
begin
  if v_phone is null then return new; end if;            -- site müşterisi değil (ör. dashboard'dan eklenen admin)
  v_phone := regexp_replace(v_phone, '^\+9630', '+963');
  if v_phone !~ '^\+[1-9][0-9]{7,14}$' then raise exception 'invalid_phone'; end if;
  select username_enabled into v_en from public.registration_settings where id = 1;
  if coalesce(v_en, false) then
    if v_user is null then raise exception 'username_required'; end if;
  else
    v_user := null;
  end if;
  insert into public.profiles (id, phone, username) values (new.id, v_phone, v_user);
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

create or replace function public.get_registration_settings() returns jsonb language sql security definer set search_path = public stable as $$
  select jsonb_build_object('username_enabled', coalesce((select username_enabled from public.registration_settings where id = 1), false)) $$;

create or replace function public.username_available(u text) returns boolean language sql security definer set search_path = public stable as $$
  select not exists (select 1 from public.profiles where lower(username) = lower(trim(u))) $$;

-- Talep hakkını düşürür. Gün, Şam saatine (Asia/Damascus) göre hesaplanır; 00:00'da yeni gün başlar.
create or replace function public.consume_flight_request() returns jsonb language plpgsql security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_day date := (now() at time zone 'Asia/Damascus')::date;
        v_used int; v_lim int := public.daily_limit(); v_status text;
begin
  if v_uid is null then return jsonb_build_object('ok', false, 'reason', 'auth'); end if;
  select status into v_status from public.profiles where id = v_uid;
  if v_status is null then return jsonb_build_object('ok', false, 'reason', 'noprofile'); end if;
  if v_status <> 'active' then return jsonb_build_object('ok', false, 'reason', 'suspended'); end if;
  perform pg_advisory_xact_lock(hashtext(v_uid::text));   -- aynı kullanıcının eşzamanlı isteklerini sıraya sokar
  select count(*) into v_used from public.flight_requests where user_id = v_uid and req_date = v_day;
  if v_used >= v_lim then return jsonb_build_object('ok', false, 'reason', 'limit', 'remaining', 0, 'limit', v_lim); end if;
  insert into public.flight_requests (user_id, req_date) values (v_uid, v_day);
  return jsonb_build_object('ok', true, 'remaining', v_lim - v_used - 1, 'limit', v_lim);
end $$;

create or replace function public.my_quota() returns jsonb language plpgsql security definer set search_path = public as $$
declare v_used int; v_lim int := public.daily_limit();
begin
  if auth.uid() is null then return null; end if;
  select count(*) into v_used from public.flight_requests
   where user_id = auth.uid() and req_date = (now() at time zone 'Asia/Damascus')::date;
  return jsonb_build_object('used', v_used, 'remaining', greatest(v_lim - v_used, 0), 'limit', v_lim);
end $$;

create or replace function public.admin_list_users()
returns table (id uuid, username text, phone text, status text, created_at timestamptz, used_today int, left_today int)
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not authorized'; end if;
  return query
    select p.id, p.username, p.phone, p.status, p.created_at,
           coalesce(c.n, 0)::int, greatest(public.daily_limit() - coalesce(c.n, 0), 0)::int
      from public.profiles p
      left join (select r.user_id, count(*) as n from public.flight_requests r
                  where r.req_date = (now() at time zone 'Asia/Damascus')::date group by r.user_id) c on c.user_id = p.id
     order by p.created_at desc limit 2000;
end $$;

revoke all on function public.consume_flight_request() from public, anon, authenticated;
revoke all on function public.my_quota() from public, anon, authenticated;
revoke all on function public.admin_list_users() from public, anon, authenticated;
grant execute on function public.consume_flight_request() to authenticated;
grant execute on function public.my_quota() to authenticated;
grant execute on function public.admin_list_users() to authenticated;
grant execute on function public.get_registration_settings() to anon, authenticated;
grant execute on function public.username_available(text) to anon, authenticated;
