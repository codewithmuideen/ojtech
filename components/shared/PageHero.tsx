import * as React from "react";

import { Reveal } from "@/components/motion/Reveal";

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
    <section className="bg-white pb-16 pt-40 sm:pt-48">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
