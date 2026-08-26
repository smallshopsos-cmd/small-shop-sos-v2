import type { Metadata } from "next";
import "./globals.css";
import "./hero-crop-fix.css";

export const metadata: Metadata = { metadataBase: new URL("https://www.smallshopsos.co.uk"), title: "Small Shop SOS | Creative Digital Mechanic", description: "Creative digital support from Marnie Danson: branding, websites, content, ecommerce, product data and practical business support.", other: { "codex-preview": "development" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-GB"><body>{children}</body></html>; }
