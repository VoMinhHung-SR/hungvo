import { ArticleLayout } from "@/components/layout/ArticleLayout";

export default function ProjectRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ArticleLayout backHref="/#projects" backLabel="Back to work">
      {children}
    </ArticleLayout>
  );
}
