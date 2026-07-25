export const serviceCategories = [
  "Software & Product Development",
  "Product Design",
  "Digital Transformation",
  "Cloud & Infrastructure",
  "Business & Enterprise",
  "AI & Data",
  "Cybersecurity",
  "Digital Marketing",
  "IT Services",
  "Business Consulting",
  "Project Management",
  "Training & Capacity Building",
  "Personal & Small Business Services",
  "Education & Career Services",
  "Partnerships & Collaboration",
  "Government & Public Sector Services",
  "Political & Constituency Services",
  "Event & Program Management",
  "Recruitment & Talent Services",
  "Research & Development",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  summary: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  /** Flagship services get hand-written extra depth on their detail page. */
  flagship?: boolean;
}

export const services: Service[] = [
  {
    slug: "software-development",
    name: "Custom Software Development",
    category: "Software & Product Development",
    summary: "Bespoke software built around how your business actually operates.",
    description:
      "We design and build custom software that fits your workflows instead of forcing you to fit a template — from internal tools and customer-facing platforms to complex, multi-system integrations.",
    benefits: [
      "Software modeled on your real business processes, not generic assumptions",
      "Architecture built to scale as your team and user base grow",
      "Clean, documented codebases your team can maintain long-term",
      "Direct collaboration between engineers and your stakeholders throughout the build",
    ],
    deliverables: [
      "Technical discovery and solution architecture",
      "Production-grade application build",
      "API and third-party system integration",
      "Testing, deployment, and handover documentation",
    ],
    technologies: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Python", ".NET"],
    flagship: true,
  },
  {
    slug: "web-development",
    name: "Web Application Development",
    category: "Software & Product Development",
    summary: "Fast, secure, and scalable web platforms for growing businesses.",
    description:
      "From marketing sites to full web applications, we build for speed, accessibility, and search visibility from the first commit — engineered to hold up under real production traffic.",
    benefits: [
      "Performance-first builds that load fast on any connection",
      "SEO-friendly architecture out of the box",
      "Responsive design tested across real devices",
      "Secure, maintainable code your team can extend",
    ],
    deliverables: [
      "Information architecture and page-level UX",
      "Frontend and backend implementation",
      "CMS or admin tooling where needed",
      "Performance and accessibility auditing",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
    flagship: true,
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    category: "Software & Product Development",
    summary: "Native-quality iOS and Android apps from a single codebase.",
    description:
      "We build mobile applications that feel native, perform reliably offline and online, and are structured for fast iteration as your product roadmap evolves.",
    benefits: [
      "Cross-platform delivery without sacrificing native feel",
      "Offline-first patterns for unreliable network conditions",
      "App store submission and release management support",
      "Shared codebase that reduces long-term maintenance cost",
    ],
    deliverables: [
      "Mobile UX design and prototyping",
      "iOS and Android application builds",
      "Push notifications, analytics, and crash reporting setup",
      "App store submission support",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Firebase"],
  },
  {
    slug: "product-design",
    name: "Product Design",
    category: "Product Design",
    summary: "End-to-end product design, from first sketch to shipped feature.",
    description:
      "We take products from a rough idea to a validated, usable experience — combining research, strategy, and design craft so what gets built actually gets used.",
    benefits: [
      "Product decisions grounded in user research, not guesswork",
      "Design systems that keep growing products consistent",
      "Faster handoff to engineering with production-ready specs",
      "Iterative validation before expensive build cycles begin",
    ],
    deliverables: [
      "Product strategy and discovery workshops",
      "Wireframes and interactive prototypes",
      "Design systems and component libraries",
      "Usability testing and iteration",
    ],
    technologies: ["Figma", "Design Tokens", "Storybook"],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    category: "Product Design",
    summary: "Interfaces engineered for clarity, trust, and conversion.",
    description:
      "Good UI/UX is invisible — it removes friction rather than adding decoration. We design interfaces that make complex products feel simple, and simple products feel premium.",
    benefits: [
      "Interfaces designed around real user behavior and testing",
      "Consistent visual language across every screen and platform",
      "Accessibility built in from the first wireframe, not bolted on later",
      "Design systems that speed up every future feature you ship",
    ],
    deliverables: [
      "User research and journey mapping",
      "Wireframes, high-fidelity UI, and interactive prototypes",
      "Design system and component documentation",
      "Developer handoff and QA support",
    ],
    technologies: ["Figma", "Framer", "Design Systems"],
    flagship: true,
  },
  {
    slug: "saas-development",
    name: "SaaS Development",
    category: "Software & Product Development",
    summary: "Multi-tenant SaaS platforms built to onboard and retain customers.",
    description:
      "We architect and build SaaS products with subscription billing, multi-tenancy, role-based access, and the operational tooling needed to run a software business, not just ship a demo.",
    benefits: [
      "Multi-tenant architecture built for secure data isolation",
      "Subscription billing and usage-based pricing support",
      "Admin tooling for support, onboarding, and account management",
      "Infrastructure sized to your current stage, not over-engineered",
    ],
    deliverables: [
      "SaaS architecture and data model design",
      "Billing, authentication, and tenancy implementation",
      "Customer and admin dashboards",
      "Analytics and usage tracking",
    ],
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Prisma", "Redis"],
  },
  {
    slug: "cloud-solutions",
    name: "Cloud Solutions",
    category: "Cloud & Infrastructure",
    summary: "Cloud architecture that scales cost-effectively as you grow.",
    description:
      "We design cloud infrastructure that matches your actual usage patterns — avoiding both the fragility of under-provisioning and the cost of over-engineering for scale you don't yet need.",
    benefits: [
      "Infrastructure sized and costed for your current stage",
      "Migration paths that minimize downtime and risk",
      "Monitoring and alerting built in from day one",
      "Clear documentation your team can operate independently",
    ],
    deliverables: [
      "Cloud architecture design and cost modeling",
      "Migration planning and execution",
      "CI/CD pipeline setup",
      "Monitoring, logging, and alerting configuration",
    ],
    technologies: ["Vercel", "AWS", "Azure", "Google Cloud", "Docker"],
    flagship: true,
  },
  {
    slug: "enterprise-solutions",
    name: "Enterprise Solutions",
    category: "Business & Enterprise",
    summary: "Enterprise-grade systems for organizations with complex requirements.",
    description:
      "For organizations with layered approval structures, compliance needs, and legacy systems, we build software that respects that complexity rather than ignoring it.",
    benefits: [
      "Role-based access control and audit trails built in",
      "Integration with existing enterprise systems and data sources",
      "Compliance-aware architecture decisions",
      "Change management support for large user bases",
    ],
    deliverables: [
      "Enterprise systems architecture",
      "ERP, CRM, or custom business system implementation",
      "Legacy system integration and modernization",
      "Rollout and training support",
    ],
    technologies: [".NET", "Java", "PostgreSQL", "Azure", "SSO/SAML"],
  },
  {
    slug: "business-automation",
    name: "Business Process Automation",
    category: "Digital Transformation",
    summary: "Automating the repetitive work that slows your team down.",
    description:
      "We identify manual, repetitive workflows across your business and replace them with automated systems — freeing your team to focus on work that actually needs human judgment.",
    benefits: [
      "Fewer manual errors from repetitive data entry and handoffs",
      "Faster turnaround on approvals, reporting, and operations",
      "Automation that integrates with tools you already use",
      "Clear visibility into where time and cost are actually going",
    ],
    deliverables: [
      "Workflow audit and automation opportunity mapping",
      "Automation build and system integration",
      "Internal tooling and dashboards",
      "Team training and documentation",
    ],
    technologies: ["Node.js", "Zapier/Make", "APIs", "RPA tooling"],
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence Solutions",
    category: "AI & Data",
    summary: "Practical AI features that solve specific business problems.",
    description:
      "We integrate AI where it creates measurable value — automation, intelligent search, content generation, and decision support — grounded in what the underlying models can reliably do today.",
    benefits: [
      "AI features scoped to reliable, well-understood use cases",
      "Integration with your existing data and systems",
      "Clear cost modeling for API usage and infrastructure",
      "Human-in-the-loop safeguards where accuracy matters",
    ],
    deliverables: [
      "AI opportunity assessment",
      "Model selection and integration",
      "Automation and workflow implementation",
      "Monitoring and evaluation setup",
    ],
    technologies: ["OpenAI", "Anthropic Claude", "Python", "Vector Databases"],
    flagship: true,
  },
  {
    slug: "data-solutions",
    name: "Data Solutions",
    category: "AI & Data",
    summary: "Turning scattered business data into decisions you can act on.",
    description:
      "We build the data infrastructure and reporting tools that let you see what's actually happening in your business — without waiting on manual spreadsheets.",
    benefits: [
      "Centralized reporting across previously siloed systems",
      "Dashboards built around the metrics your team actually uses",
      "Data pipelines built to handle growth in volume",
      "Clear data governance and access control",
    ],
    deliverables: [
      "Data architecture and pipeline design",
      "Business intelligence dashboards",
      "Data warehouse setup",
      "Reporting automation",
    ],
    technologies: ["PostgreSQL", "Python", "Metabase", "dbt"],
  },
  {
    slug: "project-management",
    name: "Technology Project Management",
    category: "Project Management",
    summary: "Structured delivery for technology projects of any size.",
    description:
      "We bring disciplined project management to technology delivery — clear milestones, transparent reporting, and proactive risk management so projects land on time and on budget.",
    benefits: [
      "Clear milestones and delivery visibility from day one",
      "Proactive risk identification instead of last-minute surprises",
      "Structured communication between technical and business stakeholders",
      "Agile delivery adapted to your team's actual working style",
    ],
    deliverables: [
      "Project planning and delivery roadmap",
      "Sprint planning and backlog management",
      "Stakeholder reporting cadence",
      "Delivery risk management",
    ],
    technologies: ["Jira", "Linear", "Agile/Scrum"],
  },
  {
    slug: "technology-consulting",
    name: "Technology Consulting",
    category: "Business Consulting",
    summary: "Independent technical guidance before you commit budget.",
    description:
      "Before a major technology decision, we help you pressure-test the approach — architecture, vendor choice, build-vs-buy, and roadmap sequencing — so resources go where they'll count.",
    benefits: [
      "Independent perspective, not tied to a specific vendor or stack",
      "Clear technology roadmaps aligned to business priorities",
      "Risk assessment before major technical investments",
      "Practical recommendations, not just theoretical frameworks",
    ],
    deliverables: [
      "Technology audit and assessment",
      "Architecture and roadmap recommendations",
      "Build-vs-buy and vendor evaluation",
      "Executive-ready reporting",
    ],
    technologies: ["Architecture Review", "Technical Due Diligence"],
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    category: "Business Consulting",
    summary: "Practical IT strategy for growing organizations.",
    description:
      "We help organizations make sense of their IT environment — infrastructure, systems, security posture, and support model — and build a plan to modernize without disrupting operations.",
    benefits: [
      "Clear picture of current IT strengths, gaps, and risks",
      "Prioritized modernization roadmap",
      "Vendor and tooling recommendations matched to your budget",
      "Support model designed around your team's size",
    ],
    deliverables: [
      "IT infrastructure assessment",
      "Modernization roadmap",
      "Vendor and tooling recommendations",
      "Ongoing advisory support",
    ],
    technologies: ["Infrastructure Audit", "IT Strategy"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    category: "Cybersecurity",
    summary: "Practical security assessment and hardening for real-world risk.",
    description:
      "We assess your applications and infrastructure for security gaps, prioritize risk by actual business impact, and help your team build lasting security practices, not one-time fixes.",
    benefits: [
      "Risk-prioritized findings, not an overwhelming generic checklist",
      "Application-level and infrastructure-level assessment",
      "Practical remediation guidance your team can execute",
      "Security awareness training for non-technical staff",
    ],
    deliverables: [
      "Security assessment and risk review",
      "Application security testing",
      "Remediation roadmap",
      "Team security awareness training",
    ],
    technologies: ["OWASP", "Penetration Testing Tools", "SIEM"],
  },
  {
    slug: "devops",
    name: "DevOps",
    category: "Cloud & Infrastructure",
    summary: "CI/CD pipelines and infrastructure that let your team ship confidently.",
    description:
      "We build the deployment pipelines, environment structure, and monitoring that let engineering teams ship frequently without fear — catching problems before they reach production.",
    benefits: [
      "Faster, safer deployments through automated pipelines",
      "Consistent environments from local development to production",
      "Reduced downtime through proper monitoring and rollback strategy",
      "Infrastructure as code for repeatable, auditable changes",
    ],
    deliverables: [
      "CI/CD pipeline design and implementation",
      "Infrastructure as code setup",
      "Monitoring, logging, and alerting",
      "Deployment and rollback strategy",
    ],
    technologies: ["Docker", "GitHub Actions", "Terraform", "Vercel"],
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    category: "Digital Transformation",
    summary: "Turning manual, paper-based operations into digital systems.",
    description:
      "We help organizations move from manual processes and disconnected tools to integrated digital systems — sequenced realistically so operations keep running throughout the transition.",
    benefits: [
      "Transformation roadmap sequenced around business continuity",
      "Legacy process digitization without disrupting daily operations",
      "Change management support for teams adopting new systems",
      "Measurable efficiency gains tracked against a clear baseline",
    ],
    deliverables: [
      "Digital maturity assessment",
      "Transformation strategy and roadmap",
      "Process digitization and system implementation",
      "Change management and training",
    ],
    technologies: ["Custom Platforms", "Workflow Automation", "Cloud Systems"],
    flagship: true,
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    category: "Digital Marketing",
    summary: "Marketing systems built to drive measurable business outcomes.",
    description:
      "We build and manage digital marketing programs — content, paid, and organic — with a focus on tracked outcomes rather than vanity metrics.",
    benefits: [
      "Marketing tied to measurable business outcomes, not vanity metrics",
      "Content and campaigns matched to where your buyers actually are",
      "Clear reporting your team can act on",
      "Conversion-focused landing pages and funnels",
    ],
    deliverables: [
      "Digital marketing strategy",
      "Content and campaign execution",
      "Conversion rate optimization",
      "Analytics and reporting setup",
    ],
    technologies: ["Google Analytics", "Meta Ads", "Google Ads", "Email Marketing"],
  },
  {
    slug: "seo",
    name: "Search Engine Optimization",
    category: "Digital Marketing",
    summary: "Technical and content SEO built for sustainable organic growth.",
    description:
      "We optimize technical foundations, content structure, and site architecture so search engines can find, understand, and rank your pages — for both Nigerian and international audiences.",
    benefits: [
      "Technical SEO foundations fixed at the architecture level",
      "Content structured around real search intent",
      "Local SEO positioning for Nigerian and African markets",
      "Transparent reporting on rankings and organic traffic",
    ],
    deliverables: [
      "Technical SEO audit",
      "On-page and content optimization",
      "Local and structured data SEO",
      "Ongoing performance reporting",
    ],
    technologies: ["Google Search Console", "Schema.org", "Core Web Vitals"],
  },
  {
    slug: "software-installation",
    name: "Software Installation",
    category: "IT Services",
    summary: "Reliable setup and configuration of business software systems.",
    description:
      "From office productivity suites to specialized business applications, we handle installation, configuration, and licensing so your systems are ready to use from day one.",
    benefits: [
      "Correctly licensed, configured software from the start",
      "Minimal disruption to daily operations during setup",
      "Documentation your team can reference later",
      "Ongoing support available after installation",
    ],
    deliverables: [
      "Software needs assessment",
      "Installation and configuration",
      "License management",
      "User onboarding support",
    ],
    technologies: ["Microsoft 365", "Google Workspace", "Business Applications"],
  },
  {
    slug: "hardware-solutions",
    name: "Hardware Solutions",
    category: "IT Services",
    summary: "Sourcing and setup of the hardware your operations depend on.",
    description:
      "We help organizations plan, source, and set up the computing hardware and networking equipment that keeps operations running reliably.",
    benefits: [
      "Hardware recommendations matched to actual usage needs",
      "Proper setup and network configuration",
      "Vendor coordination handled on your behalf",
      "Maintenance planning to extend hardware lifespan",
    ],
    deliverables: [
      "Hardware needs assessment",
      "Procurement coordination",
      "Setup and network configuration",
      "Maintenance planning",
    ],
    technologies: ["Networking Equipment", "Workstations", "Servers"],
  },
  {
    slug: "it-support",
    name: "IT Support",
    category: "IT Services",
    summary: "Responsive technical support that keeps your team productive.",
    description:
      "We provide ongoing technical support for hardware, software, and network issues — keeping small problems from becoming operational disruptions.",
    benefits: [
      "Faster resolution of day-to-day technical issues",
      "Proactive maintenance to prevent recurring problems",
      "Clear escalation paths for critical issues",
      "Support scoped to your team's size and budget",
    ],
    deliverables: [
      "IT support plan setup",
      "Issue triage and resolution",
      "Preventive maintenance",
      "Technical documentation for your team",
    ],
    technologies: ["Remote Support Tooling", "Network Diagnostics"],
  },
  {
    slug: "training",
    name: "Corporate Training & Capacity Building",
    category: "Training & Capacity Building",
    summary: "Practical technology training for individuals and teams.",
    description:
      "We deliver hands-on training in software development, digital skills, and emerging technology — designed for people building real career capability, not just certificates.",
    benefits: [
      "Curriculum built around real, in-demand skills",
      "Hands-on projects, not just theoretical lectures",
      "Cohorts for individuals and customized tracks for corporate teams",
      "Instructors with direct industry building experience",
    ],
    deliverables: [
      "Skills assessment and track recommendation",
      "Structured curriculum and hands-on projects",
      "Mentorship and code/design review",
      "Corporate training programs on request",
    ],
    technologies: ["Web Development", "Cloud Computing", "AI & Automation", "Cybersecurity"],
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    category: "AI & Data",
    summary: "Custom AI chatbots that answer questions and handle tasks on your website or app.",
    description:
      "We build AI-powered chatbots trained on your business's own information — products, services, FAQs, and processes — so visitors get accurate answers instantly instead of waiting on a human reply.",
    benefits: [
      "Instant, accurate answers grounded in your actual business content",
      "Escalation to a human when the bot reaches the edge of what it knows",
      "Available around the clock, across time zones",
      "Continuously improvable as your business and FAQs evolve",
    ],
    deliverables: [
      "Chatbot scoping and knowledge-base preparation",
      "AI chatbot build and integration into your website or app",
      "Human handoff / escalation workflow",
      "Monitoring and ongoing tuning",
    ],
    technologies: ["OpenAI", "Anthropic Claude", "Vector Databases", "Node.js"],
  },
  {
    slug: "whatsapp-telegram-chatbots",
    name: "WhatsApp & Telegram Chatbot Integration",
    category: "AI & Data",
    summary: "Automated customer conversations directly inside WhatsApp and Telegram.",
    description:
      "We build chatbots on the messaging platforms your customers already use — automating order updates, FAQs, bookings, and support on WhatsApp and Telegram, with a clear path to a human agent when needed.",
    benefits: [
      "Meets customers on the messaging apps they already check daily",
      "Automates repetitive questions and order/booking updates",
      "Reduces response time without adding support headcount",
      "Works alongside your existing team, not instead of them",
    ],
    deliverables: [
      "WhatsApp Business API or Telegram Bot API setup",
      "Conversation flow design and automation build",
      "Integration with your existing systems (orders, bookings, CRM)",
      "Handoff workflow to a human agent",
    ],
    technologies: ["WhatsApp Business API", "Telegram Bot API", "Node.js"],
  },
  {
    slug: "phishing-website-safety",
    name: "Phishing & Online Safety Awareness",
    category: "Cybersecurity",
    summary: "Practical training and tools to help your team spot phishing and unsafe websites.",
    description:
      "Most successful phishing attacks succeed because they look convincing, not because they're technically sophisticated. We train your team to recognize the warning signs — in emails, links, and websites — and put simple safeguards in place to reduce how often those attempts even reach an inbox.",
    benefits: [
      "Practical, example-based training your team will actually remember",
      "Simple checklist for verifying a suspicious email or website before clicking",
      "Guidance on enabling protections (multi-factor authentication, email filtering)",
      "A clear response plan for what to do if someone does click a bad link",
    ],
    deliverables: [
      "Phishing and online-safety awareness training session",
      "Simulated phishing test (optional)",
      "Website/email verification checklist for staff",
      "Incident response guidance if a click-through happens",
    ],
    technologies: ["Email Security", "Multi-Factor Authentication", "Security Awareness Training"],
  },
  {
    slug: "event-media-hosting",
    name: "Event Media Hosting",
    category: "Personal & Small Business Services",
    summary: "Secure cloud galleries for wedding, graduation, and convocation photos and videos.",
    description:
      "We create a private, branded online gallery for your event — wedding, graduation, convocation, or celebration — where your photos and videos are securely stored and easily shared with family, friends, and guests, without relying on group chats or overloaded phone storage.",
    benefits: [
      "One shareable link instead of scattered group-chat photo dumps",
      "Secure cloud storage that doesn't fill up your guests' phones",
      "Optional privacy controls so only invited guests can view or download",
      "Photos and videos hosted reliably, long after the event is over",
    ],
    deliverables: [
      "Branded online photo and video gallery for your event",
      "Secure cloud hosting and storage",
      "Guest upload option for photos taken on the day",
      "Shareable link and optional download controls",
    ],
    technologies: ["Cloud Storage", "Media Hosting", "Access Controls"],
  },
  {
    slug: "domain-name-registration",
    name: "Domain Name Registration",
    category: "Personal & Small Business Services",
    summary: "Finding, registering, and setting up the right domain name for you or your business.",
    description:
      "We help you search for and register the right domain name, then handle the DNS setup so it correctly points to your website, email, and any other services it needs to — without the technical guesswork.",
    benefits: [
      "Help choosing a domain name that fits your brand and is actually available",
      "Registration handled correctly the first time",
      "DNS configured so your website and email work together properly",
      "Renewal reminders so you never lose your domain by accident",
    ],
    deliverables: [
      "Domain name search and recommendation",
      "Domain registration",
      "DNS setup and configuration",
      "Renewal and ownership documentation",
    ],
    technologies: ["DNS", "Domain Registrars"],
  },
  {
    slug: "business-email-setup",
    name: "Business & Office Email Setup",
    category: "Personal & Small Business Services",
    summary: "Professional email addresses on your own domain — yourname@yourbusiness.com.",
    description:
      "We set up professional email addresses on your own domain (through Google Workspace, Microsoft 365, or a similar provider), so your business communicates with a custom email address instead of a generic free-email account.",
    benefits: [
      "A professional email address that builds trust with customers",
      "Shared calendars, file storage, and collaboration tools included",
      "Proper email security and spam protection configured from the start",
      "Easy to add new staff accounts as your team grows",
    ],
    deliverables: [
      "Business email setup (Google Workspace, Microsoft 365, or similar)",
      "Domain and DNS configuration for email delivery",
      "Staff account setup and onboarding",
      "Basic security configuration (SPF/DKIM/DMARC, spam filtering)",
    ],
    technologies: ["Google Workspace", "Microsoft 365", "DNS"],
  },
  {
    slug: "business-promotion",
    name: "Business Promotion",
    category: "Personal & Small Business Services",
    summary: "Practical online promotion to help small businesses get found and get customers.",
    description:
      "For small businesses and individual entrepreneurs, we provide right-sized online promotion — social media presence, local listings, and simple advertising — to help you get discovered by customers without needing a full marketing department.",
    benefits: [
      "Right-sized promotion that fits a small business budget",
      "Improved visibility on Google and social platforms",
      "Simple, consistent content that keeps your business active online",
      "Clear reporting so you can see what's actually working",
    ],
    deliverables: [
      "Business listing setup (Google Business Profile and key directories)",
      "Social media presence setup or cleanup",
      "Basic promotional content and posting plan",
      "Simple performance reporting",
    ],
    technologies: ["Google Business Profile", "Social Media", "Google Ads"],
  },
  {
    slug: "desktop-application-development",
    name: "Desktop Application Development",
    category: "Software & Product Development",
    summary: "Custom desktop software for Windows and macOS.",
    description:
      "We build desktop applications for businesses that need reliable, offline-capable software running directly on staff machines — from internal tools to point-of-sale systems.",
    benefits: [
      "Software that works reliably without depending on internet access",
      "Direct access to local hardware and file systems where needed",
      "Familiar desktop experience for non-technical staff",
    ],
    deliverables: [
      "Desktop application build for Windows and/or macOS",
      "Local data storage and sync design",
      "Installer packaging and update mechanism",
    ],
    technologies: ["Electron", ".NET", "C#"],
  },

  // --- Training & Capacity Building ---
  {
    slug: "corporate-staff-training",
    name: "Corporate Staff Training",
    category: "Training & Capacity Building",
    summary: "Upskilling programs for existing company teams.",
    description:
      "We design and deliver training programs for your existing staff — closing specific skill gaps identified in your team, rather than generic off-the-shelf courses.",
    benefits: [
      "Curriculum built around your team's actual skill gaps",
      "Minimal disruption through flexible scheduling",
      "Measurable improvement tracked against clear learning goals",
    ],
    deliverables: [
      "Skills gap assessment",
      "Custom training curriculum",
      "Delivery and post-training evaluation",
    ],
    technologies: ["Needs Assessment", "Custom Curriculum"],
  },
  {
    slug: "student-training-internship",
    name: "Student Training & Internship",
    category: "Training & Capacity Building",
    summary: "Structured technology training and internship placements for students.",
    description:
      "We provide structured, hands-on technology training for students, paired with internship opportunities that give real project experience before graduation.",
    benefits: [
      "Practical, project-based learning rather than theory alone",
      "Internship exposure to real business problems",
      "Mentorship from practicing engineers and consultants",
    ],
    deliverables: [
      "Structured training curriculum",
      "Hands-on project work",
      "Internship placement support",
    ],
    technologies: ["Mentorship", "Project-Based Learning"],
  },
  {
    slug: "business-entrepreneurship-training",
    name: "Business & Entrepreneurship Training",
    category: "Training & Capacity Building",
    summary: "Practical training for founders and small business owners.",
    description:
      "We train aspiring and early-stage entrepreneurs on the practical fundamentals of running a business — from planning and finance basics to digital tools for growth.",
    benefits: [
      "Practical frameworks, not abstract business theory",
      "Guidance tailored to Nigerian and African market realities",
      "Ongoing mentorship beyond the training sessions",
    ],
    deliverables: [
      "Business fundamentals curriculum",
      "Workshop facilitation",
      "Post-training mentorship sessions",
    ],
    technologies: ["Business Planning", "Mentorship"],
  },
  {
    slug: "digital-skills-training",
    name: "Digital Skills Training",
    category: "Training & Capacity Building",
    summary: "Foundational digital literacy and workplace technology skills.",
    description:
      "We deliver digital skills training covering everyday workplace technology — productivity tools, online safety, and basic digital literacy — for individuals and organizations building digital readiness.",
    benefits: [
      "Accessible curriculum for varying digital literacy levels",
      "Immediately applicable workplace skills",
      "Available for individuals, cohorts, or full organizations",
    ],
    deliverables: [
      "Digital literacy curriculum",
      "Hands-on practical sessions",
      "Certificates of completion",
    ],
    technologies: ["Productivity Tools", "Digital Literacy"],
  },
  {
    slug: "it-certification-programs",
    name: "IT Certification Programs",
    category: "Training & Capacity Building",
    summary: "Structured preparation tracks for recognized IT certifications.",
    description:
      "We run structured preparation programs for in-demand IT certifications, combining focused instruction with practice assessments to build genuine, exam-ready competence.",
    benefits: [
      "Focused curriculum aligned to certification exam objectives",
      "Practice assessments to track real readiness",
      "Instructors with hands-on industry experience",
    ],
    deliverables: [
      "Certification track curriculum",
      "Practice assessments",
      "Exam readiness review",
    ],
    technologies: ["Cloud Certifications", "Cybersecurity Certifications"],
  },
  {
    slug: "onsite-training",
    name: "On-site Training",
    category: "Training & Capacity Building",
    summary: "Training delivered directly at your organization's location.",
    description:
      "We bring training directly to your team's workplace — reducing disruption and letting sessions reference your organization's actual tools and workflows.",
    benefits: [
      "No travel required for your staff",
      "Training grounded in your organization's real workflows",
      "Flexible scheduling around your operational needs",
    ],
    deliverables: [
      "On-site training delivery",
      "Materials tailored to your environment",
      "Post-session support",
    ],
    technologies: ["Custom Delivery"],
  },
  {
    slug: "offsite-training",
    name: "Off-site Training",
    category: "Training & Capacity Building",
    summary: "Training delivered at our training center, away from daily distractions.",
    description:
      "We deliver focused training sessions at our training center — a change of environment that helps participants stay engaged without office interruptions.",
    benefits: [
      "Distraction-free learning environment",
      "Access to our training center facilities and equipment",
      "Structured schedule that keeps cohorts on track",
    ],
    deliverables: [
      "Training center session scheduling",
      "Structured curriculum delivery",
      "Completion assessment",
    ],
    technologies: ["Cohort-Based Learning"],
  },
  {
    slug: "workshops-seminars-bootcamps",
    name: "Workshops, Seminars & Bootcamps",
    category: "Training & Capacity Building",
    summary: "Short-form, intensive learning formats for focused topics.",
    description:
      "We design and run workshops, seminars, and bootcamps for organizations and communities wanting focused, intensive exposure to a specific topic in a short timeframe.",
    benefits: [
      "High-impact learning without a long-term time commitment",
      "Formats scaled from a half-day workshop to a multi-week bootcamp",
      "Practical exercises, not just presentations",
    ],
    deliverables: [
      "Format and curriculum design",
      "Facilitation",
      "Participant materials and resources",
    ],
    technologies: ["Bootcamp Curriculum", "Workshop Facilitation"],
  },

  // --- Business Consulting ---
  {
    slug: "business-process-improvement",
    name: "Business Process Improvement",
    category: "Business Consulting",
    summary: "Identifying and fixing operational inefficiencies before automating anything.",
    description:
      "Before recommending any technology, we map how work actually flows through your organization and identify where process — not software — is the real bottleneck.",
    benefits: [
      "Root-cause analysis before jumping to a tech solution",
      "Process improvements that often cost nothing to implement",
      "A clear baseline to measure future automation against",
    ],
    deliverables: [
      "Process mapping and analysis",
      "Improvement recommendations",
      "Implementation support",
    ],
    technologies: ["Process Mapping", "Lean Analysis"],
  },
  {
    slug: "startup-consulting",
    name: "Startup Consulting",
    category: "Business Consulting",
    summary: "Practical technology and product guidance for early-stage founders.",
    description:
      "We advise early-stage founders on product, technology, and team decisions — the kind of practical guidance that helps avoid expensive early mistakes.",
    benefits: [
      "Guidance from people who have actually shipped products",
      "Help avoiding common early-stage technical mistakes",
      "Honest, independent perspective on build-vs-buy decisions",
    ],
    deliverables: [
      "Product and technology strategy session",
      "Technical roadmap guidance",
      "Ongoing advisory availability",
    ],
    technologies: ["Product Strategy", "Technical Advisory"],
  },
  {
    slug: "software-consulting",
    name: "Software Consulting",
    category: "Business Consulting",
    summary: "Independent review of software decisions before you commit.",
    description:
      "We provide independent advisory on software architecture, vendor selection, and build approach — a second opinion before a costly decision gets locked in.",
    benefits: [
      "Independent perspective, not tied to any vendor",
      "Risk flagged before contracts or development begin",
      "Practical, decision-ready recommendations",
    ],
    deliverables: [
      "Software decision review",
      "Architecture or vendor assessment",
      "Written recommendation report",
    ],
    technologies: ["Architecture Review", "Vendor Evaluation"],
  },
  {
    slug: "cloud-infrastructure-consulting",
    name: "Cloud & Infrastructure Consulting",
    category: "Business Consulting",
    summary: "Independent advisory on cloud strategy before migration or spend commitments.",
    description:
      "We advise organizations on cloud strategy and infrastructure decisions — provider selection, cost modeling, and migration risk — before commitments are made.",
    benefits: [
      "Cost modeling before, not after, a costly migration",
      "Provider-neutral recommendations",
      "Risk assessment for migration timing and approach",
    ],
    deliverables: [
      "Cloud strategy assessment",
      "Cost and provider comparison",
      "Migration risk review",
    ],
    technologies: ["AWS", "Azure", "Google Cloud"],
  },
  {
    slug: "technology-strategy",
    name: "Technology Strategy",
    category: "Business Consulting",
    summary: "Long-range technology planning aligned to business goals.",
    description:
      "We help leadership teams build a multi-year technology strategy that supports actual business goals, sequenced realistically against budget and team capacity.",
    benefits: [
      "Technology roadmap tied directly to business priorities",
      "Realistic sequencing against budget and team capacity",
      "A shared reference point for leadership decision-making",
    ],
    deliverables: [
      "Technology strategy workshop",
      "Multi-year roadmap document",
      "Quarterly review cadence",
    ],
    technologies: ["Technology Roadmapping"],
  },

  // --- Education & Career Services ---
  {
    slug: "study-abroad-guidance",
    name: "Study Abroad Guidance",
    category: "Education & Career Services",
    summary: "Practical guidance for students pursuing international education.",
    description:
      "We guide students through the practical steps of pursuing international education — from institution and program selection to application readiness.",
    benefits: [
      "Guidance grounded in practical, current application realities",
      "Help narrowing institution and program choices",
      "Support through the full application timeline",
    ],
    deliverables: [
      "Study destination and program guidance",
      "Application readiness review",
      "Ongoing support through the process",
    ],
    technologies: ["Application Guidance"],
  },
  {
    slug: "student-recommendation-letters",
    name: "Student Recommendation Letters",
    category: "Education & Career Services",
    summary: "Support preparing strong, credible recommendation letters.",
    description:
      "We help students and applicants prepare well-structured recommendation letter requests and materials that give recommenders what they need to write strong, specific letters.",
    benefits: [
      "Better, more specific letters from your recommenders",
      "A structured process instead of a last-minute scramble",
      "Guidance on who and how to ask",
    ],
    deliverables: [
      "Recommender briefing materials",
      "Letter request templates and guidance",
      "Timeline and follow-up planning",
    ],
    technologies: ["Application Support"],
  },
  {
    slug: "academic-reference-letters",
    name: "Academic Reference Letters",
    category: "Education & Career Services",
    summary: "Guidance preparing academic reference materials for applications.",
    description:
      "We support applicants in preparing the academic reference materials and context that referees need to write accurate, compelling letters for admissions or scholarship applications.",
    benefits: [
      "Referees equipped with the context they need",
      "Consistent, well-organized reference materials",
      "Reduced back-and-forth during the application process",
    ],
    deliverables: [
      "Reference material preparation",
      "Referee briefing guidance",
      "Application timeline coordination",
    ],
    technologies: ["Application Support"],
  },
  {
    slug: "training-visa-support",
    name: "Training Visa Support",
    category: "Education & Career Services",
    summary: "Practical guidance navigating visa requirements for training and study.",
    description:
      "We provide practical guidance to individuals navigating visa requirements connected to training programs, internships, or study opportunities abroad.",
    benefits: [
      "Clearer understanding of documentation requirements",
      "Reduced risk of avoidable application errors",
      "Guidance grounded in current, practical process knowledge",
    ],
    deliverables: [
      "Visa requirement guidance",
      "Documentation checklist review",
      "Application timeline support",
    ],
    technologies: ["Visa Documentation Guidance"],
  },
  {
    slug: "career-mentorship",
    name: "Career Mentorship",
    category: "Education & Career Services",
    summary: "Ongoing guidance for early-career professionals in technology.",
    description:
      "We pair early-career professionals with mentorship focused on practical career growth — skill development, career decisions, and industry navigation.",
    benefits: [
      "Guidance from people with direct industry experience",
      "Ongoing support rather than a single one-off session",
      "Practical focus on career decisions, not just encouragement",
    ],
    deliverables: [
      "Mentorship matching",
      "Regular mentorship sessions",
      "Career development planning",
    ],
    technologies: ["Mentorship Programs"],
  },
  {
    slug: "graduate-development-programs",
    name: "Graduate Development Programs",
    category: "Education & Career Services",
    summary: "Structured programs bridging graduation and career-ready capability.",
    description:
      "We design structured development programs that bridge the gap between graduation and workplace readiness, combining training, mentorship, and real project exposure.",
    benefits: [
      "Structured bridge between academic study and employment",
      "Real project exposure, not just classroom instruction",
      "Measurable readiness outcomes for participating graduates",
    ],
    deliverables: [
      "Program curriculum design",
      "Training and mentorship delivery",
      "Readiness assessment and reporting",
    ],
    technologies: ["Structured Development Programs"],
  },

  // --- Partnerships & Collaboration ---
  {
    slug: "corporate-partnerships",
    name: "Corporate Partnerships",
    category: "Partnerships & Collaboration",
    summary: "Structured collaboration with corporate organizations on shared initiatives.",
    description:
      "We build structured partnerships with corporate organizations around shared technology, training, or innovation initiatives — designed for mutual, measurable value.",
    benefits: [
      "Partnerships structured around clear, shared objectives",
      "Access to combined technical and industry expertise",
      "Clear governance for joint initiatives",
    ],
    deliverables: [
      "Partnership scoping and structuring",
      "Joint initiative planning",
      "Ongoing partnership management",
    ],
    technologies: ["Partnership Frameworks"],
  },
  {
    slug: "educational-institution-partnerships",
    name: "Educational Institution Partnerships",
    category: "Partnerships & Collaboration",
    summary: "Collaboration with schools and universities on training and technology.",
    description:
      "We partner with schools, universities, and training institutions on curriculum support, technology infrastructure, and student development programs.",
    benefits: [
      "Practical, industry-informed input into academic programs",
      "Shared resources for student technology exposure",
      "Long-term collaborative relationships, not one-off engagements",
    ],
    deliverables: [
      "Partnership structuring",
      "Curriculum or program collaboration",
      "Joint student development initiatives",
    ],
    technologies: ["Institutional Partnerships"],
  },
  {
    slug: "technology-partnerships",
    name: "Technology Partnerships",
    category: "Partnerships & Collaboration",
    summary: "Collaborative technology relationships with vendors and platforms.",
    description:
      "We build collaborative relationships with technology vendors and platforms, extending what we can deliver to clients through combined capability.",
    benefits: [
      "Extended capability through complementary partner expertise",
      "Clear scope and accountability across partner organizations",
      "Access to specialized tools and platforms",
    ],
    deliverables: [
      "Partnership scoping",
      "Joint delivery planning",
      "Ongoing relationship management",
    ],
    technologies: ["Technology Alliances"],
  },
  {
    slug: "uk-nigeria-business-partnerships",
    name: "UK & Nigeria Business Partnerships",
    category: "Partnerships & Collaboration",
    summary: "Facilitating collaboration between UK and Nigerian organizations.",
    description:
      "We facilitate business and technology collaboration between UK and Nigerian organizations, bridging practical differences in process, expectations, and market context.",
    benefits: [
      "Practical bridge across two business environments",
      "Local context on both the UK and Nigerian sides",
      "Reduced friction in cross-border collaboration",
    ],
    deliverables: [
      "Partnership facilitation",
      "Cross-border coordination support",
      "Ongoing relationship management",
    ],
    technologies: ["Cross-Border Collaboration"],
  },
  {
    slug: "ngo-partnerships",
    name: "NGO Partnerships",
    category: "Partnerships & Collaboration",
    summary: "Technology and capacity-building collaboration with NGOs.",
    description:
      "We partner with NGOs on technology systems, digital skills programs, and capacity-building initiatives that support their mission and operational needs.",
    benefits: [
      "Technology solutions scoped to NGO budgets and constraints",
      "Capacity-building that outlasts the engagement itself",
      "Partnership approach rather than a purely commercial one",
    ],
    deliverables: [
      "Partnership scoping",
      "Technology or capacity-building program design",
      "Implementation support",
    ],
    technologies: ["NGO Technology Programs"],
  },
  {
    slug: "government-partnerships",
    name: "Government Partnerships",
    category: "Partnerships & Collaboration",
    summary: "Structured collaboration with government agencies on shared initiatives.",
    description:
      "We build structured collaborative relationships with government agencies around digital initiatives, capacity building, and public sector technology programs.",
    benefits: [
      "Partnerships structured around public accountability requirements",
      "Combined technical expertise and public sector understanding",
      "Long-term relationship approach rather than a single project",
    ],
    deliverables: [
      "Partnership scoping and structuring",
      "Joint initiative planning",
      "Ongoing collaboration management",
    ],
    technologies: ["Public Sector Partnerships"],
  },
  {
    slug: "joint-venture-projects",
    name: "Joint Venture Projects",
    category: "Partnerships & Collaboration",
    summary: "Structured joint ventures combining capabilities toward a shared outcome.",
    description:
      "We structure and deliver joint venture projects with partner organizations, combining complementary capabilities toward a shared commercial or public outcome.",
    benefits: [
      "Clear governance and accountability structure from the outset",
      "Combined capabilities exceeding what either party could deliver alone",
      "Structured risk and value sharing",
    ],
    deliverables: [
      "Joint venture structuring",
      "Delivery planning and governance",
      "Ongoing project management",
    ],
    technologies: ["Joint Venture Structuring"],
  },

  // --- Government & Public Sector Services ---
  {
    slug: "government-digital-projects",
    name: "Government Digital Projects",
    category: "Government & Public Sector Services",
    summary: "Digital systems for government agencies and public institutions.",
    description:
      "We design and build digital systems for government agencies — citizen-facing portals, internal case management, and digitized public processes — built for accessibility and accountability.",
    benefits: [
      "Systems designed for a broad, non-technical citizen base",
      "Built to integrate with existing agency processes",
      "Security and auditability appropriate for public institutions",
    ],
    deliverables: [
      "Digital project scoping and design",
      "System build and integration",
      "Rollout and training support",
    ],
    technologies: ["Next.js", "PostgreSQL", "Azure"],
  },
  {
    slug: "public-sector-consulting",
    name: "Public Sector Consulting",
    category: "Government & Public Sector Services",
    summary: "Technology advisory for government and public institutions.",
    description:
      "We advise government agencies and public institutions on technology modernization, sequenced realistically against public accountability and procurement constraints.",
    benefits: [
      "Recommendations grounded in public sector realities",
      "Modernization roadmaps sequenced around continuity of service",
      "Independent, non-vendor-tied advisory",
    ],
    deliverables: [
      "Technology assessment",
      "Modernization roadmap",
      "Advisory support through implementation",
    ],
    technologies: ["Public Sector Technology Advisory"],
  },
  {
    slug: "ict-policy-advisory",
    name: "ICT Policy Advisory",
    category: "Government & Public Sector Services",
    summary: "Practical input on ICT policy grounded in implementation reality.",
    description:
      "We provide practical, implementation-aware input on ICT policy — helping policy decisions account for real technical and operational constraints.",
    benefits: [
      "Policy input grounded in real implementation experience",
      "Reduced risk of policy that's impractical to execute",
      "Independent technical perspective",
    ],
    deliverables: [
      "Policy review and input",
      "Implementation feasibility assessment",
      "Advisory reporting",
    ],
    technologies: ["Policy Advisory"],
  },
  {
    slug: "digital-literacy-programs",
    name: "Digital Literacy Programs",
    category: "Government & Public Sector Services",
    summary: "Community-scale digital literacy training programs.",
    description:
      "We design and deliver digital literacy programs at community scale, in partnership with government and public institutions, to build broad digital readiness.",
    benefits: [
      "Curriculum scaled for broad, varied digital literacy levels",
      "Delivered in partnership with local institutions",
      "Measurable participation and completion outcomes",
    ],
    deliverables: [
      "Program design and curriculum",
      "Facilitator training",
      "Delivery and outcome reporting",
    ],
    technologies: ["Community Training Programs"],
  },
  {
    slug: "community-development-projects",
    name: "Community Development Projects",
    category: "Government & Public Sector Services",
    summary: "Technology-enabled projects supporting community development goals.",
    description:
      "We deliver technology-enabled projects supporting community development goals — from digital infrastructure to program management for community initiatives.",
    benefits: [
      "Projects grounded in real community needs assessment",
      "Technology applied practically, not for its own sake",
      "Structured delivery and reporting for stakeholders",
    ],
    deliverables: [
      "Needs assessment",
      "Project design and delivery",
      "Impact reporting",
    ],
    technologies: ["Community Project Management"],
  },
  {
    slug: "youth-empowerment-programs",
    name: "Youth Empowerment Programs",
    category: "Government & Public Sector Services",
    summary: "Skills and technology programs designed for youth development.",
    description:
      "We design and deliver youth-focused skills and technology programs in partnership with government and public institutions, building pathways to real economic opportunity.",
    benefits: [
      "Curriculum focused on real, employable skills",
      "Structured pathways from training to opportunity",
      "Delivered in partnership with public institutions",
    ],
    deliverables: [
      "Program design and curriculum",
      "Training delivery",
      "Outcome tracking and reporting",
    ],
    technologies: ["Youth Skills Programs"],
  },
  {
    slug: "skills-acquisition-programs",
    name: "Skills Acquisition Programs",
    category: "Government & Public Sector Services",
    summary: "Structured skills training tied to real employment or enterprise pathways.",
    description:
      "We design structured skills acquisition programs — technical and vocational — tied to real pathways into employment or small enterprise, delivered at community or institutional scale.",
    benefits: [
      "Skills selected for real local employment and enterprise demand",
      "Structured pathway from training to income opportunity",
      "Scalable delivery for community or institutional programs",
    ],
    deliverables: [
      "Skills demand assessment",
      "Program design and delivery",
      "Pathway and outcome tracking",
    ],
    technologies: ["Vocational Training Design"],
  },

  // --- Political & Constituency Services ---
  {
    slug: "political-project-management",
    name: "Political Project Management",
    category: "Political & Constituency Services",
    summary: "Structured project management for political offices and campaigns.",
    description:
      "We provide structured project management support for political offices — coordinating initiatives, timelines, and reporting with the same discipline as any large organization.",
    benefits: [
      "Clear project structure and accountability",
      "Coordinated delivery across multiple initiatives",
      "Transparent reporting for stakeholders",
    ],
    deliverables: [
      "Project planning and coordination",
      "Timeline and milestone tracking",
      "Stakeholder reporting",
    ],
    technologies: ["Project Coordination"],
  },
  {
    slug: "constituency-empowerment-programs",
    name: "Constituency Empowerment Programs",
    category: "Political & Constituency Services",
    summary: "Structured programs delivering skills and opportunity to constituents.",
    description:
      "We design and deliver structured empowerment programs — skills training, digital literacy, and enterprise support — for constituency-level initiatives.",
    benefits: [
      "Programs designed around real constituent needs",
      "Structured, trackable delivery and outcomes",
      "Practical skills with real economic relevance",
    ],
    deliverables: [
      "Program design",
      "Delivery and facilitation",
      "Outcome tracking and reporting",
    ],
    technologies: ["Empowerment Program Design"],
  },
  {
    slug: "youth-empowerment-initiatives",
    name: "Youth Empowerment Initiatives",
    category: "Political & Constituency Services",
    summary: "Constituency-level youth programs focused on skills and opportunity.",
    description:
      "We design youth-focused empowerment initiatives at the constituency level — combining digital skills, mentorship, and pathways to opportunity.",
    benefits: [
      "Programs tailored to constituency-level youth needs",
      "Combination of training, mentorship, and real opportunity pathways",
      "Structured reporting for constituency stakeholders",
    ],
    deliverables: [
      "Initiative design",
      "Training and mentorship delivery",
      "Impact reporting",
    ],
    technologies: ["Youth Program Design"],
  },
  {
    slug: "digital-campaign-solutions",
    name: "Digital Campaign Solutions",
    category: "Political & Constituency Services",
    summary: "Digital tools and platforms supporting outreach and communication.",
    description:
      "We build digital tools and platforms supporting outreach, communication, and constituent engagement — websites, messaging systems, and information platforms.",
    benefits: [
      "Reliable, well-built digital infrastructure",
      "Clear, accessible communication with constituents",
      "Secure handling of any collected constituent information",
    ],
    deliverables: [
      "Digital platform build",
      "Communication tooling setup",
      "Ongoing technical support",
    ],
    technologies: ["Next.js", "Messaging Platforms"],
  },
  {
    slug: "ict-training-for-constituents",
    name: "ICT Training for Constituents",
    category: "Political & Constituency Services",
    summary: "Digital skills training delivered to constituents at community scale.",
    description:
      "We deliver ICT and digital skills training programs directly to constituents, building practical digital capability at the community level.",
    benefits: [
      "Practical, accessible curriculum for varying skill levels",
      "Delivered directly at the community level",
      "Structured completion tracking and reporting",
    ],
    deliverables: [
      "Training curriculum design",
      "Community-level delivery",
      "Completion and outcome reporting",
    ],
    technologies: ["Community ICT Training"],
  },

  // --- Event & Program Management ---
  {
    slug: "event-program-management",
    name: "Event & Program Management",
    category: "Event & Program Management",
    summary: "End-to-end planning and execution of conferences, launches, and programs.",
    description:
      "We plan and manage corporate and institutional events and programs — conferences, product launches, training programs, and multi-session initiatives — from logistics through execution.",
    benefits: [
      "Single point of accountability from planning through execution",
      "Logistics handled so your team can focus on content and guests",
      "Structured reporting after every event or program phase",
    ],
    deliverables: [
      "Event or program planning",
      "Logistics and vendor coordination",
      "On-the-day execution and post-event reporting",
    ],
    technologies: ["Event Logistics", "Program Coordination"],
  },

  // --- Recruitment & Talent Services ---
  {
    slug: "talent-sourcing",
    name: "Talent Sourcing",
    category: "Recruitment & Talent Services",
    summary: "Finding qualified candidates matched to your specific role requirements.",
    description:
      "We source qualified candidates for technical and non-technical roles, screening for genuine fit against your specific requirements rather than generic keyword matching.",
    benefits: [
      "Candidates screened for genuine role fit",
      "Faster shortlisting through focused sourcing",
      "Access to a wider talent network than most in-house teams",
    ],
    deliverables: [
      "Role requirement scoping",
      "Candidate sourcing and screening",
      "Shortlist delivery",
    ],
    technologies: ["Talent Sourcing"],
  },
  {
    slug: "graduate-recruitment",
    name: "Graduate Recruitment",
    category: "Recruitment & Talent Services",
    summary: "Sourcing and screening early-career graduate talent.",
    description:
      "We help organizations source and screen graduate talent, evaluating potential and foundational skill rather than requiring years of experience they won't yet have.",
    benefits: [
      "Access to a structured pipeline of graduate candidates",
      "Screening built around potential, not just prior experience",
      "Reduced recruitment burden on your internal team",
    ],
    deliverables: [
      "Graduate role scoping",
      "Sourcing and screening",
      "Shortlist and onboarding support",
    ],
    technologies: ["Graduate Recruitment"],
  },
  {
    slug: "internship-placement",
    name: "Internship Placement",
    category: "Recruitment & Talent Services",
    summary: "Matching students and early-career candidates with internship opportunities.",
    description:
      "We match students and early-career candidates with internship opportunities at partner organizations, and match host organizations with prepared, motivated candidates.",
    benefits: [
      "Candidates pre-screened for readiness and motivation",
      "Structured placement process for host organizations",
      "Support throughout the internship period",
    ],
    deliverables: [
      "Candidate and host matching",
      "Placement coordination",
      "Check-ins through the internship period",
    ],
    technologies: ["Placement Coordination"],
  },
  {
    slug: "staff-training-development",
    name: "Staff Training & Development",
    category: "Recruitment & Talent Services",
    summary: "Ongoing development programs for newly placed and existing staff.",
    description:
      "We provide ongoing training and development support for placed staff and existing teams, helping new hires ramp up faster and existing staff grow into new responsibilities.",
    benefits: [
      "Faster ramp-up time for newly placed staff",
      "Structured growth paths for existing team members",
      "Reduced early-tenure turnover through better onboarding",
    ],
    deliverables: [
      "Onboarding and development program design",
      "Training delivery",
      "Progress tracking",
    ],
    technologies: ["Onboarding Programs"],
  },
  {
    slug: "technical-recruitment",
    name: "Technical Recruitment",
    category: "Recruitment & Talent Services",
    summary: "Specialized recruitment for software, data, and IT roles.",
    description:
      "We recruit for technical roles — software engineering, data, IT, and infrastructure — with screening informed by real hands-on technical experience, not just keyword matching.",
    benefits: [
      "Technical screening grounded in real engineering experience",
      "Faster identification of genuinely qualified candidates",
      "Reduced mis-hire risk on technical roles",
    ],
    deliverables: [
      "Technical role scoping",
      "Sourcing and technical screening",
      "Shortlist delivery",
    ],
    technologies: ["Technical Screening"],
  },
  {
    slug: "employer-employee-matching",
    name: "Employer-Employee Matching",
    category: "Recruitment & Talent Services",
    summary: "Structured matching between employers and candidates for long-term fit.",
    description:
      "We go beyond skills matching to assess working style and expectations fit between employers and candidates, aiming for placements that last.",
    benefits: [
      "Matching that accounts for working style, not just skills",
      "Reduced early turnover from poor-fit placements",
      "Structured feedback loop for both sides",
    ],
    deliverables: [
      "Employer needs and culture assessment",
      "Candidate fit evaluation",
      "Matching and placement support",
    ],
    technologies: ["Fit Assessment"],
  },

  // --- Security & Awareness (Cybersecurity) ---
  {
    slug: "cybersecurity-awareness-training",
    name: "Cybersecurity Awareness Training",
    category: "Cybersecurity",
    summary: "Practical security training for non-technical staff.",
    description:
      "We train non-technical staff on the everyday security habits that actually reduce risk — recognizing threats, safe practices, and what to do when something looks wrong.",
    benefits: [
      "Reduced human-error security incidents",
      "Practical habits, not overwhelming technical jargon",
      "Training scaled for teams of any size",
    ],
    deliverables: [
      "Awareness training curriculum",
      "Staff training sessions",
      "Follow-up reinforcement materials",
    ],
    technologies: ["Security Awareness Training"],
  },
  {
    slug: "information-security-best-practices",
    name: "Information Security Best Practices",
    category: "Cybersecurity",
    summary: "Practical information security guidance tailored to your organization.",
    description:
      "We help organizations establish practical information security practices — access control, data handling, and device policy — sized appropriately to their actual risk level.",
    benefits: [
      "Practices sized to your actual risk, not generic overkill",
      "Clear, actionable policy your team can actually follow",
      "Reduced exposure from common, avoidable mistakes",
    ],
    deliverables: [
      "Information security review",
      "Best-practice policy recommendations",
      "Staff guidance materials",
    ],
    technologies: ["Information Security Policy"],
  },
  {
    slug: "data-protection-awareness",
    name: "Data Protection Awareness",
    category: "Cybersecurity",
    summary: "Training and guidance on responsible handling of personal data.",
    description:
      "We train teams on responsible data handling practices — what counts as sensitive data, how to handle it safely, and how to avoid common data protection missteps.",
    benefits: [
      "Reduced risk of avoidable data protection incidents",
      "Practical guidance mapped to your actual data handling",
      "Improved staff confidence handling sensitive information",
    ],
    deliverables: [
      "Data handling assessment",
      "Awareness training sessions",
      "Practical guidance materials",
    ],
    technologies: ["Data Protection Training"],
  },
  {
    slug: "digital-privacy-consulting",
    name: "Digital Privacy Consulting",
    category: "Cybersecurity",
    summary: "Advisory on privacy practices for products and organizations.",
    description:
      "We advise organizations and product teams on privacy-conscious data practices — what to collect, how to store it, and how to communicate it clearly to users.",
    benefits: [
      "Reduced privacy risk in product and data decisions",
      "Clearer, more trustworthy user-facing privacy practices",
      "Practical guidance, not just legal boilerplate",
    ],
    deliverables: [
      "Privacy practice review",
      "Recommendations and policy input",
      "Ongoing advisory support",
    ],
    technologies: ["Privacy Advisory"],
  },
  {
    slug: "security-risk-assessment",
    name: "Security Risk Assessment",
    category: "Cybersecurity",
    summary: "Structured assessment of your organization's actual security exposure.",
    description:
      "We conduct structured security risk assessments across your systems and processes, prioritizing findings by real business impact rather than an overwhelming generic checklist.",
    benefits: [
      "Findings prioritized by actual business risk",
      "Clear picture of your real exposure, not just theoretical gaps",
      "Practical remediation guidance your team can execute",
    ],
    deliverables: [
      "Risk assessment across systems and processes",
      "Prioritized findings report",
      "Remediation roadmap",
    ],
    technologies: ["Risk Assessment Frameworks"],
  },

  // --- Research & Development ---
  {
    slug: "software-research",
    name: "Software Research",
    category: "Research & Development",
    summary: "Applied research into new software approaches and technical feasibility.",
    description:
      "We conduct applied software research — evaluating new technical approaches, frameworks, or architectures — before committing to a full build.",
    benefits: [
      "De-risked technical decisions before major investment",
      "Evidence-based recommendations, not guesswork",
      "Findings documented for future reference",
    ],
    deliverables: [
      "Research scoping",
      "Technical evaluation and prototyping",
      "Findings report",
    ],
    technologies: ["Technical Research", "Prototyping"],
  },
  {
    slug: "ai-research-development",
    name: "AI Research & Development",
    category: "Research & Development",
    summary: "Applied exploration of AI approaches for specific business problems.",
    description:
      "We research and prototype AI approaches for specific business problems, testing feasibility and accuracy before committing to a full production build.",
    benefits: [
      "Feasibility tested before full-scale investment",
      "Grounded in what current AI models can reliably do",
      "Clear findings on cost, accuracy, and viability",
    ],
    deliverables: [
      "Problem and feasibility scoping",
      "Prototype and evaluation",
      "Findings and recommendation report",
    ],
    technologies: ["OpenAI", "Anthropic Claude", "Python"],
  },
  {
    slug: "product-development-research",
    name: "Product Development",
    category: "Research & Development",
    summary: "Research-driven product development from concept through prototype.",
    description:
      "We take product concepts from early research through validated prototypes, testing assumptions before committing to a full build.",
    benefits: [
      "Assumptions tested before expensive build cycles",
      "Faster path from concept to validated direction",
      "Research findings that inform real product decisions",
    ],
    deliverables: [
      "Concept research and validation",
      "Prototype development",
      "Findings and next-step recommendations",
    ],
    technologies: ["Rapid Prototyping"],
  },
  {
    slug: "market-research",
    name: "Market Research",
    category: "Research & Development",
    summary: "Practical market research to inform product and business decisions.",
    description:
      "We conduct practical market research — competitive analysis, user research, and market sizing — to inform product and business decisions with real evidence.",
    benefits: [
      "Decisions grounded in real market evidence",
      "Reduced risk of building for a misunderstood market",
      "Findings presented in clear, decision-ready format",
    ],
    deliverables: [
      "Market and competitive research",
      "User or customer research",
      "Findings report",
    ],
    technologies: ["Market Analysis"],
  },
  {
    slug: "feasibility-studies",
    name: "Feasibility Studies",
    category: "Research & Development",
    summary: "Structured assessment of whether a proposed project is viable.",
    description:
      "We conduct structured feasibility studies for proposed projects — technical, financial, and operational — before significant resources are committed.",
    benefits: [
      "Clear go/no-go evidence before major commitment",
      "Risk identified early, when it's still cheap to address",
      "Decision-ready reporting for stakeholders",
    ],
    deliverables: [
      "Feasibility assessment across key dimensions",
      "Risk and viability analysis",
      "Findings report",
    ],
    technologies: ["Feasibility Analysis"],
  },
  {
    slug: "innovation-consulting",
    name: "Innovation Consulting",
    category: "Research & Development",
    summary: "Structured support for organizations building new products or capabilities.",
    description:
      "We support organizations exploring new products, services, or internal capabilities — bringing structured methodology to what's often an unstructured process.",
    benefits: [
      "Structured methodology applied to early-stage exploration",
      "Reduced risk of chasing ideas without real validation",
      "Practical next steps, not just workshop energy",
    ],
    deliverables: [
      "Innovation workshop facilitation",
      "Idea validation support",
      "Prioritized next-steps roadmap",
    ],
    technologies: ["Innovation Frameworks"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((service) => service.category === category);
}
