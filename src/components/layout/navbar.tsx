import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">
              MyBoost Blog
            </span>
          </Link>

          <Link href="/new">
            <Button>+ Create</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
