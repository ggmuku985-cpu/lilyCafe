import Image from "next/image";
import type { Metadata } from "next";
import {
  Sprout,
  Sparkles,
  HeartHandshake,
  Recycle,
  MapPin,
  Mountain,
  Sun,
  Award,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TEAM_MEMBERS, CAFE_VALUES } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Story & Ethos | Botanical Sanctuary & Roastery | Cafe Lily",
  description:
    "Learn about the philosophy, agricultural ethics, and artisans behind Cafe Lily in Nashik. Direct estate sourcing, zero artificial additives, and slow coffee culture.",
  openGraph: {
    title: "About Cafe Lily | Nashik, Maharashtra",
    description: "Discover how Rhea Sen founded Cafe Lily to bring mindful estate coffee and botanical sanctuary to Nashik.",
  },
};

const TIMELINE = [
  {
    year: "2020",
    title: "A Glasshouse Dream",
    description:
      "Certified Q-Grader Rhea Sen leaves metropolitan design studios to renovate an abandoned horticultural nursery on Gangapur Road into a sunlit roastery.",
  },
  {
    year: "2022",
    title: "Direct-to-Farmer Compact",
    description:
      "Partnered with three heritage shade estates in Chikmagalur and Biligiriranga Hills, bypassing middlemen and guaranteeing 35% above fair-trade floor prices.",
  },
  {
    year: "2024",
    title: "Stone-Milled Hearth Bakery",
    description:
      "Executive Pastry Chef Ananya Verma joins, inaugurating our 72-hour wild sourdough fermentation program and French-Indian botanical viennoiserie.",
  },
  {
    year: "2026",
    title: "The Botanical Cultural Hub",
    description:
      "Recognized among India's most thoughtful independent specialty roasteries, welcoming daily creators, music evenings, and coffee cupping masterclasses.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="About Cafe Lily"
        eyebrow="The Story Behind the Bloom"
        title="We believe coffee should feel like breathing out."
        description="Founded in Nashik, Maharashtra, Cafe Lily was born out of a yearning for slow mornings, honest agriculture, and spaces that honor nature's unhurried rhythm."
      />

      {/* Narrative Section with Large Imagery */}
      <section className="py-20 md:py-28 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-600 font-semibold">
                  <Sparkles className="h-4 w-4" />
                  <span>The Lily Genesis</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal leading-tight mt-2">
                  Where botanical sanctuary meets precision extraction.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-base font-sans text-espresso-800/85 leading-relaxed">
                  In a world that celebrates faster turnaround times and mass-produced convenience, we chose the opposite direction. We built a cafe inside a restored botanical glasshouse where natural sunlight, living monstera vines, and the gentle whisper of steam wands set the tempo.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base font-sans text-espresso-800/85 leading-relaxed">
                  Every beverage served at Cafe Lily is a collaboration between multi-generational coffee farmers in Karnataka, ceramic potters in rural Maharashtra, and our team of obsessive baristas and pastry bakers.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-cream-100 border border-gold-500/25 shadow-sm space-y-2">
                  <span className="font-serif text-lg font-normal text-espresso-950 block italic">
                    "A great cup of coffee does not shout. It reveals its character slowly, note by note, just as dawn breaks across the Western Ghats."
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-gold-600 block">
                    — Rhea Sen, Founder &amp; Q-Grader
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 relative">
              <Reveal delay={0.2}>
                <div className="relative h-[480px] sm:h-[540px] w-full rounded-3xl overflow-hidden shadow-warm-xl border border-cream-200">
                  <Image
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                    alt="Rhea Sen inspecting estate coffee inside Cafe Lily conservatory"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-espresso-950/15" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-28 bg-cream-100 border-t border-espresso-900/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="Our Journey of Growth"
              subtitle="From a solitary drum roaster to a cherished gathering place for artists, coffee purists, and travelers."
              align="center"
            />
          </Reveal>

          <div className="mt-16 relative border-l-2 border-gold-500/40 ml-4 sm:ml-32 space-y-12">
            {TIMELINE.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.1}>
                <div className="relative pl-8 sm:pl-10">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-cream-100 bg-gold-500 shadow-sm" />

                  {/* Year Tag */}
                  <span className="sm:absolute sm:-left-28 sm:top-0 font-serif text-2xl font-normal text-gold-600 tracking-wider">
                    {item.year}
                  </span>

                  <h3 className="font-serif text-2xl text-espresso-950 font-normal">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-espresso-700/80 font-sans leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing & Estate Story */}
      <section className="py-20 md:py-28 bg-espresso-950 text-cream-100 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Agricultural Stewardship"
              title="Shade-Grown in the Western Ghats"
              subtitle="The soul of our coffee lives in the mist-veiled canopies of Chikmagalur, Coorg, and Araku Valley."
              align="center"
              light
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Reveal delay={0.1}>
              <div className="p-8 rounded-3xl bg-espresso-900/80 border border-cream-100/10 shadow-warm">
                <Mountain className="h-8 w-8 text-gold-400 mb-4" />
                <h3 className="font-serif text-xl text-cream-50 font-normal">
                  High-Elevation Microclimates
                </h3>
                <p className="mt-3 text-sm text-cream-200/80 font-sans leading-relaxed">
                  Grown at 1,100 to 1,450 meters above sea level where slow maturation concentrates natural fruit sugars and lively citric acids in the cherries.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 rounded-3xl bg-espresso-900/80 border border-cream-100/10 shadow-warm">
                <Sun className="h-8 w-8 text-gold-400 mb-4" />
                <h3 className="font-serif text-xl text-cream-50 font-normal">
                  Native Canopy Shade
                </h3>
                <p className="mt-3 text-sm text-cream-200/80 font-sans leading-relaxed">
                  Our partner estates cultivate coffee under double-tier native forest trees like silver oak and wild fig, preserving habitats for over 90 migratory bird species.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-8 rounded-3xl bg-espresso-900/80 border border-cream-100/10 shadow-warm">
                <Award className="h-8 w-8 text-gold-400 mb-4" />
                <h3 className="font-serif text-xl text-cream-50 font-normal">
                  Direct Transparent Trade
                </h3>
                <p className="mt-3 text-sm text-cream-200/80 font-sans leading-relaxed">
                  We visit every partner farm during harvest, cup with the growers on-site, and sign 3-year contracts that protect farm livelihoods regardless of global market speculation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our North Star"
              title="The Principles We Live By"
              subtitle="Every decision, from the flour we mill to the ceramics we commission, is guided by these commitments."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {CAFE_VALUES.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.1}>
                <div className="p-8 rounded-3xl bg-cream-100 border border-cream-200 shadow-warm flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-600 font-semibold mb-3 block">
                      Value 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl text-espresso-950 font-normal">
                      {val.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-espresso-700/80 font-sans leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="py-20 md:py-28 bg-cream-100 border-t border-espresso-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The Craftspeople"
              title="Meet the Team Behind Lily"
              subtitle="The roasters, bakers, and hosts pouring their craft into your daily ritual."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {TEAM_MEMBERS.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1}>
                <div className="group rounded-3xl bg-cream-50 border border-cream-200/90 overflow-hidden shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 left-3 right-3 text-cream-50">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 block">
                        {member.role}
                      </span>
                      <h4 className="font-serif text-xl font-normal">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between">
                    <p className="text-xs font-sans text-espresso-700/80 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-4 pt-3 border-t border-espresso-900/10 text-[11px] font-sans text-espresso-600">
                      <span className="text-gold-600 font-semibold block">Favorite Cup:</span>
                      <span>{member.favoriteDrink}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              href="/reservations"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Come Meet Us in Nashik
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

