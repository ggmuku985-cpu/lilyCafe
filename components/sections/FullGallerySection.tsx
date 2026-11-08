"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GALLERY_CATEGORIES,
  GALLERY_IMAGES,
  type GalleryCategory,
} from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { cn } from "@/lib/utils";

export function FullGallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <div className="py-12 md:py-20 bg-cream-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === "All"
                ? GALLERY_IMAGES.length
                : GALLERY_IMAGES.filter((i) => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-gold-500",
                  isActive
                    ? "bg-espresso-900 text-cream-50 shadow-warm font-semibold"
                    : "bg-cream-200/70 text-espresso-800 hover:bg-cream-200 hover:text-espresso-950"
                )}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Masonry-Style Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => {
              const isTall = img.aspectRatio === "tall";
              return (
                <motion.div
                  layout
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 ${
                    isTall ? "h-[420px] sm:h-[480px]" : "h-[300px] sm:h-[340px]"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo: ${img.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setLightboxIndex(index);
                    }
                  }}
                >
                  <Image
                    src={img.image}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-cream-50">
                    <div className="flex justify-end">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/20 backdrop-blur-md group-hover:scale-110 transition-transform">
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400">
                        {img.category}
                      </span>
                      <h3 className="font-serif text-xl text-cream-50 font-normal mt-1">
                        {img.title}
                      </h3>
                      <p className="text-xs text-cream-200/80 font-sans mt-0.5 line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
}

