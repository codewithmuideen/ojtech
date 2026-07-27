import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { caseStudies } from "@/lib/data/case-studies";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth looks at how Olamitobi Technologies approaches complex technology challenges — from discovery through implementation.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="How we approach complex problems, end to end."
        description="Deeper editorial breakdowns of our process — from research and strategy through implementation and lessons learned."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-5xl space-y-6 px-6 lg:px-8">
          <RevealGroup className="space-y-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block rounded-3xl border border-ink-900/10 p-8 transition-shadow hover:shadow-lg sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="brand">{cs.industry}</Badge>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-ink-900">
                      {cs.title}
                    </h2>
                    <p className="mt-1 text-sm text-ink-700">{cs.client}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-4 max-w-2xl text-ink-700 leading-relaxed">
                  {cs.summary}
                </p>
              </Link>
            ))}
          </RevealGroup>
        </div>
      </div>
    </>
  );
}
