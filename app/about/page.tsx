import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";

import { siteConfig } from "@/lib/data/site-config";
import { companyTimeline } from "@/lib/data/timeline";
import { team } from "@/lib/data/team";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { PageHero } from "@/components/shared/PageHero";
import { TeamGrid } from "@/components/sections/TeamGrid";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Olamitobi Technologies has been building software and digital solutions since 2011. Learn our story, mission, and vision.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`Building innovative digital solutions since ${siteConfig.foundedYear}.`}
        description="A technology company dedicated to designing, developing, and delivering innovative digital solutions for businesses, startups, organizations, and government institutions."
      />

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-700">
              {siteConfig.name} is a technology company dedicated to designing,
              developing, and delivering innovative digital solutions for
              businesses, startups, organizations, and government institutions.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              Since our establishment in {siteConfig.foundedYear}, we have
              helped businesses embrace digital transformation through
              high-quality software solutions. Our expertise spans web
              applications, mobile apps, desktop software, enterprise systems,
              cloud solutions, SaaS platforms, project management systems,
              business automation, SEO, digital marketing, hardware solutions,
              software installation, and IT consulting.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">
              We believe technology should solve real business problems. Every
              solution we build is designed with performance, security,
              scalability, and user experience at its core.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <RevealGroup className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-10">
              <Target className="h-8 w-8 text-brand-600" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                Our Mission
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Our mission is to empower businesses with reliable technology
                that drives growth, improves efficiency, and creates lasting
                value.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-10">
              <Eye className="h-8 w-8 text-brand-600" />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink-900">
                Our Vision
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700">
                Our vision is to become one of Africa&apos;s leading technology
                companies, delivering world-class software and digital
                transformation solutions for clients around the globe.
              </p>
            </div>
          </RevealGroup>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Our Journey
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Company Timeline
            </h2>
          </Reveal>

          <div className="mt-14 space-y-10 border-l border-ink-900/10 pl-8">
            {companyTimeline.map((entry) => (
              <Reveal key={entry.title}>
                <p className="font-display text-sm font-semibold text-brand-700">
                  {entry.year}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink-900">
                  {entry.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-ink-700">
                  {entry.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <p className="text-center font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">
              Leadership
            </p>
            <h2 className="mt-4 text-center font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
              Meet the Team
            </h2>
            {team.length === 0 && (
              <p className="mx-auto mt-6 max-w-md text-center text-ink-700">
                Team profiles are on their way. In the meantime, reach out
                through our{" "}
                <a href="/contact" className="text-brand-700 underline">
                  contact page
                </a>{" "}
                to meet the people behind your project.
              </p>
            )}
          </Reveal>

          <TeamGrid />
        </div>
      </section>
    </>
  );
}
