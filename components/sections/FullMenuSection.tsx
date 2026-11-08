"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
  type DietaryType,
} from "@/data/menu";
import { MenuCard } from "@/components/ui/MenuCard";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function FullMenuSection() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as MenuCategory) || "All";

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | "All">(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType | "all">("all");
  const { totalCount, totalAmount, setIsCartOpen } = useCart();

  useEffect(() => {
    const cat = searchParams.get("category") as MenuCategory | null;
    if (cat && MENU_CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }

      // Veg / Non-veg match
      if (dietaryFilter !== "all" && item.dietary !== dietaryFilter) {
        return false;
      }

      // Search match
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
  }, [selectedCategory, searchQuery, dietaryFilter]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
    setDietaryFilter("all");
  };

  return (
    <div className="py-10 md:py-16 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sticky Filter Header Container */}
        <div className="sticky top-20 z-30 bg-cream-100/95 backdrop-blur-md pb-5 pt-2 border-b border-espresso-900/10">
          <div className="flex flex-col md:flex-row gap-3.5 items-stretch md:items-center justify-between mb-3">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-espresso-600/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chai, bun maska, filter kaapi, dosa..."
                className="w-full pl-11 pr-10 py-2.5 rounded-full bg-cream-50 border border-cream-300 text-sm font-sans text-espresso-950 placeholder:text-espresso-600/40 focus:outline-none focus:ring-2 focus:ring-marigold-500 shadow-xs"
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

            {/* Veg / Non-Veg Toggle & Cart Quick Link */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-cream-50 border border-cream-300 rounded-full p-1 shadow-xs">
                <button
                  onClick={() => setDietaryFilter("all")}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-sans font-medium transition-all",
                    dietaryFilter === "all"
                      ? "bg-espresso-900 text-cream-50 font-semibold"
                      : "text-espresso-800 hover:text-espresso-950"
                  )}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter("veg")}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-sans font-medium flex items-center gap-1.5 transition-all",
                    dietaryFilter === "veg"
                      ? "bg-emerald-700 text-white font-semibold"
                      : "text-emerald-800 hover:text-emerald-950"
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Pure Veg</span>
                </button>
                <button
                  onClick={() => setDietaryFilter("non-veg")}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-sans font-medium flex items-center gap-1.5 transition-all",
                    dietaryFilter === "non-veg"
                      ? "bg-red-700 text-white font-semibold"
                      : "text-red-800 hover:text-red-950"
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-red-500 inline-block" />
                  <span>Non-Veg</span>
                </button>
              </div>

              {totalCount > 0 && (
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-medium shadow-xs"
                >
                  <ShoppingBag className="h-3.5 w-3.5" />
                  <span>{totalCount} ({formatPrice(totalAmount)})</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={cn(
                "px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-200",
                selectedCategory === "All"
                  ? "bg-terracotta-600 text-cream-50 font-semibold shadow-xs"
                  : "bg-cream-200/70 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
              )}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = MENU_ITEMS.filter((i) => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium whitespace-nowrap transition-all duration-200",
                    isActive
                      ? "bg-terracotta-600 text-cream-50 font-semibold shadow-xs"
                      : "bg-cream-200/70 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
                  )}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Reset Link */}
        <div className="flex items-center justify-between mt-6 mb-6 text-xs sm:text-sm font-sans text-espresso-700/80">
          <div>
            Showing <span className="font-semibold text-espresso-950">{filteredItems.length}</span>{" "}
            items
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {dietaryFilter !== "all" && ` • ${dietaryFilter === "veg" ? "Pure Veg" : "Non-Veg"}`}
            {searchQuery && ` • Matching "${searchQuery}"`}
          </div>

          {(selectedCategory !== "All" ||
            dietaryFilter !== "all" ||
            searchQuery !== "") && (
            <button
              onClick={resetFilters}
              className="text-terracotta-600 hover:text-terracotta-700 font-semibold underline underline-offset-4"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Menu Cards Grid */}
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
              No items found
            </h3>
            <p className="mt-2 text-sm text-espresso-700/80 font-sans">
              We couldn&apos;t find any dishes matching your filters. Try clearing your search or checking other categories.
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
