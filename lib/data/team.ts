export interface TeamMemberSocial {
  linkedin?: string;
  x?: string;
  facebook?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  /** Featured with larger treatment at the top of the team section. */
  founder?: boolean;
  /** Personal profile links, shown on hover. Omit any platform not provided. */
  social?: TeamMemberSocial;
}

// TODO(client): swap `photo` for real headshots as soon as they're
// available — these are stable placeholder portraits (not photos of real
// people, sourced from a demo-avatar API), not actual photos of the team.
export const team: TeamMember[] = [
  { name: "Muideen Akinroye", role: "Founder", founder: true, photo: "/ceo.jpg" },
  { name: "Oluwatobi Abosede", role: "Co-Founder", founder: true, photo: "/tobi.jpg" },
  { name: "Muyideen Olawumi", role: "Co-Founder", founder: true, photo: "/mui.jpg" },
  { name: "Eliana Tofunmi", role: "Ambassador", photo: "/jesutofunmi.jpg" },
  { name: "Mark Oladele", role: "Project Manager", photo: "/malea.jpg" },
  { name: "Sharafana Eich", role: "Mobile Developer", photo: "/malee.jpg" },
  { name: "Bamigboye Rose", role: "Frontend Developer", photo: "/rose.jpg" },
  { name: "James Goslin", role: "Backend Developer", photo: "/maleb.jpg" },
  { name: "Okunade Charles", role: "AI/ML Engineer", photo: "/charles.jpg" },
  { name: "Akinpelu Peter", role: "Data Analyst", photo: "/akin.jpg" },
  { name: "Samson Ezekiel", role: "DevOps Engineer", photo: "/maled.jpg" },
  { name: "Francisca Omotosho", role: "Incident Responder", photo: "/femaleb.jpg" },
  { name: "Oyedeji Fatai", role: "Software Developer", photo: "/fatai.jpg" },
  { name: "Semiu Oyetunji", role: "Penetration Tester", photo: "/semiu.jpg" },
  { name: "Rahmon Mujeedat", role: "QA Officer", photo: "/femalea.jpg" },
];
