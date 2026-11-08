import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FullMenuSection } from "@/components/sections/FullMenuSection";

export const metadata: Metadata = {
  title: "Specialty Menu | Single-Origin Coffees & Artisan Bakes | Cafe Lily",
  description:
    "Explore Cafe Lily's full artisanal menu: direct-trade estate pour-overs, botanical lattes, sourdough breakfast tartines, and French viennoiserie in Nashik, Maharashtra.",
  openGraph: {
    title: "Specialty Menu | Cafe Lily Nashik",
    description: "Explore 30+ single-origin coffees, botanical teas, artisanal viennoiserie and sourdough tartines.",
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Specialty Menu"
        eyebrow="The Full Collection"
        title="Crafted with quiet intention."
        description="Every coffee is brewed from micro-lots roasted in small batches. Every pastry is fermented slowly and baked fresh daily in our hearth."
      />

      <Suspense fallback={<div className="py-20 text-center text-espresso-700 font-sans">Loading artisanal offerings...</div>}>
        <FullMenuSection />
      </Suspense>
    </main>
  );
}

