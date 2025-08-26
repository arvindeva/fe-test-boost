import { Navbar } from "@/components/ui/navbar";
import { PageContainer } from "./page-container";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </div>
  );
}
