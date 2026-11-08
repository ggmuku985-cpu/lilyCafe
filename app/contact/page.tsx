import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Navigation,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact & Location | Cafe Lily Nashik",
  description:
    "Reach out to Cafe Lily, find our opening hours, embedded map directions on Gangapur Road, and answers to frequently asked guest questions.",
  openGraph: {
    title: "Contact & Directions | Cafe Lily",
    description: "Visit our botanical roastery in Nashik, Maharashtra. View maps, hours, and FAQs.",
  },
};

export default function ContactPage() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Gangapur+Road+Nashik+Maharashtra+422005";

  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Contact"
        eyebrow="Connect &amp; Locate"
        title="We are always here for a warm conversation."
        description="Questions regarding private bookings, wholesale beans, our sourdough fermentation, or finding our garden gate on Gangapur Road."
      />

      {/* Contact Cards & Form Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-warm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-gold-600 font-semibold mb-1 block">
                    Our Roastery Address
                  </span>
                  <h3 className="font-serif text-2xl text-espresso-950 font-normal">
                    Café Lily Sanctuary
                  </h3>
                  <p className="mt-2 text-sm font-sans text-espresso-800/80 leading-relaxed">
                    Plot 14, Serene Boulevard, Gangapur Road,
                    <br />
                    Nashik, Maharashtra 422005, India
                  </p>
                </div>

                <div className="pt-4 border-t border-espresso-900/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        Telephone
                      </span>
                      <a
                        href="tel:+919823045678"
                        className="text-sm font-semibold text-espresso-950 hover:text-gold-600 transition-colors"
                      >
                        +91 98230 45678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        Direct Email
                      </span>
                      <a
                        href="mailto:hello@cafelily.in"
                        className="text-sm font-semibold text-espresso-950 hover:text-gold-600 transition-colors"
                      >
                        hello@cafelily.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta-100 text-terracotta-700">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        Hours of Hospitality
                      </span>
                      <span className="text-xs text-espresso-800/80 block">
                        Mon–Fri: 7:30 AM – 10:30 PM
                      </span>
                      <span className="text-xs text-espresso-800/80 block">
                        Sat–Sun: 8:00 AM – 11:30 PM
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-espresso-900/10">
                  <Button
                    href={googleMapsUrl}
                    isExternal
                    variant="outline"
                    size="md"
                    className="w-full"
                    leftIcon={<Navigation className="h-4 w-4 text-gold-600" />}
                  >
                    Open Directions in Google Maps
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-12 bg-cream-50 border-y border-espresso-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[420px] rounded-3xl overflow-hidden shadow-warm-lg border border-cream-200 relative">
            <iframe
              title="Cafe Lily Location Map - Gangapur Road Nashik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26818296767!2d73.7126189912061!3d19.997453267568165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb01726a57db%3A0x8898ddfc7df65005!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full grayscale-[0.15]"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Common Inquiries"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about dining, reservations, workspaces, and dietary accommodations at Café Lily."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

