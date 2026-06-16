import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";

export default function ProjectRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CaseStudyLayout>{children}</CaseStudyLayout>;
}
