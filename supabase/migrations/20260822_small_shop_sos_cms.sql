-- Run this once in Supabase: SQL Editor → New query → paste → Run.
-- It creates the Small Shop SOS CMS database, private-owner policies and media bucket.

create extension if not exists pgcrypto;

create or replace function public.small_shop_sos_is_owner()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'smallshopsos@gmail.com';
$$;
revoke all on function public.small_shop_sos_is_owner() from public;
grant execute on function public.small_shop_sos_is_owner() to anon, authenticated;

create table public.cms_posts (
 id uuid primary key default gen_random_uuid(), title text not null,
 slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'), excerpt text not null default '', body_html text not null default '',
 featured_image_path text, featured_image_alt text not null default '', author text not null default 'Marnie Danson',
 status text not null default 'draft' check (status in ('draft','published')), published_at timestamptz,
 seo_title text, meta_description text, canonical_url text, social_image_path text,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.cms_services (
 id uuid primary key default gen_random_uuid(), slug text not null unique, service_name text not null,
 short_description text not null default '', main_copy text not null default '', starting_price text,
 hero_image_path text, hero_image_alt text not null default '', supporting_images jsonb not null default '[]'::jsonb,
 cta_label text not null default 'Work with me →', cta_href text not null default '/work-with-me/', display_order integer not null default 0,
 is_visible boolean not null default true, seo_title text, meta_description text, canonical_url text, updated_at timestamptz not null default now()
);
create table public.cms_pages (
 id uuid primary key default gen_random_uuid(), page_key text not null unique, heading text, eyebrow text, body text,
 image_path text, image_alt text not null default '', cta_label text, cta_href text,
 status text not null default 'published' check (status in ('draft','published')), seo_title text, meta_description text, canonical_url text, updated_at timestamptz not null default now()
);
create table public.cms_media (
 id uuid primary key default gen_random_uuid(), storage_path text not null unique, file_name text not null,
 alt_text text not null default '', mime_type text not null, bytes bigint, created_at timestamptz not null default now()
);
create table public.cms_reviews (
 id uuid primary key default gen_random_uuid(), quote text not null, person_name text not null, person_role text, source text,
 rating smallint check (rating between 1 and 5), is_visible boolean not null default true, display_order integer not null default 0,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.cms_settings (setting_key text primary key, setting_value jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now());
create index cms_posts_public_idx on public.cms_posts (status, published_at desc);
create index cms_services_visible_idx on public.cms_services (is_visible, display_order);
create index cms_reviews_visible_idx on public.cms_reviews (is_visible, display_order);

create or replace function public.cms_touch_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end; $$;
create trigger cms_posts_touch before update on public.cms_posts for each row execute function public.cms_touch_updated_at();
create trigger cms_services_touch before update on public.cms_services for each row execute function public.cms_touch_updated_at();
create trigger cms_pages_touch before update on public.cms_pages for each row execute function public.cms_touch_updated_at();
create trigger cms_reviews_touch before update on public.cms_reviews for each row execute function public.cms_touch_updated_at();
create trigger cms_settings_touch before update on public.cms_settings for each row execute function public.cms_touch_updated_at();

alter table public.cms_posts enable row level security;
alter table public.cms_services enable row level security;
alter table public.cms_pages enable row level security;
alter table public.cms_media enable row level security;
alter table public.cms_reviews enable row level security;
alter table public.cms_settings enable row level security;
create policy "published posts are public" on public.cms_posts for select using (status = 'published');
create policy "owner manages posts" on public.cms_posts for all to authenticated using (public.small_shop_sos_is_owner()) with check (public.small_shop_sos_is_owner());
create policy "visible services are public" on public.cms_services for select using (is_visible = true);
create policy "owner manages services" on public.cms_services for all to authenticated using (public.small_shop_sos_is_owner()) with check (public.small_shop_sos_is_owner());
create policy "published pages are public" on public.cms_pages for select using (status = 'published');
create policy "owner manages pages" on public.cms_pages for all to authenticated using (public.small_shop_sos_is_owner()) with check (public.small_shop_sos_is_owner());
create policy "media metadata is public" on public.cms_media for select using (true);
create policy "owner manages media metadata" on public.cms_media for all to authenticated using (public.small_shop_sos_is_owner()) with check (public.small_shop_sos_is_owner());
create policy "visible reviews are public" on public.cms_reviews for select using (is_visible = true);
create policy "owner manages reviews" on public.cms_reviews for all to authenticated using (public.small_shop_sos_is_owner()) with check (public.small_shop_sos_is_owner());
create policy "public settings are readable" on public.cms_settings for select using (true);
create policy "owner manages settings" on public.cms_settings for all to authenticated using (public.small_shop_sos_is_owner()) with check (public.small_shop_sos_is_owner());

insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('cms-media','cms-media',true,10485760,array['image/jpeg','image/png','image/webp','image/gif']);
create policy "cms media is publicly readable" on storage.objects for select using (bucket_id = 'cms-media');
create policy "owner uploads cms media" on storage.objects for insert to authenticated with check (bucket_id = 'cms-media' and public.small_shop_sos_is_owner());
create policy "owner updates cms media" on storage.objects for update to authenticated using (bucket_id = 'cms-media' and public.small_shop_sos_is_owner()) with check (bucket_id = 'cms-media' and public.small_shop_sos_is_owner());
create policy "owner deletes cms media" on storage.objects for delete to authenticated using (bucket_id = 'cms-media' and public.small_shop_sos_is_owner());

insert into public.cms_settings (setting_key,setting_value) values
 ('business','{"business_name":"Small Shop SOS","contact_email":"hello@smallshopsos.co.uk","booking_url":"https://cal.com/marnie-sos","location":"Poole, UK","worldwide":"Working with clients worldwide"}'::jsonb),
 ('burt','{"enabled":true,"welcome_text":"Hello, I’m Burt. Tell me what you’re trying to sort and I’ll point you in the right direction.","human_contact_text":"Want a real person? You can speak to Marnie on WhatsApp.","whatsapp_url":"","book_url":"/book/","work_with_me_url":"/work-with-me/"}'::jsonb);
