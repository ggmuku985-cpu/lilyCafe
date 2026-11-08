import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-cream-200/50 border-b border-espresso-900/5",
        className
      )}
    >
      {/* Decorative ambient elements */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-sage-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 mb-4 text-xs font-sans text-espresso-700/60">
            <Link href="/" className="hover:text-espresso-950 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-gold-600" />
            <span className="text-espresso-950 font-medium" aria-current="page">
              {breadcrumb}
            </span>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-subtle" />
            <span className="text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase text-espresso-700">
              {eyebrow}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse-subtle" />
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-espresso-950 font-normal tracking-tight leading-[1.1] max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-4 text-base md:text-lg text-espresso-700/80 font-sans max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

