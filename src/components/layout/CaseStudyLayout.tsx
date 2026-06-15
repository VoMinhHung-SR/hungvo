import { InternalLink } from "@/components/ui/ExternalLink";
import { Container } from "@/components/ui/Container";

interface CaseStudyLayoutProps {
  children: React.ReactNode;
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <div className="min-h-full">
      <Container className="py-8">
        <InternalLink href="/#projects" className="text-sm text-muted">
          Back to work
        </InternalLink>
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
