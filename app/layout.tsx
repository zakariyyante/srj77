import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5TopCasinosUK - Best Online Casino Sites UK 2025",
  description: "Compare the best online casino sites in the UK. Find trusted, licensed casinos with great bonuses, fast withdrawals, and secure gaming.",
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
      </body>
    </html>
  );
}
