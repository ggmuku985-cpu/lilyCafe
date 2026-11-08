"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Coffee, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityImage = useTransform(scrollY, [0, 500], [1, 0.7]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-cream-100 pt-20 pb-16">
      {/* Background Image with subtle Parallax */}
      <motion.div
        style={{ y: yImage, opacity: opacityImage }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
          alt="Cafe Lily serene botanical interior with warm morning light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.88] contrast-[1.02]"
        />
        {/* Warm multi-stop gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-cream-100/60 to-cream-100/30" />
        <div className="absolute inset-0 bg-espresso-950/20 mix-blend-multiply" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8">
        {/* Floating Pill Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold-500/40 bg-cream-100/80 backdrop-blur-md shadow-warm mb-6"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold-600" />
          <span className="text-xs md:text-sm font-sans font-medium tracking-wider uppercase text-espresso-900">
            Specialty Roastery &amp; Botanical Sanctuary • Nashik
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-espresso-950 font-normal tracking-tight leading-[1.05] max-w-4xl"
        >
          Where every cup <span className="italic font-normal text-gold-600">blooms.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-espresso-800/85 font-sans max-w-2xl leading-relaxed"
        >
          Handcrafted single-origin coffees from heritage Southern Indian estates, slow European viennoiserie, and sunlit botanical spaces curated for peaceful mornings.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            href="/menu"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            leftIcon={<Coffee className="h-5 w-5 text-gold-400" />}
          >
            Explore Specialty Menu
          </Button>

          <Button
            href="/reservations"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-cream-100/60 backdrop-blur-sm border-espresso-900/40 hover:bg-cream-100 hover:border-espresso-900"
            leftIcon={<Calendar className="h-5 w-5 text-espresso-800" />}
          >
            Reserve a Table
          </Button>
        </motion.div>

        {/* Highlight Feature Badges underneath */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs font-sans text-espresso-800/80"
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
            <span>Direct Shade-Grown Sourcing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta-400" />
            <span>Baked Fresh at 7:30 AM Daily</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span>Pet &amp; Creator Friendly</span>
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
            href="#story"
            aria-label="Scroll down to explore story"
            className="group flex flex-col items-center gap-2 text-espresso-700/60 hover:text-espresso-900 transition-colors"
          >
            <span className="text-[11px] uppercase tracking-widest font-sans font-medium">
              Discover
            </span>
            <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-espresso-800/30 p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-espresso-800"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

