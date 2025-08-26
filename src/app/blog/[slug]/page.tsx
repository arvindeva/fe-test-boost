import { Navbar } from "@/components/layout/navbar";
import { BlogDetail } from "@/components/blog/blog-detail";
import { PageContainer } from "@/components/ui/page-container";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageContainer>
        <BlogDetail slug={slug} />
      </PageContainer>
    </div>
  );
}
