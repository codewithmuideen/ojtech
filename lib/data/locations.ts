export interface LocationPage {
  slug: "osogbo" | "ibadan";
  city: string;
  state: string;
  headline: string;
  intro: string;
  towns: string[];
  faqs: { question: string; answer: string }[];
}

export const locationPages: LocationPage[] = [
  {
    slug: "osogbo",
    city: "Osogbo",
    state: "Osun State",
    headline: "Software, IT & Tech Training Company in Osogbo, Osun State",
    intro:
      "Olamitobi Technologies is a technology company in Osogbo, the capital of Osun State, located at Plot 3, Opposite Government House Annex, Okefia. We build custom software, websites, mobile apps and cloud systems for businesses, schools, hospitals and government agencies, and we run one of Osun State's most complete tech training academies.",
    towns: ["Osogbo", "Ilesa", "Ile-Ife", "Ede", "Ikirun", "Iwo", "Ila-Orangun", "Ikire", "Ejigbo", "Iree"],
    faqs: [
      {
        question: "What is the best tech company in Osogbo?",
        answer:
          "Olamitobi Technologies has delivered software and digital solutions since 2011, with an office at Plot 3, Opposite Government House Annex, Okefia, Osogbo. We offer software development, website design, mobile apps, IT consulting, cybersecurity and tech training under one roof.",
      },
      {
        question: "Where can I learn coding or tech skills in Osogbo?",
        answer:
          "Olamitobi Training Academy in Okefia, Osogbo offers physical, online and weekend classes in web development, Python, data analysis, UI/UX design, cybersecurity, cloud computing, AI and more.",
      },
      {
        question: "Do you build websites for businesses in Osun State?",
        answer:
          "Yes. We design and develop fast, mobile-friendly, search-optimized websites, online stores and web applications for businesses, schools, churches, mosques, NGOs and government agencies across Osun State.",
      },
      {
        question: "Do you work with Osun State government agencies and schools?",
        answer:
          "Yes. We build portals, management systems and digital services for public institutions and schools, and deliver staff technology training on-site.",
      },
    ],
  },
  {
    slug: "ibadan",
    city: "Ibadan",
    state: "Oyo State",
    headline: "Software, IT & Tech Training Company in Ibadan, Oyo State",
    intro:
      "Olamitobi Technologies is a technology company in Ibadan, Oyo State, located at 7 Makinde Street, Orogun. We help businesses, startups and institutions across Ibadan and Oyo State build software, websites and mobile apps, move to the cloud, secure their systems and train their people.",
    towns: ["Ibadan", "Ogbomoso", "Oyo", "Iseyin", "Saki", "Igboho", "Eruwa", "Igbo-Ora", "Lanlate", "Kishi"],
    faqs: [
      {
        question: "What is a good software development company in Ibadan?",
        answer:
          "Olamitobi Technologies, at 7 Makinde Street, Orogun, Ibadan, has built software, websites and mobile apps since 2011 for startups, SMEs, schools and enterprises.",
      },
      {
        question: "Where can I learn tech in Ibadan?",
        answer:
          "Olamitobi Training Academy in Orogun, Ibadan offers practical courses in frontend and full-stack development, data analysis, cybersecurity, cloud computing, UI/UX design, mobile development and AI, with physical, online and weekend options.",
      },
      {
        question: "Do you offer website design in Ibadan?",
        answer:
          "Yes. We design and build professional websites, e-commerce stores and web applications for businesses across Ibadan and Oyo State, optimized for Google search and mobile.",
      },
      {
        question: "Can you train our staff in Ibadan?",
        answer:
          "Yes. We deliver customized corporate technology training, on-site at your premises or at our Orogun training centre.",
      },
    ],
  },
];

export function getLocationPage(slug: string): LocationPage | undefined {
  return locationPages.find((l) => l.slug === slug);
}
