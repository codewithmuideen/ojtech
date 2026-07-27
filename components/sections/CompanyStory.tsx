import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/data/site-config";
import { companyTimeline } from "@/lib/data/timeline";
import { Reveal } from "@/components/motion/Reveal";

export function CompanyStory() {
  return (
    <section className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Building technology since {siteConfig.foundedYear}.
            </h2>
            <p className="mt-6 text-ink-700 leading-relaxed">
              Since {siteConfig.foundedYear}, {siteConfig.name} has helped
              businesses embrace digital transformation through high-quality
              software — carrying that experience into every project we take
              on today.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-600"
            >
              Read our full story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6 border-l border-ink-900/10 pl-8">
              {companyTimeline.map((entry) => (
                <div key={entry.title}>
                  <p className="font-display text-sm font-semibold text-brand-700">
                    {entry.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-700">
                    {entry.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
