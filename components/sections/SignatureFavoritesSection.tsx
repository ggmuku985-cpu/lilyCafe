import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MENU_ITEMS } from "@/data/menu";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MenuCard } from "@/components/ui/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function SignatureFavoritesSection() {
  // Select 6 iconic favorites (cross-category highlights)
  const signatureItems = MENU_ITEMS.filter((item) => item.isChefsPick || item.isBestseller).slice(0, 6);

  return (
    <section className="py-20 md:py-32 bg-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Crafted for the Senses"
            title="Signature Roastery Favorites"
            subtitle="The recipes that define Café Lily: thoughtfully sourced, meticulously extracted, and plated fresh every single morning."
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
          <Reveal delay={0.4}>
            <Button
              href="/menu"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Browse Complete Menu (30+ items)
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

