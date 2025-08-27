"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { BlogPost } from "@/types/blog";

interface BlogDetailProps {
  slug: string;
}

export function BackToHomeButton() {
  return (
    <Link href="/">
      <Button variant="outline" className="cursor-pointer">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Button>
    </Link>
  );
}

export function BlogDetail({ slug }: BlogDetailProps) {
  const { getBlogPostBySlug, deleteBlogPost } = useBlogPosts();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const foundPost = getBlogPostBySlug(slug);
    setPost(foundPost || null);

    if (foundPost) {
      setFormattedDate(
        foundPost.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
  }, [slug, getBlogPostBySlug]);

  const handleDelete = () => {
    if (post && confirm("Are you sure you want to delete this blog post?")) {
      deleteBlogPost(post.id);
      router.push("/");
    }
  };

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Blog post not found
        </h1>
        <p className="text-muted-foreground mb-6">
          The blog post you&apos;re looking for doesn&apos;t exist.
        </p>
        <BackToHomeButton />
      </div>
    );
  }

  return (
    <article className="max-w-none">
      <div className="mb-6 flex justify-between items-center">
        <BackToHomeButton />
        <Button variant="destructive" size="sm" onClick={handleDelete}>
          <Trash2 className="w-4 h-4 mr-2" />
          Delete
        </Button>
      </div>
      <header className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl md:text-4xl font-bold text-foreground">
          {post.title}
        </h1>
        <Badge>{post.category}</Badge>
        <p className="text-muted-foreground">{formattedDate}</p>
        <p className="text-muted-foreground">{post.summary}</p>
        <p className="text-foreground">By {post.author}</p>
      </header>
      <div className="prose prose-lg max-w-none">
        <div className="whitespace-pre-wrap text-foreground leading-relaxed">
          {post.content}
        </div>
      </div>
    </article>
  );
}
