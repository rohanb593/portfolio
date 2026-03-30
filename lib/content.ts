export type ProjectEntry = {
  id: string;
  title: string;
  category: string;
  year: string;
  href: string;
};

export const siteMeta = {
  name: "Rohan Bhagat",
  location: "London / Lusaka",
  email: "rohan.bhagat1@outlook.com",
  github: "https://github.com/rohanb593",
  linkedin: "https://www.linkedin.com/in/rohan-bhagat-a64785341",
};

export const navLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/tech", label: "Tech" },
] as const;

export const homeProjects: ProjectEntry[] = [
  { id: "01", title: "Repository Scout", category: "Data Tooling", year: "2024", href: "https://github.com/rohanb593/repo-scout" },
  {
    id: "02",
    title: "Inventory System",
    category: "Web Application",
    year: "2025",
    href: "https://github.com/rohanb593/Corporate-IT-Solutions",
  },
  {
    id: "03",
    title: "Licence Tracker",
    category: "Operations",
    year: "2025",
    href: "https://github.com/rohanb593/CITS-Python-Project",
  },
  { id: "04", title: "Portfolio System", category: "Editorial Web", year: "2026", href: "https://github.com/rohanb593/portfolio" },
];

export const experienceItems = [
  {
    id: "01",
    org: "Hyperlink Society, Queen Mary University of London",
    period: "Present",
    role: "Software Engineer",
    summary:
      "Built internal software for stock control and society operations, with a focus on practical workflows and maintainable architecture.",
  },
  {
    id: "02",
    org: "Corporate IT Solutions",
    period: "Jun 2025 - Aug 2025",
    role: "Summer Intern",
    summary:
      "Delivered a licence management platform, improved inventory checkout speed, and supported network segmentation and infrastructure hardening.",
  },
  {
    id: "03",
    org: "James Fletcher",
    period: "Jun 2024 - Jul 2024",
    role: "Summer Intern",
    summary:
      "Developed Repository Scout, reducing manual analysis time through API-driven repository data collection and reporting.",
  },
];

export const educationItems = [
  {
    id: "01",
    institution: "Queen Mary University of London",
    period: "Sep 2024 - Jun 2028",
    qualification: "BSc Computer Science with Management",
    notes: "Year 1: First Class Honours (74.7%).",
  },
  {
    id: "02",
    institution: "American International School of Lusaka",
    period: "Sep 2020 - Jun 2023",
    qualification: "International Baccalaureate",
    notes: "Economics, Mathematics, Biology, Geography, French, Literature.",
  },
];

export const techGroups = [
  { id: "01", name: "Languages", items: "Java, Python, JavaScript, TypeScript, SQL, PHP, HTML, CSS" },
  { id: "02", name: "Frameworks", items: "Next.js, React, Streamlit, Node.js, Swing, Tkinter" },
  { id: "03", name: "Tooling", items: "Git, GitHub, MySQL, VMware, Veeam, Cloudflare" },
];
