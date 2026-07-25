import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";
import { siteConfig } from "@/lib/data/site-config";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ServiceWorkerRegistration } from "@/components/pwa/ServiceWorkerRegistration";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "software development company in Nigeria",
    "web development company Nigeria",
    "mobile app development company Nigeria",
    "IT consulting company Nigeria",
    "SaaS development company Nigeria",
    "digital transformation company Nigeria",
    "technology company Africa",
  ],
  authors: [{ name: siteConfig.name }],
  applicationName: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#17162a",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  alternateName: siteConfig.formerName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  foundingDate: String(siteConfig.foundedYear),
  description: siteConfig.description,
  areaServed: siteConfig.serviceAreas,
  sameAs: Object.values(siteConfig.social),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
