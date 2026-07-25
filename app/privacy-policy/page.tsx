import type { Metadata } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      />
      <section className="bg-white pb-24">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-ink-700 leading-relaxed lg:px-8">
          <Reveal>
            <p className="rounded-2xl bg-mist-50 p-5 text-sm">
              This is a template privacy policy provided as a starting point.
              It should be reviewed by qualified legal counsel before use, to
              ensure it reflects {siteConfig.name}&apos;s actual data
              practices and applicable law.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Information We Collect
            </h2>
            <p className="mt-3">
              We collect information you provide directly, such as your name,
              email address, phone number, and project details, when you
              submit a contact form, request a quote, book a consultation, or
              subscribe to our newsletter. We do not collect payment
              information through this website.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              How We Use Information
            </h2>
            <p className="mt-3">
              We use the information you provide to respond to your enquiries,
              deliver requested services, send newsletter updates you&apos;ve
              opted into, and improve our website and services.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Cookies and Analytics
            </h2>
            <p className="mt-3">
              This website may use cookies and analytics tools to understand
              how visitors use the site. You can control cookie preferences
              through your browser settings.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Data Sharing
            </h2>
            <p className="mt-3">
              We do not sell personal information. We may share information
              with service providers who help us operate this website (such
              as hosting and email delivery providers), under obligations to
              protect your data.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Your Rights
            </h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your
              personal information by contacting us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-700 underline">
                {siteConfig.email}
              </a>
              . You can unsubscribe from newsletter emails at any time using
              the link included in each email.
            </p>
          </Reveal>

          <Reveal>
            <h2 className="font-display text-xl font-semibold text-ink-900">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy can be directed to{" "}
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
