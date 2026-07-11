import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "L & V Auto Repair | Family-Owned Auto Repair in Waco, TX",
  description:
    "L & V Auto Repair has served Waco, Texas for 30 years with honest, reliable auto repair. Transmissions, brakes, suspension, A/C repair, oil changes, tune-ups, and more. Free estimates, warrantied work. Family-owned and operated.",
  keywords: [
    "auto repair Waco TX",
    "transmission repair Waco",
    "brake repair Waco",
    "A/C repair Waco",
    "oil change Waco",
    "family owned auto shop Waco",
    "mechanic Waco Texas",
  ],
  openGraph: {
    title: "L & V Auto Repair | Waco, TX",
    description:
      "30 years of honest, reliable auto repair in Waco, Texas. Family-owned and operated. Free estimates.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
