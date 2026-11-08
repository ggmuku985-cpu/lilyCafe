import { Instagram, ArrowUpRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

export function InstagramStripSection() {
  const photos = [
    {
      id: "ig-1",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
      caption: "Kulhad chai brewing on a slow morning.",
    },
    {
      id: "ig-2",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      caption: "Warm bun maska straight from our oven.",
    },
    {
      id: "ig-3",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
      caption: "South Indian filter kaapi decoction.",
    },
    {
      id: "ig-4",
      image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80",
      caption: "Grilled paneer tikka sandwich with mint chutney.",
    },
    {
      id: "ig-5",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80",
      caption: "Garden courtyard vibes in Nashik.",
    },
    {
      id: "ig-6",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
      caption: "Gulab jamun cheesecake fresh slice.",
    },
  ];

  return (
    <section className="bg-cream-100 py-16 overflow-hidden border-t border-espresso-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-terracotta-600 font-semibold mb-1">
            <Instagram className="h-4 w-4" />
            <span>Follow Us On Instagram</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
            @cafelily.nashik
          </h3>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-espresso-900 hover:text-terracotta-600 transition-colors bg-cream-50 px-5 py-2.5 rounded-full border border-cream-200 shadow-xs"
        >
          <span>View on Instagram</span>
          <ArrowUpRight className="h-4 w-4 text-terracotta-600" />
        </a>
      </div>

      {/* 6-Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-2 sm:px-4">
        {photos.map((p) => (
          <a
            key={p.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.caption}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-200 block shadow-xs"
          >
            <SafeImage
              src={p.image}
              alt={p.caption}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Hover overlay with Instagram icon */}
            <div className="absolute inset-0 bg-espresso-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-cream-50 text-center">
              <Instagram className="h-6 w-6 text-marigold-400 mb-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
