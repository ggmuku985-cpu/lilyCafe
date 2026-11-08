import { Marquee } from "@/components/ui/Marquee";

export function MarqueeSection() {
  const highlights = [
    "Single-Origin Beans",
    "Fresh Viennoiserie Bakes",
    "Slow Mindful Mornings",
    "Live Acoustic Thursdays",
    "Botanical Glasshouse",
    "Regenerative Shade Farms",
    "Ceremonial Grade Matcha",
    "House Sourdough Tartines",
  ];

  return (
    <section className="bg-espresso-950 border-y border-gold-500/30 overflow-hidden relative shadow-inner">
      <Marquee items={highlights} speed="normal" />
    </section>
  );
}

