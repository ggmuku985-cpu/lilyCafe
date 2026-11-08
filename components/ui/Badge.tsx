import { cn } from "@/lib/utils";
import type { DietaryBadge } from "@/data/menu";

interface BadgeProps {
  type: DietaryBadge | "ChefsPick" | "Bestseller" | "New";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({ type, className, size = "sm" }: BadgeProps) {
  const configs: Record<
    BadgeProps["type"],
    { label: string; bg: string; text: string; border: string; title: string }
  > = {
    V: {
      label: "Vegetarian",
      bg: "bg-sage-100",
      text: "text-sage-800",
      border: "border-sage-400/40",
      title: "Vegetarian",
    },
    VG: {
      label: "Vegan",
      bg: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-300",
      title: "100% Plant-Based Vegan",
    },
    GF: {
      label: "Gluten-Free",
      bg: "bg-amber-50",
      text: "text-amber-800",
      border: "border-amber-300",
      title: "Gluten-Free Recipe",
    },
    ChefsPick: {
      label: "Chef's Pick",
      bg: "bg-terracotta-100",
      text: "text-terracotta-700",
      border: "border-terracotta-300",
      title: "Curated Specialty Recommendation",
    },
    Bestseller: {
      label: "Bestseller",
      bg: "bg-gold-100",
      text: "text-gold-700",
      border: "border-gold-300",
      title: "Guest Favorite & Most Ordered",
    },
    New: {
      label: "Seasonal",
      bg: "bg-cream-200",
      text: "text-espresso-800",
      border: "border-cream-400",
      title: "New Seasonal Special",
    },
  };

  const config = configs[type] || configs.V;

  return (
    <span
      title={config.title}
      className={cn(
        "inline-flex items-center font-sans font-medium rounded-full border transition-colors",
        config.bg,
        config.text,
        config.border,
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
        className
      )}
    >
      {config.label}
    </span>
  );
}

