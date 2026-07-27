import { ShieldCheck, Gauge, Layers, Users } from "lucide-react";

import { siteConfig } from "@/lib/data/site-config";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Security built in, not bolted on",
    description:
      "We treat data protection and secure architecture as a starting requirement, not an afterthought fixed after launch.",
  },
  {
    icon: Gauge,
    title: `${new Date().getFullYear() - siteConfig.foundedYear}+ years of real delivery`,
    description:
      "Since 2011, we've built software across industries — experience that shows up in fewer surprises during your project.",
  },
  {
    icon: Layers,
    title: "Systems designed to scale",
    description:
      "We architect for where your business is headed, not just where it is today, without over-building for scale you don't need yet.",
  },
  {
    icon: Users,
    title: "Direct access to the people building your product",
    description:
      "You work directly with the engineers and designers on your project — not layers of account management in between.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
            Why {siteConfig.name}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            A partner built for long-term technology relationships.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-700">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {reason.description}
              </p>
            </div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
