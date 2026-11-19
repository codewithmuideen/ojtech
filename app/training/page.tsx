import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, CalendarDays, MonitorPlay, Users } from "lucide-react";

import { siteConfig, whatsappLink } from "@/lib/data/site-config";
import { trainingCourses, trainingCategories, trainingFormats } from "@/lib/data/training";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { TrainingCatalog } from "@/components/training/TrainingCatalog";
import { OfficeLocations } from "@/components/shared/OfficeLocations";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";

export const metadata: Metadata = {
  title: "Tech Training Courses in Osogbo & Ibadan | Training Academy",
  description: `Learn coding, web development, data analysis, cybersecurity, cloud, UI/UX, AI and ${trainingCourses.length}+ tech courses at Olamitobi Training Academy in Osogbo, Osun State and Ibadan, Oyo State. Physical, online and weekend classes.`,
  keywords: [
    "tech training in Osogbo",
    "coding school in Osogbo",
    "computer training centre Osogbo",
    "tech training in Ibadan",
    "coding school in Ibadan",
    "tech courses in Osun State",
    "tech courses in Oyo State",
    "learn programming Nigeria",
    "data analysis training Ibadan",
    "cybersecurity training Nigeria",
  ],
  alternates: { canonical: "/training" },
};

const formatIcons = [Building2, MonitorPlay, CalendarDays, Users];

export default function TrainingPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Olamitobi Training Academy courses",
    itemListElement: trainingCourses.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteConfig.url}/training/${c.slug}`,
      name: c.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative isolate overflow-hidden bg-ink-950 pb-20 pt-36 text-white sm:pt-44">
        <Image
          src="/images/training-classroom.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <Eyebrow tone="dark">Olamitobi Training Academy</Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
              Tech training in <span className="text-gradient-brand">Osogbo &amp; Ibadan</span>{" "}
              that gets you hired.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              {trainingCourses.length}+ practical tech courses across{" "}
              {trainingCategories.length} career paths, taught by working engineers.
              Learn in our classrooms, live online or on weekends, and leave with real
              projects in your portfolio.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="brand" size="lg" asChild>
                <a href="#catalog">
                  Browse courses <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline-inverse" size="lg" asChild>
                <a
                  href={whatsappLink("Hi Olamitobi Training Academy, I'd like to enrol for a course.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enrol on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <dl className="mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-sm text-white/55">Courses</dt>
              <dd className="font-display text-3xl font-semibold sm:text-4xl">{trainingCourses.length}+</dd>
            </div>
            <div>
              <dt className="text-sm text-white/55">Career paths</dt>
              <dd className="font-display text-3xl font-semibold sm:text-4xl">{trainingCategories.length}</dd>
            </div>
            <div>
              <dt className="text-sm text-white/55">Campuses</dt>
              <dd className="font-display text-3xl font-semibold sm:text-4xl">2</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-ink-900/10 bg-mist-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trainingFormats.map((f, i) => {
            const Icon = formatIcons[i];
            return (
              <div key={f.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-ink-950">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink-900">{f.title}</p>
                  <p className="mt-1 text-sm text-ink-700">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="catalog" className="scroll-mt-20 bg-white pb-24 pt-6 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <TrainingCatalog />
        </div>
      </section>

      <section className="bg-ink-950 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Training your team? We&apos;ll build the programme around you.
            </h2>
            <p className="mt-3 text-white/70">
              Corporate and government upskilling in digital literacy, data, cybersecurity
              awareness, AI productivity and more, on-site or virtual.
            </p>
          </div>
          <Button variant="brand" size="lg" asChild>
            <Link href="/training/corporate-technology-training">
              Corporate training <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <OfficeLocations />
    </>
  );
}
