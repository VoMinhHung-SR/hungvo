import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Nav } from "@/components/layout/Nav";
import { Container } from "@/components/ui/Container";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-full flex-col lg:grid lg:grid-cols-[12rem_1fr]">
      <aside className="border-b border-border lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:bg-surface/40 lg:px-6 lg:py-8 lg:backdrop-blur-sm">
        <Container className="flex flex-col gap-6 py-4 lg:px-0">
          <Header />
          <Nav />
        </Container>
      </aside>
      <div className="flex min-h-full flex-1 flex-col">
        <Container as="main" id="main-content" className="flex-1 py-8">
          {children}
        </Container>
        <Container className="py-6">
          <Footer />
        </Container>
      </div>
    </div>
  );
}
