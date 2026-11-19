import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, GraduationCap } from "lucide-react";

import { trainingCategories, trainingCourses, coursesInCategory } from "@/lib/data/training";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export function AcademySection() {
  const popular = trainingCourses.filter((c) => c.popular).slice(0, 6);

  return (
    <section className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Olamitobi Training Academy"
          title={
            <>
              Learn tech in <span className="text-gradient-brand">Osogbo &amp; Ibadan.</span>
            </>
          }
          description={`${trainingCourses.length}+ hands-on tech courses taught by working engineers, from your first line of code to cloud, cybersecurity and AI. Physical classes, live online and weekend cohorts.`}
          action={
            <Button size="lg" asChild>
              <Link href="/training">
                <GraduationCap className="h-4 w-4" /> View all courses
              </Link>
            </Button>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="relative min-h-[26rem] overflow-hidden rounded-3xl">
            <Image
              src="/images/training-students.webp"
              alt="Students learning to code in a computer lab"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <p className="font-display text-2xl font-semibold leading-snug">
                Build a portfolio, not just a certificate.
              </p>
              <p className="mt-2 text-sm text-white/75">
                Every programme ends with real projects you can show employers and clients.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {popular.map((course, i) => (
              <Reveal key={course.slug} delay={(i % 2) * 0.06}>
                <Link
                  href={`/training/${course.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl hover:shadow-ink-950/5"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-medium text-brand-700">
                      {course.level}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-600 transition-all group-hover:rotate-45 group-hover:text-brand-600" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
                    {course.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700 line-clamp-2">
                    {course.description}
                  </p>
                  <p className="mt-4 flex items-center gap-1.5 text-xs font-medium text-ink-600">
                    <Clock className="h-3.5 w-3.5" /> {course.durationWeeks} weeks
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2">
            {trainingCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/training#${cat.slug}`}
                className="rounded-full border border-ink-900/10 bg-white px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-ink-900 hover:bg-ink-900 hover:text-white"
              >
                {cat.name} <span className="opacity-60">({coursesInCategory(cat.slug).length})</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
