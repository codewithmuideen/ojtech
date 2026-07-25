import { Quote } from "lucide-react";

import { testimonials } from "@/lib/data/testimonials";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <section className="bg-ink-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Client Feedback
          </p>
        </Reveal>

        {testimonials.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 flex max-w-lg flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-8 py-14">
              <Quote className="h-8 w-8 text-brand-400" />
              <p className="mt-4 text-white/70">
                We&apos;re gathering client testimonials as we complete new
                projects. Check back soon to hear directly from the businesses
                we&apos;ve worked with.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote
                  key={t.author}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left"
                >
                  <Quote className="h-6 w-6 text-brand-400" />
                  <p className="mt-4 text-white/80">{t.quote}</p>
                  <footer className="mt-4 text-sm text-white/50">
                    {t.author}, {t.role} — {t.company}
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
