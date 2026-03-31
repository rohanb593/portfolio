export type ProjectEntry = {
  id: string;
  title: string;
  category: string;
  year: string;
  status: "inProgress" | "completed";
  /** Omit when the project has no external links (e.g. this site). */
  href?: string;
  /** Optional label for the primary project link (default: “View project →”). */
  linkLabel?: string;
  /** Optional second link (e.g. source repo when `href` is the live site). */
  secondaryHref?: string;
  secondaryLinkLabel?: string;
  description: string;
  stack: string;
};

export type ExperienceEntry = {
  id: string;
  org: string;
  location: string;
  period: string;
  role: string;
  bullets: string[];
};

export type EducationEntry = {
  id: string;
  institution: string;
  period: string;
  qualification: string;
  headline: string;
  bullets: string[];
};

export type TechGroup = {
  id: string;
  name: string;
  items: string[];
  note?: string;
};

export const siteMeta = {
  name: "Rohan Bhagat",
  location: "London, UK",
  phone: "+44 7776111614",
  email: "rohan.bhagat1@outlook.com",
  website: "https://www.rohanbhagat.co.uk",
  github: "https://github.com/rohanb593",
  linkedin: "https://www.linkedin.com/in/rohan-bhagat05",
  hyperlinkLondon: "https://www.hyperlinklondon.com",
};

export const navLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/tech", label: "Tech" },
] as const;

/** In progress first, then completed — order matches the Projects page sections. */
export const homeProjects: ProjectEntry[] = [
  {
    id: "01",
    title: "SafePaws",
    category: "Mobile",
    year: "2025",
    status: "inProgress",
    href: "https://github.com/rohanb593/SafePaws",
    description:
      "Expo (React Native) app with expo-router, Redux, and Supabase for auth and data—pet owners and minders, bookings, listings, and messaging (group coursework).",
    stack: "Expo, React Native, TypeScript, Redux, Supabase",
  },
  {
    id: "02",
    title: "Hyperlink Inventory Management System",
    category: "Full-stack · Web · Mobile",
    year: "2025",
    status: "inProgress",
    href: "https://github.com/Hyperlink-London",
    description:
      "Led development of a multi-platform inventory system for Hyperlink London: a full-stack web app and mobile app that improved operational efficiency by about 80% and strengthened inventory tracking.",
    stack: "Next.js, Supabase, Tailwind CSS, Expo, React Native",
  },
  {
    id: "03",
    title: "This website",
    category: "Editorial web",
    year: "2026",
    status: "inProgress",
    href: "https://github.com/rohanb593/portfolio",
    linkLabel: "Source on GitHub →",
    description:
      "This is my portfolio, which showcases my experiences, projects, education, and skills.",
    stack: "Next.js, TypeScript, Tailwind CSS",
  },
  {
    id: "04",
    title: "Hyperlink London Website",
    category: "Web",
    year: "2025",
    status: "completed",
    href: "https://www.hyperlinklondon.com",
    linkLabel: "Visit hyperlinklondon.com →",
    description:
      "Official Hyperlink London site with animated sections, responsive UI, and content for recruitment, departmental overviews, and partnerships.",
    stack: "Next.js, TypeScript, Tailwind CSS",
  },
  {
    id: "05",
    title: "License Management",
    category: "Full-stack · Internal tools",
    year: "2025",
    status: "completed",
    href: "https://github.com/rohanb593/CITS-Python-Project",
    description:
      "Streamlit app with Python and MySQL: customers, products, software licences, renewals, dashboards, and admin requests for internal IT operations.",
    stack: "Python, Streamlit, MySQL, Pandas, Plotly",
  },
  {
    id: "06",
    title: "Horse Racing Simulator",
    category: "Java · Desktop",
    year: "2024",
    status: "completed",
    href: "https://github.com/rohanb593/Horse-Racing-Simulator",
    description:
      "Java simulation with a textual console version and a Swing GUI: animated races, weather, betting, horse management, and probability-based mechanics.",
    stack: "Java, Swing",
  },
  {
    id: "07",
    title: "GitHub Repository Scout",
    category: "Data tooling",
    year: "2024",
    status: "completed",
    href: "https://github.com/rohanb593/repo-scout",
    description:
      "Web tool to analyse repository statistics (stars, forks, lines of code) via the GitHub API.",
    stack: "Python, Streamlit",
  },
];

export const experienceItems: ExperienceEntry[] = [
  {
    id: "01",
    org: "Hyperlink Society, Queen Mary University of London",
    location: "London, UK",
    period: "Oct 2024 – Present",
    role: "Software Engineer",
    bullets: [
      "Led software projects for Hyperlink London.",
      "Built the full-stack web application (GitHub OAuth, tagging, team filtering, notifications, checkout workflows) and the companion mobile app with real-time sync, push notifications, item browsing, and cross-platform support (iOS, Android, web).",
      "Built the official Hyperlink London website.",
      "Contributed across UI/UX, backend development, authentication flows, notifications, database schema design, and deployment pipelines.",
    ],
  },
  {
    id: "02",
    org: "Corporate IT Solutions",
    location: "Lusaka, Zambia",
    period: "Jun 2025 – Aug 2025",
    role: "Software Intern",
    bullets: [
      "Built a licence management system with Python and Streamlit, centralising tracking for over 50 multi-vendor software licences.",
      "Developed a full-stack inventory management system for a hardware store, reducing item lookup times by 25%.",
      "Configured and deployed ten network devices (firewalls, switches, access points), segmenting the network into five VLANs.",
      "Managed 20TB of NAS storage and supported VMware and Veeam virtualisation.",
      "Secured over 100 endpoints with Sophos Anti-Virus.",
    ],
  },
  {
    id: "03",
    org: "James Fletcher",
    location: "London, UK",
    period: "Jun 2024 – Jul 2024",
    role: "Software Intern",
    bullets: [
      "Built a full-stack Streamlit and Python platform automating repository metric analysis across hundreds of projects.",
      "Delivered API-powered insights about 90% faster, removing manual data checks.",
    ],
  },
];

export const educationItems: EducationEntry[] = [
  {
    id: "01",
    institution: "Queen Mary University of London",
    period: "2024 – 2027",
    qualification: "BSc Computer Science with Management",
    headline: "London, UK",
    bullets: [
      "First class expected.",
      "Relevant modules: Procedural Programming; Object-Oriented Programming; Fundamentals of Web Technologies; Information Systems Analysis; Database Systems; Algorithms and Data Structures; Software Engineering.",
    ],
  },
  {
    id: "02",
    institution: "American International School of Lusaka",
    period: "2020 – 2023",
    qualification: "International Baccalaureate",
    headline: "Lusaka, Zambia",
    bullets: [
      "International Baccalaureate Diploma programme.",
      "Subjects: Economics, Mathematics, Biology, Geography, French, Literature.",
    ],
  },
];

export const techGroups: TechGroup[] = [
  {
    id: "01",
    name: "Languages & human skills",
    items: ["English (fluent)"],
    note: "Affiliation: Hyperlink London",
  },
  {
    id: "02",
    name: "Programming languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "PHP"],
  },
  {
    id: "03",
    name: "Frameworks & UI",
    items: ["Next.js", "React Native", "Expo", "Tailwind CSS", "Streamlit", "Swing", "Tkinter"],
  },
  {
    id: "04",
    name: "Databases & data",
    items: ["MySQL", "Supabase (PostgreSQL)"],
  },
];
