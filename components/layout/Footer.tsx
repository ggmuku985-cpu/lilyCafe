import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-espresso-900/60 pt-16 md:pt-20 pb-12 overflow-hidden relative">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-cream-100/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/40 bg-espresso-900 shadow-sm">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <circle cx="24" cy="24" r="22" stroke="#C5A059" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                  <g transform="translate(24, 25)">
                    <path d="M0 6 C0 0 -2 -10 0 -13" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="0" cy="-14" r="1.75" fill="#C5A059" />
                    <path d="M0 6 C-4 2 -7 -6 0 -16 C7 -6 4 2 0 6 Z" fill="#FAF6EF" />
                    <path d="M0 6 C-6 4 -12 -1 -12 -8 C-12 -12 -7 -14 -4 -10 C-2 -6 -1 1 0 6 Z" fill="#7A8F6B" />
                    <path d="M0 6 C6 4 12 -1 12 -8 C12 -12 7 -14 4 -10 C2 -6 1 1 0 6 Z" fill="#D9A88F" />
                    <path d="M0 6 C0 11 -2 15 -4 18" stroke="#7A8F6B" strokeWidth="2" strokeLinecap="round" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight text-cream-50">Café Lily</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-cream-300/70 font-sans">
                  Roastery &amp; Botanical Sanctuary
                </span>
              </div>
            </div>

            <p className="text-sm text-cream-200/80 font-sans leading-relaxed max-w-sm">
              An artisan sanctuary devoted to single-origin estate coffees, European viennoiserie, and slow, intentional mornings in Nashik.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 bg-cream-100/5 text-cream-200 hover:text-gold-400 hover:border-gold-400 hover:scale-105 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 bg-cream-100/5 text-cream-200 hover:text-gold-400 hover:border-gold-400 hover:scale-105 transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 bg-cream-100/5 text-cream-200 hover:text-gold-400 hover:border-gold-400 hover:scale-105 transition-all"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-cream-50 font-normal tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-cream-200/80">
              <li>
                <Link href="/menu" className="hover:text-gold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Specialty Menu</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Our Story &amp; Estates</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Visual Atmosphere</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-gold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Book a Table</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Find Us &amp; FAQs</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-cream-50 font-normal tracking-wide">
              Visiting Hours
            </h3>
            <div className="space-y-3 text-xs md:text-sm font-sans text-cream-200/80">
              <div>
                <span className="font-semibold text-cream-100 block">Monday – Friday</span>
                <span className="text-cream-300/70">7:30 AM – 10:30 PM</span>
              </div>
              <div>
                <span className="font-semibold text-cream-100 block">Saturday – Sunday</span>
                <span className="text-cream-300/70">8:00 AM – 11:30 PM</span>
              </div>
              <div className="pt-1">
                <span className="text-[11px] text-gold-400/90 font-mono">
                  Kitchen closes 45 mins before closing
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-cream-50 font-normal tracking-wide">
              Visit The Roastery
            </h3>
            <ul className="space-y-3 text-xs md:text-sm font-sans text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  Plot 14, Serene Boulevard, Gangapur Road, Nashik, Maharashtra 422005
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <a href="tel:+919823045678" className="hover:text-gold-400 transition-colors">
                  +91 98230 45678
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <a href="mailto:hello@cafelily.in" className="hover:text-gold-400 transition-colors">
                  hello@cafelily.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-cream-300/60">
          <p>© {currentYear} Café Lily Specialty Roastery. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Crafted with intentional detail &amp; slow coffee philosophy</span>
            <span className="inline-flex items-center gap-1 text-gold-400">
              Nashik, MH
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

