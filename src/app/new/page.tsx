import { Navbar } from "@/components/layout/navbar";
import { BlogWizard } from "@/components/wizard/blog-wizard";

export default function NewBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogWizard />
      </main>
    </div>
  );
}
