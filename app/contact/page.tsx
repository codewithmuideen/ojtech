import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/data/site-config";
import { generalFaqs } from "@/lib/data/faqs";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { OfficeLocations } from "@/components/shared/OfficeLocations";
import { SocialLinks } from "@/components/shared/SocialLinks";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Olamitobi Technologies: visit our offices at 7 Makinde Street, Orogun, Ibadan, or Plot 3, Opposite Government House Annex, Okefia, Osogbo. Call 0813 432 4983.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-40 sm:pt-48">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
                Contact
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink-900">
                Let&apos;s talk about your project.
              </h1>
              <p className="mt-6 max-w-md text-ink-700 leading-relaxed">
                Tell us what you&apos;re working on and we&apos;ll get back to
                you within one business day.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-ink-900 hover:text-brand-700"
                >
                  <Mail className="h-5 w-5 text-brand-600" /> {siteConfig.email}
                </a>
                {siteConfig.phones.map((phone, index) => (
                  <a
                    key={phone}
                    href={`tel:+234${phone.replace(/\s+/g, "").slice(1)}`}
                    className="flex items-center gap-3 text-ink-900 hover:text-brand-700"
                  >
                    <Phone className="h-5 w-5 text-brand-600" />
                    {phone}
                    {index === 0 && (
                      <span className="text-xs font-medium uppercase tracking-wide text-ink-700/50">
                        Primary
                      </span>
                    )}
                  </a>
                ))}
                {siteConfig.offices.map((office) => (
                  <div key={office.slug} className="flex items-start gap-3 text-ink-700">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    <span>
                      <span className="font-medium text-ink-900">{office.label}:</span> {office.full}
                    </span>
                  </div>
                ))}
                <SocialLinks links={siteConfig.social} tone="light" className="pt-4" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-ink-900/10 p-8 sm:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <OfficeLocations withMap />

      <section className="bg-mist-50 py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ink-900">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {generalFaqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
