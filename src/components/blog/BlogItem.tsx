import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogItemProps {
  post: BlogPost;
}

export function BlogItem({ post }: BlogItemProps) {
  const formattedDate = post.createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.id}`}>
      <div className="py-6 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-3">{post.summary}</p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
          <span className="text-blue-600 text-sm font-medium hover:text-blue-800">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  );
}
