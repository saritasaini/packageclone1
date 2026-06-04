import { LenisProvider } from "@/components/providers/LenisProvider";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { Metadata } from "next";
import { Figtree, Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bocpak — Eco-Friendly Packaging | Home 2",
  description:
    "Custom printed packaging, cosmetic tubes, pet food pouches, and eco-friendly wholesale packaging solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${figtree.variable}`}>
      <body className="min-h-screen antialiased">
        <LenisProvider>
          <AnnouncementBar />
          <SiteHeader />
          {children}
          <SiteFooter />
        </LenisProvider>
      </body>
    </html>
  );
}
