import type { CaseStudy } from "@/types/content";

const slug = "pharmacy-management" as const;
const imageBase = `/images/projects/${slug}`;

export const pharmacyManagement: CaseStudy = {
  slug,
  title: "Pharmacy Management System",
  description:
    "Full-stack clinic and pharmacy platform — patient management, appointments, and inventory — with React frontend and Django REST API.",
  techStack: ["React", "Django", "PostgreSQL", "JWT"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Full-stack Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "Pharmacy management dashboard with inventory and prescription overview",
  seo: {
    publishedAt: "2025-03-21",
    updatedAt: "2026-06-91",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "pharmacy management",
      "healthcare software",
      "Django",
      "React",
      "PostgreSQL",
    ],
  },
  liveUrl: "https://clinic-oupharmacy.vercel.app",
  repoLinks: [
    {
      label: "Backend",
      href: "https://github.com/VoMinhHung-SR/Clinic-Oupharmacy-BE",
    },
    {
      label: "Frontend",
      href: "https://github.com/VoMinhHung-SR/Clinic-Oupharmacy-FE",
    },
  ],
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Clinic OuPharmacy is a full-stack healthcare platform for managing patients, appointments, and pharmacy inventory — built as separate React and Django repositories that deploy together.",
        "The frontend handles staff dashboards, booking flows, and role-based routing; the backend exposes REST APIs with JWT auth and PostgreSQL persistence.",
      ],
    },
    {
      id: "problem",
      type: "text",
      title: "Problem",
      paragraphs: [
        "Pharmacy staff juggled inventory spreadsheets, paper prescription logs, and ad-hoc reporting. Errors in stock counts and delayed reordering created operational risk and wasted time.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Solution",
      items: [
        "Centralized inventory with low-stock alerts and reorder thresholds",
        "Prescription workflow with status tracking and audit history",
        "Role-based access for pharmacists, technicians, and admins",
        "Reporting views for daily operations and monthly summaries",
      ],
    },
    {
      id: "architecture",
      type: "text",
      title: "Architecture",
      paragraphs: [
        "React + Vite frontend with Material UI and Tailwind, deployed on Vercel. Django REST Framework API with PostgreSQL, JWT authentication, and Gunicorn — hosted on Render. Multi-language support (EN/VI) across the staff interface.",
      ],
    },
    {
      id: "outcomes",
      type: "metrics",
      title: "Outcomes",
      items: [
        { label: "Backend", value: "Django REST" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Users", value: "Multi-role staff" },
      ],
    },
    {
      id: "challenges",
      type: "bullets",
      title: "Challenges",
      items: [
        "Modeling inventory edge cases (partial units, returns, expirations)",
        "Designing permissions that match real pharmacy hierarchies",
        "Keeping forms fast on lower-end clinic hardware",
      ],
    },
    {
      id: "lessons",
      type: "bullets",
      title: "Lessons Learned",
      items: [
        "Domain modeling upfront saves refactoring when regulations change",
        "Optimistic UI is risky for inventory—prefer confirmed server state",
        "Staff onboarding flows matter as much as feature completeness",
      ],
    },
    {
      id: "screens",
      type: "gallery",
      title: "Screens",
      images: [
        {
          src: `${imageBase}/gallery-dashboard.png`,
          alt: "Pharmacy dashboard showing inventory summary and recent prescriptions",
          width: 1200,
          height: 750,
        },
      ],
    },
  ],
};
