import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data/projects";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featured = projects.slice(0, 4);

  return (
    <section className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Selected Work
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              A closer look at what we&apos;ve delivered.
            </h2>
          </Reveal>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-600"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="brand">{project.industry}</Badge>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-700">{project.client}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-700">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="ink">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
