import { whatWeBuild } from "@/lib/data/what-we-build";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export function WhatWeBuild() {
  return (
    <section className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            What We Build
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            Real products across the systems modern businesses depend on.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeBuild.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink-900/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {item.description}
              </p>
              <p className="mt-3 text-xs text-ink-700/80 italic">{item.useCase}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge key={tech} variant="ink">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
