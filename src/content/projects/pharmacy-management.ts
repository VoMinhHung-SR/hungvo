import type { CaseStudy } from "@/types/content";

const slug = "pharmacy-management" as const;
const imageBase = `/images/projects/${slug}`;

export const pharmacyManagement: CaseStudy = {
  slug,
  title: "Pharmacy Management System",
  description:
    "The operations hub for OUPharmacy clinics—staff manage patients, appointments, and medicine stock from one dashboard. A live product with bilingual support, built for real pharmacy workflows.",
  techStack: ["React", "Django", "PostgreSQL", "JWT"],
  image: `${imageBase}/cover.png`,
  featured: true,
  role: "Full-stack Developer",
  timeline: "2025 – 2026",
  heroImage: `${imageBase}/hero.png`,
  heroImageAlt: "OUPharmacy staff dashboard for patients and inventory",
  seo: {
    publishedAt: "2025-03-21",
    updatedAt: "2026-06-01",
    ogImage: `${imageBase}/hero.png`,
    keywords: [
      "pharmacy management",
      "clinic software",
      "Django REST",
      "React",
      "OUPharmacy",
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
        "Pharmacists and admins handle patients, bookings, and inventory from a dashboard that speaks English and Vietnamese. The same data powers OUPharmacy Store on the customer side.",
      ],
    },
    {
      id: "solution",
      type: "bullets",
      title: "Key features",
      items: [
        "Patient records and role-based access for clinic staff",
        "Appointment booking with live availability",
        "Medicine inventory tracking with APIs for the storefront",
        "Dashboard with metrics and shortcuts for daily ops",
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
          alt: "OUPharmacy staff dashboard with inventory overview",
          width: 1200,
          height: 750,
        },
      ],
    },
  ],
};
