import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { industries } from "@/lib/data/industries";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Technology solutions tailored to financial services, healthcare, education, logistics, government, and other key industries.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Technology built around how your industry actually works."
        description="Every industry carries its own constraints, regulations, and workflows. We design solutions around those realities instead of forcing a generic template."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-2xl border border-ink-900/10 p-6 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display font-semibold text-ink-900">
                    {industry.name}
                  </h2>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {industry.summary}
                </p>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </div>
    </>
  );
}
