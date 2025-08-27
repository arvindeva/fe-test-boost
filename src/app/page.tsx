import { BlogList } from "@/components/blog/blog-list";
import { PageLayout } from "@/components/ui/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold text-foreground mb-8">
        Newest Blog Posts
      </h1>
      <BlogList />
    </PageLayout>
  );
}
