import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, UserCheck, ArrowRight, Ticket } from "lucide-react";
import { EVENTS } from "@/data/events";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function EventsSection() {
  return (
    <section className="py-20 md:py-32 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Community & Culture"
            title="Workshops & Gatherings"
            subtitle="Deepen your sensory coffee appreciation, master latte art, or unwind with acoustic music under our garden canopy."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {EVENTS.slice(0, 3).map((event, index) => (
            <Reveal key={event.id} delay={index * 0.1}>
              <div className="group flex flex-col h-full rounded-3xl bg-cream-100 border border-cream-200 overflow-hidden shadow-warm hover:shadow-warm-xl transition-all duration-300 hover:-translate-y-1">
                {/* Event Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-espresso-950/30" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-cream-100/90 text-espresso-900 backdrop-blur-md shadow-sm font-semibold">
                      {event.tag}
                    </span>
                  </div>

                  {/* Seats remaining */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-medium bg-espresso-950/80 text-gold-400 backdrop-blur-md border border-gold-500/30">
                      {event.seatsRemaining} seats left
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex flex-col flex-grow p-6 sm:p-7 justify-between">
                  <div>
                    {/* Date & Time */}
                    <div className="flex items-center gap-4 text-xs font-sans text-gold-600 font-semibold mb-3">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl text-espresso-950 font-normal group-hover:text-gold-600 transition-colors">
                      {event.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-espresso-700/80 font-sans leading-relaxed">
                      {event.description}
                    </p>

                    {event.instructor && (
                      <div className="mt-4 flex items-center gap-2 text-xs font-sans text-espresso-800/80 font-medium">
                        <UserCheck className="h-3.5 w-3.5 text-sage-600" />
                        <span>{event.instructor}</span>
                      </div>
                    )}
                  </div>

                  {/* Price & Book Action */}
                  <div className="mt-6 pt-5 border-t border-espresso-900/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-espresso-600/70 block">
                        Registration
                      </span>
                      <span className="font-serif text-base font-medium text-espresso-950">
                        {event.price}
                      </span>
                    </div>

                    <Button
                      href="/reservations?type=event"
                      variant="primary"
                      size="sm"
                      leftIcon={<Ticket className="h-3.5 w-3.5 text-gold-400" />}
                    >
                      Reserve Spot
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

