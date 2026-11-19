export type CourseLevel = "Beginner" | "Intermediate" | "Advanced" | "All levels";

export interface TrainingCategory {
  slug: string;
  name: string;
  summary: string;
  image: string;
}

export interface TrainingCourse {
  slug: string;
  title: string;
  category: string; // TrainingCategory.slug
  level: CourseLevel;
  durationWeeks: number;
  description: string;
  tools: string[];
  modules: string[];
  outcomes: string[];
  popular?: boolean;
}

export const trainingCategories: TrainingCategory[] = [
  {
    slug: "software-development",
    name: "Software & Web Development",
    summary: "Build websites, web apps and APIs with the languages and frameworks companies hire for.",
    image: "/images/code-editor.webp",
  },
  {
    slug: "mobile-development",
    name: "Mobile App Development",
    summary: "Design, build and publish Android and iOS apps from a single codebase.",
    image: "/images/engineering.webp",
  },
  {
    slug: "design",
    name: "Design & Creative",
    summary: "Interface, brand and motion design skills for digital products and marketing.",
    image: "/images/team-collaboration.webp",
  },
  {
    slug: "data-ai",
    name: "Data Science & AI",
    summary: "Turn data into decisions, and put machine learning and generative AI to real use.",
    image: "/images/data-analytics.webp",
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    summary: "Deploy, automate and operate software on modern cloud infrastructure.",
    image: "/images/cloud-datacenter.webp",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    summary: "Defend systems, test them like an attacker, and respond when incidents happen.",
    image: "/images/cybersecurity.webp",
  },
  {
    slug: "networking-it",
    name: "Networking & IT Support",
    summary: "Foundational IT, networking and hardware skills every organization depends on.",
    image: "/images/office.webp",
  },
  {
    slug: "digital-business",
    name: "Digital Business & Management",
    summary: "Marketing, product and project skills for leading in a digital economy.",
    image: "/images/consulting-session.webp",
  },
  {
    slug: "kids-corporate",
    name: "Kids, Teens & Corporate",
    summary: "Early coding for young learners, and customized programs for teams.",
    image: "/images/training-classroom.webp",
  },
];

