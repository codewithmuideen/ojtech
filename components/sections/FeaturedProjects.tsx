import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data/projects";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featured = projects.slice(0, 10);

  return (
    <section className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Selected Work
            </span>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
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

        <RevealGroup className="mt-14 divide-y divide-ink-900/10 border-t border-ink-900/10">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative grid grid-cols-[auto_1fr] items-center gap-5 py-8 pl-5 -ml-5 sm:grid-cols-[auto_1fr_auto] sm:gap-10 sm:py-10 transition-colors hover:bg-white"
            >
              {/* Left accent bar, grows in on hover */}
              <span className="absolute inset-y-3 left-0 w-[3px] scale-y-0 bg-gradient-to-b from-brand-400 via-brand-500 to-brand-600 transition-transform duration-300 ease-out group-hover:scale-y-100" />

              <span className="font-display text-4xl font-semibold tabular-nums text-ink-900/15 transition-colors duration-300 group-hover:text-brand-500/70 sm:text-5xl">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-ink-900 transition-colors duration-300 group-hover:text-brand-700 sm:text-2xl">
                    {project.name}
                  </h3>
                  <Badge variant="brand">{project.industry}</Badge>
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-700/60">
                  {project.client}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">
                  {project.summary}
                </p>
              </div>

              <ArrowUpRight className="hidden h-5 w-5 shrink-0 -translate-x-2 text-brand-600 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
            </Link>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
