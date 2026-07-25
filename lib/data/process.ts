export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your business, users, and constraints — through stakeholder interviews, data review, and technical audits.",
  },
  {
    step: "02",
    title: "Define",
    description:
      "We turn discovery into a clear scope: problem statement, success metrics, and a roadmap both teams agree on before any building starts.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We design the experience and the architecture together, validating direction with prototypes before committing to a full build.",
  },
  {
    step: "04",
    title: "Develop",
    description:
      "Our engineers build in focused iterations, with regular check-ins so you see progress continuously rather than at the very end.",
  },
  {
    step: "05",
    title: "Test",
    description:
      "Every build goes through functional, performance, security, and usability testing before it's considered ready to ship.",
  },
  {
    step: "06",
    title: "Deploy",
    description:
      "We handle release planning and deployment with rollback safeguards, so launches are controlled events, not stressful ones.",
  },
  {
    step: "07",
    title: "Scale",
    description:
      "As usage grows, we revisit architecture and infrastructure to make sure performance holds up under real-world load.",
  },
  {
    step: "08",
    title: "Support",
    description:
      "We stay engaged post-launch — monitoring, fixing, and evolving the system as your business and users' needs change.",
  },
];
