"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { processSteps } from "@/lib/data/process";
import { Reveal } from "@/components/motion/Reveal";

export function ProcessTimeline() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            How We Work
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            A disciplined process, from first conversation to long-term support.
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-ink-900/10 sm:left-7" />
          <motion.div
            className="absolute left-5 top-2 w-px bg-brand-500 sm:left-7"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {processSteps.map((step) => (
              <Reveal key={step.step} className="relative flex gap-6 pl-0 sm:gap-8">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-semibold text-white sm:h-14 sm:w-14 sm:text-base">
                  {step.step}
                </div>
                <div className="pt-1 sm:pt-2">
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-ink-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
