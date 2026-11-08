import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: "slow" | "normal" | "fast";
  reverse?: boolean;
}

export function Marquee({
  items,
  className,
  speed = "normal",
  reverse = false,
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-[marquee_45s_linear_infinite]",
    normal: "animate-[marquee_30s_linear_infinite]",
    fast: "animate-[marquee_18s_linear_infinite]",
  }[speed];

  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden whitespace-nowrap py-3.5 select-none",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-8 md:gap-12",
          speedClass,
          reverse && "[animation-direction:reverse]",
          "hover:[animation-play-state:paused]"
        )}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="inline-flex items-center gap-6">
            <span className="font-serif text-sm md:text-base tracking-widest uppercase font-medium text-cream-100/90">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}

