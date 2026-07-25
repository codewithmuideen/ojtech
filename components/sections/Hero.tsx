import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/lib/data/site-config";
import { Button } from "@/components/ui/button";
import { HeroNetworkCanvas } from "@/components/motion/HeroNetworkCanvas";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-24 pt-40 text-white sm:pb-32 sm:pt-48">
      <div className="absolute inset-0">
        <HeroNetworkCanvas className="h-full w-full opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/60 to-ink-950" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Building technology since {siteConfig.foundedYear}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building Innovative{" "}
            <span className="text-gradient-brand">Digital Solutions</span>{" "}
            Since 2011
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button variant="brand" size="lg" asChild>
              <Link href="/request-a-quote">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline-inverse" size="lg" asChild>
              <Link href="/services">
                Explore Our Services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Link
              href="/book-consultation"
              className="text-sm font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-white"
            >
              Book a Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
