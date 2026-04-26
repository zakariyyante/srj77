import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sweetslotsuk.com"),
  title: "SweetSlots UK – Best Casino Sites UK 2026 | UKGC Licensed",
  description:
    "Find the UK's top-rated UKGC-licensed casino sites for 2026. Independent reviews ranked by bonus value, withdrawal speed, and real player feedback—updated monthly.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "best UK casino sites 2026",
    "UKGC licensed casinos",
    "online casino UK",
    "casino bonus UK",
    "fast withdrawal casino UK",
  ],
  openGraph: {
    type: "website",
    url: "https://sweetslotsuk.com/",
    siteName: "SweetSlots UK",
    title: "SweetSlots UK – Best Casino Sites UK 2026 | UKGC Licensed",
    description:
      "Independent UK casino comparisons ranked by licensing, bonuses, payout speed, and player experience—updated monthly.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweetSlots UK – Best Casino Sites UK 2026",
    description:
      "Independent UKGC-licensed casino comparisons for UK players. Ranked by bonus value, withdrawal speed, and real feedback.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
