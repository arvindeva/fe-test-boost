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
            <Image
              src="/logo.webp"
              alt="Logo"
              width={128}
              height={128}
              className="mr-2"
              style={{ height: "auto" }}
            />
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
