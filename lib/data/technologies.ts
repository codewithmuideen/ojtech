export interface TechGroup {
  category: string;
  items: string[];
}

export const technologyStack: TechGroup[] = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Vue", "Angular"] },
  { category: "Backend", items: ["Node.js", "Python", "PHP", "Java", ".NET"] },
  { category: "Mobile", items: ["React Native", "Flutter"] },
  { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
  { category: "Cloud", items: ["Vercel", "AWS", "Azure", "Google Cloud"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "CI/CD"] },
  { category: "AI", items: ["OpenAI", "Anthropic", "Machine Learning", "Automation Platforms"] },
];

export const technologyMarquee: string[] = technologyStack.flatMap((g) => g.items);
