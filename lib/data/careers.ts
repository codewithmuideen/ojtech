export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
}

// TODO(client): populate with real, currently-open positions. Left empty
// rather than fabricated — the Careers page renders an "always open to
// great talent" state until real openings are supplied.
export const jobOpenings: JobOpening[] = [];

export const cultureValues = [
  {
    title: "Ownership",
    description: "We hire people who take real responsibility for outcomes, not just tasks.",
  },
  {
    title: "Craft",
    description: "We care about doing the work well, not just doing it fast.",
  },
  {
    title: "Directness",
    description: "We give and expect honest, constructive feedback — early and often.",
  },
  {
    title: "Growth",
    description: "We invest in people learning new skills, not just filling current gaps.",
  },
];
