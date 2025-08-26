import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";

interface BlogItemProps {
  post: BlogPost;
}

export function BlogItem({ post }: BlogItemProps) {
  const [formattedDate, setFormattedDate] = useState<string>("");

  useEffect(() => {
    setFormattedDate(
      post.createdAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, [post.createdAt]);

  return (
    <div className="flex flex-col gap-y-2">
      <span className="text-sm text-muted-foreground">{formattedDate}</span>
      <h2 className="text-xl font-semibold text-foreground hover:text-blue-600">
        <Link href={`/blog/${post.id}`}>{post.title}</Link>
      </h2>

      <p className="text-gray-600">{post.summary}</p>
      <Badge>{post.category}</Badge>

      <div className="flex justify-between items-center">
        <span className="text-sm text-foreground">By {post.author}</span>
      </div>
    </div>
  );
}
