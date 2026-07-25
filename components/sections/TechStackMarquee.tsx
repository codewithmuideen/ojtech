import { technologyMarquee } from "@/lib/data/technologies";
import { Reveal } from "@/components/motion/Reveal";

export function TechStackMarquee() {
  return (
    <section className="bg-ink-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Technologies We Work With
          </p>
        </Reveal>
      </div>

      <div
        className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-12">
          {[...technologyMarquee, ...technologyMarquee].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-display text-2xl font-medium text-white/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">
        Technologies: {technologyMarquee.join(", ")}
      </p>
    </section>
  );
}
