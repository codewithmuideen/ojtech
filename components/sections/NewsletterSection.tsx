import { Reveal } from "@/components/motion/Reveal";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection() {
  return (
    <section className="bg-mist-50 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
            Insights on technology and digital growth, occasionally in your inbox.
          </h2>
          <p className="mt-3 text-ink-700">
            No spam — just practical thinking on software, cloud, and digital
            transformation.
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <NewsletterForm variant="light" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
