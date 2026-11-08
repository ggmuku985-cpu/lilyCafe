"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCard } from "@/components/ui/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MenuPreviewSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Coffee");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  ).slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Curated Selections"
            title="Taste the Spectrum"
            subtitle="Explore our daily rotating offerings across artisanal espresso, botanical teas, hearty sourdough brunch, and fresh viennoiserie."
            align="center"
          />
        </Reveal>

        {/* Category Pills Slider / Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-8 mb-12">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-gold-500",
                  isActive
                    ? "bg-espresso-900 text-cream-50 shadow-warm font-semibold"
                    : "bg-cream-200/70 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Animated Item Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Category Menu Button */}
        <div className="mt-14 text-center">
          <Button
            href={`/menu?category=${encodeURIComponent(activeCategory)}`}
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Explore All {activeCategory} Options
          </Button>
        </div>
      </div>
    </section>
  );
}

