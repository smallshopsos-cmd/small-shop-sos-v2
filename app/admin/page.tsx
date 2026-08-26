import type { Metadata } from "next";
import AdminClient from "./admin-client";

export const metadata: Metadata = { title: "Small Shop SOS Admin", robots: { index: false, follow: false, nocache: true } };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  // Sites supplies environment values at request time. Passing the public
  // Supabase details from this server component keeps the browser client from
  // relying on build-time variables that are absent from a deployed bundle.
  const { env } = await import("cloudflare:workers");
  return <AdminClient supabaseUrl={env.NEXT_PUBLIC_SUPABASE_URL || ""} supabaseKey={env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || ""} />;
}
