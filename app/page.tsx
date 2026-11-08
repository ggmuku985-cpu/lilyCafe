import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { StoryTeaserSection } from "@/components/sections/StoryTeaserSection";
import { SignatureFavoritesSection } from "@/components/sections/SignatureFavoritesSection";
import { WhyLilySection } from "@/components/sections/WhyLilySection";
import { MenuPreviewSection } from "@/components/sections/MenuPreviewSection";
import { HomeGallerySection } from "@/components/sections/HomeGallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { InstagramStripSection } from "@/components/sections/InstagramStripSection";
import { HomeReservationSection } from "@/components/sections/HomeReservationSection";
import { LocationHoursSection } from "@/components/sections/LocationHoursSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Café Lily | Chai, Filter Kaapi & Artisan Bakes | Nashik",
  description:
    "A cozy neighborhood cafe in Nashik, Maharashtra. Authentic kulhad chai, South Indian filter kaapi, warm bun maska, street snacks, and garden seating.",
  openGraph: {
    title: "Café Lily | Where Every Cup Blooms",
    description: "Authentic Indian chais, South Indian filter kaapi, fresh snacks, and peaceful garden seating in Nashik.",
    url: siteConfig.url,
    siteName: "Café Lily",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100 flex flex-col">
      {/* 2. Full-screen Hero (Sharp, high-res, dark overlay, white text) */}
      <HeroSection />

      {/* 3. Marquee strip */}
      <MarqueeSection />

      {/* 4. Story Teaser with collage and counters */}
      <StoryTeaserSection />

      {/* 5. Signature Favorites (6 iconic Indian dishes) */}
      <SignatureFavoritesSection />

      {/* 6. Why Cafe Lily feature grid */}
      <WhyLilySection />

      {/* 7. Menu preview with category tabs */}
      <MenuPreviewSection />

      {/* 8. Image gallery in masonry grid with lightbox */}
      <HomeGallerySection />

      {/* 9. Testimonials carousel */}
      <TestimonialsSection />

      {/* 10. Events / Gatherings (Chai & Poetry, Open Mic, Workshops) */}
      <EventsSection />

      {/* 11. Instagram photo strip */}
      <InstagramStripSection />

      {/* 12. Table Reservation section */}
      <HomeReservationSection />

      {/* 13. Location, opening hours & embedded Google Map */}
      <LocationHoursSection />

      {/* 14. Newsletter signup */}
      <NewsletterSection />
    </main>
  );
}
