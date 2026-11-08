"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const active = TESTIMONIALS[current];

  return (
    <section className="py-20 md:py-32 bg-cream-100 relative overflow-hidden border-t border-espresso-900/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Guest Echoes"
            title="Stories Shared Over Coffee"
            subtitle="Words from creators, travelers, and morning regulars who make Café Lily part of their ritual."
            align="center"
          />
        </Reveal>

        {/* Carousel Card */}
        <div className="relative mt-8 sm:mt-12">
          <div className="relative rounded-3xl bg-cream-50 border border-cream-200/90 p-8 sm:p-12 md:p-16 shadow-warm-xl overflow-hidden">
            {/* Background Quote Mark */}
            <Quote className="absolute -top-4 -right-4 h-36 w-36 text-gold-500/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center text-center max-w-3xl mx-auto"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-gold-500 mb-6">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>

                {/* Highlight Eyebrow */}
                <span className="text-xs uppercase tracking-widest font-mono text-terracotta-600 font-semibold mb-4">
                  "{active.highlight}"
                </span>

                {/* Quote Text */}
                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-espresso-950 leading-relaxed italic">
                  "{active.quote}"
                </blockquote>

                {/* Guest Profile */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-gold-500/50 shadow-sm">
                    <Image
                      src={active.avatar}
                      alt={active.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif text-lg font-medium text-espresso-950">
                      {active.name}
                    </h4>
                    <p className="text-xs font-sans text-espresso-700/70">
                      {active.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="mt-10 flex items-center justify-between border-t border-espresso-900/10 pt-6">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Jump to review by ${item.name}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "w-8 bg-espresso-900"
                        : "w-2 bg-espresso-900/20 hover:bg-espresso-900/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-900/20 bg-cream-100 text-espresso-900 hover:bg-espresso-900 hover:text-cream-50 transition-all duration-200"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-900/20 bg-cream-100 text-espresso-900 hover:bg-espresso-900 hover:text-cream-50 transition-all duration-200"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

