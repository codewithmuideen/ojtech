import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";

import { services, getServiceBySlug } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { siteConfig } from "@/lib/data/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const relatedIndustries = industries.filter((industry) =>
    industry.solutions.includes(service.slug)
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.serviceAreas,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-white pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              {service.category}
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              {service.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/request-a-quote">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/book-consultation">Book a Consultation</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              What you get
            </h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-ink-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Deliverables
            </h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-ink-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-lg font-semibold text-ink-900">
              Tools &amp; Expertise
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <Badge key={tech} variant="ink">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {service.flagship && relatedIndustries.length > 0 && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Industries where this service matters most
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {relatedIndustries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="rounded-2xl border border-ink-900/10 p-5 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
                  >
                    <p className="font-display font-semibold text-ink-900">
                      {industry.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-700">{industry.summary}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-mist-50 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink-900">
                Related services
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-2xl border border-ink-900/10 bg-white p-5 transition-colors hover:border-brand-500/40"
                  >
                    <p className="font-display font-semibold text-ink-900">{s.name}</p>
                    <p className="mt-1 text-sm text-ink-700">{s.summary}</p>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
