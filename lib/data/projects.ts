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
  isPlaceholder: true;
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
