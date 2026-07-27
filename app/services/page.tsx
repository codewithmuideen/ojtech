import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { serviceCategories, getServicesByCategory } from "@/lib/data/services";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development, product design, cloud, AI, cybersecurity, digital marketing, training, consulting, and technology services from Olamitobi Technologies.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A full ecosystem of technology services."
        description="From custom software and product design to cloud infrastructure, AI, and digital marketing — everything you need to build, launch, and scale."
      />

      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
          {serviceCategories.map((category) => {
            const categoryServices = getServicesByCategory(category);
            if (categoryServices.length === 0) return null;
            return (
              <div key={category}>
                <Reveal>
                  <h2 className="font-display text-2xl font-semibold text-ink-900">
                    {category}
                  </h2>
                </Reveal>
                <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group rounded-2xl border border-ink-900/10 p-6 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display font-semibold text-ink-900">
                          {service.name}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700">
                        {service.summary}
                      </p>
                    </Link>
                  ))}
                </RevealGroup>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
