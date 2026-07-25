export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Training", href: "/training" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Software Development", href: "/services/software-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "UI/UX Design", href: "/services/ui-ux-design" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Insights", href: "/insights" },
      { label: "Industries", href: "/industries" },
      { label: "Solutions", href: "/solutions" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Request a Quote", href: "/request-a-quote" },
      { label: "Book a Consultation", href: "/book-consultation" },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];
