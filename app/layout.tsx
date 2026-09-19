import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { MobileBottomCta } from "@/components/MobileBottomCta";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gauri Shyam Sakshi Travels | Pilgrimage & Tour Packages",
  description: "Premium pilgrimage and tour travel packages from Gauri Shyam Sakshi Travels in Yamuna Nagar, Haryana.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Gauri Shyam Sakshi Travels",
    description: "Premium pilgrimage and tour travel packages from Yamuna Nagar, Haryana.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-stone-50 text-slate-900">
        <div className="min-h-screen pb-20 md:pb-0">{children}</div>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomCta />
      </body>
    </html>
  );
}
