"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";

/** Muted, looping background video. Falls back to the poster for reduced-motion users. */
export function HeroVideo() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/hero-academy.mp4"
      poster="/videos/hero-poster.webp"
      autoPlay={!reduce}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  );
}
