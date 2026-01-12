import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "article" | "div";
  ariaLabel?: string;
}

export function Section({
  id,
  className,
  children,
  as: Component = "section",
  ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn("section", className)}
    >
      <div className="section-container">{children}</div>
    </Component>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  centered = false,
}: {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)}>
      {badge && (
        <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-xs font-medium tracking-wider uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
