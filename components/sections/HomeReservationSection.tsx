import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReservationForm } from "@/components/ui/ReservationForm";
import { Reveal } from "@/components/ui/Reveal";

export function HomeReservationSection() {
  return (
    <section id="reserve" className="py-20 md:py-28 bg-cream-100 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Table Bookings"
            title="Book a Table at Café Lily"
            subtitle="Visiting with family, friends, or planning a weekend brunch? Reserve ahead and we will have a clean, cozy table ready for you."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8">
            <ReservationForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
