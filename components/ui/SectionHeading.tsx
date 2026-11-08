import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={cn("flex flex-col max-w-2xl mb-12 md:mb-16", alignmentClass, className)}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full animate-pulse-subtle",
              light ? "bg-gold-400" : "bg-gold-500"
            )}
          />
          <span
            className={cn(
              "text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase",
              light ? "text-cream-200" : "text-espresso-700"
            )}
          >
            {eyebrow}
          </span>
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full animate-pulse-subtle",
              light ? "bg-gold-400" : "bg-gold-500"
            )}
          />
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.15]",
          light ? "text-cream-50" : "text-espresso-950"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg font-sans font-normal leading-relaxed max-w-xl",
            light ? "text-cream-200/80" : "text-espresso-700/80"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

