export interface TrainingCourse {
  slug: string;
  title: string;
  category: string;
  description: string;
  durationWeeks: number;
}

export const trainingCourses: TrainingCourse[] = [
  {
    slug: "frontend-development",
    title: "Frontend Development",
    category: "Web Development",
    description: "Modern HTML, CSS, JavaScript, and React fundamentals for building real interfaces.",
    durationWeeks: 8,
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    category: "Web Development",
    description: "Server-side development with Node.js, databases, and API design.",
    durationWeeks: 8,
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Development",
    category: "Web Development",
    description: "End-to-end web development combining frontend, backend, and deployment.",
    durationWeeks: 12,
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    category: "Mobile Development",
    description: "Building cross-platform mobile apps with React Native.",
    durationWeeks: 10,
  },
  {
    slug: "cloud-computing",
    title: "Cloud Computing Fundamentals",
    category: "Cloud",
    description: "Core concepts of cloud infrastructure, deployment, and DevOps practices.",
    durationWeeks: 6,
  },
  {
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    description: "Practical security fundamentals for applications and infrastructure.",
    durationWeeks: 8,
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    category: "Data",
    description: "Working with data — from cleaning and analysis to practical reporting.",
    durationWeeks: 8,
  },
  {
    slug: "ai-and-automation",
    title: "AI & Automation",
    category: "AI",
    description: "Practical application of AI tools and automation for real business problems.",
    durationWeeks: 6,
  },
  {
    slug: "corporate-technology-training",
    title: "Corporate Technology Training",
    category: "Corporate",
    description: "Customized technology training programs delivered directly to your team.",
    durationWeeks: 4,
  },
];
