import Image from "next/image";
import { MapPin, Phone, ArrowUpRight, Mail } from "lucide-react";

import { siteConfig, mapLink, mapEmbed, telHref } from "@/lib/data/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function OfficeLocations({
  withMap = false,
  headingLevel = "h2",
}: {
  withMap?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <section id="locations" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Offices"
          title={
            <>
              Find us in <span className="text-gradient-brand">Ibadan</span> and{" "}
              <span className="text-gradient-brand">Osogbo</span>.
            </>
          }
          description="Visit either of our offices for a project consultation, or enrol at our training centres. We serve clients across Oyo State, Osun State, Nigeria and beyond."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {siteConfig.offices.map((office, i) => (
            <Reveal key={office.slug} delay={i * 0.08}>
              <article
                itemScope
                itemType="https://schema.org/LocalBusiness"
                className="group overflow-hidden rounded-3xl border border-ink-900/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-2xl hover:shadow-ink-950/10"
              >
                <meta itemProp="name" content={`${siteConfig.name} | ${office.city}`} />
                <div className="relative aspect-[16/9] overflow-hidden">
                  {withMap ? (
                    <iframe
                      title={`Map of ${office.label}`}
                      src={mapEmbed(office)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0 grayscale-[30%]"
                    />
                  ) : (
                    <>
                      <Image
                        src={office.image}
                        alt={`${siteConfig.name} ${office.label}`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                      <p className="absolute bottom-5 left-6 font-display text-3xl font-semibold text-white sm:text-4xl">
                        {office.city}
                      </p>
                    </>
                  )}
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                    {office.state}
                  </p>
                  <Heading className="mt-2 font-display text-2xl font-semibold text-ink-900">
                    {office.label}
                  </Heading>
                  <address
                    itemProp="address"
                    className="mt-4 flex items-start gap-3 not-italic text-ink-700"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span>{office.full}</span>
                  </address>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    {siteConfig.phones.map((p) => (
                      <a
                        key={p}
                        href={telHref(p)}
                        itemProp="telephone"
                        className="flex items-center gap-2 text-ink-900 hover:text-brand-700"
                      >
                        <Phone className="h-4 w-4 text-brand-600" /> {p}
                      </a>
                    ))}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-2 text-ink-900 hover:text-brand-700"
                    >
                      <Mail className="h-4 w-4 text-brand-600" /> {siteConfig.email}
                    </a>
                  </div>
                  <a
                    href={mapLink(office)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-600"
                  >
                    Get directions <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
