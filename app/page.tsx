import type { Metadata } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { ServicesInteractive } from "@/components/sections/ServicesInteractive";
import { DigitalTransformationStory } from "@/components/sections/DigitalTransformationStory";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyOJTech } from "@/components/sections/WhyOJTech";
import { CompanyStory } from "@/components/sections/CompanyStory";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesInteractive />
      <DigitalTransformationStory />
      <WhatWeBuild />
      <IndustriesGrid />
      <FeaturedProjects />
      <TechStackMarquee />
      <ProcessTimeline />
      <WhyOJTech />
      <CompanyStory />
      <Testimonials />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
