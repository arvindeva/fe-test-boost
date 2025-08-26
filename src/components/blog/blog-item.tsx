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
      <h2 className="text-xl font-semibold text-foreground">
        <Link className="hover:text-blue-600" href={`/blog/${post.slug}`}>
          {post.title}{" "}
        </Link>
      </h2>
      <div>
        <span className="text-sm text-muted-foreground">{formattedDate}</span>{" "}
        <span className="text-sm text-foreground">by {post.author}</span>
      </div>
      <p className="text-muted-foreground">{post.summary}</p>
      <Badge>{post.category}</Badge>
      <div className="flex justify-between items-center"></div>
    </div>
  );
}
