export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  /** Featured with larger treatment at the top of the team section. */
  founder?: boolean;
}

// No photos are set intentionally — until real headshots are supplied, the
// UI renders an icon-based avatar rather than a stock photo of someone who
// doesn't actually work here.
export const team: TeamMember[] = [
  { name: "Muideen Akinroye", role: "Founder", founder: true },
  { name: "Oluwatob Olanipekun", role: "CO-Founder", founder: true },
  { name: "Akinroye Tofunmi", role: "Director" },
  { name: "Mark Oladele", role: "Software Developer" },
  { name: "Samuel Abass", role: "Frontend Developer" },
  { name: "Adetundun Maryam", role: "Graphic Designer" },
  { name: "James Goslin", role: "Backend Developer" },
  { name: "Okunade Charles", role: "Data Analyst" },
  { name: "Azeezat Fawaz", role: "Frontend Developer" },
  { name: "Samson Ezekiel", role: "DevOps Engineer" },
  { name: "Fatai Saheed", role: "Data Tester" },
  { name: "Micheal David", role: "Backend Engineer" },
  { name: "Akeem Rahmon", role: "SEO Expert" },
  { name: "Peter Tope", role: "Java Developer" },
];
