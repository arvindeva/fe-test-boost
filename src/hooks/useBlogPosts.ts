import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { BlogPost } from "@/types/blog";

const DEFAULT_BLOG_POSTS: BlogPost[] = [
  {
    id: "abc123",
    title: "This is my first blog post",
    slug: "this-is-my-first-blog-post",
    author: "Arvindeva Wibisono",
    summary: "First post",
    category: "Tech",
    content: "Hi! This is my first blog post. Let's see if this works",
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "def456",
    title: "Blog Post 2 - Testing Purpose",
    slug: "blog-post-2-testing-purpose",
    author: "Test User",
    summary: "This is just for testing the blog list functionality",
    category: "Business",
    content:
      "Lorem ipsum dolor sit amet. This is obviously a test post to see if our blog list works correctly. Nothing meaningful here, just testing!",
    createdAt: new Date("2024-01-16"),
  },
];

export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useLocalStorage<BlogPost[]>(
    "blog-posts",
    DEFAULT_BLOG_POSTS
  );

  // Save default posts to localStorage if not already saved
  useEffect(() => {
    if (typeof window !== "undefined") {
      const existingPosts = window.localStorage.getItem("blog-posts");
      if (!existingPosts) {
        setBlogPosts(DEFAULT_BLOG_POSTS);
      }
    }
  }, [setBlogPosts]);

  const addBlogPost = (post: Omit<BlogPost, "id" | "createdAt">) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setBlogPosts((currentPosts) => [...currentPosts, newPost]);
    return newPost;
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== id)
    );
  };

  const getBlogPost = (id: string) => {
    return blogPosts.find((post) => post.id === id);
  };

  return {
    blogPosts,
    addBlogPost,
    deleteBlogPost,
    getBlogPost,
  };
}
