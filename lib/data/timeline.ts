export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

// TODO(client): add verified milestones (year + description) beyond the
// founding year — intentionally left for the client to supply rather than
// invented.
export const companyTimeline: TimelineEntry[] = [
  {
    year: "2011",
    title: "Olamitobi Technologies established",
    description:
      "The company is founded, beginning over a decade of building software and technology solutions for businesses and organizations.",
  },
];
