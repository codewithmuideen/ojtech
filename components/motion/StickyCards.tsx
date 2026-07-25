"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Sticky-stack scroll storytelling: each card pins in place while the next
 * one scrolls over it, scaling and dimming slightly as it's covered. Under
 * prefers-reduced-motion the cards fall back to a plain stacked list with
 * no sticky/scale behavior.
 */
export function StickyCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.6]);

  if (shouldReduceMotion) {
    return (
      <div className={cn("mb-8", className)}>
        <div>{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="sticky top-20 flex items-start justify-center"
      style={{ zIndex: index + 1, paddingTop: index * 12 }}
    >
      <motion.div style={{ scale, opacity }} className={cn("w-full", className)}>
        {children}
      </motion.div>
    </div>
  );
}

export function StickyStack({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("relative", className)}>{children}</div>;
}
