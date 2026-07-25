export interface BuildExample {
  title: string;
  description: string;
  useCase: string;
  technologies: string[];
}

export const whatWeBuild: BuildExample[] = [
  {
    title: "SaaS Platforms",
    description: "Multi-tenant software products with subscription billing and usage-based pricing.",
    useCase: "A subscription platform serving multiple customer organizations from one codebase.",
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Fintech Platforms",
    description: "Payment, lending, and financial management systems built for regulatory scrutiny.",
    useCase: "A digital payments product with audit logging and partner-bank integrations.",
    technologies: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "E-commerce Platforms",
    description: "High-performance storefronts with integrated inventory and order management.",
    useCase: "A multi-vendor marketplace with synchronized inventory across sellers.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Enterprise Systems",
    description: "Custom ERP, HR, and operational systems built around real organizational structure.",
    useCase: "An HR platform aligned to a company's actual departmental hierarchy.",
    technologies: [".NET", "Azure", "PostgreSQL"],
  },
  {
    title: "Healthcare Platforms",
    description: "Secure patient records, scheduling, and telehealth systems.",
    useCase: "A unified patient portal accessible securely across multiple clinic branches.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Education Platforms",
    description: "Learning management and institutional administration systems.",
    useCase: "A learning platform serving both classroom and remote students.",
    technologies: ["Next.js", "PostgreSQL"],
  },
  {
    title: "Logistics Systems",
    description: "Fleet tracking, dispatch, and delivery coordination platforms.",
    useCase: "A real-time dispatch system connecting drivers, dispatchers, and customers.",
    technologies: ["React Native", "Node.js", "AWS"],
  },
  {
    title: "Real Estate Platforms",
    description: "Listing, transaction, and property management systems.",
    useCase: "A property portfolio dashboard with automated transaction workflows.",
    technologies: ["Next.js", "PostgreSQL"],
  },
  {
    title: "Government Digital Platforms",
    description: "Citizen-facing service portals integrated with internal case management.",
    useCase: "A digital front door for citizens to submit and track service requests.",
    technologies: ["Next.js", "Azure", "PostgreSQL"],
  },
  {
    title: "Business Automation Systems",
    description: "Internal tools that remove manual, repetitive operational work.",
    useCase: "An approvals and reporting system replacing spreadsheet-based workflows.",
    technologies: ["Node.js", "APIs"],
  },
  {
    title: "AI-Powered Applications",
    description: "Products with AI features grounded in reliable, well-scoped use cases.",
    useCase: "An intelligent document search tool built on a vector database.",
    technologies: ["OpenAI", "Python", "Vector Databases"],
  },
  {
    title: "Mobile Applications",
    description: "Cross-platform mobile apps for customer and field-team use cases.",
    useCase: "A field operations app usable offline with background sync.",
    technologies: ["React Native", "Flutter"],
  },
];
