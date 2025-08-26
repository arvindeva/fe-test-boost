import { Navbar } from "@/components/layout/navbar";
import { BlogList } from "@/components/blog/blog-list";
import { PageContainer } from "@/components/ui/page-container";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageContainer>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <BlogList />
      </PageContainer>
    </div>
  );
}
