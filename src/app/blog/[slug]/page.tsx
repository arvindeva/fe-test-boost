import { Navbar } from "@/components/layout/navbar";
import { BlogDetail } from "@/components/blog/BlogDetail";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogDetail slug={slug} />
      </main>
    </div>
  );
}
