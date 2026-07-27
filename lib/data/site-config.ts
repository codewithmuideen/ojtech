export const siteConfig = {
  name: "Olamitobi Technologies",
  shortName: "Olamitobi",
  foundedYear: 2011,
  tagline: "Building Innovative Digital Solutions Since 2011",
  description:
    "Olamitobi Technologies partners with businesses, startups, enterprises, institutions, and organizations to build reliable software, digital products, training programs, consulting, and technology solutions that solve real-world problems.",
  brandStatement: "Olamitobi Technologies — Building the Future Through Technology.",
  url: "https://www.olamitobitechnologies.com.ng",
  // Primary/general-purpose contact address, used wherever a single email is shown.
  email: "contact@olamitobitechnologies.com.ng",
  // Purpose-specific addresses, available for pages/flows that need a specific inbox.
  emails: {
    info: "info@olamitobitechnologies.com.ng",
    contact: "contact@olamitobitechnologies.com.ng",
    hr: "hr@olamitobitechnologies.com.ng",
    enquiries: "enquiries@olamitobitechnologies.com.ng",
  },
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
    linkedin: "https://www.linkedin.com/company/olamitobitechnologies",
    twitter: "https://twitter.com/olamitobitech",
    instagram: "https://www.instagram.com/olamitobitech",
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
