import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { solutions } from "@/lib/data/solutions";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Packaged technology solutions from Olamitobi Technologies — from startup MVPs to enterprise modernization and embedded product teams.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Curated technology solutions for common business needs."
        description="Beyond individual services, we package our expertise into solutions built around the outcomes businesses actually need — from validating a new idea to modernizing a legacy enterprise system."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {solutions.map((solution) => (
              <div
                key={solution.slug}
                className="flex flex-col rounded-3xl border border-ink-900/10 p-8"
              >
                <h2 className="font-display text-xl font-semibold text-ink-900">
                  {solution.name}
                </h2>
                <p className="mt-2 text-sm text-ink-700">{solution.summary}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand-700">
                  Best for
                </p>
                <p className="mt-1 text-sm text-ink-700">{solution.bestFor}</p>

                <ul className="mt-5 space-y-2">
                  {solution.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-ink-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />
                <Button variant="outline" asChild className="mt-6 w-fit">
                  <Link href="/request-a-quote">
                    Get Started <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </RevealGroup>

          <Reveal>
            <p className="mt-16 text-center text-sm text-ink-700">
              Not sure which solution fits?{" "}
              <Link href="/contact" className="text-brand-700 underline">
                Talk to us
              </Link>{" "}
              and we&apos;ll help you figure it out.
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
