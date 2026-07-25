import type { Metadata } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-ink-700 leading-relaxed lg:px-8">
          <Reveal>
            <p className="rounded-2xl bg-mist-50 p-5 text-sm">
              This is a template terms of service provided as a starting
              point. It should be reviewed by qualified legal counsel before
              use, and updated to reflect the specific terms of engagement
              {" "}{siteConfig.name} offers clients.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Use of This Website
            </h2>
            <p className="mt-3">
              This website is provided by {siteConfig.name} for informational
              purposes about our services. By using this website, you agree
              not to misuse it, attempt unauthorized access to our systems, or
              use it for unlawful purposes.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Service Engagements
            </h2>
            <p className="mt-3">
              Specific project terms, deliverables, timelines, and pricing are
              governed by individual service agreements or statements of work
              entered into separately with clients, not by this website&apos;s
              general terms alone.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this website, including the {siteConfig.name}{" "}
              name, logo, and brand assets, is the property of {siteConfig.name}{" "}
              unless otherwise stated, and may not be used without permission.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              This website and its content are provided &quot;as is&quot;
              without warranties of any kind. {siteConfig.name} is not liable
              for any damages arising from the use of this website, to the
              fullest extent permitted by law.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
