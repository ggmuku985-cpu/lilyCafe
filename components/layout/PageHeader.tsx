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
        "relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-cream-100 border-b border-espresso-900/10 bg-jaali-subtle",
        className
      )}
    >
      {/* Decorative ambient color accents */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-marigold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-terracotta-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 mb-3 text-xs font-sans text-espresso-700/70">
            <Link href="/" className="hover:text-espresso-950 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-marigold-600" />
            <span className="text-espresso-950 font-semibold" aria-current="page">
              {breadcrumb}
            </span>
          </nav>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-marigold-500" />
            <span className="text-xs md:text-sm font-sans font-semibold tracking-[0.2em] uppercase text-terracotta-600">
              {eyebrow}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-marigold-500" />
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso-950 font-normal tracking-tight leading-[1.12] max-w-3xl mx-auto">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-3.5 text-sm sm:text-base text-espresso-700/85 font-sans max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
