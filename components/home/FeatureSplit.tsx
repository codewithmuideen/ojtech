import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const points = [
  "Discovery workshops that turn ideas into a clear, costed roadmap",
  "Senior engineers who own delivery, not just tickets",
  "Transparent weekly demos, so you always see real progress",
  "Support and maintenance long after launch day",
];

export function FeatureSplit() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.14),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/consulting-session.webp"
              alt="Olamitobi consultants running a digital transformation workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-6 hidden w-56 overflow-hidden rounded-2xl border-4 border-ink-950 sm:block">
            <div className="relative aspect-square">
              <Image src="/images/team-collaboration.webp" alt="" fill sizes="224px" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow tone="dark">New realities</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              Digital transformation that actually{" "}
              <span className="text-gradient-brand">transforms.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Technology only matters when it changes outcomes. We partner with businesses,
              schools and government agencies across Osun, Oyo and beyond to modernize
              operations, automate the busywork, and make better decisions with data.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-950">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Button variant="brand" size="lg" asChild className="mt-10">
              <Link href="/book-consultation">
                Book a free consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
