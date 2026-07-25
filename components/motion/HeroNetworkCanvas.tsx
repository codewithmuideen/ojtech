"use client";

import * as React from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const BRAND_LINE = "rgba(30, 217, 221, 0.25)";
const BRAND_NODE = "rgba(111, 233, 228, 0.9)";

/**
 * Lightweight canvas constellation animation for the hero. Density scales
 * down on narrow viewports, and the animation loop is skipped entirely
 * under prefers-reduced-motion in favor of one static painted frame.
 */
export function HeroNetworkCanvas({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let animationFrame = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 18000 : width < 1024 ? 12000 : 9000;
      const count = Math.max(16, Math.min(70, Math.floor((width * height) / density)));

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      }

      const linkDistance = width < 640 ? 90 : 140;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            ctx!.globalAlpha = 1 - dist / linkDistance;
            ctx!.strokeStyle = BRAND_LINE;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.globalAlpha = 1;
      for (const node of nodes) {
        ctx!.fillStyle = BRAND_NODE;
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    resize();
    draw();

    if (reduceMotion) {
      return;
    }

    let lastTime = 0;
    const frameInterval = 1000 / 40;

    function loop(time: number) {
      animationFrame = requestAnimationFrame(loop);
      if (time - lastTime < frameInterval) return;
      lastTime = time;
      draw();
    }

    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(animationFrame);
      } else {
        animationFrame = requestAnimationFrame(loop);
      }
    }

    animationFrame = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  );
}
