import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="relative w-32 h-32 mr-2">
              <Image
                src="/logo.webp"
                alt="MyBoost Logo"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
            <span className="text-4xl font-medium text-white translate-y-0.5">
              Blog
            </span>
          </Link>

          <Link href="/new">
            <Button variant="secondary">
              <Plus className="w-4 h-4" />
              Create
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
