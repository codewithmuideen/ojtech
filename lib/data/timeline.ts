export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

// TODO(client): add verified intermediate milestones (year + description).
// Only the founding year and the rebrand are stated facts from the brief —
// intermediate history is intentionally left for the client to supply rather
// than invented.
export const companyTimeline: TimelineEntry[] = [
  {
    year: "2011",
    title: "Olamitobi Technologies established",
    description:
      "The company is founded, beginning over a decade of building software and technology solutions for businesses and organizations.",
  },
  {
    year: "Today",
    title: "A new era: OJTech",
    description:
      "Olamitobi Technologies evolves into OJTech (OJ Technologies) — a modern brand reflecting a renewed vision for innovation, excellence, and global impact.",
  },
];
