import type { Metadata } from "next";
import { ShieldCheck, Phone, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ReservationForm } from "@/components/ui/ReservationForm";
import { siteConfig, getWhatsAppGeneralUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Table | Reservations | Café Lily Nashik",
  description:
    "Reserve your table at Café Lily on Gangapur Road, Nashik. Free reservation with instant confirmation for garden courtyard or indoor seating.",
  openGraph: {
    title: "Table Reservations | Café Lily Nashik",
    description: "Book your table in our garden courtyard or indoor lounge.",
  },
};

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Reservations"
        eyebrow="Table Booking"
        title="We Would Love to Host You"
        description="Book your table in advance for weekend brunches, family dinners, or group celebrations. Walk-ins are also warmly welcomed."
      />

      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Left Guidance Cards */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-warm">
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-terracotta-700 font-semibold mb-2">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Booking Guidelines</span>
                </div>
                <h3 className="font-serif text-lg text-espresso-950 font-normal">
                  Simple Table Policies
                </h3>
                <ul className="mt-4 space-y-3 text-xs font-sans text-espresso-700/85 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-marigold-500 mt-1.5 flex-shrink-0" />
                    <span>Tables are held for 15 minutes past your reserved time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-marigold-500 mt-1.5 flex-shrink-0" />
                    <span>No advance deposit or cancellation fee required.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-marigold-500 mt-1.5 flex-shrink-0" />
                    <span>Walk-in guests are always accommodated on a first-come basis.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-espresso-950 text-cream-100 shadow-warm space-y-3">
                <div className="flex items-center gap-2 text-marigold-400 text-xs font-mono uppercase tracking-wider font-semibold">
                  <MessageCircle className="h-4 w-4" />
                  <span>Immediate Booking?</span>
                </div>
                <p className="text-xs font-sans text-cream-200/80 leading-relaxed">
                  Visiting in the next 1 hour or need a quick table check? Message our desk directly on WhatsApp.
                </p>
                <a
                  href={getWhatsAppGeneralUrl("table")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <MessageCircle className="h-3.5 w-3.5 fill-current" />
                  <span>Book via WhatsApp ({siteConfig.phone})</span>
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
