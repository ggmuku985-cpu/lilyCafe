"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCard } from "@/components/ui/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MenuPreviewSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Chai & Kaapi");

  const filteredItems = MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  ).slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Popular Selections"
            title="Taste Our Daily Specialties"
            subtitle="Explore our favorite chais, rich filter kaapi, warm snacks, and fusion desserts made fresh every day."
            align="center"
          />
        </Reveal>

        {/* Category Pills Slider / Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mt-6 mb-12">
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-marigold-500",
                  isActive
                    ? "bg-espresso-900 text-cream-50 shadow-warm font-semibold"
                    : "bg-cream-200/80 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
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
            Explore All {activeCategory} ({MENU_ITEMS.filter((i) => i.category === activeCategory).length} items)
          </Button>
        </div>
      </div>
    </section>
  );
}
