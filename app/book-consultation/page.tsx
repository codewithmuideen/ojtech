import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a free consultation with Olamitobi Technologies to talk through your project or technology challenge.",
  alternates: { canonical: "/book-consultation" },
};

export default function BookConsultationPage() {
  return (
    <section className="bg-white pb-24 pt-40 sm:pt-48">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Book a Consultation
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900">
            Talk to an expert, no obligation.
          </h1>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Share your preferred date and time and what you&apos;d like to
            discuss — we&apos;ll confirm a slot that works for both sides.
          </p>
        </Reveal>

        <div className="mt-12 rounded-3xl border border-ink-900/10 p-8 sm:p-10">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
