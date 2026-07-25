import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/projects";
import { caseStudies } from "@/lib/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/projects",
    "/case-studies",
    "/insights",
    "/careers",
    "/training",
    "/contact",
    "/request-a-quote",
    "/book-consultation",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${base}/industries/${industry.slug}`,
    lastModified: now,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: now,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...caseStudyRoutes,
  ];
}
