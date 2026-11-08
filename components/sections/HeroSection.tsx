"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Coffee, Calendar, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-espresso-950 pt-24 pb-16">
      {/* High-Resolution Sharp Hero Background Image with Gentle Parallax (NO blur, NO wash-out) */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Café Lily warm artisan interior and coffee bar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Rich Dark Gradient Overlay (35% to 55% black, darker behind text & bottom) */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/50 to-espresso-950/35" />
        <div className="absolute inset-0 bg-espresso-950/25" />
      </motion.div>

      {/* Hero Content with Crisp White & Cream Typography */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8">
        {/* Floating Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-marigold-400/40 bg-espresso-900/70 backdrop-blur-md shadow-warm mb-6 text-cream-50"
        >
          <Sparkles className="h-3.5 w-3.5 text-marigold-400" />
          <span className="text-xs md:text-sm font-sans font-medium tracking-wider uppercase text-cream-100">
            Chai, Kaapi &amp; Artisan Bakes • Nashik
          </span>
        </motion.div>

        {/* Main Headline in Crisp White with Golden Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-tight leading-[1.06] max-w-4xl drop-shadow-md"
        >
          Where every cup <span className="italic font-normal text-marigold-400">blooms.</span>
        </motion.h1>

        {/* Simple, Warm Subtext in Cream */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-cream-100/90 font-sans max-w-2xl leading-relaxed drop-shadow-sm"
        >
          Fresh coffee, warm kulhad chai, and homemade comfort snacks. Tucked inside a peaceful garden on Gangapur Road, Nashik.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="/menu"
            variant="gold"
            size="lg"
            className="w-full sm:w-auto bg-marigold-500 hover:bg-marigold-600 text-espresso-950 font-semibold"
            leftIcon={<Coffee className="h-5 w-5 text-espresso-950" />}
          >
            View Menu
          </Button>

          <Button
            href="/reservations"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-cream-100/50 text-white hover:bg-white/10 hover:border-white backdrop-blur-xs"
            leftIcon={<Calendar className="h-5 w-5 text-marigold-400" />}
          >
            Book a Table
          </Button>
        </motion.div>

        {/* Highlight Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs sm:text-sm font-sans text-cream-200/90"
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-marigold-400" />
            <span>Pure Clay Kulhad Chai</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-terracotta-400" />
            <span>South Indian Filter Kaapi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>100% Homemade Snacks</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <a
            href="#highlights"
            aria-label="Scroll down to explore"
            className="group flex flex-col items-center gap-2 text-cream-200/70 hover:text-white transition-colors"
          >
            <span className="text-[11px] uppercase tracking-widest font-sans font-medium">
              Explore
            </span>
            <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-cream-100/40 p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-marigold-400"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
