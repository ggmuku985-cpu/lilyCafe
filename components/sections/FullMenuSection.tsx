"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
  type DietaryBadge,
  type MenuItem,
} from "@/data/menu";
import { MenuCard } from "@/components/ui/MenuCard";
import { cn } from "@/lib/utils";

export function FullMenuSection() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as MenuCategory) || "All";

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "All">(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBadge, setSelectedBadge] = useState<DietaryBadge | "ChefsPick" | "All">(
    "All"
  );

  useEffect(() => {
    const cat = searchParams.get("category") as MenuCategory | null;
    if (cat && MENU_CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Filter items based on Category, Search Query, and Dietary Badge
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Dietary Badge match
      if (selectedBadge === "ChefsPick" && !item.isChefsPick) {
        return false;
      }
      if (
        selectedBadge !== "All" &&
        selectedBadge !== "ChefsPick" &&
        !item.badges.includes(selectedBadge)
      ) {
        return false;
      }

      // Search query match (name, description, category)
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, searchQuery, selectedBadge]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setSelectedBadge("All");
  };

  return (
    <div className="py-12 md:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Filter Header Container */}
        <div className="sticky top-20 z-30 bg-cream-100/95 backdrop-blur-md pb-6 pt-2 border-b border-espresso-900/10">
          {/* Top row: Search input & Dietary filters */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-4">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-espresso-600/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search coffee, pastries, sourdough..."
                className="w-full pl-11 pr-10 py-2.5 rounded-full bg-cream-50 border border-cream-300 text-sm font-sans text-espresso-950 placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-espresso-600/60 hover:text-espresso-950"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Dietary Badge Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-sans text-espresso-700/60 mr-1 hidden sm:inline">
                Dietary:
              </span>
              {[
                { id: "All", label: "All Items" },
                { id: "V", label: "Vegetarian (V)" },
                { id: "VG", label: "100% Vegan (VG)" },
                { id: "GF", label: "Gluten-Free (GF)" },
                { id: "ChefsPick", label: "Chef's Picks" },
              ].map((badge) => {
                const isActive = selectedBadge === badge.id;
                return (
                  <button
                    key={badge.id}
                    onClick={() =>
                      setSelectedBadge(
                        badge.id as DietaryBadge | "ChefsPick" | "All"
                      )
                    }
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-sans font-medium whitespace-nowrap transition-all border",
                      isActive
                        ? "bg-espresso-900 text-cream-50 border-espresso-900 shadow-sm"
                        : "bg-cream-50 text-espresso-800 border-cream-300 hover:border-gold-500"
                    )}
                  >
                    {badge.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom row: Sticky Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-200",
                selectedCategory === "All"
                  ? "bg-gold-500 text-cream-50 font-semibold shadow-warm"
                  : "bg-cream-200/60 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
              )}
            >
              All Categories ({MENU_ITEMS.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = MENU_ITEMS.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-200",
                    isActive
                      ? "bg-gold-500 text-cream-50 font-semibold shadow-warm"
                      : "bg-cream-200/60 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
                  )}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Active Filters Display */}
        <div className="flex items-center justify-between mt-8 mb-6 text-xs sm:text-sm font-sans text-espresso-700/70">
          <div>
            Showing <span className="font-semibold text-espresso-950">{filteredItems.length}</span>{" "}
            curated offerings
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {selectedBadge !== "All" && ` • Filter: ${selectedBadge}`}
            {searchQuery && ` • Matching "${searchQuery}"`}
          </div>

          {(selectedCategory !== "All" ||
            selectedBadge !== "All" ||
            searchQuery !== "") && (
            <button
              onClick={resetFilters}
              className="text-gold-600 hover:text-gold-700 font-semibold underline underline-offset-4"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid with AnimatePresence */}
        {filteredItems.length > 0 ? (
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
        ) : (
          /* Empty State */
          <div className="py-20 text-center rounded-3xl bg-cream-50 border border-cream-200 p-8 max-w-lg mx-auto">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-200 mx-auto text-espresso-700 mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl text-espresso-950 font-normal">
              No matches found
            </h3>
            <p className="mt-2 text-sm text-espresso-700/80 font-sans">
              We couldn't find any menu items matching your filter criteria. Try resetting or searching for another keyword.
            </p>
            <button
              onClick={resetFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-espresso-900 text-cream-50 text-sm font-sans font-medium hover:bg-espresso-950 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

