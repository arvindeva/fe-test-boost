import { Badge } from "@/components/ui/badge";

interface ReviewFieldProps {
  label: string;
  value: string | undefined;
  type?: "text" | "content";
  fallback?: string;
}

export function ReviewField({
  label,
  value,
  type = "text",
  fallback = "Not provided",
}: ReviewFieldProps) {
  const renderValue = () => {
    if (!value) {
      return <span className="text-muted-foreground">{fallback}</span>;
    }

    switch (type) {
      case "content":
        return (
          <div className="max-h-60 overflow-y-auto bg-gray-50 p-3 rounded border">
            <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
              {value}
            </pre>
          </div>
        );

      default:
        return <p className="text-foreground">{value}</p>;
    }
  };

  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">
        {label}
      </h3>
      {renderValue()}
    </div>
  );
}
