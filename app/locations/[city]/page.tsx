import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";

import { locationPages, getLocationPage } from "@/lib/data/locations";
import { siteConfig, mapEmbed, mapLink, telHref } from "@/lib/data/site-config";
import { services } from "@/lib/data/services";
import { trainingCourses } from "@/lib/data/training";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow, SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function generateStaticParams() {
  return locationPages.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationPage(city);
  if (!loc) return {};
  return {
    title: { absolute: `Tech Company in ${loc.city}, ${loc.state} | ${siteConfig.name}` },
    description: `${siteConfig.name}: software development, website design, mobile apps, IT support, cybersecurity and tech training in ${loc.city}, ${loc.state}. Visit our ${loc.city} office or call ${siteConfig.phones[0]}.`,
    keywords: [
      `tech company in ${loc.city}`,
      `software company in ${loc.city}`,
      `IT company in ${loc.city}`,
      `website design in ${loc.city}`,
      `web developer in ${loc.city}`,
      `mobile app developer in ${loc.city}`,
      `tech training in ${loc.city}`,
      `coding school in ${loc.city}`,
      `tech company in ${loc.state}`,
      `software company in ${loc.state}`,
    ],
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `Tech Company in ${loc.city}, ${loc.state} | ${siteConfig.name}`,
      url: `${siteConfig.url}/locations/${loc.slug}`,
    },
  };
}

export default async function LocationPageView({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = getLocationPage(city);
  if (!loc) notFound();
  const office = siteConfig.offices.find((o) => o.slug === loc.slug)!;
  const featuredServices = services.filter((s) => s.flagship).slice(0, 6);
  const popularCourses = trainingCourses.filter((c) => c.popular).slice(0, 8);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/locations/${loc.slug}#business`,
      name: `${siteConfig.name} | ${loc.city}`,
      url: `${siteConfig.url}/locations/${loc.slug}`,
      image: `${siteConfig.url}${office.image}`,
      logo: `${siteConfig.url}/logo.png`,
      telephone: siteConfig.phones.map((p) => `+234${p.replace(/\s+/g, "").slice(1)}`),
      email: siteConfig.email,
      priceRange: "₦₦",
      address: {
        "@type": "PostalAddress",
        streetAddress: office.street,
        addressLocality: loc.city,
        addressRegion: loc.state,
        addressCountry: "NG",
      },
      areaServed: [...loc.towns.map((t) => ({ "@type": "City", name: t })), { "@type": "State", name: loc.state }],
      parentOrganization: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      sameAs: Object.values(siteConfig.social),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: loc.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative isolate overflow-hidden bg-ink-950 pb-20 pt-36 text-white sm:pt-44">
        <Image src={office.image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <Eyebrow tone="dark">
              {loc.city}, {loc.state}
            </Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {loc.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">{loc.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/85">
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-brand-400" /> {office.full}
              </span>
              <a href={telHref(siteConfig.phones[0])} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-5 w-5 text-brand-400" /> {siteConfig.phones[0]}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="brand" size="lg" asChild>
                <Link href="/request-a-quote">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline-inverse" size="lg" asChild>
                <Link href="/training">Tech courses in {loc.city}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={`Services in ${loc.city}`}
            title={`Technology services for ${loc.city} and ${loc.state}`}
            description="Everything you need to start, run and grow a digital business, delivered by a local team."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-ink-900/10 p-6 transition-all hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-xl hover:shadow-ink-950/5"
              >
                <h3 className="font-display text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                  {s.name} in {loc.city}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Training in {loc.city}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Learn tech skills in {loc.city}
            </h2>
            <p className="mt-4 text-lg text-ink-700">
              Practical, project-based courses at our {loc.city} training centre, live online, or on
              weekends.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {popularCourses.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/training/${c.slug}`}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-medium text-ink-900 shadow-sm transition-colors hover:text-brand-700"
                  >
                    {c.title} <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-12 font-display text-xl font-semibold text-ink-900">
              Areas we serve around {loc.city}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {loc.towns.map((t) => (
                <li key={t} className="rounded-full border border-ink-900/10 bg-white px-3.5 py-1.5 text-sm text-ink-800">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-sm">
            <iframe
              title={`Map of ${siteConfig.name} ${office.label}`}
              src={mapEmbed(office)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0"
            />
            <div className="p-6">
              <p className="font-display text-lg font-semibold text-ink-900">{office.label}</p>
              <address className="mt-1 not-italic text-ink-700">{office.full}</address>
              <a
                href={mapLink(office)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700"
              >
                Get directions <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-6 border-t border-ink-900/10 pt-6">
                <p className="text-sm font-medium text-ink-700">Follow us</p>
                <SocialLinks links={siteConfig.social} tone="light" className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-ink-900">
            Frequently asked questions in {loc.city}
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {loc.faqs.map((f) => (
              <AccordionItem key={f.question} value={f.question}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
