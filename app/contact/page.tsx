import type { Metadata } from "next";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig, getWhatsAppGeneralUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Location | Directions & FAQs | Café Lily",
  description:
    "Find Café Lily on Gangapur Road, Nashik. Phone number, Google map directions, opening hours, and frequently asked questions.",
  openGraph: {
    title: "Contact & Location | Café Lily Nashik",
    description: "Get directions, contact details, and FAQs for Café Lily in Nashik.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream-100">
      <PageHeader
        breadcrumb="Contact"
        eyebrow="Get in Touch"
        title="We are always happy to hear from you."
        description="Have a question about our menu, private celebrations, or finding our garden gate on Gangapur Road? Drop us a line or visit us."
      />

      {/* Contact Cards & Form Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-warm space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-terracotta-600 font-semibold mb-1 block">
                    Our Address
                  </span>
                  <h3 className="font-serif text-2xl text-espresso-950 font-normal">
                    {siteConfig.name}
                  </h3>
                  <p className="mt-2 text-sm font-sans text-espresso-800/85 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-espresso-900/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold-100 text-marigold-800">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        Phone Call
                      </span>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-semibold text-espresso-950 hover:text-terracotta-600 transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        WhatsApp Chat
                      </span>
                      <a
                        href={getWhatsAppGeneralUrl("general")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                      >
                        Chat with our team
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-800">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-semibold text-espresso-950 hover:text-terracotta-600 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta-100 text-terracotta-800">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-espresso-600/70 block">
                        Opening Hours
                      </span>
                      <span className="text-xs text-espresso-800/85 block">
                        Mon–Fri: {siteConfig.hours.weekdays}
                      </span>
                      <span className="text-xs text-espresso-800/85 block">
                        Sat–Sun: {siteConfig.hours.weekends}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-espresso-900/10">
                  <Button
                    href={siteConfig.googleMapsUrl}
                    isExternal
                    variant="outline"
                    size="md"
                    className="w-full"
                    leftIcon={<Navigation className="h-4 w-4 text-terracotta-600" />}
                  >
                    Get Directions on Google Maps
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
          <div className="h-[400px] rounded-3xl overflow-hidden shadow-warm-lg border border-cream-200 relative">
            <iframe
              title="Café Lily Location Map - Gangapur Road Nashik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26818296767!2d73.7126189912061!3d19.997453267568165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb01726a57db%3A0x8898ddfc7df65005!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              className="w-full h-full grayscale-[0.1]"
            />
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Helpful Answers"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about dining, seating, Wi-Fi, and pet friendliness."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
