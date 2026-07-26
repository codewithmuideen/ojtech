export const siteConfig = {
  name: "OJTech",
  legalName: "OJ Technologies",
  formerName: "Olamitobi Technologies",
  shortName: "OJTech",
  foundedYear: 2011,
  tagline: "Building Innovative Digital Solutions Since 2011",
  description:
    "OJTech partners with businesses, startups, enterprises, institutions, and organizations to build reliable software, digital products, training programs, consulting, and technology solutions that solve real-world problems.",
  brandStatement: "OJTech — Building the Future Through Technology.",
  // TODO(client): replace with verified production values before launch.
  url: "https://www.ojtech.com",
  email: "hello@ojtech.com",
  phones: ["0813 432 4983", "0806 336 2208"],
  serviceAreas: [
    "Nigeria",
    "Lagos",
    "Abuja",
    "Osun",
    "Ibadan",
    "Port Harcourt",
    "Enugu",
    "Kano",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/ojtech",
    twitter: "https://twitter.com/ojtech",
    instagram: "https://www.instagram.com/ojtech",
  },
} as const;

export function yearsOfExperience(): number {
  return new Date().getFullYear() - siteConfig.foundedYear;
}

// TODO(client): replace with verified, up-to-date figures. Centralized here
// so a single edit updates every stat displayed across the site.
export const companyStats = [
  { value: `${yearsOfExperience()}+`, label: "Years of Experience" },
  { value: "100+", label: "Digital Projects Delivered" },
  { value: "40+", label: "Businesses Supported" },
  { value: "12+", label: "Industries Served" },
] as const;
