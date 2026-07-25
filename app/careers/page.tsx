import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase } from "lucide-react";

import { jobOpenings, cultureValues } from "@/lib/data/careers";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join OJTech — a team building software, digital products, and technology solutions for businesses across Africa and beyond.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build technology that matters, with people who care about the craft."
        description="We're always interested in hearing from talented engineers, designers, and technologists — even when a specific role isn't open."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              How we work
            </h2>
          </Reveal>
          <RevealGroup className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((value) => (
              <div key={value.title}>
                <h3 className="font-display font-semibold text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {value.description}
                </p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bg-mist-50 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Open Positions
            </h2>
          </Reveal>

          {jobOpenings.length === 0 ? (
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col items-center rounded-3xl border border-ink-900/10 bg-white px-8 py-16 text-center">
                <Briefcase className="h-8 w-8 text-brand-600" />
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">
                  No open roles right now
                </h3>
                <p className="mt-2 max-w-md text-sm text-ink-700">
                  We don&apos;t have any specific openings posted at the moment,
                  but we&apos;re always glad to hear from strong candidates.
                  Reach out and tell us what you do best.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </Reveal>
          ) : (
            <div className="mt-8 space-y-3">
              {jobOpenings.map((job) => (
                <div
                  key={job.slug}
                  className="flex items-center justify-between rounded-2xl border border-ink-900/10 bg-white p-6"
                >
                  <div>
                    <p className="font-display font-semibold text-ink-900">
                      {job.title}
                    </p>
                    <p className="text-sm text-ink-700">
                      {job.department} · {job.location} · {job.type}
                    </p>
                  </div>
                  <Button asChild size="sm">
                    <Link href="/contact">Apply</Link>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
