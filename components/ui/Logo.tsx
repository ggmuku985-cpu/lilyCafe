import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark" | "stacked";
  isScrolled?: boolean;
}

export function Logo({ className, variant = "full", isScrolled = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Café Lily - Chai, Kaapi & Artisan Bakes Home"
      className={cn("group flex items-center gap-3 transition-transform hover:opacity-95", className)}
    >
      {/* Lily Mandala Emblem */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-marigold-500/50 bg-cream-50 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="22" stroke="#D4A338" strokeWidth="1" strokeDasharray="2 2" opacity="0.7" />
          <g transform="translate(24, 25)">
            <path d="M0 6 C0 0 -1.5 -8 0 -13" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="-14" r="1.75" fill="#F59E0B" />
            <path d="M0 6 C-4 2 -6.5 -5 0 -15 C6.5 -5 4 2 0 6 Z" fill="#24140D" />
            <path d="M0 6 C-5.5 3.5 -12 0 -12 -7 C-12 -11 -7 -13 -4 -9 C-2 -5 -0.5 1 0 6 Z" fill="#C46845" />
            <path d="M0 6 C5.5 3.5 12 0 12 -7 C12 -11 7 -13 4 -9 C2 -5 0.5 1 0 6 Z" fill="#F59E0B" />
            <path d="M0 6 C-3 8 -9 8 -13 5 C-12 2 -8 3 -5 4 Z" fill="#708E62" />
            <path d="M0 6 C3 8 9 8 13 5 C12 2 8 3 5 4 Z" fill="#708E62" />
          </g>
        </svg>
      </div>

      {variant !== "mark" && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-serif text-2xl font-normal tracking-tight leading-none transition-colors",
              isScrolled ? "text-espresso-950" : "text-white drop-shadow-sm"
            )}
          >
            Café Lily
          </span>
          <span
            className={cn(
              "text-[10px] uppercase tracking-[0.25em] font-sans mt-0.5 transition-colors",
              isScrolled ? "text-terracotta-600 font-medium" : "text-marigold-300 font-medium"
            )}
          >
            Chai • Kaapi • Bakes
          </span>
        </div>
      )}
    </Link>
  );
}
