export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  /** Featured with larger treatment at the top of the team section. */
  founder?: boolean;
}

// TODO(client): swap `photo` for real headshots as soon as they're
// available — these are stable placeholder portraits (not photos of real
// people, sourced from a demo-avatar API), not actual photos of the team.
export const team: TeamMember[] = [
  { name: "Muideen Akinroye", role: "Founder", founder: true, photo: "/ceo.jpg" },
  { name: "Oluwatob Olanipekun", role: "Co-Founder", founder: true, photo: "/tobi.jpg" },
  { name: "Akinroye Tofunmi", role: "Ambassador", photo: "/jesutofunmi.jpg" },
  { name: "Mark Oladele", role: "Project Manager", photo: "/male.jpg" },
  { name: "Samuel Abass", role: "Frontend Developer", photo: "/male.jpg" },
  { name: "Adetundun Maryam", role: "Graphic Designer", photo: "/female.jpg" },
  { name: "James Goslin", role: "Backend Developer", photo: "/male.jpg" },
  { name: "Okunade Charles", role: "Data Analyst", photo: "/male.jpg" },
  { name: "Azeezat Fawaz", role: "Frontend Developer", photo: "/male.jpg" },
  { name: "Samson Ezekiel", role: "DevOps Engineer", photo: "/male.jpg" },
  { name: "Muhammad Mojeed", role: "Data Tester", photo: "/male.jpg" },
  { name: "Muyideen Olawumi", role: "Software Developer", photo: "/mui.jpg" },
  { name: "Esther Olatunji", role: "SEO Expert", photo: "/female.jpg" },
  { name: "Peter Tope", role: "Java Developer", photo: "/male.jpg" },
];
