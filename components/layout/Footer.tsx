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
  MessageCircle,
} from "lucide-react";
import { siteConfig, getWhatsAppGeneralUrl } from "@/lib/site-config";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-espresso-900/60 pt-16 md:pt-20 pb-12 overflow-hidden relative">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-marigold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-terracotta-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-14 border-b border-cream-100/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-marigold-400/40 bg-espresso-900 shadow-xs">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <circle cx="24" cy="24" r="22" stroke="#D4A338" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                  <g transform="translate(24, 25)">
                    <path d="M0 6 C0 0 -1.5 -8 0 -13" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="0" cy="-14" r="1.75" fill="#F59E0B" />
                    <path d="M0 6 C-4 2 -6.5 -5 0 -15 C6.5 -5 4 2 0 6 Z" fill="#FAF6EF" />
                    <path d="M0 6 C-5.5 3.5 -12 0 -12 -7 C-12 -11 -7 -13 -4 -9 C-2 -5 -0.5 1 0 6 Z" fill="#C46845" />
                    <path d="M0 6 C5.5 3.5 12 0 12 -7 C12 -11 7 -13 4 -9 C2 -5 0.5 1 0 6 Z" fill="#F59E0B" />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight text-white font-normal">Café Lily</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-marigold-300 font-sans">
                  Chai • Kaapi • Bakes
                </span>
              </div>
            </div>

            <p className="text-sm text-cream-200/85 font-sans leading-relaxed max-w-sm">
              Fresh coffee, warm kulhad chai, and homemade comfort snacks in a cozy garden setting on Gangapur Road, Nashik.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppGeneralUrl("general")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order or Chat on WhatsApp"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all text-xs font-medium"
              >
                <MessageCircle className="h-3.5 w-3.5 fill-current" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 bg-cream-100/5 text-cream-200 hover:text-marigold-400 hover:border-marigold-400 transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/15 bg-cream-100/5 text-cream-200 hover:text-marigold-400 hover:border-marigold-400 transition-all"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-cream-50 font-normal tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-sans text-cream-200/80">
              <li>
                <Link href="/menu" className="hover:text-marigold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Our Menu</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-marigold-400" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-marigold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>About Us</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-marigold-400" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-marigold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Photo Gallery</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-marigold-400" />
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-marigold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Book a Table</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-marigold-400" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-marigold-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Contact &amp; FAQs</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-marigold-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-cream-50 font-normal tracking-wide">
              Opening Hours
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm font-sans text-cream-200/80">
              <div>
                <span className="font-semibold text-cream-100 block">Monday – Friday</span>
                <span className="text-cream-300/70">{siteConfig.hours.weekdays}</span>
              </div>
              <div>
                <span className="font-semibold text-cream-100 block">Saturday – Sunday</span>
                <span className="text-cream-300/70">{siteConfig.hours.weekends}</span>
              </div>
              <div className="pt-1">
                <span className="text-[11px] text-marigold-400 font-medium">
                  Walk-ins always welcome
                </span>
              </div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="space-y-4">
            <h3 className="font-serif text-base text-cream-50 font-normal tracking-wide">
              Visit Us
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-cream-200/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-marigold-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-marigold-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-marigold-400 transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-marigold-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-marigold-400 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-cream-300/60">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="text-marigold-400/90 font-medium">{siteConfig.agencyCredit}</span>
            <span>Nashik, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
