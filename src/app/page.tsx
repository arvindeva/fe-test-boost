import { Navbar } from "@/components/layout/navbar";
import { BlogList } from "@/components/blog/BlogList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        <BlogList />
      </main>
    </div>
  );
}
