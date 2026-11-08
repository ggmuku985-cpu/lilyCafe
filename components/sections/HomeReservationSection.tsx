import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReservationForm } from "@/components/ui/ReservationForm";
import { Reveal } from "@/components/ui/Reveal";

export function HomeReservationSection() {
  return (
    <section id="reserve" className="py-20 md:py-32 bg-cream-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Reserve Your Experience"
            title="A Table Awaits Your Arrival"
            subtitle="Whether it is a peaceful solo morning pour-over, a weekend botanical brunch, or an intimate dinner gathering, we hold space for you."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <ReservationForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

