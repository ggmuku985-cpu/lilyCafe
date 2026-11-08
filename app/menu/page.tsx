import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FullMenuSection } from "@/components/sections/FullMenuSection";

export const metadata: Metadata = {
  title: "Specialty Menu | Chai, Filter Kaapi & Bakes | Café Lily",
  description:
    "Explore our full cafe menu in Nashik: Kulhad Chai, South Indian Filter Kaapi, Misal Pav, Bun Maska, Paneer Tikka Sandwiches, and Gulab Jamun Cheesecake. Pure veg and non-veg options.",
  openGraph: {
    title: "Menu | Café Lily Nashik",
    description: "38+ handcrafted Indian chais, South Indian filter kaapi, street-style snacks, and homemade desserts in ₹ INR.",
  },
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Menu"
        eyebrow="Freshly Prepared"
        title="Our Full Cafe Menu"
        description="Freshly brewed chais, strong filter kaapi, warm Indian breakfast snacks, and fusion bakes. Prepared fresh to order."
      />

      <Suspense fallback={<div className="py-20 text-center text-espresso-700 font-sans">Loading menu...</div>}>
        <FullMenuSection />
      </Suspense>
    </main>
  );
}
