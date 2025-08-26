"use client";

import { useBlogPosts } from "@/hooks/useBlogPosts";
import { BlogItem } from "./BlogItem";

export function BlogList() {
  const { blogPosts } = useBlogPosts();

  const sortedPosts = blogPosts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  if (blogPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground mb-2">
          No blog posts yet
        </h3>
        <p className="text-muted-600 mb-4">
          Create your first blog post to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-12">
      {sortedPosts.map((post) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
}
