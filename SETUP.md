# Orbit — setup

1. **Supabase SQL**: paste `supabase.sql` into SQL Editor and run it (tables, RLS, storage bucket `offers`).
2. **Admin user**: Authentication → Users → add user (email + password). Turn off "Allow new users to sign up". Then run the last commented `insert into public.admins …` line in `supabase.sql` with your email. Only users in `admins` can write.
3. **Keys**: edit `CFG.url` and `CFG.key` (publishable/anon key only, never service_role) at the top of `common.js`. This is a static site, so there are no environment variables; the publishable key is public by design and protected by RLS.
4. **Font**: put `CanonArabic-Regular.woff2` and `CanonArabic-Bold.woff2` in `fonts/`. Without them the browser shows its default system font for Arabic (Cairo was removed on purpose).
5. **Admin panel**: open `/admin.html` (no link from the public site, marked noindex).
6. **Daily flights**: add rows to table `daily_flights` (Table Editor) with `is_published = true`.
