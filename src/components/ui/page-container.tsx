import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8", className)}>
      {children}
    </main>
  );
}