import type { CaseStudy } from "@/types/content";

const slug = "pharmacy-management" as const;
const imageBase = `/images/projects/${slug}`;

export const pharmacyManagement: CaseStudy = {
  slug,
  title: "Pharmacy Management System",
  description:
    "Clinic ops dashboard for OUPharmacy—patients, bookings, prescribing, and inventory in one place, with weekly doctor load and monthly revenue at a glance.",
  techStack: ["React", "Django", "PostgreSQL", "JWT"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Full-stack Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "OUPharmacy staff dashboard with patient metrics and revenue charts",
  seo: {
    publishedAt: "2025-03-21",
    updatedAt: "2026-10-13",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "pharmacy management",
      "clinic software",
      "Django REST",
      "React",
      "OUPharmacy",
      "dashboard analytics",
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
        "Pharmacy Management System is the staff-facing product in the OUPharmacy ecosystem—replacing spreadsheets and paper logs with one place to run the clinic day.",
        "Pharmacists and admins handle patients, bookings, waiting rooms, prescribing, and payments from a bilingual dashboard. The same catalog and APIs feed OUPharmacy Store on the customer side.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Key features",
      items: [
        "Home dashboard: patient / user / booking / product KPIs",
        "Weekly doctor schedule chart and monthly revenue (VNĐ) trends",
        "Examination flow: phiếu khám, lịch khám, phòng chờ, kê toa, thanh toán",
        "Medicine catalog with SKU / variant units shared to the storefront",
        "Role-based access and EN / VI UI for clinic staff",
      ],
    },
    {
      id: "architecture",
      type: "text",
      title: "Built with",
      paragraphs: [
        "React + Vite staff app on Vercel; Django REST API and PostgreSQL on Render. JWT auth, bilingual UI, and REST endpoints shared across the OUPharmacy product family.",
      ],
    },
    {
      id: "outcomes",
      type: "metrics",
      title: "At a glance",
      items: [
        { label: "Status", value: "Live demo" },
        { label: "Languages", value: "EN / VI" },
        { label: "Ecosystem", value: "OUPharmacy" },
      ],
    },
    {
      id: "screens",
      type: "gallery",
      title: "Screens",
      images: [
        {
          src: `${imageBase}/gallery-dashboard.png`,
          alt: "OUPharmacy staff dashboard with weekly schedules and monthly revenue",
          width: 1600,
          height: 900,
        },
      ],
    },
  ],
};