export const trainingCourses: TrainingCourse[] = [
  // ── Software & Web Development ─────────────────────────────────────────
  {
    slug: "frontend-development",
    title: "Frontend Web Development",
    category: "software-development",
    level: "Beginner",
    durationWeeks: 12,
    popular: true,
    description:
      "Go from your first HTML tag to responsive, interactive React interfaces that look and work great on every device.",
    tools: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "Git"],
    modules: [
      "HTML5 structure, semantics and accessibility",
      "Modern CSS, Flexbox, Grid and responsive design",
      "JavaScript fundamentals, the DOM and APIs",
      "React components, state, hooks and routing",
      "Git, GitHub and deploying your portfolio",
    ],
    outcomes: [
      "Build responsive, accessible websites from a design",
      "Create interactive single-page apps with React",
      "Publish a portfolio of live projects",
    ],
  },
  {
    slug: "backend-development",
    title: "Backend Development with Node.js",
    category: "software-development",
    level: "Intermediate",
    durationWeeks: 10,
    description:
      "Design and build secure REST APIs, work with databases, and handle authentication the way production teams do.",
    tools: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "Postman"],
    modules: [
      "Node.js runtime, modules and async programming",
      "REST API design with Express",
      "Relational and document databases",
      "Authentication, authorization and security",
      "Testing, logging and deployment",
    ],
    outcomes: [
      "Design and document clean REST APIs",
      "Model data in SQL and NoSQL databases",
      "Secure and deploy a production-ready backend",
    ],
  },
  {
    slug: "full-stack-development",
    title: "Full-Stack Web Development (MERN)",
    category: "software-development",
    level: "Beginner",
    durationWeeks: 24,
    popular: true,
    description:
      "Our flagship programme: frontend, backend, databases and deployment, ending with a capstone product you can show employers.",
    tools: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Git"],
    modules: [
      "Web foundations: HTML, CSS and JavaScript",
      "React and modern frontend architecture",
      "Node.js, Express and REST APIs",
      "MongoDB data modeling",
      "Authentication, payments and third-party APIs",
      "Capstone project and career preparation",
    ],
    outcomes: [
      "Build and ship complete web applications end to end",
      "Work confidently with Git in a team workflow",
      "Graduate with a capstone project and portfolio",
    ],
  },
  {
    slug: "nextjs-typescript",
    title: "Next.js & TypeScript",
    category: "software-development",
    level: "Intermediate",
    durationWeeks: 8,
    description:
      "Build fast, SEO-friendly, type-safe web applications with the React framework used by leading product teams.",
    tools: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
    modules: [
      "TypeScript for JavaScript developers",
      "Next.js App Router, layouts and routing",
      "Server components and data fetching",
      "Forms, validation and authentication",
      "Performance, SEO and deployment",
    ],
    outcomes: [
      "Write safer code with TypeScript",
      "Build full-stack apps with Next.js",
      "Optimize apps for speed and search",
    ],
  },
  {
    slug: "python-programming",
    title: "Python Programming",
    category: "software-development",
    level: "Beginner",
    durationWeeks: 8,
    popular: true,
    description:
      "Learn to code with the world's most versatile language, a foundation for web development, automation, data and AI.",
    tools: ["Python", "VS Code", "Jupyter", "pip"],
    modules: [
      "Variables, data types and control flow",
      "Functions, modules and packages",
      "Files, errors and working with data",
      "Object-oriented programming",
      "Automation scripts and mini projects",
    ],
    outcomes: [
      "Write clean, working Python programs",
      "Automate repetitive tasks",
      "Build a base for data science or Django",
    ],
  },
  {
    slug: "python-django",
    title: "Web Development with Python & Django",
    category: "software-development",
    level: "Intermediate",
    durationWeeks: 10,
    description:
      "Build robust, database-driven web applications and APIs with Django and Django REST Framework.",
    tools: ["Python", "Django", "Django REST Framework", "PostgreSQL"],
    modules: [
      "Django project structure and the ORM",
      "Views, templates and forms",
      "User authentication and permissions",
      "Building APIs with Django REST Framework",
      "Testing and deployment",
    ],
    outcomes: [
      "Build data-driven web apps with Django",
      "Expose secure APIs for web and mobile clients",
      "Deploy Django to the cloud",
    ],
  },
  {
    slug: "php-laravel",
    title: "PHP & Laravel Development",
    category: "software-development",
    level: "Beginner",
    durationWeeks: 10,
    description:
      "Master the stack behind a large share of the web, from core PHP to elegant Laravel applications.",
    tools: ["PHP", "Laravel", "MySQL", "Composer", "Blade"],
    modules: [
      "PHP fundamentals and OOP",
      "MySQL databases and queries",
      "Laravel routing, controllers and Eloquent",
      "Authentication, mail and queues",
      "APIs and deploying to cPanel or the cloud",
    ],
    outcomes: [
      "Build dynamic websites with PHP and MySQL",
      "Develop full applications with Laravel",
      "Deploy to shared hosting and VPS",
    ],
  },
  {
    slug: "java-programming",
    title: "Java Programming & Spring Boot",
    category: "software-development",
    level: "Intermediate",
    durationWeeks: 12,
    description:
      "Learn enterprise-grade Java and build microservices with Spring Boot, the backbone of banking and enterprise systems.",
    tools: ["Java", "Spring Boot", "Maven", "MySQL", "JUnit"],
    modules: [
      "Java syntax, OOP and collections",
      "Exceptions, streams and concurrency",
      "Spring Boot fundamentals",
      "REST services and data persistence with JPA",
      "Testing and microservice patterns",
    ],
    outcomes: [
      "Write solid object-oriented Java",
      "Build REST services with Spring Boot",
      "Understand enterprise architecture patterns",
    ],
  },
  {
    slug: "csharp-dotnet",
    title: "C# & .NET Development",
    category: "software-development",
    level: "Intermediate",
    durationWeeks: 10,
    description:
      "Build web APIs and business applications with C# and ASP.NET Core on Microsoft's modern platform.",
    tools: ["C#", ".NET", "ASP.NET Core", "SQL Server", "Entity Framework"],
    modules: [
      "C# language fundamentals and OOP",
      "LINQ and asynchronous programming",
      "ASP.NET Core Web APIs",
      "Entity Framework and SQL Server",
      "Security, testing and deployment to Azure",
    ],
    outcomes: [
      "Develop applications in C#",
      "Build secure APIs with ASP.NET Core",
      "Deploy .NET apps to Azure",
    ],
  },
  {
    slug: "wordpress-web-design",
    title: "WordPress Website Design",
    category: "software-development",
    level: "Beginner",
    durationWeeks: 4,
    description:
      "Design, launch and manage professional business websites and online stores, no coding required.",
    tools: ["WordPress", "Elementor", "WooCommerce", "cPanel"],
    modules: [
      "Domains, hosting and WordPress installation",
      "Themes, page builders and layouts",
      "WooCommerce online stores",
      "SEO basics, speed and security",
      "Maintenance and client handover",
    ],
    outcomes: [
      "Build business websites for yourself or clients",
      "Launch an e-commerce store",
      "Start a freelance web design service",
    ],
  },
  {
    slug: "software-testing",
    title: "Software Testing & QA Automation",
    category: "software-development",
    level: "Beginner",
    durationWeeks: 8,
    description:
      "Learn manual and automated testing to ship reliable software, and start one of tech's most accessible careers.",
    tools: ["Jira", "Selenium", "Cypress", "Postman", "Playwright"],
    modules: [
      "Testing fundamentals and the SDLC",
      "Test cases, bug reports and Jira",
      "API testing with Postman",
      "UI automation with Selenium and Cypress",
      "CI integration and QA best practices",
    ],
    outcomes: [
      "Plan and run structured test cycles",
      "Automate web and API tests",
      "Work as a QA engineer in agile teams",
    ],
  },
  {
    slug: "blockchain-web3",
    title: "Blockchain & Web3 Development",
    category: "software-development",
    level: "Advanced",
    durationWeeks: 8,
    description:
      "Understand blockchain fundamentals and build smart contracts and decentralized applications.",
    tools: ["Solidity", "Ethereum", "Hardhat", "ethers.js", "MetaMask"],
    modules: [
      "Blockchain, consensus and cryptography basics",
      "Solidity smart contracts",
      "Testing and deploying with Hardhat",
      "Connecting dApps with ethers.js",
      "Security pitfalls and auditing",
    ],
    outcomes: [
      "Write and deploy smart contracts",
      "Build a working dApp frontend",
      "Recognize common contract vulnerabilities",
    ],
  },

  // ── Mobile ─────────────────────────────────────────────────────────────
  {
    slug: "flutter-development",
    title: "Mobile App Development with Flutter",
    category: "mobile-development",
    level: "Beginner",
    durationWeeks: 12,
    popular: true,
    description:
      "Build beautiful Android and iOS apps from one codebase with Flutter and Dart, then publish them to the stores.",
    tools: ["Dart", "Flutter", "Firebase", "Android Studio"],
    modules: [
      "Dart programming fundamentals",
      "Flutter widgets, layouts and navigation",
      "State management",
      "APIs, Firebase and local storage",
      "Publishing to Google Play and the App Store",
    ],
    outcomes: [
      "Build cross-platform mobile apps",
      "Integrate backends, auth and push notifications",
      "Publish apps to the stores",
    ],
  },
  {
    slug: "react-native",
    title: "Mobile App Development with React Native",
    category: "mobile-development",
    level: "Intermediate",
    durationWeeks: 10,
    description:
      "Use your JavaScript and React skills to build native-quality mobile apps with React Native and Expo.",
    tools: ["React Native", "Expo", "TypeScript", "Firebase"],
    modules: [
      "React Native fundamentals and Expo",
      "Navigation and native UI patterns",
      "State, data fetching and offline storage",
      "Device features: camera, location, notifications",
      "Builds and store deployment",
    ],
    outcomes: [
      "Ship iOS and Android apps with React Native",
      "Use device hardware features",
      "Deploy builds with Expo",
    ],
  },
  {
    slug: "android-kotlin",
    title: "Android Development with Kotlin",
    category: "mobile-development",
    level: "Intermediate",
    durationWeeks: 10,
    description:
      "Build modern native Android apps with Kotlin and Jetpack Compose, following Google's recommended architecture.",
    tools: ["Kotlin", "Jetpack Compose", "Android Studio", "Room"],
    modules: [
      "Kotlin language essentials",
      "Jetpack Compose UI",
      "Architecture: ViewModel, Flow and Room",
      "Networking with Retrofit",
      "Testing and Play Store release",
    ],
    outcomes: [
      "Build native Android apps",
      "Apply modern Android architecture",
      "Release apps on Google Play",
    ],
  },

  // ── Design ─────────────────────────────────────────────────────────────
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "design",
    level: "Beginner",
    durationWeeks: 10,
    popular: true,
    description:
      "Research, wireframe, prototype and test digital products people love, and build a case-study portfolio in Figma.",
    tools: ["Figma", "FigJam", "Maze", "Notion"],
    modules: [
      "Design thinking and user research",
      "Information architecture and wireframes",
      "Visual design, typography and color",
      "Prototyping and usability testing",
      "Design systems and portfolio case studies",
    ],
    outcomes: [
      "Run a full UX process from research to prototype",
      "Design polished interfaces in Figma",
      "Present portfolio-ready case studies",
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "design",
    level: "Beginner",
    durationWeeks: 8,
    description:
      "Create logos, brand identities, social media graphics and print materials with professional design tools.",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "CorelDRAW", "Canva"],
    modules: [
      "Design principles, color and typography",
      "Photo editing and manipulation",
      "Vector illustration and logo design",
      "Brand identity systems",
      "Print and social media production",
    ],
    outcomes: [
      "Design brand assets and marketing graphics",
      "Prepare files for print and digital",
      "Start freelancing as a designer",
    ],
  },
  {
    slug: "video-editing-motion",
    title: "Video Editing & Motion Graphics",
    category: "design",
    level: "Beginner",
    durationWeeks: 8,
    description:
      "Edit compelling videos and animate graphics for brands, YouTube, social media and events.",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"],
    modules: [
      "Storytelling and editing fundamentals",
      "Cutting, transitions and color grading",
      "Audio editing and sound design",
      "Motion graphics and animated titles",
      "Exporting for every platform",
    ],
    outcomes: [
      "Edit professional-quality videos",
      "Create animated graphics and intros",
      "Produce content for brands and social media",
    ],
  },

  // ── Data & AI ──────────────────────────────────────────────────────────
  {
    slug: "data-analysis",
    title: "Data Analysis",
    category: "data-ai",
    level: "Beginner",
    durationWeeks: 10,
    popular: true,
    description:
      "Clean, analyze and visualize data with Excel, SQL and Power BI, and tell stories that drive business decisions.",
    tools: ["Excel", "SQL", "Power BI", "Tableau", "Python"],
    modules: [
      "Advanced Excel: formulas, pivots and dashboards",
      "SQL for data analysis",
      "Data cleaning and modeling",
      "Visualization with Power BI and Tableau",
      "Analytics capstone project",
    ],
    outcomes: [
      "Query and clean real-world datasets",
      "Build interactive business dashboards",
      "Communicate insights to stakeholders",
    ],
  },
  {
    slug: "data-science-python",
    title: "Data Science with Python",
    category: "data-ai",
    level: "Intermediate",
    durationWeeks: 12,
    description:
      "Apply statistics and Python to explore data, build predictive models, and answer hard business questions.",
    tools: ["Python", "pandas", "NumPy", "scikit-learn", "Jupyter", "Matplotlib"],
    modules: [
      "Python for data: pandas and NumPy",
      "Exploratory data analysis and visualization",
      "Statistics and hypothesis testing",
      "Supervised and unsupervised learning",
      "End-to-end data science project",
    ],
    outcomes: [
      "Explore and model data with Python",
      "Build and evaluate predictive models",
      "Deliver a portfolio data science project",
    ],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning & Deep Learning",
    category: "data-ai",
    level: "Advanced",
    durationWeeks: 12,
    description:
      "Go deeper into ML algorithms, neural networks, computer vision and NLP, and deploy models to production.",
    tools: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "FastAPI"],
    modules: [
      "ML algorithms and model evaluation",
      "Feature engineering and pipelines",
      "Neural networks and deep learning",
      "Computer vision and NLP",
      "Model deployment and MLOps basics",
    ],
    outcomes: [
      "Train and tune ML and deep learning models",
      "Apply vision and language models",
      "Serve models behind an API",
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI & Prompt Engineering",
    category: "data-ai",
    level: "All levels",
    durationWeeks: 6,
    popular: true,
    description:
      "Use large language models effectively and responsibly, and build AI-powered apps, assistants and chatbots.",
    tools: ["ChatGPT", "Claude", "Gemini", "LLM APIs", "LangChain"],
    modules: [
      "How large language models work",
      "Prompt engineering techniques",
      "AI for productivity, content and research",
      "Building apps with LLM APIs",
      "Retrieval (RAG), agents and responsible AI",
    ],
    outcomes: [
      "Get reliable, high-quality results from AI tools",
      "Build a working AI assistant or chatbot",
      "Apply AI safely in a business setting",
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation & No-Code Tools",
    category: "data-ai",
    level: "Beginner",
    durationWeeks: 6,
    description:
      "Automate business workflows and build AI agents without heavy coding, connecting the tools teams already use.",
    tools: ["n8n", "Zapier", "Make", "Airtable", "WhatsApp API"],
    modules: [
      "Automation thinking and process mapping",
      "Workflows with Zapier, Make and n8n",
      "Adding AI steps to automations",
      "WhatsApp and Telegram chatbots",
      "Selling automation as a service",
    ],
    outcomes: [
      "Automate repetitive business processes",
      "Build AI-powered chatbots and agents",
      "Offer automation services to clients",
    ],
  },
  {
    slug: "business-intelligence",
    title: "Business Intelligence with Power BI",
    category: "data-ai",
    level: "Intermediate",
    durationWeeks: 6,
    description:
      "Model data, write DAX and publish executive dashboards that keep organizations informed in real time.",
    tools: ["Power BI", "Power Query", "DAX", "Excel", "SQL"],
    modules: [
      "Connecting and transforming data with Power Query",
      "Data modeling and relationships",
      "DAX measures and calculations",
      "Dashboard design best practices",
      "Publishing, sharing and security",
    ],
    outcomes: [
      "Build robust BI data models",
      "Write DAX for business metrics",
      "Publish and share live dashboards",
    ],
  },

  // ── Cloud & DevOps ─────────────────────────────────────────────────────
  {
    slug: "cloud-computing-aws",
    title: "Cloud Computing with AWS",
    category: "cloud-devops",
    level: "Beginner",
    durationWeeks: 10,
    popular: true,
    description:
      "Learn core AWS services hands-on and prepare for the AWS Cloud Practitioner and Solutions Architect Associate exams.",
    tools: ["AWS EC2", "S3", "IAM", "RDS", "Lambda", "CloudFormation"],
    modules: [
      "Cloud concepts and the AWS global infrastructure",
      "Compute, storage and networking (VPC)",
      "Identity, security and cost management",
      "Databases and serverless",
      "Architecting for availability and exam preparation",
    ],
    outcomes: [
      "Deploy and secure workloads on AWS",
      "Design resilient cloud architectures",
      "Be ready for AWS certification exams",
    ],
  },
  {
    slug: "microsoft-azure",
    title: "Microsoft Azure Fundamentals & Administration",
    category: "cloud-devops",
    level: "Beginner",
    durationWeeks: 8,
    description:
      "Manage identities, compute, storage and networking on Azure, and prepare for AZ-900 and AZ-104.",
    tools: ["Azure Portal", "Azure CLI", "Entra ID", "Azure VMs", "Azure Storage"],
    modules: [
      "Azure core concepts and services",
      "Identity and governance with Entra ID",
      "Virtual machines, storage and networking",
      "Monitoring and backup",
      "Certification exam preparation",
    ],
    outcomes: [
      "Administer Azure resources confidently",
      "Secure identities and access",
      "Prepare for Azure certifications",
    ],
  },
  {
    slug: "devops-engineering",
    title: "DevOps Engineering",
    category: "cloud-devops",
    level: "Intermediate",
    durationWeeks: 12,
    description:
      "Automate build, test and release pipelines, containerize applications, and run them reliably at scale.",
    tools: ["Linux", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus"],
    modules: [
      "Linux, Bash and Git for DevOps",
      "Docker and containerization",
      "CI/CD pipelines with GitHub Actions",
      "Kubernetes orchestration",
      "Infrastructure as Code and monitoring",
    ],
    outcomes: [
      "Build automated CI/CD pipelines",
      "Containerize and orchestrate applications",
      "Manage infrastructure as code",
    ],
  },
  {
    slug: "linux-administration",
    title: "Linux System Administration",
    category: "cloud-devops",
    level: "Beginner",
    durationWeeks: 6,
    description:
      "Master the operating system that runs the cloud: the command line, users, services, networking and security.",
    tools: ["Ubuntu", "RHEL", "Bash", "SSH", "systemd"],
    modules: [
      "The Linux command line",
      "Users, permissions and file systems",
      "Package management and services",
      "Networking and SSH",
      "Shell scripting and hardening",
    ],
    outcomes: [
      "Administer Linux servers",
      "Automate tasks with shell scripts",
      "Secure and troubleshoot systems",
    ],
  },

  // ── Cybersecurity ──────────────────────────────────────────────────────
  {
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    category: "cybersecurity",
    level: "Beginner",
    durationWeeks: 8,
    popular: true,
    description:
      "Understand threats, defenses and security operations, and prepare for CompTIA Security+.",
    tools: ["Kali Linux", "Wireshark", "Nmap", "pfSense"],
    modules: [
      "Security principles and the threat landscape",
      "Network security and firewalls",
      "Identity, access and cryptography",
      "Vulnerability management",
      "Security+ exam preparation",
    ],
    outcomes: [
      "Explain and apply core security concepts",
      "Identify and reduce common vulnerabilities",
      "Prepare for CompTIA Security+",
    ],
  },
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking & Penetration Testing",
    category: "cybersecurity",
    level: "Intermediate",
    durationWeeks: 10,
    description:
      "Think like an attacker. Learn reconnaissance, exploitation and reporting in legal, hands-on lab environments.",
    tools: ["Kali Linux", "Burp Suite", "Metasploit", "Nmap", "OWASP ZAP"],
    modules: [
      "Penetration testing methodology and ethics",
      "Reconnaissance and scanning",
      "Web application attacks (OWASP Top 10)",
      "Exploitation and privilege escalation",
      "Professional reporting",
    ],
    outcomes: [
      "Perform structured penetration tests in labs",
      "Find and explain web vulnerabilities",
      "Write professional pentest reports",
    ],
  },
  {
    slug: "soc-analyst",
    title: "SOC Analyst & Incident Response",
    category: "cybersecurity",
    level: "Intermediate",
    durationWeeks: 8,
    description:
      "Monitor, detect and respond to threats as a security operations centre analyst using SIEM and forensics tools.",
    tools: ["Splunk", "Wazuh", "Elastic", "Wireshark", "TheHive"],
    modules: [
      "SOC operations and the alert lifecycle",
      "Log analysis and SIEM",
      "Threat intelligence and hunting",
      "Incident response playbooks",
      "Digital forensics basics",
    ],
    outcomes: [
      "Triage and investigate security alerts",
      "Use SIEM tools to detect threats",
      "Lead an incident response process",
    ],
  },
  {
    slug: "cloud-security",
    title: "Cloud Security",
    category: "cybersecurity",
    level: "Advanced",
    durationWeeks: 6,
    description:
      "Secure cloud workloads across identity, data, networks and compliance on AWS and Azure.",
    tools: ["AWS IAM", "Azure Defender", "CloudTrail", "KMS", "Terraform"],
    modules: [
      "Shared responsibility and cloud threats",
      "Identity and access management",
      "Data protection and encryption",
      "Network security and monitoring",
      "Compliance and governance",
    ],
    outcomes: [
      "Harden cloud environments",
      "Detect misconfigurations and threats",
      "Align cloud setups with compliance needs",
    ],
  },

  // ── Networking & IT ────────────────────────────────────────────────────
  {
    slug: "computer-networking",
    title: "Computer Networking (CCNA)",
    category: "networking-it",
    level: "Beginner",
    durationWeeks: 10,
    description:
      "Design, configure and troubleshoot networks, and prepare for the Cisco CCNA certification.",
    tools: ["Cisco IOS", "Packet Tracer", "GNS3", "Wireshark"],
    modules: [
      "Networking models and IP addressing",
      "Switching and VLANs",
      "Routing protocols",
      "Wireless, security and automation",
      "CCNA exam preparation",
    ],
    outcomes: [
      "Configure routers and switches",
      "Troubleshoot network issues",
      "Prepare for the CCNA exam",
    ],
  },
  {
    slug: "it-support",
    title: "IT Support & Hardware Maintenance",
    category: "networking-it",
    level: "Beginner",
    durationWeeks: 6,
    description:
      "Repair, maintain and support computers, printers and office networks, and prepare for CompTIA A+.",
    tools: ["Windows", "macOS", "Active Directory", "Diagnostic tools"],
    modules: [
      "Computer hardware and assembly",
      "Operating system installation and support",
      "Troubleshooting methodology",
      "Small office networking",
      "Help desk and customer service skills",
    ],
    outcomes: [
      "Diagnose and repair hardware and software faults",
      "Support users in an office environment",
      "Prepare for CompTIA A+",
    ],
  },
  {
    slug: "computer-appreciation",
    title: "Computer Appreciation & Microsoft Office",
    category: "networking-it",
    level: "Beginner",
    durationWeeks: 4,
    description:
      "Build confident digital literacy: computer basics, the internet, and Word, Excel, PowerPoint and Outlook.",
    tools: ["Windows", "Microsoft Word", "Excel", "PowerPoint", "Google Workspace"],
    modules: [
      "Computer basics and file management",
      "Internet, email and online safety",
      "Microsoft Word documents",
      "Excel spreadsheets",
      "PowerPoint presentations",
    ],
    outcomes: [
      "Use a computer confidently for work or school",
      "Produce professional documents and spreadsheets",
      "Stay safe online",
    ],
  },

  // ── Digital Business ───────────────────────────────────────────────────
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    category: "digital-business",
    level: "Beginner",
    durationWeeks: 8,
    popular: true,
    description:
      "Grow brands online with SEO, social media, paid ads, email and analytics, with campaigns that convert.",
    tools: ["Google Ads", "Meta Ads", "Google Analytics", "Search Console", "Mailchimp"],
    modules: [
      "Digital marketing strategy",
      "Search engine optimization",
      "Social media marketing and content",
      "Paid ads on Google and Meta",
      "Email marketing and analytics",
    ],
    outcomes: [
      "Plan and run digital campaigns",
      "Rank websites higher on Google",
      "Measure and optimize marketing ROI",
    ],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    category: "digital-business",
    level: "Beginner",
    durationWeeks: 4,
    description:
      "Plan content, grow communities and manage brand accounts across Instagram, TikTok, X, LinkedIn and Facebook.",
    tools: ["Meta Business Suite", "Canva", "CapCut", "Buffer"],
    modules: [
      "Platform strategy and audience research",
      "Content planning and calendars",
      "Creating short-form video and graphics",
      "Community management",
      "Analytics and reporting",
    ],
    outcomes: [
      "Manage brand social accounts professionally",
      "Create engaging content consistently",
      "Report on growth and engagement",
    ],
  },
  {
    slug: "product-management",
    title: "Product Management",
    category: "digital-business",
    level: "All levels",
    durationWeeks: 8,
    description:
      "Discover what to build, prioritize ruthlessly, and lead cross-functional teams to ship products users value.",
    tools: ["Jira", "Notion", "Figma", "Miro", "Mixpanel"],
    modules: [
      "The product manager's role",
      "Product discovery and user research",
      "Roadmaps and prioritization",
      "Working with design and engineering",
      "Metrics, launches and iteration",
    ],
    outcomes: [
      "Define problems and product strategy",
      "Write clear requirements and roadmaps",
      "Lead product launches with data",
    ],
  },
  {
    slug: "project-management-agile",
    title: "Technical Project Management (Agile & Scrum)",
    category: "digital-business",
    level: "All levels",
    durationWeeks: 6,
    description:
      "Deliver technology projects on time with Agile, Scrum and Kanban, and prepare for PSM and PMP-style exams.",
    tools: ["Jira", "Trello", "Asana", "MS Project"],
    modules: [
      "Project management fundamentals",
      "Agile principles, Scrum and Kanban",
      "Planning, estimation and risk",
      "Stakeholder communication",
      "Certification preparation",
    ],
    outcomes: [
      "Run Scrum ceremonies and sprints",
      "Plan and track technical projects",
      "Manage stakeholders and risk",
    ],
  },

  // ── Kids & Corporate ───────────────────────────────────────────────────
  {
    slug: "coding-for-kids",
    title: "Coding for Kids & Teens",
    category: "kids-corporate",
    level: "Beginner",
    durationWeeks: 8,
    popular: true,
    description:
      "Fun, project-based coding for ages 7–17: games, animations, websites and robotics with Scratch and Python.",
    tools: ["Scratch", "Python", "HTML & CSS", "micro:bit"],
    modules: [
      "Computational thinking through games",
      "Animations and games with Scratch",
      "First websites with HTML and CSS",
      "Python for young coders",
      "Robotics and showcase day",
    ],
    outcomes: [
      "Build games, animations and websites",
      "Develop problem-solving and logic skills",
      "Present a final project to family",
    ],
  },
  {
    slug: "corporate-technology-training",
    title: "Corporate Technology Training",
    category: "kids-corporate",
    level: "All levels",
    durationWeeks: 4,
    description:
      "Customized upskilling for organizations in digital literacy, data, cybersecurity awareness, AI productivity and more.",
    tools: ["Tailored to your stack"],
    modules: [
      "Skills gap assessment",
      "Custom curriculum design",
      "On-site or virtual delivery",
      "Hands-on exercises on your own use cases",
      "Assessment and post-training support",
    ],
    outcomes: [
      "A measurably more capable team",
      "Training mapped to your real workflows",
      "Progress reports for management",
    ],
  },
];

export const trainingFormats = [
  { title: "Physical classes", description: "Hands-on learning at our Ibadan and Osogbo training centres." },
  { title: "Live online", description: "Instructor-led virtual classes you can join from anywhere." },
  { title: "Weekend cohorts", description: "Saturday classes designed for working professionals and students." },
  { title: "Corporate & on-site", description: "Programmes delivered at your premises, built around your team." },
] as const;

export function getCourseBySlug(slug: string): TrainingCourse | undefined {
  return trainingCourses.find((c) => c.slug === slug);
}

export function getCategory(slug: string): TrainingCategory | undefined {
  return trainingCategories.find((c) => c.slug === slug);
}

export function coursesInCategory(slug: string): TrainingCourse[] {
  return trainingCourses.filter((c) => c.category === slug);
}
