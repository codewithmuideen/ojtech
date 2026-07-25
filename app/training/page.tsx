import type { Metadata } from "next";
import Link from "next/link";

import { trainingCourses } from "@/lib/data/training";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Hands-on technology training in web development, mobile, cloud, cybersecurity, data, and AI from OJTech.",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Practical technology training, for individuals and teams."
        description="Hands-on curricula built around real, in-demand skills — for people building a career, and for organizations upskilling their staff."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainingCourses.map((course) => (
              <div
                key={course.slug}
                className="flex flex-col rounded-2xl border border-ink-900/10 p-6"
              >
                <Badge variant="brand">{course.category}</Badge>
                <h2 className="mt-3 font-display text-lg font-semibold text-ink-900">
                  {course.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                  {course.description}
                </p>
                <p className="mt-4 text-xs font-medium text-ink-700/70">
                  ~{course.durationWeeks} weeks
                </p>
              </div>
            ))}
          </RevealGroup>

          <div className="mt-16 rounded-3xl bg-mist-50 p-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Interested in a course or corporate training program?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-ink-700">
              Reach out and let us know which track interests you — we&apos;ll
              follow up with cohort details and enrollment information.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact">Register Interest</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
