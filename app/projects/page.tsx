import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/lib/data/projects";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A look at the platforms, products, and systems Olamitobi Technologies has built across fintech, healthcare, logistics, government, and more.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A closer look at what we build."
        description="A mix of delivered client work (brand names withheld by request) and illustrative examples of the kind of platforms and systems we design and build across industries."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group rounded-3xl border border-ink-900/10 p-8 transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="brand">{project.industry}</Badge>
                      {project.nameWithheld && (
                        <Badge variant="ink">Name withheld</Badge>
                      )}
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                      {project.name}
                    </h2>
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
          </RevealGroup>
        </div>
      </div>
    </>
  );
}
