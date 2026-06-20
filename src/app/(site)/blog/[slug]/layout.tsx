import { ArticleLayout } from "@/components/layout/ArticleLayout";

export default function BlogArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ArticleLayout backHref="/blog" backLabel="Back to blog">
      {children}
    </ArticleLayout>
  );
}
