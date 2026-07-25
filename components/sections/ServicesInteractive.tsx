"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import {
  serviceCategories,
  getServicesByCategory,
  type ServiceCategory,
} from "@/lib/data/services";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export function ServicesInteractive() {
  const [active, setActive] = React.useState<ServiceCategory>(serviceCategories[0]);
  const activeServices = getServicesByCategory(active);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            What We Do
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            A full ecosystem of technology services under one roof.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[300px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {serviceCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={cn(
                  "shrink-0 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors lg:shrink",
                  active === category
                    ? "bg-ink-900 text-white"
                    : "text-ink-700 hover:bg-mist-100"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {activeServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-2xl border border-ink-900/10 p-6 transition-colors hover:border-brand-500/40 hover:bg-mist-50"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-ink-900">
                        {service.name}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-brand-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {service.summary}
                    </p>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
