import { Boxes, Sparkles } from "lucide-react";

import { whatWeBuild } from "@/lib/data/what-we-build";
import { siteConfig } from "@/lib/data/site-config";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

/**
 * Row of icon "nodes" bridged by small arcs above them, with a label pill
 * under each node — mirrors the connected-chip step treatment from the
 * reference design, generalized to any node count so it can render each
 * item's technology tags.
 */
function NodeChain({ tags }: { tags: string[] }) {
  const count = tags.length;
  const positions = tags.map((_, i) => (count === 1 ? 50 : (i * 100) / (count - 1)));
  const justify = count > 1 ? "justify-between" : "justify-center";

  return (
    <div>
      <svg
        className="h-5 w-full text-ink-900/20 transition-colors duration-500 group-hover:text-brand-500/50"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {positions.slice(1).map((x, i) => {
          const prev = positions[i];
          const mid = (prev + x) / 2;
          return (
            <path
              key={x}
              d={`M ${prev} 19 Q ${mid} 0 ${x} 19`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      <div className={cn("flex items-center [perspective:600px]", justify)}>
        {tags.map((tag, i) => (
          <div
            key={tag}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-900/10 bg-mist-50 text-brand-700 transition-all duration-700 ease-out [transform-style:preserve-3d] group-hover:border-brand-300 group-hover:bg-brand-500 group-hover:text-white group-hover:[transform:rotateY(360deg)]"
          >
            <Boxes className="h-5 w-5" />
          </div>
        ))}
      </div>

      <div className={cn("mt-3 flex flex-wrap gap-2", justify)}>
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand-500/12 px-3 py-1 text-xs font-medium text-brand-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden bg-mist-50 py-24 sm:py-32">
      {/* Ambient background depth */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-400/10 blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-ink-900/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            What We Build
          </span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
            Real products across the systems modern businesses depend on.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeBuild.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-ink-900/10 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-brand-300/70 hover:shadow-xl hover:shadow-brand-500/10"
            >
              {/* Top accent line, draws in from the left on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />

              {/* Soft brand glow, fades in behind the content on hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-400/0 blur-3xl transition-colors duration-500 group-hover:bg-brand-400/25"
              />

              {/* Glass shine sweep */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[200%] -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[500%] group-hover:opacity-100"
              />

              <div className="relative flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mist-100 font-display text-sm font-bold text-ink-900 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-700">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="relative mt-6">
                <NodeChain tags={item.technologies} />
              </div>

              <p className="relative mt-4 text-xs italic leading-relaxed text-ink-700/80">
                {item.useCase}
              </p>
            </div>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-16 max-w-2xl overflow-hidden rounded-2xl border border-ink-900/10 bg-gradient-to-br from-white via-mist-50 to-brand-500/5 px-8 py-6 text-center shadow-sm">
            <Sparkles className="mx-auto h-5 w-5 text-brand-500" aria-hidden="true" />
            <p className="mt-3 font-display text-base font-semibold text-ink-900 sm:text-lg">
              {siteConfig.shortName} — every system your business runs on, built by one team.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
