import { Marquee } from "@/components/ui/Marquee";

export function MarqueeSection() {
  const highlights = [
    "Pure Clay Kulhad Chai",
    "South Indian Filter Kaapi",
    "Fresh Bun Maska & Jam",
    "Nashik Misal Pav",
    "Gulab Jamun Cheesecake",
    "Open Garden Courtyard",
    "Sunday Poetry & Live Music",
    "Pet & Laptop Friendly",
  ];

  return (
    <section id="highlights" className="bg-espresso-950 border-y border-marigold-500/30 overflow-hidden relative shadow-inner">
      <Marquee items={highlights} speed="normal" />
    </section>
  );
}
