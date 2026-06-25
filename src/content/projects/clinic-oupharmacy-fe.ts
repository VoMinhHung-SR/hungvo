import type { CaseStudy } from "@/types/content";

const slug = "clinic-oupharmacy-fe" as const;
const imageBase = `/images/projects/${slug}`;

export const clinicOupharmacyFe: CaseStudy = {
  slug,
  title: "Clinic OuPharmacy Frontend",
  description:
    "React client for clinic pharmacy workflows — prescriptions, inventory views, and staff dashboards paired with the Django API.",
  techStack: ["React", "TypeScript", "TanStack Query", "Tailwind CSS"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Frontend Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "Clinic OuPharmacy frontend showing prescription queue and inventory panels",
  seo: {
    publishedAt: "2025-08-10",
    updatedAt: "2026-06-01",
    ogImage: `${imageBase}/hero.png`,
    keywords: ["pharmacy", "React", "healthcare", "TypeScript", "clinic"],
  },
  repoUrl: "https://github.com/VoMinhHung-SR/Clinic-Oupharmacy-BE",
  sections: [
    {
      id: "overview",
      type: "text",
      title: "Overview",
      paragraphs: [
        "Frontend for the Clinic OuPharmacy platform — focused on fast prescription handling, inventory visibility, and role-based views for pharmacy staff.",
        "Built alongside the Django backend with a typed API layer and optimistic UI for common workflows.",
      ],
    },
    {
      id: "stack",
      type: "bullets",
      title: "Tech highlights",
      items: [
        "React + TypeScript with TanStack Query for server state",
        "Tailwind CSS for consistent healthcare UI patterns",
        "Role-based routes for pharmacists, admins, and staff",
      ],
    },
  ],
};
