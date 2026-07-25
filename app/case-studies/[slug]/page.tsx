import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const narrative = [
    { title: "Overview", body: cs.overview },
    { title: "The Challenge", body: cs.challenge },
    { title: "Research", body: cs.research },
    { title: "Strategy", body: cs.strategy },
    { title: "Design", body: cs.design },
    { title: "Development", body: cs.development },
    { title: "Implementation", body: cs.implementation },
  ];

  return (
    <>
      <section className="bg-white pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge variant="brand">{cs.industry}</Badge>
              {cs.isPlaceholder && (
                <Badge variant="ink">Illustrative sample case study</Badge>
              )}
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {cs.title}
            </h1>
            <p className="mt-3 text-ink-700">{cs.client}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl space-y-12 px-6 lg:px-8">
          {narrative.map((section) => (
            <Reveal key={section.title}>
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">{section.body}</p>
            </Reveal>
          ))}

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Objectives
            </h2>
            <ul className="mt-3 space-y-2">
              {cs.objectives.map((objective) => (
                <li key={objective} className="flex gap-3 text-ink-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  {objective}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {cs.technologies.map((tech) => (
                <Badge key={tech} variant="ink">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Results
            </h2>
            <ul className="mt-3 space-y-2">
              {cs.results.map((result) => (
                <li key={result} className="flex gap-3 text-ink-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  {result}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="rounded-3xl bg-mist-50 p-8">
              <h2 className="font-display text-xl font-semibold text-ink-900">
                Lessons Learned
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                {cs.lessonsLearned}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Facing a similar challenge?
            </h2>
            <Button asChild size="lg" className="mt-6">
              <Link href="/book-consultation">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
