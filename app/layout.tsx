import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { siteConfig } from "@/lib/data/site-config";
import { founder } from "@/lib/data/founder";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { ServiceWorkerRegistration } from "@/components/pwa/ServiceWorkerRegistration";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

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
    "tech company in Osogbo",
    "tech company in Osun State",
    "software company in Osogbo",
    "IT company in Osogbo",
    "website design in Osogbo",
    "tech training in Osogbo",
    "tech company in Ibadan",
    "software company in Ibadan",
    "IT company in Ibadan",
    "website design in Ibadan",
    "tech training in Ibadan",
    "tech company in Oyo State",
    "coding school in Osogbo",
    "coding school in Ibadan",
    "software development company in Nigeria",
    "web development company Nigeria",
    "mobile app development company Nigeria",
    "IT consulting company Nigeria",
    "Olamitobi Technologies",
    "Muideen Akinroye",
  ],
  category: "technology",
  creator: founder.name,
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
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    locale: "en_NG",
    images: [{ url: "/images/hero-engineers.webp", width: 1600, height: 1067, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero-engineers.webp"],
    site: "@olamitobitech",
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#17162a",
  width: "device-width",
  initialScale: 1,
};

const sameAs = Object.values(siteConfig.social).filter((u) => !u.includes("wa.me"));
const telephones = siteConfig.phones.map((p) => `+234${p.replace(/\s+/g, "").slice(1)}`);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: ["Olamitobi Tech", "OlamiTobi Technologies", "Olamitobi"],
      url: siteConfig.url,
      logo: `${siteConfig.url}/logo.png`,
      foundingDate: String(siteConfig.foundedYear),
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: telephones[0],
      founder: { "@id": `${siteConfig.url}/#founder` },
      sameAs,
      areaServed: ["Osogbo", "Osun State", "Ibadan", "Oyo State", "Nigeria"],
      location: siteConfig.offices.map((o) => ({ "@id": `${siteConfig.url}/locations/${o.slug}#business` })),
    },
    ...siteConfig.offices.map((o) => ({
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/locations/${o.slug}#business`,
      name: `${siteConfig.name} — ${o.city}`,
      url: `${siteConfig.url}/locations/${o.slug}`,
      image: `${siteConfig.url}${o.image}`,
      telephone: telephones,
      email: siteConfig.email,
      priceRange: "₦₦",
      address: {
        "@type": "PostalAddress",
        streetAddress: o.street,
        addressLocality: o.city,
        addressRegion: o.state,
        addressCountry: "NG",
      },
      parentOrganization: { "@id": `${siteConfig.url}/#organization` },
      sameAs,
    })),
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: founder.name,
      alternateName: ["Muideen Akinroye", "Akinroye Muideen Olawale"],
      jobTitle: founder.role,
      image: `${siteConfig.url}${founder.photo}`,
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      sameAs: Object.values(founder.social),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
