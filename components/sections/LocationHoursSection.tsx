import { MapPin, Clock, Navigation, Car, Sparkles, Phone, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig, getWhatsAppGeneralUrl } from "@/lib/site-config";

export function LocationHoursSection() {
  return (
    <section className="py-20 md:py-28 bg-cream-50 relative overflow-hidden border-t border-espresso-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Visit Us in Nashik"
            title="Location &amp; Opening Hours"
            subtitle="Conveniently situated on Gangapur Road with indoor seating, open garden tables, and free parking."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-cream-100 border border-cream-200/90 shadow-warm-lg">
            <div className="space-y-7">
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-marigold-100 text-marigold-800">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-espresso-950 font-normal">
                    Café Lily Garden &amp; Bakery
                  </h3>
                </div>
                <p className="text-sm font-sans text-espresso-800/85 leading-relaxed pl-13">
                  {siteConfig.address}
                </p>
                <div className="mt-3 pl-13">
                  <span className="text-xs font-mono text-terracotta-700 bg-terracotta-50 px-2.5 py-1 rounded-full border border-terracotta-200">
                    Near Serene Boulevard Circle
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-5 border-t border-espresso-900/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-800">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-espresso-950 font-normal">
                    Opening Hours
                  </h3>
                </div>

                <div className="space-y-2 text-sm font-sans text-espresso-800/85 pl-13">
                  <div className="flex justify-between items-center py-1 border-b border-espresso-900/5">
                    <span className="font-medium text-espresso-950">Monday – Friday</span>
                    <span>{siteConfig.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-espresso-900/5">
                    <span className="font-medium text-espresso-950">Saturday – Sunday</span>
                    <span>{siteConfig.hours.weekends}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-xs text-marigold-700 font-medium">Breakfast &amp; Chai</span>
                    <span className="text-xs text-marigold-700 font-medium">Starts 8:00 AM daily</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-5 border-t border-espresso-900/10 grid grid-cols-2 gap-3 text-xs font-sans text-espresso-700/80">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-terracotta-600" />
                  <span>Free Valet Parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-marigold-600" />
                  <span>Wheelchair Accessible</span>
                </div>
              </div>
            </div>

            {/* Direct Actions */}
            <div className="pt-6 mt-6 border-t border-espresso-900/10 flex flex-col sm:flex-row gap-3">
              <Button
                href={siteConfig.googleMapsUrl}
                isExternal
                variant="primary"
                size="md"
                className="flex-1"
                leftIcon={<Navigation className="h-4 w-4 text-marigold-400" />}
              >
                Get Directions
              </Button>
              <a
                href={getWhatsAppGeneralUrl("table")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-sans font-medium text-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="h-4 w-4 fill-current" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden shadow-warm-lg border border-cream-200/90 relative">
            <iframe
              title="Café Lily Location Map - Gangapur Road Nashik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26818296767!2d73.7126189912061!3d19.997453267568165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb01726a57db%3A0x8898ddfc7df65005!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.15]"
            />
            {/* Overlay pill badge */}
            <div className="absolute top-4 left-4 bg-cream-100/95 backdrop-blur-md rounded-2xl px-4 py-2 border border-marigold-500/30 shadow-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-sans font-medium text-espresso-900">
                Open Daily from 8:00 AM • Serving Hot Chai &amp; Kaapi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
