import type { Metadata } from "next";
import { Sparkles, Calendar, Clock, ShieldCheck, Phone, Info } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ReservationForm } from "@/components/ui/ReservationForm";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Book a Table | Reservations | Cafe Lily Nashik",
  description:
    "Reserve your table at Cafe Lily, Gangapur Road, Nashik. Guarantee your seating in our botanical glasshouse or open-air pet-friendly courtyard.",
  openGraph: {
    title: "Table Reservations | Cafe Lily Nashik",
    description: "Book your table in our serene botanical conservatory or garden courtyard.",
  },
};

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Reservations"
        eyebrow="Table Bookings"
        title="We are delighted to host you."
        description="Whether an early morning pour-over and reading session, a weekend brunch with loved ones, or an evening tasting flight."
      />

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left Guidance Cards */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-warm">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-gold-600 font-semibold mb-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Reservation Etiquette</span>
                </div>
                <h3 className="font-serif text-lg text-espresso-950 font-normal">
                  Hospitality Promises
                </h3>
                <ul className="mt-4 space-y-3 text-xs font-sans text-espresso-700/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span>Tables are held for 15 minutes past reserved time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span>No deposit or cancellation penalty for regular seatings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span>For parties of 8+, our host team will contact you to coordinate banquet menus.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-espresso-900 text-cream-100 shadow-warm space-y-3">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Phone className="h-4 w-4" />
                  <span>Immediate Assistance</span>
                </div>
                <p className="text-xs font-sans text-cream-200/80 leading-relaxed">
                  Need to adjust a booking today or check real-time walk-in queue? Call our host desk directly.
                </p>
                <a
                  href="tel:+919823045678"
                  className="inline-block font-mono text-sm font-bold text-gold-400 hover:text-gold-300"
                >
                  +91 98230 45678
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-8">
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

