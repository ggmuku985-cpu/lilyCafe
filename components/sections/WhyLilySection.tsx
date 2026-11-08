import { Sprout, Croissant, Laptop, Dog } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyLilySection() {
  const features = [
    {
      title: "Ethically Sourced Beans",
      description:
        "100% shade-grown Arabica from heritage estates in Chikmagalur and Coorg. We pay 35% above fair-trade baselines to support regenerative agriculture and forest canopy preservation.",
      icon: Sprout,
      color: "bg-sage-100 text-sage-800 border-sage-300",
      tag: "Direct Trade",
    },
    {
      title: "House-Baked Pastries",
      description:
        "Slow 72-hour sourdough fermentation, 100% French cultured butter, and zero synthetic leaveners. Our bakers fire the hearth at 4:30 AM so every croissant shatters warmly at your table.",
      icon: Croissant,
      color: "bg-terracotta-100 text-terracotta-700 border-terracotta-300",
      tag: "Fresh at 7:30 AM",
    },
    {
      title: "Calm Creator Workspace",
      description:
        "Designed for deep work with dedicated high-speed optical fiber, discrete power outlets at every booth, acoustic cork dampening, and warm, glare-free brass task lighting.",
      icon: Laptop,
      color: "bg-gold-100 text-gold-700 border-gold-300",
      tag: "Fiber Wi-Fi",
    },
    {
      title: "Warmly Pet Friendly",
      description:
        "Our breezy open-air courtyard warmly welcomes furry family members. Complete with chilled filtered water bowls, shady limestone tiles, and barista-made organic oat pup-cups.",
      icon: Dog,
      color: "bg-cream-200 text-espresso-800 border-cream-400",
      tag: "Courtyard Garden",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream-50 relative overflow-hidden border-y border-espresso-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Lily Standard"
            title="Why Guests Call Us Home"
            subtitle="More than a coffee stop. A mindful synthesis of craftsmanship, agricultural ethics, and serene community hospitality."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={index * 0.1}>
                <div className="h-full flex flex-col justify-between p-8 rounded-3xl bg-cream-100/90 border border-cream-200/90 shadow-warm hover:shadow-warm-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${feature.color}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-espresso-700/60 bg-cream-200/60 px-2.5 py-1 rounded-full">
                        {feature.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-espresso-950 font-normal">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm text-espresso-700/80 font-sans leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-espresso-900/5 text-xs font-serif italic text-gold-600">
                    Crafted with care in Nashik
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

