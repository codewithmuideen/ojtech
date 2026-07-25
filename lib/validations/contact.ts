import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name.").max(120),
  email: z.email("Please enter a valid email address."),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(160).optional().or(z.literal("")),
  service: z.string().max(160).optional().or(z.literal("")),
  budget: z.string().max(80).optional().or(z.literal("")),
  timeline: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(10, "Tell us a bit more — at least 10 characters.").max(4000),
  // Honeypot field — must stay empty. Bots that fill every input trip this.
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
