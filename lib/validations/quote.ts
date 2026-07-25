import { z } from "zod";

export const quoteSchema = z.object({
  // Step 1 — About You
  fullName: z.string().min(2, "Please enter your full name.").max(120),
  role: z.string().max(120).optional().or(z.literal("")),

  // Step 2 — Business
  company: z.string().min(2, "Please enter your company or organization name.").max(160),
  industry: z.string().max(120).optional().or(z.literal("")),
  website: z.string().max(200).optional().or(z.literal("")),

  // Step 3 — Project Type
  projectType: z.string().min(1, "Please select a project type."),

  // Step 4 — Requirements
  requirements: z.string().min(20, "Please describe your requirements in a bit more detail.").max(4000),

  // Step 5 — Budget
  budget: z.string().min(1, "Please select a budget range."),

  // Step 6 — Timeline
  timeline: z.string().min(1, "Please select a preferred timeline."),

  // Step 7 — Contact Details
  email: z.email("Please enter a valid email address."),
  phone: z.string().max(30).optional().or(z.literal("")),

  // Honeypot
  company_website_confirm: z.string().max(0).optional().or(z.literal("")),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const quoteSteps = [
  { id: "about-you", title: "About You", fields: ["fullName", "role"] as const },
  { id: "business", title: "Business", fields: ["company", "industry", "website"] as const },
  { id: "project-type", title: "Project Type", fields: ["projectType"] as const },
  { id: "requirements", title: "Requirements", fields: ["requirements"] as const },
  { id: "budget", title: "Budget", fields: ["budget"] as const },
  { id: "timeline", title: "Timeline", fields: ["timeline"] as const },
  { id: "contact", title: "Contact Details", fields: ["email", "phone"] as const },
  { id: "review", title: "Review", fields: [] as const },
] as const;

export const projectTypeOptions = [
  "Custom Software Development",
  "Web Application",
  "Mobile App",
  "SaaS Product",
  "Enterprise System",
  "Digital Transformation",
  "AI / Automation",
  "Other",
];

export const budgetOptions = [
  "Under ₦2,000,000",
  "₦2,000,000 – ₦10,000,000",
  "₦10,000,000 – ₦30,000,000",
  "₦30,000,000+",
  "Not sure yet",
];

export const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible / exploring options",
];
