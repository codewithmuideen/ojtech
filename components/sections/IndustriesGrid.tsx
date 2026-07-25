import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { industries } from "@/lib/data/industries";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export function IndustriesGrid() {
  const featured = industries.slice(0, 8);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Industries
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Built for the sectors driving Africa&apos;s digital economy.
            </h2>
          </Reveal>
          <Link
            href="/industries"
            className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-600"
          >
            View all industries <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group rounded-2xl border border-ink-900/10 p-6 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
            >
              <h3 className="font-display font-semibold text-ink-900">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700 line-clamp-3">
                {industry.summary}
              </p>
              <ArrowUpRight className="mt-4 h-4 w-4 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
