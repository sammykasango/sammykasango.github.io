export const profile = {
  name: "Sammy M. Kasango",
  title: "Digital Systems Engineer",
  descriptor: "Software • Networks • Growth",
  location: "Nairobi, Kenya",
  email: "hellosammykasango@gmail.com",
  whatsapp: "https://wa.me/254792697745",
  linkedin: "https://linkedin.com/in/sammykasango",
  github: "https://github.com/sammykasango",
  handle: "@sammykasango",
  resume: "/assets/Sammy_M_Kasango_Resume.pdf",
  photo: "/assets/profile.jpg",
};

export const outcomes = [
  {
    n: "01",
    title: "Scalable Software",
    body: "Useful tools that simplify work and help people focus on what matters.",
  },
  {
    n: "02",
    title: "Secure Infrastructure",
    body: "Reliable networks that keep teams, devices, and services connected.",
  },
  {
    n: "03",
    title: "Measurable Growth",
    body: "Digital experiences that help people discover and engage.",
  },
];

export const expertise = [
  {
    n: "01",
    name: "Software Systems",
    description:
      "Building useful applications and automation around the needs of the people who use them.",
    capabilities: [
      "Web applications & portals",
      "Automation & scripting tools",
      "REST APIs & backend systems",
      "Database design & optimization",
    ],
    motif: "code" as const,
    tone: "dark" as const,
  },
  {
    n: "02",
    name: "Network Infrastructure",
    description:
      "Designing secure, dependable networks that keep teams, devices, and services connected.",
    capabilities: [
      "LAN/WAN architecture & design",
      "Network security & hardening",
      "VLAN, DHCP & routing protocols",
      "System monitoring & optimization",
    ],
    motif: "nodes" as const,
    tone: "steel" as const,
  },
  {
    n: "03",
    name: "Digital Growth Systems",
    description:
      "Aligning technology and digital strategy with audience needs to support sustainable growth.",
    capabilities: [
      "SEO-optimized platforms",
      "Marketing funnels & automation",
      "Analytics & performance tracking",
      "Conversion-focused architecture",
    ],
    motif: "flow" as const,
    tone: "ivory" as const,
  },
];

export const skillGroups = [
  {
    group: "Engineering",
    skills: [
      { name: "HTML / CSS", value: 90 },
      { name: "JavaScript", value: 78 },
      { name: "Python", value: 80 },
      { name: "APIs & Backend", value: 72 },
      { name: "C++", value: 75 },
    ],
  },
  {
    group: "Networking",
    skills: [
      { name: "TCP/IP & Protocols", value: 85 },
      { name: "Cisco IOS / Packet Tracer", value: 80 },
      { name: "Network Security", value: 76 },
      { name: "VLAN / VLSM / DHCP", value: 82 },
      { name: "LAN/WAN Design", value: 78 },
    ],
  },
  {
    group: "Digital Marketing",
    skills: [
      { name: "SEO Optimization", value: 82 },
      { name: "Google Analytics", value: 75 },
      { name: "Conversion Funnels", value: 70 },
      { name: "Content Strategy", value: 78 },
      { name: "WordPress / CMS", value: 85 },
    ],
  },
];

export const tools = [
  "Git & GitHub",
  "WordPress",
  "MySQL",
  "VS Code",
  "Cisco Packet Tracer",
  "Tkinter",
  "ReportLab",
  "GitHub Pages",
  "Figma",
];

export const services = [
  {
    n: "01",
    title: "Website & Web App Development",
    description: "Websites and apps shaped around user needs, clear goals, and lasting performance.",
    capabilities: [
      "Business websites & portfolios",
      "Conversion-focused landing pages",
      "E-commerce & booking systems",
    ],
    cta: "Build a Web System",
  },
  {
    n: "02",
    title: "Network Setup for SMEs",
    description: "Secure, dependable networks that keep teams connected and work moving.",
    capabilities: [
      "LAN/WAN design & deployment",
      "VLAN & firewall configuration",
      "WiFi & hotspot systems",
    ],
    cta: "Design a Network",
  },
  {
    n: "03",
    title: "System Automation",
    description: "Practical automation that gives teams time back and reduces avoidable errors.",
    capabilities: [
      "Workflow & process automation",
      "Report generation tools",
      "API integration & bots",
    ],
    cta: "Automate a Process",
  },
  {
    n: "04",
    title: "SEO & Digital Optimization",
    description: "SEO and analytics that help people find, understand, and act on what you offer.",
    capabilities: [
      "Technical SEO audits",
      "Google Analytics & Search Console",
      "Performance optimization",
    ],
    cta: "Optimize Growth",
  },
];

export type Project = {
  id: string;
  title: string;
  category: "software" | "network" | "digital";
  categoryLabel: string;
  year: string;
  impact: string;
  technologies: string[];
  visual: "code" | "dashboard" | "topology" | "browser";
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "code-smell-detector",
    title: "C++ Code Smell Detector",
    category: "software",
    categoryLabel: "Software",
    year: "2026",
    impact:
      "Automates recurring code-quality checks to support consistent reviews and easier maintenance.",
    technologies: ["C++", "AST", "Lexer", "Unit Testing"],
    visual: "code",
    links: [
      {
        label: "Project Documentation",
        href: "https://sammykasango.github.io/code-smell-detector",
        primary: true,
      },
      { label: "GitHub Profile", href: "https://github.com/sammykasango" },
    ],
  },
  {
    id: "church-union",
    title: "Church Union Management System",
    category: "software",
    categoryLabel: "Software",
    year: "2026",
    impact:
      "Centralizes member records and reporting, helping teams manage information more consistently.",
    technologies: ["Python", "Tkinter", "ReportLab", "SQLite"],
    visual: "dashboard",
    links: [
      { label: "GitHub Profile", href: "https://github.com/sammykasango", primary: true },
    ],
  },
  {
    id: "vlan-lab",
    title: "Enterprise VLAN Network Lab",
    category: "network",
    categoryLabel: "Network",
    year: "2026",
    impact:
      "Demonstrates segmented routing designed to keep users and network services reliably connected.",
    technologies: ["Cisco IOS", "VLAN", "VLSM", "DHCP", "Router-on-a-Stick"],
    visual: "topology",
    links: [
      { label: "GitHub Profile", href: "https://github.com/sammykasango", primary: true },
    ],
  },
  {
    id: "nuru-oil-solutions",
    title: "Nuru Oil Solutions Premium Brand Platform",
    category: "digital",
    categoryLabel: "Digital",
    year: "2026",
    impact:
      "A polished, mobile-first storefront designed to strengthen trust and support wholesale inquiries.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify", "Responsive UI"],
    visual: "browser",
    links: [
      { label: "Visit Live Site", href: "https://nuru-oil-solutions.netlify.app/", primary: true },
    ],
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "network", label: "Network" },
  { id: "digital", label: "Digital" },
] as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "stack", label: "Toolkit" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
