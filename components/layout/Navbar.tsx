"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarCheck, Clock, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reservations", href: "/reservations" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-cream-100/90 backdrop-blur-md shadow-warm py-3.5 border-b border-espresso-900/10"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative font-sans text-sm font-medium tracking-wide transition-colors py-1",
                      isActive
                        ? "text-espresso-950 font-semibold"
                        : "text-espresso-800/80 hover:text-espresso-950"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                href="/reservations"
                variant="primary"
                size="sm"
                leftIcon={<CalendarCheck className="h-4 w-4 text-gold-400" />}
              >
                Reserve a Table
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                href="/reservations"
                className="flex items-center justify-center p-2 rounded-full bg-espresso-900 text-cream-50 hover:bg-espresso-950 transition-colors"
                aria-label="Reserve a Table"
              >
                <CalendarCheck className="h-4 w-4 text-gold-400" />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center p-2 rounded-lg text-espresso-900 hover:bg-cream-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-espresso-900" />
                ) : (
                  <Menu className="h-6 w-6 text-espresso-900" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed inset-0 z-30 md:hidden bg-cream-100 flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            {/* Nav list */}
            <div className="flex flex-col space-y-4 my-auto">
              {NAV_LINKS.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "block font-serif text-3xl transition-colors py-2 border-b border-espresso-900/10",
                        isActive
                          ? "text-gold-600 font-semibold"
                          : "text-espresso-900 hover:text-gold-600"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="pt-4"
              >
                <Button
                  href="/reservations"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  leftIcon={<CalendarCheck className="h-5 w-5 text-gold-400" />}
                >
                  Reserve a Table
                </Button>
              </motion.div>
            </div>

            {/* Mobile Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-6 border-t border-espresso-900/10 space-y-3 text-xs font-sans text-espresso-800/80"
            >
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-gold-600 flex-shrink-0" />
                <span>Mon–Fri: 7:30 AM – 10:30 PM • Sat–Sun: 8:00 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-gold-600 flex-shrink-0" />
                <span>Gangapur Road, Nashik, Maharashtra 422005</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-gold-600 flex-shrink-0" />
                <span>+91 98230 45678</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

