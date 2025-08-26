import { Navbar } from "@/components/layout/navbar";
import { BlogWizard } from "@/components/wizard/blog-wizard";
import { PageContainer } from "@/components/ui/page-container";

export default function NewBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageContainer>
        <BlogWizard />
      </PageContainer>
    </div>
  );
}
