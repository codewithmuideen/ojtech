import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, AlertCircle, Lightbulb } from "lucide-react";

import { industries, getIndustryBySlug } from "@/lib/data/industries";
import { getServiceBySlug } from "@/lib/data/services";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.name,
    description: industry.summary,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const solutionServices = industry.solutions
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className="bg-white pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Industries
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {industry.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              {industry.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-2 text-ink-900">
              <AlertCircle className="h-5 w-5 text-brand-600" />
              <h2 className="font-display text-2xl font-semibold">Challenges</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 text-ink-900">
              <Lightbulb className="h-5 w-5 text-brand-600" />
              <h2 className="font-display text-2xl font-semibold">
                Technology Opportunities
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {industry.opportunities.map((item) => (
                <li key={item} className="text-ink-700">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {solutionServices.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                How we help
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {solutionServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
                  >
                    <p className="font-display font-semibold text-ink-900">
                      {service.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-700">{service.summary}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-mist-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Ready to talk about your {industry.name.toLowerCase()} project?
            </h2>
            <Button asChild size="lg" className="mt-6">
              <Link href="/request-a-quote">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
