export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

// TODO(client): populate with verified client testimonials/permission to
// publish. Left empty rather than fabricated — the Testimonials section
// renders a "coming soon" state until real quotes are supplied.
export const testimonials: Testimonial[] = [];
