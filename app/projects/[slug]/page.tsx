import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { projects, getProjectBySlug } from "@/lib/data/projects";
import { getServiceBySlug } from "@/lib/data/services";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const deliveredServices = project.servicesDelivered
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <section className="bg-white pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              <Badge variant="brand">{project.industry}</Badge>
              {project.isPlaceholder && (
                <Badge variant="ink">Illustrative sample project</Badge>
              )}
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-ink-700">{project.client}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-3 lg:px-8">
          <Reveal>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              Challenge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              {project.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-lg font-semibold text-ink-900">
              Solution
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              {project.solution}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <h2 className="font-display text-lg font-semibold text-ink-900">Result</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              {project.result}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Services delivered
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {deliveredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-full border border-ink-900/10 px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
                >
                  {service.name}
                </Link>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-900">
              Technologies
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="ink">
                  {tech}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Have a similar project in mind?
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
