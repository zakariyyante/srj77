import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://ukcasinowin.com"),

  title: "UK Casino Win – Best Casino Sites UK 2026 | UKGC Licensed",
  description:
    "Find the UK's top-rated UKGC-licensed casino sites for 2026. Independent reviews ranked by bonus value, withdrawal speed, and real player feedback—updated monthly. 18+ | BeGambleAware.org",

  alternates: {
    canonical: "https://ukcasinowin.com/",
  },

  keywords: [
    "best UK casino sites 2026",
    "UK casino win",
    "UKGC licensed casinos",
    "online casino UK",
    "casino bonus UK",
    "fast withdrawal casino UK",
    "casino comparison UK",
    "new casino sites UK",
  ],

  /*
   * Google Ads compliance:
   * index + follow must be explicitly set so AdsBot never sees a noindex
   * signal that would cause ad disapproval on landing pages.
   */
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-image-preview': 'large',
      'max-snippet':     -1,
    },
  },

  openGraph: {
    type:        "website",
    url:         "https://ukcasinowin.com/",
    siteName:    "UK Casino Win",
    locale:      "en_GB",
    title:       "UK Casino Win – Best Casino Sites UK 2026 | UKGC Licensed",
    description:
      "Independent UK casino comparisons ranked by licensing, bonuses, payout speed, and player experience—updated monthly. 18+ only.",
  },

  twitter: {
    card:        "summary_large_image",
    site:        "@ukcasinowin",
    title:       "UK Casino Win – Best Casino Sites UK 2026",
    description:
      "Independent UKGC-licensed casino comparisons for UK players. 18+ | BeGambleAware.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/*
          Google Ads gambling certification requires the landing page
          to be accessible to AdsBot. No meta robots "noindex" is set above.
          Add your Google Site Verification tag here once issued:
          <meta name="google-site-verification" content="YOUR_CODE_HERE" />
        */}
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
