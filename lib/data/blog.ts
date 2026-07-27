export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
}

export const blogCategories = [
  "Technology",
  "Software Development",
  "AI",
  "Cybersecurity",
  "Cloud",
  "Digital Transformation",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-business-needs-custom-software",
    title: "5 Signs Your Business Has Outgrown Off-the-Shelf Software",
    category: "Software Development",
    excerpt:
      "Generic software works well until it doesn't. Here's how to tell when your business has reached the point where custom software pays for itself.",
    content: [
      "Most businesses start with off-the-shelf tools — spreadsheets, generic CRMs, and template websites. That's the right call early on: it's fast, cheap, and good enough to prove an idea works.",
      "The problem shows up later, when the workarounds start piling up. If your team is exporting data between three different tools to produce one report, or maintaining a spreadsheet that has quietly become mission-critical, that's a signal worth paying attention to.",
      "A second sign is when 'the way we do things' has to bend around what the software allows, rather than the other way around. Off-the-shelf tools are built for the average user of that tool — not for your specific process.",
      "A third sign is data you can't trust. When the same customer or order exists in multiple systems with slightly different information, decisions start being made on bad data without anyone realizing it.",
      "Custom software isn't the right answer for every business, and it isn't the right answer immediately. But once the cost of working around your tools exceeds the cost of building the right one, it's worth having the conversation.",
    ],
    author: "Olamitobi Technologies Team",
    publishedAt: "2026-01-14",
    readingTimeMinutes: 5,
  },
  {
    slug: "practical-ai-for-business-not-hype",
    title: "Practical AI for Business: Where It Actually Helps Right Now",
    category: "AI",
    excerpt:
      "Skip the hype cycle. Here's a grounded look at where AI reliably creates value for businesses today — and where it still isn't ready.",
    content: [
      "It's easy to feel like every business decision now needs an AI angle. In practice, AI creates the most reliable value in a fairly narrow set of use cases today.",
      "Document and knowledge search is one of the strongest current use cases — helping teams find information buried across systems, without replacing human judgment on what to do with it.",
      "Drafting and first-pass content generation is another solid use case: proposals, summaries, and first drafts that a human then reviews and refines, rather than fully automated decision-making.",
      "Where AI is still shakier is anywhere accuracy is critical and there's no human review step — financial calculations, legal conclusions, or anything where a plausible-sounding wrong answer causes real damage.",
      "The businesses getting real value from AI right now are the ones scoping it to well-understood, human-reviewed use cases — not the ones trying to automate everything at once.",
    ],
    author: "Olamitobi Technologies Team",
    publishedAt: "2026-02-03",
    readingTimeMinutes: 6,
  },
  {
    slug: "cybersecurity-basics-smes-nigeria",
    title: "Cybersecurity Basics Every Growing Business Should Have in Place",
    category: "Cybersecurity",
    excerpt:
      "Security doesn't have to mean an enterprise budget. Here are the fundamentals that meaningfully reduce risk for growing businesses.",
    content: [
      "Most successful attacks on small and mid-sized businesses don't involve sophisticated hacking — they exploit basic gaps: weak passwords, no multi-factor authentication, and unpatched software.",
      "Multi-factor authentication on email and admin accounts is one of the highest-impact, lowest-cost changes a business can make. It stops a large share of account takeover attempts outright.",
      "Regular, tested backups matter more than most businesses realize until the moment they need one. A backup that's never been tested is not a reliable backup.",
      "Role-based access — making sure staff only have access to the systems and data their role actually requires — limits the damage of a single compromised account.",
      "None of this requires an enterprise security budget. It requires treating security as a standard part of how systems are set up, not an afterthought addressed after something goes wrong.",
    ],
    author: "Olamitobi Technologies Team",
    publishedAt: "2026-03-11",
    readingTimeMinutes: 5,
  },
  {
    slug: "choosing-the-right-cloud-setup",
    title: "Choosing the Right Cloud Setup for Where Your Business Actually Is",
    category: "Cloud",
    excerpt:
      "Over-engineering cloud infrastructure is as common a mistake as under-investing in it. Here's how to size infrastructure to your actual stage.",
    content: [
      "It's common to see early-stage products built on infrastructure designed for a scale they may never reach — complex multi-region setups, over-provisioned databases, and premature microservices.",
      "The better approach is matching infrastructure to your current, honest usage patterns, with a clear path to scale when the data says you actually need it.",
      "For most early and growth-stage products, a well-configured single-region deployment with proper monitoring will comfortably outperform a prematurely complex architecture — and cost significantly less to maintain.",
      "The right time to invest in more sophisticated infrastructure is when you have real usage data showing where the current setup is straining — not before.",
      "Good cloud architecture isn't about using the most advanced tools available. It's about matching the tools to the problem you actually have today, with room to grow.",
    ],
    author: "Olamitobi Technologies Team",
    publishedAt: "2026-04-02",
    readingTimeMinutes: 6,
  },
  {
    slug: "digital-transformation-without-disruption",
    title: "How to Digitize Operations Without Disrupting the Business That's Running Them",
    category: "Digital Transformation",
    excerpt:
      "The biggest risk in digital transformation isn't the technology — it's disrupting operations that are already working while you build the replacement.",
    content: [
      "The instinct in digital transformation projects is often to replace everything at once. In practice, this is the riskiest possible approach for a business that depends on its current processes to keep running.",
      "A phased approach — starting with the highest-friction, lowest-risk process — builds confidence in the new system while leaving critical operations untouched until the new approach is proven.",
      "Involving the people who actually do the work day-to-day, not just department heads, surfaces the real workflow — including the informal workarounds that official documentation never captures.",
      "Running the old and new systems in parallel for a defined period, rather than a hard cutover, gives teams a safety net and gives you real usage data before fully committing.",
      "Successful digital transformation isn't measured by how much technology gets deployed — it's measured by whether operations got better without anyone's daily work grinding to a halt in the process.",
    ],
    author: "Olamitobi Technologies Team",
    publishedAt: "2026-05-19",
    readingTimeMinutes: 7,
  },
  {
    slug: "what-makes-web-apps-feel-fast",
    title: "What Actually Makes a Web Application Feel Fast",
    category: "Software Development",
    excerpt:
      "Perceived speed matters more than raw benchmark numbers. Here's what actually shapes how fast an application feels to real users.",
    content: [
      "Raw load-time benchmarks matter less than most teams assume. What actually shapes how 'fast' an application feels is how quickly it responds to what the user just did.",
      "Showing something immediately — even a lightweight loading state or skeleton — makes an application feel dramatically faster than an equivalent one that shows nothing until everything is ready.",
      "Avoiding layout shift matters as much as raw speed. Content jumping around as it loads reads as slow and unpolished, even on a fast connection.",
      "Optimizing for the median user's actual connection and device — not the developer's fast office wifi and high-end laptop — is where most real-world performance problems get caught.",
      "Fast software isn't an accident. It's the result of deliberate choices about what loads first, what the user sees while waiting, and what happens on a slower connection.",
    ],
    author: "Olamitobi Technologies Team",
    publishedAt: "2026-06-08",
    readingTimeMinutes: 5,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
