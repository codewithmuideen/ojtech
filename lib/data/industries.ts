export interface Industry {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  opportunities: string[];
  solutions: string[];
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    summary: "Secure, compliant digital platforms for banks, fintechs, and payment providers.",
    challenges: [
      "Legacy core systems that are costly to extend",
      "Rising expectations for mobile-first customer experiences",
      "Strict security and regulatory requirements",
    ],
    opportunities: [
      "Digital onboarding that reduces customer acquisition friction",
      "API-driven architecture for faster product iteration",
      "Data-informed risk and fraud monitoring",
    ],
    solutions: ["saas-development", "cybersecurity", "data-solutions"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Digital systems that improve patient experience without compromising data security.",
    challenges: [
      "Fragmented patient records across systems",
      "Strict data privacy requirements",
      "Staff time lost to manual administrative work",
    ],
    opportunities: [
      "Unified digital records and scheduling",
      "Automation of administrative workflows",
      "Secure telehealth and patient portals",
    ],
    solutions: ["business-automation", "cybersecurity", "software-development"],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Learning platforms and administrative systems built for real classrooms and institutions.",
    challenges: [
      "Disconnected systems for admissions, learning, and records",
      "Limited in-house technical capacity",
      "Need for platforms that work on low-bandwidth connections",
    ],
    opportunities: [
      "Unified learning management platforms",
      "Digitized administrative processes",
      "Accessible, mobile-first learning experiences",
    ],
    solutions: ["web-development", "training", "business-automation"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    summary: "Digital platforms for listings, transactions, and property management.",
    challenges: [
      "Manual, paper-heavy transaction processes",
      "Limited visibility into property and portfolio data",
      "Fragmented listing and customer management tools",
    ],
    opportunities: [
      "Digital listing and lead management platforms",
      "Automated transaction and document workflows",
      "Data dashboards for portfolio performance",
    ],
    solutions: ["web-development", "business-automation", "data-solutions"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    summary: "Systems for tracking, routing, and coordinating complex supply chains.",
    challenges: [
      "Limited real-time visibility into shipments and fleet",
      "Manual coordination across multiple parties",
      "Disconnected systems for orders, inventory, and delivery",
    ],
    opportunities: [
      "Real-time tracking and dispatch systems",
      "Automated routing and inventory coordination",
      "Integrated customer-facing tracking portals",
    ],
    solutions: ["software-development", "business-automation", "cloud-solutions"],
  },
  {
    slug: "retail",
    name: "Retail",
    summary: "Point-of-sale, inventory, and customer platforms for modern retail operations.",
    challenges: [
      "Disconnected in-store and online systems",
      "Manual inventory tracking across locations",
      "Limited customer data for personalization",
    ],
    opportunities: [
      "Unified inventory and point-of-sale systems",
      "Customer data platforms for targeted marketing",
      "Omnichannel commerce experiences",
    ],
    solutions: ["saas-development", "digital-marketing", "data-solutions"],
  },
  {
    slug: "e-commerce",
    name: "E-commerce",
    summary: "High-performance storefronts and backend systems built to convert and scale.",
    challenges: [
      "Slow, poorly optimized storefronts losing customers",
      "Manual order and inventory management",
      "Limited data on customer behavior and conversion",
    ],
    opportunities: [
      "Fast, SEO-optimized storefronts",
      "Automated order, inventory, and fulfillment workflows",
      "Conversion-focused analytics and testing",
    ],
    solutions: ["web-development", "seo", "business-automation"],
  },
  {
    slug: "government",
    name: "Government",
    summary: "Digital public service platforms built for accessibility, security, and scale.",
    challenges: [
      "Legacy systems that are difficult to maintain or extend",
      "High expectations for accessibility and uptime",
      "Strict security and data protection requirements",
    ],
    opportunities: [
      "Digitized citizen-facing services",
      "Modernized internal case management systems",
      "Secure, auditable data systems",
    ],
    solutions: ["digital-transformation", "cybersecurity", "enterprise-solutions"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary: "Digital systems for production tracking, inventory, and operational visibility.",
    challenges: [
      "Manual production and inventory tracking",
      "Limited visibility across plants or facilities",
      "Disconnected supplier and procurement systems",
    ],
    opportunities: [
      "Digital production and inventory dashboards",
      "Automated procurement and supplier workflows",
      "Predictive maintenance data systems",
    ],
    solutions: ["business-automation", "data-solutions", "enterprise-solutions"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary: "Client management, billing, and delivery systems for consultancies and firms.",
    challenges: [
      "Manual time tracking and billing processes",
      "Disconnected client and project management tools",
      "Limited visibility into project profitability",
    ],
    opportunities: [
      "Integrated client and project management platforms",
      "Automated billing and reporting",
      "Data-driven resource planning",
    ],
    solutions: ["saas-development", "project-management", "business-automation"],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    summary: "Booking, guest experience, and operations platforms for hotels and venues.",
    challenges: [
      "Disconnected booking and property management systems",
      "Manual guest communication workflows",
      "Limited data on guest preferences and repeat business",
    ],
    opportunities: [
      "Unified booking and property management systems",
      "Automated guest communication",
      "Customer data platforms for repeat business",
    ],
    solutions: ["web-development", "business-automation", "digital-marketing"],
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    summary: "Digital tools for supply chain visibility and agribusiness operations.",
    challenges: [
      "Limited visibility across farms, storage, and distribution",
      "Manual record keeping for yields and inventory",
      "Disconnected market and buyer information",
    ],
    opportunities: [
      "Digital tracking of yields, storage, and distribution",
      "Market access platforms connecting farmers and buyers",
      "Data-informed planning and resource allocation",
    ],
    solutions: ["software-development", "data-solutions", "business-automation"],
  },
  {
    slug: "energy",
    name: "Energy",
    summary: "Monitoring, billing, and operational systems for energy providers.",
    challenges: [
      "Manual metering and billing processes",
      "Limited real-time visibility into infrastructure",
      "Disconnected customer service and operational systems",
    ],
    opportunities: [
      "Digital metering and automated billing",
      "Real-time infrastructure monitoring dashboards",
      "Integrated customer service platforms",
    ],
    solutions: ["data-solutions", "business-automation", "enterprise-solutions"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    summary: "Platforms for customer management, billing, and network operations.",
    challenges: [
      "Complex billing and subscription management",
      "High customer service volume",
      "Legacy operational support systems",
    ],
    opportunities: [
      "Modernized billing and subscription platforms",
      "Self-service customer portals",
      "Automated network operations tooling",
    ],
    solutions: ["saas-development", "business-automation", "cloud-solutions"],
  },
  {
    slug: "startups",
    name: "Startups",
    summary: "Fast, lean product builds designed to help you validate and iterate quickly.",
    challenges: [
      "Limited runway to validate product-market fit",
      "Need to move fast without accumulating unmanageable technical debt",
      "Small teams wearing multiple hats",
    ],
    opportunities: [
      "MVP builds that validate assumptions quickly",
      "Architecture that scales without early over-investment",
      "Flexible engineering support as the team grows",
    ],
    solutions: ["saas-development", "product-design", "software-development"],
  },
  {
    slug: "smes",
    name: "SMEs",
    summary: "Right-sized digital systems that help small and mid-sized businesses grow.",
    challenges: [
      "Manual processes that limit growth capacity",
      "Limited budget for enterprise-scale tooling",
      "Disconnected tools across finance, sales, and operations",
    ],
    opportunities: [
      "Affordable automation of core business processes",
      "Unified systems replacing scattered spreadsheets and tools",
      "Digital presence that competes with larger players",
    ],
    solutions: ["business-automation", "web-development", "it-support"],
  },
  {
    slug: "enterprises",
    name: "Enterprises",
    summary: "Large-scale systems built for complex organizations and stakeholder structures.",
    challenges: [
      "Complex approval chains and stakeholder alignment",
      "Legacy systems deeply embedded in operations",
      "High cost of downtime or failed rollouts",
    ],
    opportunities: [
      "Phased modernization that reduces rollout risk",
      "Integration layers connecting legacy and modern systems",
      "Enterprise-grade governance and support structures",
    ],
    solutions: ["enterprise-solutions", "technology-consulting", "cybersecurity"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
