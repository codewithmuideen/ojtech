import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

import { siteConfig } from "@/lib/data/site-config";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const areas = [
  {
    title: "Tech company in Osogbo, Osun State",
    href: "/locations/osogbo",
    text: "Software development, website design, mobile apps, IT support and tech training for businesses, schools and government agencies in Osogbo, Ilesa, Ile-Ife, Ede, Ikirun, Iwo and across Osun State.",
  },
  {
    title: "Tech company in Ibadan, Oyo State",
    href: "/locations/ibadan",
    text: "Custom software, web and e-commerce development, cloud, cybersecurity and coding classes for organizations in Ibadan, Ogbomoso, Oyo, Iseyin, Saki and throughout Oyo State.",
  },
];

/** Keyword-rich, genuinely useful local section. Helps searchers (and search engines) see where we work. */
export function LocalPresence() {
  return (
    <section className="bg-ink-950 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Local roots, global standards"
          title={
            <>
              The tech partner South-West Nigeria{" "}
              <span className="text-gradient-brand">can walk into.</span>
            </>
          }
          description={`${siteConfig.name} is a software development, IT consulting and tech training company with offices in Osogbo and Ibadan. Work with a team you can meet face to face, delivering to the same standard as the best firms in Lagos, London or anywhere else.`}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {areas.map((a, i) => (
            <Reveal key={a.href} delay={i * 0.08}>
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-brand-500/50 hover:bg-white/[0.06]"
              >
                <MapPin className="h-6 w-6 text-brand-400" />
                <h3 className="mt-5 font-display text-2xl font-semibold">{a.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-white/65">{a.text}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400">
                  Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
