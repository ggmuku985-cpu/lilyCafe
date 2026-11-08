import { Sprout, Croissant, Laptop, Dog } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyLilySection() {
  const features = [
    {
      title: "Real Spices & Good Milk",
      description:
        "We brew our chais with fresh ginger, whole green cardamom, and full-cream milk. No premix powders, syrups, or shortcuts.",
      icon: Sprout,
      color: "bg-marigold-100 text-marigold-800 border-marigold-300",
      tag: "Fresh Ingredients",
    },
    {
      title: "Fresh Bakes Every Morning",
      description:
        "Soft ladi pav, homemade mawa cakes, fudgy brownies, and buttery croissants baked fresh right here every morning.",
      icon: Croissant,
      color: "bg-terracotta-100 text-terracotta-700 border-terracotta-300",
      tag: "Baked In-House",
    },
    {
      title: "Cozy Work & Study Corner",
      description:
        "Fast optical fiber Wi-Fi, dedicated power outlets at every booth, and a quiet indoor mezzanine for remote work and meetings.",
      icon: Laptop,
      color: "bg-sage-100 text-sage-800 border-sage-300",
      tag: "Free Wi-Fi",
    },
    {
      title: "Warmly Pet Friendly",
      description:
        "Our green garden courtyard warmly welcomes dogs and cats. We keep clean water bowls and shady spots for your furry friends.",
      icon: Dog,
      color: "bg-cream-200 text-espresso-800 border-cream-300",
      tag: "Garden Seating",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-cream-100 relative overflow-hidden border-y border-espresso-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why Guests Love Us"
            title="The Café Lily Feeling"
            subtitle="Good food, honest prices, and a peaceful garden to take a breath and recharge."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.1}>
                <div className="h-full flex flex-col justify-between p-7 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-warm hover:shadow-warm-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.color}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-espresso-700/70 bg-cream-200 px-2.5 py-1 rounded-full">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-espresso-950 font-normal">
                      {feature.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-espresso-700/80 font-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-espresso-900/5 text-xs font-serif italic text-terracotta-600">
                    Nashik, Maharashtra
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
