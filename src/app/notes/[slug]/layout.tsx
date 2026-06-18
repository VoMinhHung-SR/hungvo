import { ArticleLayout } from "@/components/layout/ArticleLayout";

export default function NoteArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ArticleLayout backHref="/notes" backLabel="Back to notes">
      {children}
    </ArticleLayout>
  );
}
