import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowUpRight } from "lucide-react";

import { founder } from "@/lib/data/founder";
import { siteConfig } from "@/lib/data/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
      itemScope
      itemType="https://schema.org/Person"
    >
      <meta itemProp="jobTitle" content={founder.role} />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-ink-950 shadow-2xl shadow-ink-950/20">
            <Image
              src={founder.photo}
              alt={`${founder.name}, ${founder.role} of ${siteConfig.name}`}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
              itemProp="image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white">
              <p className="font-display text-2xl font-semibold">{founder.shortName}</p>
              <p className="text-sm text-brand-300">{founder.role}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Meet our founder</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl">
              <span itemProp="name">{founder.name}</span>
            </h2>
            <p className="mt-3 font-display text-lg font-medium text-brand-700">
              {founder.role}, {siteConfig.name}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-700" itemProp="description">
              {founder.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="mt-8 rounded-2xl border-l-4 border-brand-500 bg-mist-50 p-6">
              <Quote className="h-6 w-6 text-brand-500" />
              <figcaption className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Our founding mission
              </figcaption>
              <p className="mt-2 font-display text-xl font-medium leading-snug text-ink-900">
                Make technology work for every business we serve, and raise the engineers who
                will build Africa&apos;s digital future.
              </p>
            </figure>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {founder.expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-ink-900/10 px-3.5 py-1.5 text-sm font-medium text-ink-800"
                >
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <SocialLinks links={founder.social} tone="light" prefix={`${founder.shortName} on`} />
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-600"
              >
                Meet the whole team <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            {Object.values(founder.social).map((url) => (
              <link key={url} itemProp="sameAs" href={url} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
