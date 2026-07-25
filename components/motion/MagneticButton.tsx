"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Wraps its child in a subtle magnetic-follow effect on pointer-fine
 * (desktop) devices only. On touch devices it renders inert — magnetic
 * cursor effects don't translate to touch and shouldn't be attempted.
 */
export function MagneticButton({
  children,
  strength = 0.3,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.4 });
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Must run post-mount (not in a lazy useState initializer) so the first
    // client render matches SSR output and avoids a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(mq.matches && !reduceMq.matches);
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
