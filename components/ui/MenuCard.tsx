"use client";

import { Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuItem } from "@/data/menu";
import { Badge, VegIndicator } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

interface MenuCardProps {
  item: MenuItem;
  priority?: boolean;
}

export function MenuCard({ item, priority = false }: MenuCardProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col rounded-3xl bg-cream-50 border border-cream-200/90 overflow-hidden shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Aspect-Ratio Image Container with SafeImage */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-200">
        <SafeImage
          src={item.image}
          alt={item.name}
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top Floating Badge & Veg Dot */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <div className="bg-white/95 px-2 py-1 rounded-md shadow-xs backdrop-blur-xs">
            <VegIndicator type={item.dietary} showLabel />
          </div>

          {item.tag && <Badge type={item.tag} size="sm" />}
        </div>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full font-serif text-sm font-bold bg-espresso-900/90 text-marigold-300 backdrop-blur-xs shadow-xs border border-marigold-500/20">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-5 sm:p-6 justify-between">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-normal text-espresso-950 group-hover:text-terracotta-600 transition-colors">
            {item.name}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-espresso-700/80 font-sans leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Bottom Action: Add to Order Button */}
        <div className="mt-4 pt-3.5 border-t border-espresso-900/10 flex items-center justify-between">
          <span className="font-serif text-base font-semibold text-espresso-950">
            {formatPrice(item.price)}
          </span>

          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 ${
              justAdded
                ? "bg-emerald-600 text-white scale-105"
                : "bg-espresso-900 text-cream-50 hover:bg-terracotta-600 shadow-xs"
            }`}
            aria-label={`Add ${item.name} to order`}
          >
            {justAdded ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" />
                <span>Add to order</span>
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
