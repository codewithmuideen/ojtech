import type { Metadata } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { HomeHero } from "@/components/home/HomeHero";
import { CapabilitiesGrid } from "@/components/home/CapabilitiesGrid";
import { FeatureSplit } from "@/components/home/FeatureSplit";
import { AcademySection } from "@/components/home/AcademySection";
import { FounderSection } from "@/components/home/FounderSection";
import { LocalPresence } from "@/components/home/LocalPresence";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { OfficeLocations } from "@/components/shared/OfficeLocations";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} | Software, IT & Tech Training Company in Osogbo & Ibadan`,
  },
  description:
    "Olamitobi Technologies is a leading tech company in Osogbo, Osun State and Ibadan, Oyo State: software development, website design, mobile apps, cloud, cybersecurity, AI and hands-on tech training courses since 2011.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TechStackMarquee />
      <CapabilitiesGrid />
      <FeatureSplit />
      <AcademySection />
      <FounderSection />
      <IndustriesGrid />
      <FeaturedProjects />
      <LocalPresence />
      <ProcessTimeline />
      <OfficeLocations />
      <CTASection />
    </>
  );
}
