import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://sweetslotsuk.com"),
  title: "SweetSlots UK - Top Online Casino Picks (2026)",
  description:
    "SweetSlots UK compares UKGC-licensed casino sites with standout bonuses, speedy withdrawals, and great game libraries—updated regularly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://sweetslotsuk.com/",
    siteName: "SweetSlots UK",
    title: "SweetSlots UK - Top Online Casino Picks (2026)",
    description:
      "Independent UK casino comparisons with a focus on licensing, bonuses, payouts, and player experience—updated regularly.",
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
