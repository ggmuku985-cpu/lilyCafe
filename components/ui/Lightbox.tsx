"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface LightboxImage {
  id: string;
  image: string;
  title: string;
  caption?: string;
  category?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0;
  const currentImage = isOpen ? images[currentIndex] : null;

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    onNavigate((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/90 backdrop-blur-md p-4 md:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close image lightbox"
            className="absolute top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 backdrop-blur-md transition-all hover:bg-cream-100/25 hover:scale-105"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 md:left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 backdrop-blur-md transition-all hover:bg-cream-100/25 hover:scale-105 focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next image"
              className="absolute right-4 md:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 backdrop-blur-md transition-all hover:bg-cream-100/25 hover:scale-105 focus:outline-none"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Image & Caption container */}
          <div
            className="relative flex flex-col items-center max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-cream-100/10 bg-espresso-900/60">
              <Image
                src={currentImage.image}
                alt={currentImage.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption bar */}
            <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-2 w-full text-center md:text-left px-2">
              <div>
                <h3 className="font-serif text-lg md:text-xl text-cream-50 font-normal">
                  {currentImage.title}
                </h3>
                {currentImage.caption && (
                  <p className="text-xs md:text-sm text-cream-200/80 font-sans mt-0.5 max-w-xl">
                    {currentImage.caption}
                  </p>
                )}
              </div>
              <div className="text-xs font-mono tracking-widest text-gold-400 bg-cream-100/10 px-3 py-1 rounded-full">
                {currentIndex! + 1} / {images.length}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

