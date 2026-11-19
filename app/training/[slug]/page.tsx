import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BarChart3, Check, Clock, MapPin, MonitorPlay, Wrench } from "lucide-react";

import {
  trainingCourses,
  getCourseBySlug,
  getCategory,
  coursesInCategory,
} from "@/lib/data/training";
import { siteConfig, whatsappLink } from "@/lib/data/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";

export function generateStaticParams() {
  return trainingCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} Course in Osogbo & Ibadan`,
    description: `${course.description} ${course.durationWeeks}-week ${course.level.toLowerCase()} course at Olamitobi Training Academy, Osogbo (Osun State) and Ibadan (Oyo State), also live online.`,
    keywords: [
      `${course.title} training in Osogbo`,
      `${course.title} training in Ibadan`,
      `${course.title} course Nigeria`,
      ...course.tools.map((t) => `learn ${t}`),
    ],
    alternates: { canonical: `/training/${course.slug}` },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const category = getCategory(course.category);
  const related = coursesInCategory(course.category)
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);
  const enrolMessage = `Hi Olamitobi Training Academy, I'd like to enrol for the ${course.title} course. Please send me the next cohort date and fees.`;

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${siteConfig.url}/training/${course.slug}`,
    educationalLevel: course.level,
    teaches: course.outcomes,
    provider: {
      "@type": "EducationalOrganization",
      name: `${siteConfig.name} Training Academy`,
      sameAs: siteConfig.url,
    },
    hasCourseInstance: [
      ...siteConfig.offices.map((o): Record<string, unknown> => ({
        "@type": "CourseInstance",
        courseMode: "Onsite",
        courseWorkload: `P${course.durationWeeks}W`,
        location: {
          "@type": "Place",
          name: `${siteConfig.name} ${o.label}`,
          address: o.full,
        },
      })),
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: `P${course.durationWeeks}W`,
      },
    ],
  };

  const facts = [
    { icon: Clock, label: "Duration", value: `${course.durationWeeks} weeks` },
    { icon: BarChart3, label: "Level", value: course.level },
    { icon: MonitorPlay, label: "Format", value: "Physical · Online · Weekend" },
    { icon: MapPin, label: "Campuses", value: "Osogbo & Ibadan" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative isolate overflow-hidden bg-ink-950 pb-16 pt-36 text-white sm:pt-44">
        {category && (
          <Image src={category.image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-25" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/50" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/training"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All courses
          </Link>
          <Reveal className="mt-8 max-w-3xl">
            <Eyebrow tone="dark">{category?.name ?? "Training"}</Eyebrow>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{course.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="brand" size="lg" asChild>
                <a href={whatsappLink(enrolMessage)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" /> Enrol now
                </a>
              </Button>
              <Button variant="outline-inverse" size="lg" asChild>
                <Link href="/contact">Ask a question</Link>
              </Button>
            </div>
          </Reveal>

          <dl className="mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <f.icon className="h-5 w-5 text-brand-400" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-white/50">{f.label}</dt>
                  <dd className="font-medium">{f.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-ink-900">What you&apos;ll learn</h2>
              <ol className="mt-8 space-y-3">
                {course.modules.map((m, i) => (
                  <li
                    key={m}
                    className="flex items-center gap-5 rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-brand-500/50"
                  >
                    <span className="font-display text-2xl font-semibold tabular-nums text-brand-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-ink-900">{m}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-16 font-display text-3xl font-semibold text-ink-900">
                By the end, you&apos;ll be able to
              </h2>
              <ul className="mt-6 space-y-4">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-lg text-ink-700">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-mist-50 p-8">
              <p className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900">
                <Wrench className="h-5 w-5 text-brand-600" /> Tools &amp; technologies
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {course.tools.map((t) => (
                  <li key={t} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink-800 shadow-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-3xl bg-ink-950 p-8 text-white">
              <p className="font-display text-xl font-semibold">Ready to start?</p>
              <p className="mt-2 text-sm text-white/70">
                Message us for the next cohort date, fees and payment plans. Classes hold at:
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                {siteConfig.offices.map((o) => (
                  <li key={o.slug} className="flex gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" /> {o.full}
                  </li>
                ))}
              </ul>
              <Button variant="brand" size="lg" asChild className="mt-6 w-full">
                <a href={whatsappLink(enrolMessage)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" /> Enrol on WhatsApp
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mist-50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-ink-900">Related courses</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/training/${r.slug}`}
                  className="group rounded-2xl border border-ink-900/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-950/5"
                >
                  <span className="text-xs font-medium text-brand-700">
                    {r.level} · {r.durationWeeks} weeks
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700 line-clamp-2">{r.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                    View course <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
