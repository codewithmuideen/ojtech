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
  { name: "Muideen Akinroye", role: "Founder", founder: true, photo: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Oluwatob Olanipekun", role: "CO-Founder", founder: true, photo: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Akinroye Tofunmi", role: "Director", photo: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Mark Oladele", role: "Software Developer", photo: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Samuel Abass", role: "Frontend Developer", photo: "https://randomuser.me/api/portraits/men/78.jpg" },
  { name: "Adetundun Maryam", role: "Graphic Designer", photo: "https://randomuser.me/api/portraits/women/21.jpg" },
  { name: "James Goslin", role: "Backend Developer", photo: "https://randomuser.me/api/portraits/men/56.jpg" },
  { name: "Okunade Charles", role: "Data Analyst", photo: "https://randomuser.me/api/portraits/men/89.jpg" },
  { name: "Azeezat Fawaz", role: "Frontend Developer", photo: "https://randomuser.me/api/portraits/women/8.jpg" },
  { name: "Samson Ezekiel", role: "DevOps Engineer", photo: "https://randomuser.me/api/portraits/men/23.jpg" },
  { name: "Fatai Saheed", role: "Data Tester", photo: "https://randomuser.me/api/portraits/men/67.jpg" },
  { name: "Micheal David", role: "Backend Engineer", photo: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Akeem Rahmon", role: "SEO Expert", photo: "https://randomuser.me/api/portraits/men/91.jpg" },
  { name: "Peter Tope", role: "Java Developer", photo: "https://randomuser.me/api/portraits/men/15.jpg" },
];
