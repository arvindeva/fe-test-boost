interface StepHeaderProps {
  title: string;
  description: string;
}

export function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}