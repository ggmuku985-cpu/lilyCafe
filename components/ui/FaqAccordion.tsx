"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-cream-200/90 bg-cream-50 overflow-hidden shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg font-normal text-espresso-950 pr-4">
                {item.question}
              </span>
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full bg-cream-200/60 text-espresso-900 transition-transform duration-300 flex-shrink-0",
                  isOpen && "rotate-180 bg-gold-100 text-gold-700"
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-sm font-sans text-espresso-700/80 leading-relaxed border-t border-espresso-900/5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

