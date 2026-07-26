import Link from "next/link";
import { ArrowUpRight, Sparkle, Zap } from "lucide-react";

import { industries } from "@/lib/data/industries";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

/** Faint abstract line-art backgrounds cycled behind each numbered badge. */
const patterns = [
  // Hexagon node network
  function HexNetwork() {
    const pts: [number, number][] = [
      [50, 8], [86, 29], [86, 71], [50, 92], [14, 71], [14, 29],
    ];
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        {pts.map(([x, y]) => (
          <line key={`${x}-${y}`} x1={50} y1={50} x2={x} y2={y} stroke="currentColor" strokeWidth="0.6" />
        ))}
        {pts.map(([x, y], i) => {
          const [nx, ny] = pts[(i + 1) % pts.length];
          return <line key={`p-${x}-${y}`} x1={x} y1={y} x2={nx} y2={ny} stroke="currentColor" strokeWidth="0.6" />;
        })}
        {pts.map(([x, y]) => (
          <circle key={`c-${x}-${y}`} cx={x} cy={y} r="4" fill="white" stroke="currentColor" strokeWidth="0.6" />
        ))}
      </svg>
    );
  },
  // Blueprint shapes
  function Blueprint() {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        <rect x="14" y="14" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <line x1="14" y1="14" x2="56" y2="56" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="78" cy="26" r="16" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <rect x="30" y="46" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="22" cy="78" r="16" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    );
  },
  // Radar rings
  function Radar() {
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        {[12, 24, 36, 48].map((r) => (
          <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="0.6" />
        ))}
        <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.6" />
        <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.6" />
      </svg>
    );
  },
  // Dot mesh
  function DotMesh() {
    const cols = [18, 40, 62, 84];
    const rows = [18, 40, 62, 84];
    return (
      <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
        {rows.map((y) =>
          cols.map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="currentColor" />)
        )}
        <line x1="18" y1="18" x2="84" y2="84" stroke="currentColor" strokeWidth="0.5" />
        <line x1="84" y1="18" x2="18" y2="84" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    );
  },
];

export function IndustriesGrid() {
  const featured = industries.slice(0, 8);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Industries
            </span>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              Built for the sectors driving Africa&apos;s digital economy.
            </h2>
          </Reveal>
          <Link
            href="/industries"
            className="flex items-center gap-1 text-sm font-medium text-brand-700 hover:text-brand-600"
          >
            View all industries <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((industry, index) => {
            const Pattern = patterns[index % patterns.length];
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col items-center rounded-2xl border border-ink-900/10 px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:bg-mist-50 hover:shadow-lg hover:shadow-ink-900/5"
              >
                <div className="relative flex h-24 w-24 items-center justify-center text-ink-900/15 transition-colors duration-300 group-hover:text-brand-500/25">
                  <Pattern />

                  {/* Electric pulse ring */}
                  <span className="absolute h-14 w-14 rounded-full opacity-0 ring-2 ring-brand-400 group-hover:animate-ping group-hover:opacity-75" />

                  <span className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-brand-400 transition-transform duration-500 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Lightning flash */}
                  <Zap
                    className="absolute -right-1 top-0 h-4 w-4 fill-brand-400 text-brand-400 opacity-0 [animation-delay:100ms] group-hover:animate-flash"
                    aria-hidden="true"
                  />

                  {/* Sparkle twinkles */}
                  <Sparkle
                    className="absolute -left-2 top-2 h-3.5 w-3.5 fill-brand-400 text-brand-400 opacity-0 [animation-delay:0ms] group-hover:animate-twinkle"
                    aria-hidden="true"
                  />
                  <Sparkle
                    className="absolute bottom-1 -left-3 h-2.5 w-2.5 fill-brand-500 text-brand-500 opacity-0 [animation-delay:400ms] group-hover:animate-twinkle"
                    aria-hidden="true"
                  />
                  <Sparkle
                    className="absolute -right-2 bottom-2 h-3 w-3 fill-brand-500 text-brand-500 opacity-0 [animation-delay:700ms] group-hover:animate-twinkle"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 font-display font-semibold text-ink-900">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700 line-clamp-3">
                  {industry.summary}
                </p>

                <span className="mt-4 flex items-center gap-1 text-xs font-medium text-brand-700 opacity-0 transition-opacity group-hover:opacity-100">
                  Explore <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
