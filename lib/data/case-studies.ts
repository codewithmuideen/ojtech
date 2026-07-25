export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  overview: string;
  challenge: string;
  objectives: string[];
  research: string;
  strategy: string;
  design: string;
  development: string;
  technologies: string[];
  implementation: string;
  results: string[];
  lessonsLearned: string;
  /** Marks illustrative sample work — not a real named client. */
  isPlaceholder: true;
}

// TODO(client): replace with real, permissioned case studies. Kept
// illustrative and metric-free (per the "no fabricated results" rule) until
// verified outcomes are available to publish.
export const caseStudies: CaseStudy[] = [
  {
    slug: "digital-payments-platform",
    title: "Building a Compliant Digital Payments Platform",
    client: "Fintech Startup, West Africa",
    industry: "Financial Services",
    summary:
      "How we helped an early-stage fintech launch a multi-tenant payments platform built for regulatory scrutiny from day one.",
    overview:
      "The client set out to build a digital payments platform for small businesses, needing to move quickly while satisfying the security and compliance expectations of banking partners.",
    challenge:
      "Speed and compliance are usually in tension. The client needed to launch fast to secure early partnerships, but any security shortcuts would jeopardize the banking relationships the product depended on.",
    objectives: [
      "Launch a functioning payments product within an aggressive early timeline",
      "Meet banking partner security and audit requirements from the first release",
      "Build an architecture that could onboard additional institutional partners later",
    ],
    research:
      "We began with a technical and regulatory discovery phase, reviewing banking partner requirements alongside the client's product roadmap to identify non-negotiable constraints early.",
    strategy:
      "We proposed a modular architecture separating core transaction logic from partner-specific integrations, so compliance requirements could be enforced centrally rather than duplicated per integration.",
    design:
      "We designed onboarding and transaction flows around clarity and trust signals, given that financial products live or die on user confidence.",
    development:
      "The platform was built with role-based access control, full audit logging, and a queue-based transaction pipeline to handle partner API variability without blocking the user experience.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    implementation:
      "We worked in short iterations with the client's compliance advisor reviewing each milestone, catching requirement gaps before they became rework.",
    results: [
      "Platform launched meeting all banking partner security review requirements",
      "Modular integration layer ready to onboard additional partners without core rework",
      "Full audit trail supporting ongoing compliance reporting",
    ],
    lessonsLearned:
      "Involving the compliance stakeholder inside the build cycle — not just at the end — turned out to be the single biggest factor in hitting the launch date without late-stage rework.",
    isPlaceholder: true,
  },
  {
    slug: "patient-records-portal",
    title: "Unifying Patient Records Across Clinic Locations",
    client: "Private Healthcare Group",
    industry: "Healthcare",
    summary:
      "How a fragmented, paper-based patient record process became a single secure portal across multiple clinic branches.",
    overview:
      "A multi-branch healthcare group was managing patient records and scheduling through a mix of paper files and disconnected spreadsheets, making coordinated care across locations difficult.",
    challenge:
      "Clinical staff needed a unified view of patient history without disrupting day-to-day patient care during the transition, and without compromising patient data security.",
    objectives: [
      "Give clinical staff a single, secure view of patient records across branches",
      "Digitize scheduling to reduce double-bookings and no-shows",
      "Meet data protection expectations for sensitive health information",
    ],
    research:
      "We shadowed front-desk and clinical workflows across two branches to understand where paper processes were actually breaking down, rather than assuming a generic EHR structure would fit.",
    strategy:
      "We prioritized a phased rollout — starting with scheduling and basic records, then layering in richer clinical documentation — to avoid disrupting patient care during go-live.",
    design:
      "Interfaces were designed for fast data entry during time-pressured patient visits, prioritizing speed and error prevention over visual complexity.",
    development:
      "We built a role-based access system so front-desk, nursing, and physician users each saw only what was relevant to their role, with full access logging for compliance.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    implementation:
      "Rollout happened branch-by-branch with on-site training sessions, allowing staff to adapt gradually rather than facing a single disruptive switch-over.",
    results: [
      "Unified patient record accessible securely across all clinic branches",
      "Digitized scheduling replacing manual paper booking logs",
      "Role-based access control supporting data protection compliance",
    ],
    lessonsLearned:
      "Shadowing real front-desk workflows before designing anything surfaced friction points a standard requirements interview would have missed entirely.",
    isPlaceholder: true,
  },
  {
    slug: "citizen-services-platform",
    title: "Taking Citizen Services Online",
    client: "State Government Agency",
    industry: "Government",
    summary:
      "Replacing in-person paperwork with a secure digital portal for citizen service requests.",
    overview:
      "Citizens seeking routine government services were required to visit physical offices and complete paper forms, creating long wait times and administrative backlog.",
    challenge:
      "The agency needed a digital solution that met government security and accessibility standards while integrating with an existing internal case management process that could not be replaced outright.",
    objectives: [
      "Allow citizens to submit and track service requests online",
      "Integrate with the agency's existing internal case management system",
      "Meet accessibility standards for a broad, non-technical user base",
    ],
    research:
      "We reviewed existing case management workflows and conducted accessibility-focused usability sessions with citizens across different age groups and technical comfort levels.",
    strategy:
      "Rather than replacing the internal case system, we designed an integration layer so the new citizen-facing portal fed directly into existing agency workflows.",
    design:
      "The portal was designed with plain-language instructions, large touch targets, and multi-language support considerations to serve the broadest possible citizen base.",
    development:
      "We built a secure submission and tracking portal with authentication, status notifications, and an integration API connecting to the agency's internal systems.",
    technologies: ["Next.js", "PostgreSQL", "Azure"],
    implementation:
      "The platform launched with a limited set of service categories first, expanding to additional service types after initial usage and feedback review.",
    results: [
      "Citizens able to submit and track routine service requests online",
      "Reduced dependency on in-person office visits for supported services",
      "Direct integration with existing agency case management workflows",
    ],
    lessonsLearned:
      "Designing for the least tech-comfortable citizen first — rather than the average user — made the platform genuinely accessible rather than accessible on paper only.",
    isPlaceholder: true,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
