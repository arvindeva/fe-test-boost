import { BlogDetail } from "@/components/blog/blog-detail";
import { PageLayout } from "@/components/ui/page-layout";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <PageLayout>
      <BlogDetail slug={slug} />
    </PageLayout>
  );
}
