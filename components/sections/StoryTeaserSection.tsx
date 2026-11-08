import { ArrowRight, Leaf, HeartHandshake, Coffee } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";

export function StoryTeaserSection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-cream-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Collage with Arch Frame */}
          <div className="lg:col-span-6 relative">
            <Reveal duration={0.8}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Arch-shaped Image Frame */}
                <div className="relative h-[380px] sm:h-[450px] w-[84%] rounded-t-full rounded-b-2xl overflow-hidden shadow-warm-xl border-2 border-marigold-500/30 bg-cream-200">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                    alt="Café Lily warm garden cafe seating"
                    fill
                    sizes="(max-width: 1024px) 80vw, 500px"
                  />
                  <div className="absolute inset-0 bg-espresso-950/15" />
                </div>

                {/* Overlapping Secondary Image */}
                <div className="absolute -bottom-6 -right-2 sm:-right-4 w-[54%] h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-warm-xl border-4 border-cream-50 z-10 bg-cream-200">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
                    alt="Hot fresh chai poured in a cup"
                    fill
                    sizes="(max-width: 1024px) 50vw, 350px"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 right-6 bg-cream-100/95 backdrop-blur-md rounded-2xl p-4 shadow-warm-lg border border-marigold-500/30 flex items-center gap-3 z-20">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-marigold-100 text-marigold-800">
                    <Coffee className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-espresso-950 block">
                      Gangapur Road
                    </span>
                    <span className="text-[11px] text-terracotta-700 font-sans">
                      Nashik, Maharashtra
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Simple, Warm Story Copy */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our Story"
                title="A quiet garden cafe made for good times."
                align="left"
                className="mb-4"
              />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-espresso-800/90 font-sans leading-relaxed">
                We started Café Lily with a simple thought: great food does not need to be complicated. We wanted a warm neighborhood spot in Nashik where you can always get a hot cup of authentic masala chai, fresh South Indian filter kaapi, and tasty homemade snacks.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-sm sm:text-base text-espresso-700/80 font-sans leading-relaxed">
                Whether you are catching up with old college friends over bun maska, reading a book in our green courtyard, or working quietly on your laptop, we have a comfortable table waiting for you.
              </p>
            </Reveal>

            {/* Simple Animated Counters */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-3 gap-4 pt-4 pb-4 border-y border-espresso-900/10 my-4">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                    <Counter to={5} suffix="+" duration={1.8} />
                  </div>
                  <span className="text-xs text-espresso-700/80 font-sans mt-1 block">
                    Years in Nashik
                  </span>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                    <Counter to={250000} suffix="+" duration={2.2} />
                  </div>
                  <span className="text-xs text-espresso-700/80 font-sans mt-1 block">
                    Cups of Chai &amp; Kaapi
                  </span>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal">
                    <Counter to={38} suffix=" Dishes" duration={1.8} />
                  </div>
                  <span className="text-xs text-espresso-700/80 font-sans mt-1 block">
                    Fresh Menu Items
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Read Story Button */}
            <Reveal delay={0.5}>
              <Button
                href="/about"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Learn More About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
