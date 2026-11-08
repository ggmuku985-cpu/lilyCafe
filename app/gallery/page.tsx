import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FullGallerySection } from "@/components/sections/FullGallerySection";

export const metadata: Metadata = {
  title: "Visual Gallery & Atmosphere | Cafe Lily Nashik",
  description:
    "Glimpse the sunlit conservatory, artisanal barista rituals, warm garden courtyard, and community workshops at Cafe Lily in Nashik, Maharashtra.",
  openGraph: {
    title: "Atmosphere & Gallery | Cafe Lily",
    description: "Browse curated imagery of our botanical conservatory, pour-over rituals, and fresh sourdough bakery.",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Gallery"
        eyebrow="The Visual Atmosphere"
        title="Scenes of light, greenery &amp; steam."
        description="A visual journal of morning light across teak tables, slow extraction drops, and lively garden gatherings."
      />

      <FullGallerySection />
    </main>
  );
}

