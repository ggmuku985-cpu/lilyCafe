import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FullGallerySection } from "@/components/sections/FullGallerySection";

export const metadata: Metadata = {
  title: "Photo Gallery | Cafe Photos & Garden | Café Lily",
  description:
    "See pictures of our garden seating on Gangapur Road, kulhad chai, fresh bakery counter, and relaxed community evenings in Nashik.",
  openGraph: {
    title: "Photo Gallery | Café Lily Nashik",
    description: "Browse photos of our garden seating, chai, snacks, and weekend gatherings.",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Gallery"
        eyebrow="Photo Journal"
        title="Scenes From Café Lily"
        description="A look at our green garden courtyard, morning chai preparations, fresh bakes, and happy guests."
      />

      <FullGallerySection />
    </main>
  );
}
