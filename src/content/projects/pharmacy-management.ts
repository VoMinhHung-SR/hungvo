import type { CaseStudy } from "@/types/content";

const slug = "pharmacy-management" as const;
const imageBase = `/images/projects/${slug}`;

export const pharmacyManagement: CaseStudy = {
  slug,
  title: "Pharmacy Management System",
  description:
    "Healthcare platform for pharmacy inventory, prescriptions, and staff workflows built with React and Django.",
  techStack: ["React", "Django", "TypeScript", "PostgreSQL"],
  image: `${imageBase}/cover.png`,
  featured: false,
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
  repoUrl: "https://github.com/VoMinhHung-SR/Clinic-Oupharmacy-BE",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "A pharmacy management system designed to streamline inventory tracking, prescription handling, and day-to-day staff operations for small to mid-size pharmacies.",
        "The platform replaces fragmented spreadsheets and manual logs with a single source of truth for stock levels, orders, and patient-facing workflows.",
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
        "React frontend with TypeScript for typed forms and tables. Django REST API backed by PostgreSQL. Authentication and permissions enforced at the API layer with clear domain models for inventory, prescriptions, and users.",
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
