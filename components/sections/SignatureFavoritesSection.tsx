import { ArrowRight } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCard } from "@/components/ui/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function SignatureFavoritesSection() {
  // 6 iconic Indian cafe signature favorites
  const signatureIds = ["ck-1", "ck-5", "bs-4", "sb-1", "bs-5", "db-1"];
  const signatureItems = signatureIds
    .map((id) => MENU_ITEMS.find((i) => i.id === id))
    .filter(Boolean) as typeof MENU_ITEMS;

  return (
    <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden bg-jaali-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Guest Favorites"
            title="Our Signature Dishes"
            subtitle="The flavors our guests come back for: authentic chais, slow-steeped filter kaapi, warm snacks, and house-made desserts."
            align="center"
          />
        </Reveal>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {signatureItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <MenuCard item={item} priority={index < 3} />
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to Full Menu */}
        <div className="mt-14 text-center">
          <Reveal delay={0.3}>
            <Button
              href="/menu"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Browse Complete Menu (38 items in ₹)
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
