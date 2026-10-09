import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteUrl } from "@/data/salon";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const title = "Aurelia Salon & Spa — Unisex Salon in DLF Phase 4, Gurugram";
const description =
  "Haircuts, balayage, keratin, facials, nails, bridal makeup, men's grooming and spa in Galleria Market, Gurugram. Book your appointment online.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Aurelia Salon & Spa",
  keywords: ["salon in Gurugram", "unisex salon DLF Phase 4", "bridal makeup Gurugram", "balayage Gurugram", "keratin Gurugram", "spa Galleria Market"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: "Aurelia Salon & Spa", title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#faf6f0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream font-sans text-ink">{children}</body>
    </html>
  );
}
