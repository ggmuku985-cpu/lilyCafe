"use client";

import Image from "next/image";
import { Sparkles, Clock, Flame } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
  priority?: boolean;
}

export function MenuCard({ item, onSelect, priority = false }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex flex-col rounded-3xl bg-cream-50 border border-cream-200/80 overflow-hidden shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container with Hover Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200/50">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <div className="flex flex-wrap gap-1.5">
            {item.badges.map((badge) => (
              <Badge key={badge} type={badge} size="sm" />
            ))}
          </div>

          <div className="flex items-center gap-1">
            {item.isBestseller && <Badge type="Bestseller" size="sm" />}
            {item.isChefsPick && <Badge type="ChefsPick" size="sm" />}
          </div>
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full font-serif text-sm font-semibold bg-espresso-900/90 text-gold-400 backdrop-blur-md shadow-sm border border-gold-500/20">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-lg sm:text-xl font-normal text-espresso-950 group-hover:text-gold-600 transition-colors">
              {item.name}
            </h3>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-espresso-700/80 font-sans leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Meta Footnote */}
        {(item.calories || item.prepTime) && (
          <div className="mt-4 pt-3 border-t border-espresso-900/10 flex items-center justify-between text-[11px] font-sans text-espresso-600/70">
            {item.prepTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-gold-500" />
                {item.prepTime}
              </span>
            )}
            {item.calories && (
              <span className="flex items-center gap-1">
                <Flame className="h-3 w-3 text-terracotta-400" />
                {item.calories}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

