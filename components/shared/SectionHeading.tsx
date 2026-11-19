import * as React from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-brand-400" : "text-brand-700",
        className
      )}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
  action,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-end justify-between gap-6",
        align === "center" && "flex-col items-center text-center",
        className
      )}
    >
      <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto")}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2
          className={cn(
            "mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-5xl",
            tone === "dark" ? "text-white" : "text-ink-900"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              tone === "dark" ? "text-white/65" : "text-ink-700",
              align === "center" && "mx-auto max-w-2xl"
            )}
          >
            {description}
          </p>
        )}
      </Reveal>
      {action}
    </div>
  );
}
