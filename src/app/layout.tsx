import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import ServiceWorker from "@/components/layout/ServiceWorker";
import CopyGuard from "@/components/layout/CopyGuard";
import LinkTracker from "@/components/layout/LinkTracker";
import { SITE_URL } from "@/lib/posts";
import { clarityProjectId, gaMeasurementId } from "@/content/settings.json";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const SPECULATION_RULES = {
  prefetch: [
    {
      where: {
        and: [
          { href_matches: "/*" },
          { not: { href_matches: "/*.(pdf|mp3|zip|jpg|png|webp)" } },
          { not: { selector_matches: "[download], [target=_blank]" } },
        ],
      },
      eagerness: "moderate",
    },
  ],
};

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
    images: [{ url: "/og-peruguitar-v3.jpg", width: 1200, height: 630, alt: "Peru Guitar: La guitarra nos conecta. Comunidad, educación y música." }],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peru Guitar · La guitarra nos conecta",
    description: "La guitarra nos conecta. Descubre artículos, guías gratuitas, backing tracks y apps para practicar con la comunidad de guitarristas del Perú.",
    images: ["/og-peruguitar-v3.jpg"],
  },
  applicationName: "Peru Guitar",
  manifest: "/manifest.webmanifest",
  icons: { apple: "/icons/apple-touch-icon.png" },
  appleWebApp: { capable: true, title: "Peru Guitar" },
};

export const viewport: Viewport = { themeColor: "#111111" };

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
        <CopyGuard />
        <LinkTracker />
        <ServiceWorker />
        {/* Speculation Rules: prefetch internal pages on hover/press so plain
            <a> links (and full page loads) open instantly. Chromium only. */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SPECULATION_RULES) }}
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
            </Script>
            <Script id="clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarityProjectId}");`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
