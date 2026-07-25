import { z } from "zod";

export const consultationSchema = z.object({
  name: z.string().min(2, "Please enter your full name.").max(120),
  email: z.email("Please enter a valid email address."),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(160).optional().or(z.literal("")),
  topic: z.string().min(2, "Let us know what you'd like to discuss.").max(200),
  preferredDate: z.string().min(1, "Please choose a preferred date."),
  preferredTime: z.string().min(1, "Please choose a preferred time."),
  notes: z.string().max(2000).optional().or(z.literal("")),
  company_website: z.string().max(0).optional().or(z.literal("")),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;
