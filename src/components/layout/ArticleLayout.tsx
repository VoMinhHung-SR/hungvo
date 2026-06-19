import { BackLink } from "@/components/ui/BackLink";
import { Container } from "@/components/ui/Container";

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
      <Container className="py-8">
        <BackLink href={backHref} label={backLabel} />
      </Container>
      <Container
        as="article"
        id="main-content"
        className="max-w-reading pb-16"
      >
        {children}
      </Container>
    </div>
  );
}
