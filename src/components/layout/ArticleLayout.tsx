import { BackLink } from "@/components/ui/BackLink";

interface ArticleLayoutProps {
  children: React.ReactNode;
  backHref: string;
  backLabel?: string;
}

export function ArticleLayout({
  children,
  backHref,
  backLabel = "Back",
}: ArticleLayoutProps) {
  return (
    <div className="min-h-full">
      <BackLink href={backHref} label={backLabel} />
      <article className="mx-auto max-w-reading pt-8 pb-16">{children}</article>
    </div>
  );
}
