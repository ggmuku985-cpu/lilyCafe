"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarCheck, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-context";
import { siteConfig } from "@/lib/site-config";
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
  const { totalCount, setIsCartOpen } = useCart();

  // On pages other than home, default to solid cream navbar for immediate legibility
  const isHomePage = pathname === "/";

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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

  const showSolidNav = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          showSolidNav
            ? "bg-cream-100/95 backdrop-blur-md shadow-warm py-3.5 border-b border-espresso-900/10"
            : "bg-transparent py-5 md:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between" aria-label="Main Navigation">
            {/* Logo */}
            <Logo isScrolled={showSolidNav} />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "relative font-sans text-sm font-medium tracking-wide transition-colors py-1",
                      showSolidNav
                        ? isActive
                          ? "text-espresso-950 font-semibold"
                          : "text-espresso-800/80 hover:text-espresso-950"
                        : isActive
                        ? "text-white font-semibold"
                        : "text-cream-100/90 hover:text-white drop-shadow-xs"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-marigold-500 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* Mini Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className={cn(
                  "relative flex items-center justify-center p-2.5 rounded-full transition-all duration-200",
                  showSolidNav
                    ? "bg-cream-200/80 text-espresso-900 hover:bg-cream-300"
                    : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-xs"
                )}
                aria-label={`View order cart (${totalCount} items)`}
              >
                <ShoppingBag className="h-4 w-4" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-terracotta-600 text-[10px] font-bold text-white flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>

              <Button
                href="/reservations"
                variant={showSolidNav ? "primary" : "gold"}
                size="sm"
                leftIcon={<CalendarCheck className="h-4 w-4" />}
              >
                Book a Table
              </Button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className={cn(
                  "relative p-2 rounded-full transition-colors",
                  showSolidNav
                    ? "bg-cream-200 text-espresso-900"
                    : "bg-white/15 text-white backdrop-blur-xs"
                )}
                aria-label="View order"
              >
                <ShoppingBag className="h-4 w-4" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-terracotta-600 text-[9px] font-bold text-white flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "flex items-center justify-center p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-marigold-500",
                  showSolidNav
                    ? "text-espresso-900 hover:bg-cream-200"
                    : "text-white hover:bg-white/10"
                )}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
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
            <div className="flex flex-col space-y-3 my-auto">
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
                          ? "text-terracotta-600 font-semibold"
                          : "text-espresso-900 hover:text-terracotta-600"
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
                className="pt-4 flex flex-col gap-3"
              >
                <Button
                  href="/reservations"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  leftIcon={<CalendarCheck className="h-5 w-5 text-marigold-400" />}
                >
                  Book a Table
                </Button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsCartOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-cream-200 text-espresso-900 font-medium text-sm hover:bg-cream-300"
                >
                  <ShoppingBag className="h-4 w-4 text-terracotta-600" />
                  <span>View Order Cart ({totalCount} items)</span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-6 border-t border-espresso-900/10 space-y-2.5 text-xs font-sans text-espresso-800/80"
            >
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-terracotta-600 flex-shrink-0" />
                <span>Open Daily: {siteConfig.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-terracotta-600 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-terracotta-600 flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
