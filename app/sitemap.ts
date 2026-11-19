import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/data/site-config";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { projects } from "@/lib/data/projects";
import { caseStudies } from "@/lib/data/case-studies";
import { blogPosts } from "@/lib/data/blog";
import { trainingCourses } from "@/lib/data/training";
import { locationPages } from "@/lib/data/locations";

export const dynamic = "force-static";

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

  const priorityRoutes = [
    ...locationPages.map((l) => ({
      url: `${base}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...trainingCourses.map((c) => ({
      url: `${base}/training/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  const insightRoutes = blogPosts.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...priorityRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...projectRoutes,
    ...caseStudyRoutes,
    ...insightRoutes,
  ];
}
