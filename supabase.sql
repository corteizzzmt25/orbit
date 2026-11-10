-- Güvenle tekrar çalıştırılabilir. Supabase → SQL Editor'e tamamını yapıştırıp Run.
create table if not exists public.admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.admins enable row level security;
drop policy if exists "admin reads own row" on public.admins;
create policy "admin reads own row" on public.admins for select to authenticated using (user_id = auth.uid());

create or replace function public.is_admin() returns boolean language sql security definer set search_path = public stable
as $$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

create or replace function public.touch_updated_at() returns trigger language plpgsql as
$$ begin new.updated_at = now(); return new; end $$;

create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  title text not null, title_ar text, description text, description_ar text,
  image_url text, image_path text,
  facebook_url text not null check (facebook_url ~* '^https://'),
  is_published boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
drop trigger if exists offers_touch on public.offers;
create trigger offers_touch before update on public.offers for each row execute function public.touch_updated_at();
alter table public.offers enable row level security;
drop policy if exists "public reads published offers" on public.offers;
create policy "public reads published offers" on public.offers for select to anon, authenticated using (is_published);
drop policy if exists "admins manage offers" on public.offers;
create policy "admins manage offers" on public.offers for all to authenticated using (public.is_admin()) with check (public.is_admin());

create table if not exists public.daily_flights (
  id uuid primary key default gen_random_uuid(),
  flight_date date not null, departure_time time, airline text, flight_number text,
  from_city text not null, to_city text not null, notes text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
drop trigger if exists flights_touch on public.daily_flights;
create trigger flights_touch before update on public.daily_flights for each row execute function public.touch_updated_at();
alter table public.daily_flights enable row level security;
drop policy if exists "public reads published flights" on public.daily_flights;
create policy "public reads published flights" on public.daily_flights for select to anon, authenticated using (is_published);
drop policy if exists "admins manage flights" on public.daily_flights;
create policy "admins manage flights" on public.daily_flights for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- Resim deposu (herkes okuyabilir, sadece admin yazar)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('offers', 'offers', true, 5242880, array['image/jpeg','image/png','image/webp']) on conflict (id) do nothing;
drop policy if exists "admins read offer images" on storage.objects;
create policy "admins read offer images"   on storage.objects for select to authenticated using (bucket_id = 'offers' and public.is_admin());
drop policy if exists "admins upload offer images" on storage.objects;
create policy "admins upload offer images" on storage.objects for insert to authenticated with check (bucket_id = 'offers' and public.is_admin());
drop policy if exists "admins update offer images" on storage.objects;
create policy "admins update offer images" on storage.objects for update to authenticated using (bucket_id = 'offers' and public.is_admin());
drop policy if exists "admins delete offer images" on storage.objects;
create policy "admins delete offer images" on storage.objects for delete to authenticated using (bucket_id = 'offers' and public.is_admin());
