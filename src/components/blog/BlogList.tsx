"use client";

import { useBlogPosts } from "@/hooks/useBlogPosts";
import { BlogItem } from "./BlogItem";

export function BlogList() {
  const { blogPosts } = useBlogPosts();

  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No blog posts yet
        </h3>
        <p className="text-gray-600 mb-4">
          Create your first blog post to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="">
      {blogPosts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
}
