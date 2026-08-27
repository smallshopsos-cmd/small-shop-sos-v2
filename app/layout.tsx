import type { Metadata } from "next";
import "./globals.css";
import "./hero-crop-fix.css";
import "./showstopper.css";
import "./preview-texture.css";
import { BurtAssistant } from "./burt-assistant";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.smallshopsos.co.uk"),
  title: "Small Shop SOS | Creative Digital Mechanic",
  description: "Creative digital support from Marnie Danson: branding, websites, content, ecommerce, product data and practical business support.",
  icons: { icon: [{ url: "/favicon.svg?v=20260827-round", type: "image/svg+xml", sizes: "48x48" }], shortcut: "/favicon.svg?v=20260827-round", apple: "/favicon.svg?v=20260827-round" },
  other: { "codex-preview": "development" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-GB"><body>{children}<BurtAssistant /></body></html>; }