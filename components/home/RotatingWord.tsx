"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function RotatingWord({ words, interval = 2600 }: { words: string[]; interval?: number }) {
  const [index, setIndex] = React.useState(0);
  const reduce = useReducedMotion();

  React.useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => window.clearInterval(id);
  }, [words.length, interval, reduce]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* Widest word reserves the space so the line never reflows. */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 block"
        >
          <span className="text-gradient-brand">{words[index]}</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
