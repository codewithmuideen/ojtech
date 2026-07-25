export interface Faq {
  question: string;
  answer: string;
}

export const generalFaqs: Faq[] = [
  {
    question: "What kinds of businesses does OJTech work with?",
    answer:
      "We work with startups, SMEs, enterprises, and government institutions across Nigeria and internationally — anywhere a business needs reliable software, digital products, or technology infrastructure.",
  },
  {
    question: "How does a typical project start?",
    answer:
      "Most engagements start with a short discovery conversation, followed by a scoped proposal covering timeline, deliverables, and cost. You can start that conversation through our Request a Quote or Book a Consultation pages.",
  },
  {
    question: "Do you work with businesses outside Nigeria?",
    answer:
      "Yes. While we're rooted in the Nigerian technology ecosystem, we work with clients internationally and structure engagements around remote collaboration.",
  },
  {
    question: "Can you take over or extend an existing system?",
    answer:
      "Yes — we regularly work with existing codebases and legacy systems, whether that means extending functionality, modernizing architecture, or integrating new tools.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Pricing depends on project scope, complexity, and timeline. We provide detailed quotes after an initial discovery conversation rather than generic flat-rate pricing.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support and maintenance plans, including monitoring, bug fixes, and continued feature development.",
  },
];
