import { EmailRail } from "@/components/layout/EmailRail";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SocialRail } from "@/components/layout/SocialRail";
import { Container } from "@/components/ui/Container";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-full">
      <SocialRail />
      <EmailRail />
      <Header />
      <Container as="main" id="main-content" className="py-8 lg:px-12 xl:px-16">
        {children}
      </Container>
      <Container className="pb-8 lg:px-12 xl:px-16">
        <Footer />
      </Container>
    </div>
  );
}
