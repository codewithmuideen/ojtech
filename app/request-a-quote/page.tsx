import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { QuoteWizard } from "@/components/forms/QuoteWizard";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your project and get a tailored quote from Olamitobi Technologies.",
  alternates: { canonical: "/request-a-quote" },
};

export default function RequestAQuotePage() {
  return (
    <section className="bg-white pb-24 pt-40 sm:pt-48">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Request a Quote
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900">
            Let&apos;s scope your project.
          </h1>
          <p className="mt-4 text-ink-700 leading-relaxed">
            A few quick questions help us understand your project and come
            back with a meaningful, tailored quote — not a generic template.
          </p>
        </Reveal>

        <div className="mt-12 rounded-3xl border border-ink-900/10 p-8 sm:p-10">
          <QuoteWizard />
        </div>
      </div>
    </section>
  );
}
