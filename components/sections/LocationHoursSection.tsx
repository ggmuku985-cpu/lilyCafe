import { MapPin, Clock, Navigation, Car, Sparkles, Phone, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function LocationHoursSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Gangapur+Road+Nashik+Maharashtra+422005";

  return (
    <section className="py-20 md:py-32 bg-cream-50 relative overflow-hidden border-t border-espresso-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Visit Our Sanctuary"
            title="Hours &amp; Location"
            subtitle="Tucked into the lush arbor of Gangapur Road, Nashik. Step inside for slow roastery aromatics and botanical tranquility."
            align="center"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Left Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-cream-100 border border-cream-200/90 shadow-warm-lg">
            <div className="space-y-8">
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-700">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-espresso-950 font-normal">
                    Roastery &amp; Botanical Courtyard
                  </h3>
                </div>
                <p className="text-sm font-sans text-espresso-800/80 pl-13 leading-relaxed">
                  Plot 14, Serene Boulevard, Gangapur Road,
                  <br />
                  Nashik, Maharashtra 422005, India
                </p>
                <div className="mt-3 pl-13">
                  <span className="text-xs font-mono text-gold-600 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                    Near Sula Vineyards Corridor
                  </span>
                </div>
              </div>

              {/* Hours */}
              <div className="pt-6 border-t border-espresso-900/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl text-espresso-950 font-normal">
                    Service Hours
                  </h3>
                </div>

                <div className="space-y-2.5 text-sm font-sans text-espresso-800/80 pl-13">
                  <div className="flex justify-between items-center py-1 border-b border-espresso-900/5">
                    <span className="font-medium text-espresso-950">Monday – Friday</span>
                    <span>7:30 AM – 10:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-espresso-900/5">
                    <span className="font-medium text-espresso-950">Saturday – Sunday</span>
                    <span>8:00 AM – 11:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-xs text-gold-600 font-mono">Slow Brunch Ritual</span>
                    <span className="text-xs text-gold-600 font-mono">Weekends 9 AM – 3:30 PM</span>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="pt-6 border-t border-espresso-900/10 grid grid-cols-2 gap-4 text-xs font-sans text-espresso-700/80">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-gold-600" />
                  <span>Complimentary Valet</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-gold-600" />
                  <span>Wheelchair Accessible</span>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-8 mt-6 border-t border-espresso-900/10">
              <Button
                href={googleMapsUrl}
                isExternal
                variant="primary"
                size="md"
                className="w-full"
                leftIcon={<Navigation className="h-4 w-4 text-gold-400" />}
              >
                Open in Google Maps
              </Button>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 h-[420px] lg:h-auto min-h-[380px] rounded-3xl overflow-hidden shadow-warm-lg border border-cream-200/90 relative">
            <iframe
              title="Cafe Lily Location Map - Gangapur Road Nashik"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.26818296767!2d73.7126189912061!3d19.997453267568165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb01726a57db%3A0x8898ddfc7df65005!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] contrast-[1.05]"
            />
            {/* Overlay pill badge */}
            <div className="absolute top-4 left-4 bg-cream-100/95 backdrop-blur-md rounded-2xl px-4 py-2 border border-gold-500/30 shadow-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-sans font-medium text-espresso-900">
                Open Now • Serving Fresh Pour-Overs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

