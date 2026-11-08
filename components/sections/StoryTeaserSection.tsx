import Image from "next/image";
import { ArrowRight, Leaf, HeartHandshake, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";

export function StoryTeaserSection() {
  return (
    <section id="story" className="py-20 md:py-32 bg-cream-50 overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sage-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Image Collage */}
          <div className="lg:col-span-6 relative">
            <Reveal duration={0.8}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Large Image */}
                <div className="relative h-[380px] sm:h-[460px] w-[82%] rounded-3xl overflow-hidden shadow-warm-xl border border-cream-200">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                    alt="Cafe Lily serene glasshouse dining room"
                    fill
                    sizes="(max-width: 1024px) 80vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-espresso-950/10" />
                </div>

                {/* Overlapping Secondary Image */}
                <div className="absolute -bottom-8 -right-2 sm:-right-6 w-[56%] h-[240px] sm:h-[280px] rounded-2xl overflow-hidden shadow-warm-xl border-4 border-cream-50 z-10">
                  <Image
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                    alt="Barista executing single-origin V60 pour over"
                    fill
                    sizes="(max-width: 1024px) 50vw, 350px"
                    className="object-cover"
                  />
                </div>

                {/* Floating Botanical Badge */}
                <div className="absolute -top-6 right-8 bg-cream-100/95 backdrop-blur-md rounded-2xl p-4 shadow-warm-lg border border-gold-500/30 flex items-center gap-3 z-20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-500/15 text-sage-700">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-espresso-900 block">
                      Botanical Sanctuary
                    </span>
                    <span className="text-[11px] text-espresso-700/80 font-sans">
                      Nashik, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Story Copy & Counters */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our Story & Philosophy"
                title="Rooted in passion, brewed with quiet intention."
                align="left"
                className="mb-6"
              />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-espresso-800/85 font-sans leading-relaxed">
                Founded in 2020 by certified Q-Grader Rhea Sen, Café Lily began as a quiet rebellion against rushed commercial coffee culture. We imagined a sanctuary where botanical calm, heritage Indian agriculture, and European patisserie meet without pretense.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-sm sm:text-base text-espresso-700/80 font-sans leading-relaxed">
                Every bean we roast is sourced directly from shade-grown estates in the Western Ghats—preserving biodiversity and celebrating the farmers whose multi-generational soil stewardship gives each harvest its unforgettable sweetness.
              </p>
            </Reveal>

            {/* Animated Counters Grid */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 pb-4 border-y border-espresso-900/10 my-6">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                    <Counter to={6} suffix="+" duration={1.8} />
                  </div>
                  <span className="text-xs text-espresso-700/70 font-sans mt-1 block">
                    Years of Roasting
                  </span>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                    <Counter to={280000} suffix="+" duration={2.2} />
                  </div>
                  <span className="text-xs text-espresso-700/70 font-sans mt-1 block">
                    Cups Poured
                  </span>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                    <Counter to={14} suffix=" Micro-lots" duration={1.8} />
                  </div>
                  <span className="text-xs text-espresso-700/70 font-sans mt-1 block">
                    Single-Origin Estates
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Read Full Story Button */}
            <Reveal delay={0.5}>
              <Button
                href="/about"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Read Our Story &amp; Ethos
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

