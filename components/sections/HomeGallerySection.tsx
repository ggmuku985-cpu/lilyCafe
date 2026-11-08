"use client";

import { useState } from "react";
import { Maximize2, ArrowRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/gallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Lightbox } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";

export function HomeGallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Take first 6 photos for home preview
  const previewImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden bg-jaali-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Space"
            title="Moments at the Cafe"
            subtitle="Take a look at our open garden, morning chai rituals, and cozy corners."
            align="center"
          />
        </Reveal>

        {/* Masonry / Irregular Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {previewImages.map((img, index) => {
            const isTall = index === 0 || index === 4;
            return (
              <Reveal key={img.id} delay={index * 0.08}>
                <div
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1 bg-cream-200 ${
                    isTall ? "h-[360px] sm:h-[420px]" : "h-[260px] sm:h-[300px]"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-label={`View full photo: ${img.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setLightboxIndex(index);
                    }
                  }}
                >
                  <SafeImage
                    src={img.image}
                    alt={img.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-espresso-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-cream-50" />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex justify-end">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-100/20 backdrop-blur-md text-cream-50 group-hover:scale-110 transition-transform">
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-marigold-300">
                        {img.category}
                      </span>
                      <h3 className="font-serif text-lg text-cream-50 font-normal mt-1">
                        {img.title}
                      </h3>
                      <p className="text-xs text-cream-200/90 font-sans mt-0.5 line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-12 text-center">
          <Button
            href="/gallery"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            View All Photos
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={previewImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
