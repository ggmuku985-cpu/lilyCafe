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

export const metadata: Metadata = {
  title: "Cafe Lily | Specialty Roastery & Botanical Sanctuary | Nashik",
  description:
    "An artisan specialty coffee roastery and bakery sanctuary in Nashik, Maharashtra. Single-origin estate coffees, slow sourdough viennoiserie, and botanical serenity.",
  openGraph: {
    title: "Cafe Lily | Where Every Cup Blooms",
    description: "Specialty coffee roastery, botanical conservatory, and artisan bakery in Nashik, Maharashtra.",
    url: "https://cafelily.in",
    siteName: "Cafe Lily",
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream-100 flex flex-col">
      {/* 2. Full-screen Hero */}
      <HeroSection />

      {/* 3. Marquee strip */}
      <MarqueeSection />

      {/* 4. Story Teaser with collage and counters */}
      <StoryTeaserSection />

      {/* 5. Signature Favorites (6 animated cards) */}
      <SignatureFavoritesSection />

      {/* 6. Why Cafe Lily feature grid */}
      <WhyLilySection />

      {/* 7. Menu preview with category tabs */}
      <MenuPreviewSection />

      {/* 8. Image gallery in masonry grid with lightbox */}
      <HomeGallerySection />

      {/* 9. Testimonials carousel */}
      <TestimonialsSection />

      {/* 10. Events / Workshops */}
      <EventsSection />

      {/* 11. Instagram-style photo strip */}
      <InstagramStripSection />

      {/* 12. Reservation section */}
      <HomeReservationSection />

      {/* 13. Location, opening hours & embedded Google Map */}
      <LocationHoursSection />

      {/* 14. Newsletter signup */}
      <NewsletterSection />
    </main>
  );
}

