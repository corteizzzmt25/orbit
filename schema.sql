-- ORBIT TRAVEL & TOURISM — run once in Supabase > SQL Editor
create table public.flight_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 2 and 120),
  phone_number text not null check (char_length(phone_number) between 6 and 30),
  departure_city text not null check (char_length(departure_city) between 2 and 120),
  destination_city text not null check (char_length(destination_city) between 2 and 120),
  departure_date date not null,
  departure_time text not null check (char_length(departure_time) <= 8),
  additional_message text check (char_length(additional_message) <= 2000),
  is_read boolean not null default false,
  is_archived boolean not null default false,
  created_at timestamptz not null default now()
);

-- Whitelist of authorized admins (separate from Supabase Auth users)
create table public.admins (user_id uuid primary key references auth.users(id) on delete cascade);

alter table public.flight_requests enable row level security;
alter table public.admins enable row level security;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as
$$ select exists (select 1 from public.admins where user_id = auth.uid()) $$;

-- Customers (anon): INSERT only, and cannot pre-set read/archived flags. No SELECT.
create policy "public can submit" on public.flight_requests
  for insert to anon, authenticated
  with check (is_read = false and is_archived = false);

-- Admins only: read / update / delete
create policy "admin read"   on public.flight_requests for select to authenticated using (public.is_admin());
create policy "admin update" on public.flight_requests for update to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin delete" on public.flight_requests for delete to authenticated using (public.is_admin());

-- An admin can see only their own whitelist row (used for the login check)
create policy "own admin row" on public.admins for select to authenticated using (user_id = auth.uid());

-- Real-time
alter publication supabase_realtime add table public.flight_requests;

-- AFTER creating your admin user in Authentication > Users, authorize them:
-- insert into public.admins (user_id) select id from auth.users where email = 'you@yourcompany.com';
