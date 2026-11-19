import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { whatsappLink } from "@/lib/data/site-config";

export function CTASection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-ink-950 px-8 py-20 text-center sm:px-16 sm:py-24">
            <Image
              src="/images/global-network.webp"
              alt=""
              fill
              sizes="100vw"
              className="-z-10 object-cover opacity-40"
            />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(11,15,25,0.3),rgba(11,15,25,0.95))]" />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand-400">
              Real starts here
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Have a project in mind? Let&apos;s build it together.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
              Tell us what you&apos;re trying to solve. We&apos;ll come back within one business
              day with a clear, honest path forward.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button variant="brand" size="lg" asChild>
                <Link href="/request-a-quote">
                  Let&apos;s go <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline-inverse" size="lg" asChild>
                <a
                  href={whatsappLink("Hi Olamitobi Technologies, I'd like to discuss a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
