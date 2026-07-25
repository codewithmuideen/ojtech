import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

export function CTASection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[2.5rem] bg-ink-900 px-8 py-16 text-center sm:px-16">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Tell us about your business and what you&apos;re trying to solve
              — we&apos;ll come back with a clear, honest path forward.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button variant="brand" size="lg" asChild>
                <Link href="/request-a-quote">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline-inverse" size="lg" asChild>
                <Link href="/book-consultation">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
