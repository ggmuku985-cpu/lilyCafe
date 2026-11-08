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
      aria-label="Cafe Lily - Specialty Coffee & Artisan Bakery Home"
      className={cn("group flex items-center gap-3 transition-transform hover:opacity-95", className)}
    >
      {/* Lily Icon Emblem */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 bg-cream-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="22" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
          <g transform="translate(24, 25)">
            <path d="M0 6 C0 0 -2 -10 0 -13" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="-14" r="1.75" fill="#C5A059" />
            <path d="M0 6 C-4 2 -7 -6 0 -16 C7 -6 4 2 0 6 Z" fill="#2B1B14" />
            <path d="M0 6 C-6 4 -12 -1 -12 -8 C-12 -12 -7 -14 -4 -10 C-2 -6 -1 1 0 6 Z" fill="#7A8F6B" />
            <path d="M0 6 C6 4 12 -1 12 -8 C12 -12 7 -14 4 -10 C2 -6 1 1 0 6 Z" fill="#D9A88F" />
            <path d="M0 6 C0 11 -2 15 -4 18" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      {variant !== "mark" && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-serif text-2xl font-normal tracking-tight leading-none text-espresso-900 transition-colors",
              isScrolled ? "text-espresso-950" : "text-espresso-900"
            )}
          >
            Café Lily
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-700/70 font-sans mt-0.5">
            Roastery &amp; Botanical
          </span>
        </div>
      )}
    </Link>
  );
}

