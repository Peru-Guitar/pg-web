import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/layout/GoogleAnalytics";
import { SITE_URL } from "@/lib/posts";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Peru Guitar",
    template: "%s | Peru Guitar",
  },
  description:
    "La guitarra nos conecta. Descubre artículos, guías gratuitas, backing tracks y apps para practicar con la comunidad de guitarristas del Perú.",
  openGraph: {
    siteName: "Peru Guitar",
    title: "Peru Guitar · La guitarra nos conecta",
    description: "La guitarra nos conecta. Descubre artículos, guías gratuitas, backing tracks y apps para practicar con la comunidad de guitarristas del Perú.",
    images: [{ url: "/og-peruguitar-v2.jpg", width: 1200, height: 630, alt: "PeruGuitar: La guitarra nos conecta. Comunidad, educación y música." }],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peru Guitar · La guitarra nos conecta",
    description: "La guitarra nos conecta. Descubre artículos, guías gratuitas, backing tracks y apps para practicar con la comunidad de guitarristas del Perú.",
    images: ["/og-peruguitar-v2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-surface focus:p-4"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
