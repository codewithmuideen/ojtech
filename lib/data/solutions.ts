export interface Solution {
  slug: string;
  name: string;
  summary: string;
  bestFor: string;
  includes: string[];
  relatedServices: string[];
}

export const solutions: Solution[] = [
  {
    slug: "startup-mvp",
    name: "Startup MVP Build",
    summary: "A focused build that gets your product in front of real users fast.",
    bestFor: "Founders who need to validate an idea before committing to a full build.",
    includes: [
      "Product strategy and scope definition",
      "UI/UX design for core flows",
      "MVP engineering build",
      "Launch support",
    ],
    relatedServices: ["product-design", "software-development", "saas-development"],
  },
  {
    slug: "saas-launch",
    name: "SaaS Launch Package",
    summary: "Everything needed to take a SaaS product from architecture to paying customers.",
    bestFor: "Teams building a subscription software product from the ground up.",
    includes: [
      "Multi-tenant architecture design",
      "Billing and subscription integration",
      "Customer and admin dashboards",
      "Cloud infrastructure setup",
    ],
    relatedServices: ["saas-development", "cloud-solutions", "ui-ux-design"],
  },
  {
    slug: "enterprise-modernization",
    name: "Enterprise Modernization",
    summary: "A phased path from legacy systems to modern, maintainable infrastructure.",
    bestFor: "Organizations running critical operations on aging or fragile systems.",
    includes: [
      "Technology and risk assessment",
      "Phased modernization roadmap",
      "Legacy system integration",
      "Change management support",
    ],
    relatedServices: ["enterprise-solutions", "technology-consulting", "cybersecurity"],
  },
  {
    slug: "digital-transformation-program",
    name: "Digital Transformation Program",
    summary: "A structured program moving manual operations to integrated digital systems.",
    bestFor: "Businesses ready to replace spreadsheets and disconnected tools with real systems.",
    includes: [
      "Digital maturity assessment",
      "Process automation build",
      "Staff training and rollout support",
      "Ongoing optimization",
    ],
    relatedServices: ["digital-transformation", "business-automation", "data-solutions"],
  },
  {
    slug: "embedded-product-team",
    name: "Embedded Product Team",
    summary: "Ongoing engineering and design capacity that plugs directly into your roadmap.",
    bestFor: "Companies that need sustained delivery capacity beyond a single project.",
    includes: [
      "Dedicated engineering and design capacity",
      "Sprint-based delivery cadence",
      "Direct collaboration with your internal team",
      "Flexible scope as priorities shift",
    ],
    relatedServices: ["software-development", "project-management", "ui-ux-design"],
  },
  {
    slug: "growth-and-visibility",
    name: "Growth & Visibility Package",
    summary: "Marketing and SEO systems built to bring measurable traffic and leads.",
    bestFor: "Businesses with a solid product that needs stronger digital visibility.",
    includes: [
      "Technical and content SEO",
      "Conversion-focused landing pages",
      "Analytics and reporting setup",
      "Ongoing campaign management",
    ],
    relatedServices: ["seo", "digital-marketing", "web-development"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
