import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export function getSupabase() {
  if (!url || !key) throw new Error("Supabase is not configured for this site.");
  return createClient(url, key, { auth: { persistSession: false } });
}

export function cmsMediaUrl(path?: string | null) {
  if (!path || !url) return null;
  return `${url}/storage/v1/object/public/cms-media/${path}`;
}
