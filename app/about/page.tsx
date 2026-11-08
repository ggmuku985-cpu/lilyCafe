import type { Metadata } from "next";
import {
  Sprout,
  HeartHandshake,
  Coffee,
  Smile,
  MapPin,
  Mountain,
  Sun,
  Award,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { TEAM_MEMBERS, CAFE_VALUES } from "@/data/team";
import { siteConfig, getWhatsAppGeneralUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us | Our Story & Team | Café Lily",
  description:
    "Learn about Café Lily on Gangapur Road, Nashik. Started by Rhea Sen to bring authentic Indian chais, South Indian estate coffee, and homemade comfort food together.",
  openGraph: {
    title: "About Café Lily | Nashik, Maharashtra",
    description: "Our story, our kitchen team, and the coffee estates we partner with.",
  },
};

const TIMELINE = [
  {
    year: "2021",
    title: "The Garden Vision",
    description:
      "Rhea Sen returned home to Nashik with a dream of opening a relaxed garden cafe serving honest chai and good filter kaapi.",
  },
  {
    year: "2023",
    title: "Chikmagalur Coffee Partnership",
    description:
      "Partnered directly with heritage shade-grown coffee farms in Karnataka to bring fresh roasted beans directly to Nashik.",
  },
  {
    year: "2024",
    title: "The Bakery Kitchen",
    description:
      "Pastry Chef Priya joined our team, creating our signature Gulab Jamun Cheesecake, Mawa Cakes, and morning croissants.",
  },
  {
    year: "2026",
    title: "Nashik's Neighborhood Favorite",
    description:
      "A bustling community spot on Gangapur Road welcoming friends, families, college students, and remote workers every day.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="About Us"
        eyebrow="Our Story"
        title="Good food, warm chai, and friendly faces."
        description="We started Café Lily to create a welcoming neighborhood space where anyone can sit back, relax with a hot cup, and feel right at home."
      />

      {/* Narrative Section */}
      <section className="py-16 md:py-24 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta-600 font-semibold">
                  <Coffee className="h-4 w-4" />
                  <span>How It Started</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-espresso-950 font-normal leading-tight mt-1.5">
                  A cozy corner in the heart of Nashik.
                </h2>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="text-base font-sans text-espresso-800/85 leading-relaxed">
                  In big cities, cafes can sometimes feel rushed or overly complicated. When we built Café Lily on Gangapur Road, we wanted the exact opposite. We wanted the easy-going charm of an old Irani cafe, mixed with a breezy green garden and the aroma of fresh bakes.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-base font-sans text-espresso-800/85 leading-relaxed">
                  Everything we serve is made with care. Our spices are whole and aromatic, our milk is full-cream, our pav is soft, and our coffee is roasted fresh from Chikmagalur estates.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="p-6 rounded-2xl bg-cream-100 border border-marigold-500/30 shadow-xs space-y-2">
                  <p className="font-serif text-base sm:text-lg font-normal text-espresso-950 italic">
                    &ldquo;When people visit Café Lily, we want them to feel like they are sitting in a good friend&apos;s garden enjoying a warm plate of food.&rdquo;
                  </p>
                  <span className="text-xs font-mono uppercase tracking-wider text-terracotta-700 block font-semibold">
                    — Rhea Sen, Founder
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 relative">
              <Reveal delay={0.2}>
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-warm-xl border border-cream-200 bg-cream-200">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                    alt="Café Lily garden dining area"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-cream-100 border-t border-espresso-900/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title="How We Grew"
              subtitle="From an idea on a piece of paper to a bustling cafe loved by locals."
              align="center"
            />
          </Reveal>

          <div className="mt-12 relative border-l-2 border-marigold-500/40 ml-4 sm:ml-28 space-y-10">
            {TIMELINE.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.1}>
                <div className="relative pl-8 sm:pl-10">
                  {/* Dot */}
                  <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-cream-100 bg-marigold-500 shadow-xs" />

                  {/* Year Tag */}
                  <span className="sm:absolute sm:-left-24 sm:top-0 font-serif text-2xl font-semibold text-terracotta-600">
                    {item.year}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-espresso-950 font-normal">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-espresso-700/80 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-16 md:py-24 bg-espresso-950 text-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Where It Comes From"
              title="From Western Ghats Estates to Your Cup"
              subtitle="We take pride in knowing exactly where our beans and tea leaves are harvested."
              align="center"
              light
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <Reveal delay={0.1}>
              <div className="p-7 rounded-3xl bg-espresso-900/80 border border-cream-100/10 shadow-warm">
                <Mountain className="h-7 w-7 text-marigold-400 mb-3.5" />
                <h3 className="font-serif text-xl text-white font-normal">
                  Chikmagalur Coffee Estates
                </h3>
                <p className="mt-2.5 text-sm text-cream-200/80 font-sans leading-relaxed">
                  High-altitude Arabica grown under silver oak shade in Karnataka. Handpicked cherries roasted in small batches for full aroma.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-7 rounded-3xl bg-espresso-900/80 border border-cream-100/10 shadow-warm">
                <Sun className="h-7 w-7 text-marigold-400 mb-3.5" />
                <h3 className="font-serif text-xl text-white font-normal">
                  Assam &amp; Nilgiri Tea Leaves
                </h3>
                <p className="mt-2.5 text-sm text-cream-200/80 font-sans leading-relaxed">
                  Whole leaf strong Assam CTC for our spiced masala chais, and delicate Nilgiri leaves for refreshing iced teas.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-7 rounded-3xl bg-espresso-900/80 border border-cream-100/10 shadow-warm">
                <Award className="h-7 w-7 text-marigold-400 mb-3.5" />
                <h3 className="font-serif text-xl text-white font-normal">
                  Local Nashik Farm Produce
                </h3>
                <p className="mt-2.5 text-sm text-cream-200/80 font-sans leading-relaxed">
                  Fresh milk from local dairies, fresh farm vegetables, and seasonal fruits like Ratnagiri Alphonso mangoes and local strawberries.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Team"
              title="The People Behind Your Daily Cup"
              subtitle="Say hello to our friendly kitchen and counter team."
              align="center"
            />
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">
            {TEAM_MEMBERS.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.1}>
                <div className="group rounded-3xl bg-cream-100 border border-cream-200/90 overflow-hidden shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-200">
                    <SafeImage
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/80 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 text-cream-50">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-marigold-300 block font-medium">
                        {member.role}
                      </span>
                      <h4 className="font-serif text-xl font-normal text-white">
                        {member.name}
                      </h4>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between">
                    <p className="text-xs font-sans text-espresso-700/80 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="mt-3.5 pt-3 border-t border-espresso-900/10 text-[11px] font-sans text-espresso-600">
                      <span className="text-terracotta-600 font-semibold block">Favorite Order:</span>
                      <span>{member.favoriteDrink}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/reservations"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Book a Table to Visit Us
            </Button>
            <a
              href={getWhatsAppGeneralUrl("general")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold text-sm shadow-warm transition-all"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              <span>Say Hello on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
