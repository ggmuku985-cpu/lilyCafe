import Image from "next/image";
import { Instagram, ArrowUpRight } from "lucide-react";

export function InstagramStripSection() {
  const photos = [
    {
      id: "ig-1",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
      caption: "Single origin espresso bloom on a slow Tuesday morning.",
    },
    {
      id: "ig-2",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      caption: "Double baked almond croissants right out of the hearth.",
    },
    {
      id: "ig-3",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
      caption: "Pistachio Rose cortado garnished with Damask petals.",
    },
    {
      id: "ig-4",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
      caption: "Avocado & fresh Nashik burrata tartine with cold-pressed EVOO.",
    },
    {
      id: "ig-5",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      caption: "Courtyard conversations surrounded by lush botanical foliage.",
    },
    {
      id: "ig-6",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
      caption: "Basque burnt cheesecake with berry coulis. Melt-in-mouth texture.",
    },
  ];

  return (
    <section className="bg-cream-100 py-16 overflow-hidden border-t border-espresso-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-600 font-semibold mb-1">
            <Instagram className="h-4 w-4" />
            <span>Follow Our Coffee Journey</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-espresso-950 font-normal">
            @cafelily.nashik
          </h3>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-espresso-900 hover:text-gold-600 transition-colors bg-cream-50 px-5 py-2.5 rounded-full border border-cream-200 shadow-sm"
        >
          <span>View on Instagram</span>
          <ArrowUpRight className="h-4 w-4 text-gold-600" />
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
            className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-200 block shadow-sm"
          >
            <Image
              src={p.image}
              alt={p.caption}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            {/* Hover overlay with Instagram icon */}
            <div className="absolute inset-0 bg-espresso-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-cream-50 text-center">
              <Instagram className="h-6 w-6 text-gold-400 mb-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

