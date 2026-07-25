export interface Project {
  slug: string;
  name: string;
  client: string;
  industry: string;
  summary: string;
  servicesDelivered: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  result: string;
  /** Marks illustrative sample work — not a real named client. */
  isPlaceholder?: boolean;
  /** Real, delivered work; client/brand name withheld rather than disclosed without sign-off. */
  nameWithheld?: boolean;
}

// TODO(client): replace these illustrative sample projects with real,
// named case work once available. Client names are intentionally generic
// (never fabricated as real companies) per the "no invented clients" rule.
export const projects: Project[] = [
  {
    slug: "fintech-payments-platform",
    name: "Digital Payments Platform",
    client: "Fintech Startup, West Africa",
    industry: "Financial Services",
    summary: "A multi-tenant payments platform built for fast onboarding and regulatory-aware transaction handling.",
    servicesDelivered: ["saas-development", "cybersecurity", "cloud-solutions"],
    technologies: ["Next.js", "PostgreSQL", "Node.js", "AWS"],
    challenge:
      "The client needed to launch a digital payments product quickly while meeting strict security and compliance expectations from banking partners.",
    solution:
      "We architected a multi-tenant platform with role-based access, audit logging, and a modular integration layer for banking and payment rails.",
    result:
      "The platform launched with a clear path to onboard additional institutional partners without re-architecting core systems.",
    isPlaceholder: true,
  },
  {
    slug: "healthcare-patient-portal",
    name: "Patient Records & Scheduling Portal",
    client: "Private Healthcare Group",
    industry: "Healthcare",
    summary: "A secure patient portal unifying records, scheduling, and communication across multiple clinic locations.",
    servicesDelivered: ["software-development", "cybersecurity", "ui-ux-design"],
    technologies: ["React", "Node.js", "PostgreSQL"],
    challenge:
      "Patient records and appointment scheduling were fragmented across paper files and disconnected spreadsheets across clinic branches.",
    solution:
      "We built a unified, access-controlled portal for records and scheduling, designed around real clinic staff workflows rather than generic templates.",
    result:
      "Clinic staff gained a single system of record, reducing time spent reconciling patient information across locations.",
    isPlaceholder: true,
  },
  {
    slug: "logistics-fleet-tracking",
    name: "Fleet Tracking & Dispatch System",
    client: "Regional Logistics Operator",
    industry: "Logistics",
    summary: "A real-time dispatch and tracking platform connecting drivers, dispatchers, and customers.",
    servicesDelivered: ["software-development", "cloud-solutions", "business-automation"],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    challenge:
      "Dispatch coordination relied on phone calls and manual logs, making it difficult to track delivery status in real time.",
    solution:
      "We built a mobile driver app paired with a dispatcher dashboard and a customer-facing tracking portal, all sharing a single real-time data layer.",
    result:
      "Dispatchers gained live visibility into fleet status, and customers could track deliveries without calling in for updates.",
    isPlaceholder: true,
  },
  {
    slug: "enterprise-hr-system",
    name: "Enterprise HR Management System",
    client: "Manufacturing Enterprise",
    industry: "Manufacturing",
    summary: "A custom HR platform covering onboarding, attendance, payroll workflows, and reporting.",
    servicesDelivered: ["enterprise-solutions", "business-automation"],
    technologies: [".NET", "PostgreSQL", "Azure"],
    challenge:
      "HR processes were spread across spreadsheets and a legacy system that no longer matched the organization's structure.",
    solution:
      "We designed and built a custom HR system aligned to the company's actual departmental and approval structures, with role-based dashboards for managers and staff.",
    result:
      "HR staff moved from manual spreadsheet reconciliation to a single system of record with automated reporting.",
    isPlaceholder: true,
  },
  {
    slug: "ecommerce-marketplace",
    name: "Multi-Vendor E-commerce Marketplace",
    client: "Retail Group",
    industry: "E-commerce",
    summary: "A performant multi-vendor storefront with integrated inventory and order management.",
    servicesDelivered: ["web-development", "seo", "business-automation"],
    technologies: ["Next.js", "PostgreSQL", "Stripe"],
    challenge:
      "The client's existing storefront was slow, difficult to update, and disconnected from inventory management.",
    solution:
      "We rebuilt the storefront on a performance-first architecture with SEO-optimized product pages and integrated inventory sync across vendors.",
    result:
      "The new storefront shipped with significantly faster load times and a single connected inventory system across vendors.",
    isPlaceholder: true,
  },
  {
    slug: "govtech-citizen-services",
    name: "Citizen Services Digital Platform",
    client: "State Government Agency",
    industry: "Government",
    summary: "A digital front door for citizen service requests, replacing in-person paperwork processes.",
    servicesDelivered: ["digital-transformation", "cybersecurity", "enterprise-solutions"],
    technologies: ["Next.js", "PostgreSQL", "Azure"],
    challenge:
      "Citizens had to visit physical offices and complete paper forms for routine service requests, creating long wait times.",
    solution:
      "We designed and built a secure digital portal for submitting and tracking service requests, integrated with the agency's internal case management process.",
    result:
      "Citizens gained the ability to submit and track requests online, reducing the need for in-person visits for routine processes.",
    isPlaceholder: true,
  },

  // --- Delivered work; client/brand names withheld rather than disclosed without sign-off ---
  {
    slug: "recruitment-resourcing-platform",
    name: "Recruitment & Resourcing Platform",
    client: "HR & Recruitment Services Provider",
    industry: "Professional Services",
    summary: "A web platform connecting employers with vetted talent for staffing and recruitment needs.",
    servicesDelivered: ["talent-sourcing", "employer-employee-matching", "web-development"],
    technologies: ["Next.js", "PostgreSQL"],
    challenge:
      "The client needed a professional online presence and a structured intake process to connect employers with candidates more efficiently than ad hoc phone and email.",
    solution:
      "We built a recruitment platform with structured employer and candidate intake, dedicated service pages for their staffing offerings, and a professional brand presence.",
    result:
      "The client gained a credible digital front door for their recruitment business, with structured lead capture replacing ad hoc intake.",
    nameWithheld: true,
  },
  {
    slug: "technology-company-multiregion-site",
    name: "Multi-Region Technology Company Website",
    client: "IT & Technology Solutions Company, Nigeria & UK",
    industry: "Information Technology",
    summary: "A corporate web presence spanning Nigerian and UK operations for a technology solutions company.",
    servicesDelivered: ["web-development", "uk-nigeria-business-partnerships", "digital-marketing"],
    technologies: ["Next.js", "SEO"],
    challenge:
      "The company operates across two markets — Nigeria and the UK — and needed a consistent, professional web presence that speaks credibly to both audiences.",
    solution:
      "We built and maintain a multi-region site structure representing the company's Nigerian and UK operations under one consistent brand system.",
    result:
      "The company presents a unified, credible digital presence across both markets, supporting business development in each region.",
    nameWithheld: true,
  },
  {
    slug: "logistics-technology-platform",
    name: "Logistics Technology Platform (Website + App)",
    client: "Logistics Technology Company",
    industry: "Logistics",
    summary: "A marketing website paired with a companion web application for a logistics technology company.",
    servicesDelivered: ["web-development", "software-development", "cloud-solutions"],
    technologies: ["Next.js", "React", "PostgreSQL"],
    challenge:
      "The client needed both a public-facing marketing site to explain their logistics offering and a separate, functional web application to run actual platform operations.",
    solution:
      "We delivered two connected properties: a marketing website to communicate the value proposition and drive sign-ups, and a companion application handling day-to-day logistics workflows.",
    result:
      "The client launched with a clear separation between marketing and product, letting each evolve independently as the platform matures.",
    nameWithheld: true,
  },
  {
    slug: "it-training-institute-platform",
    name: "IT Training Institute Website & Enrollment Platform",
    client: "IT Training Institute, Nigeria",
    industry: "Education",
    summary: "A website and course enrollment platform for an IT training institute offering certification and skills courses.",
    servicesDelivered: ["training", "web-development", "it-certification-programs"],
    technologies: ["Next.js", "PostgreSQL"],
    challenge:
      "The institute needed to showcase its course catalog and let prospective students learn about and enroll in programs online, rather than relying entirely on walk-in enrollment.",
    solution:
      "We built a course catalog and enrollment platform presenting available programs, schedules, and certification tracks, with a structured inquiry and registration flow.",
    result:
      "The institute gained an online enrollment channel running alongside in-person registration, widening its reach beyond walk-in traffic.",
    nameWithheld: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
