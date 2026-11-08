import { cn } from "@/lib/utils";

export type DietaryType = "veg" | "non-veg";

interface BadgeProps {
  type?: "Bestseller" | "ChefsPick" | "Spicy" | "Popular" | "Seasonal" | "ChaiSpecial";
  dietary?: DietaryType;
  className?: string;
  size?: "sm" | "md";
}

/**
 * Standard Indian FSSAI Veg (Green) & Non-Veg (Red/Brown) Dot
 */
export function VegIndicator({
  type,
  className,
  showLabel = false,
}: {
  type: DietaryType;
  className?: string;
  showLabel?: boolean;
}) {
  const isVeg = type === "veg";

  return (
    <div
      className={cn("inline-flex items-center gap-1.5", className)}
      title={isVeg ? "100% Vegetarian" : "Contains Egg / Meat"}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-sm border p-[2px] transition-transform",
          isVeg
            ? "border-emerald-600 bg-white"
            : "border-red-700 bg-white"
        )}
        style={{ width: "15px", height: "15px" }}
      >
        <div
          className={cn(
            "rounded-full",
            isVeg ? "bg-emerald-600" : "bg-red-700"
          )}
          style={{ width: "7px", height: "7px" }}
        />
      </div>
      {showLabel && (
        <span
          className={cn(
            "text-[11px] font-sans font-medium uppercase tracking-wider",
            isVeg ? "text-emerald-800" : "text-red-800"
          )}
        >
          {isVeg ? "Veg" : "Non-Veg"}
        </span>
      )}
    </div>
  );
}

export function Badge({ type, dietary, className, size = "sm" }: BadgeProps) {
  if (dietary) {
    return <VegIndicator type={dietary} className={className} showLabel />;
  }

  const configs: Record<
    NonNullable<BadgeProps["type"]>,
    { label: string; bg: string; text: string; border: string }
  > = {
    Bestseller: {
      label: "Bestseller",
      bg: "bg-marigold-100",
      text: "text-marigold-800",
      border: "border-marigold-300",
    },
    ChefsPick: {
      label: "Chef's Pick",
      bg: "bg-terracotta-100",
      text: "text-terracotta-700",
      border: "border-terracotta-300",
    },
    Spicy: {
      label: "🌶️ Mild Spice",
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
    },
    ChaiSpecial: {
      label: "Kulhad Special",
      bg: "bg-amber-100",
      text: "text-amber-900",
      border: "border-amber-300",
    },
    Popular: {
      label: "Popular",
      bg: "bg-cream-200",
      text: "text-espresso-800",
      border: "border-cream-300",
    },
    Seasonal: {
      label: "Seasonal",
      bg: "bg-sage-100",
      text: "text-sage-800",
      border: "border-sage-300",
    },
  };

  const config = type ? configs[type] : configs.Bestseller;

  return (
    <span
      className={cn(
        "inline-flex items-center font-sans font-semibold rounded-full border shadow-xs tracking-wide",
        config.bg,
        config.text,
        config.border,
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-3 py-1 text-xs",
        className
      )}
    >
      {config.label}
    </span>
  );
}
