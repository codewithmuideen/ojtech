import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/shared/SectionHeading";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-40 sm:pb-20 sm:pt-48">
      {/* Faint engineering grid + warm glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(26,26,26,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,26,26,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />
      <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 h-80 w-80 rounded-full bg-brand-400/25 blur-3xl" />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">{description}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
