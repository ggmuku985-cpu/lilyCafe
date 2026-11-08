export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  instructor?: string;
  price: string;
  seatsRemaining: number;
  tag: string;
  image: string;
}

export const EVENTS: EventItem[] = [
  {
    id: "e1",
    title: "Artisan Latte Art & Pour Chemistry",
    date: "Saturday, Nov 21",
    time: "10:30 AM – 1:00 PM",
    description: "Hands-on barista workshop exploring milk microfoam physics, pitcher techniques, tulip and rosetta patterns, plus your own take-home ceramic cup.",
    instructor: "Led by Head Barista Kabir Nair",
    price: "₹1,450 / person",
    seatsRemaining: 4,
    tag: "Workshop",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "e2",
    title: "Acoustic Sunset & Garden Jazz",
    date: "Every Thursday",
    time: "6:30 PM – 9:00 PM",
    description: "Intimate courtyard performances by indie singer-songwriters and jazz duos. Enjoy botanical cascara spritzes and artisanal grazing boards under the fairy lights.",
    instructor: "Curated Live Artists",
    price: "Free with table reservation",
    seatsRemaining: 8,
    tag: "Music & Social",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "e3",
    title: "Sunday Slow Brunch & Vinyl Grooves",
    date: "Every Sunday",
    time: "9:00 AM – 3:30 PM",
    description: "Our signature weekend spread: warm brioche, seasonal fruit tartines, unlimited pour-over flight, and rare soul & jazz vinyl spinning on our analog turntable.",
    instructor: "Resident Selector DJ Aarav",
    price: "A la carte menu",
    seatsRemaining: 12,
    tag: "Weekend Ritual",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70e33f7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "e4",
    title: "Estate Origin Cupping Masterclass",
    date: "Saturday, Dec 5",
    time: "4:00 PM – 6:00 PM",
    description: "Evaluate eight rare single-origin coffees from Chikmagalur, Araku Valley, and Coorg using certified SCA sensory cupping standards.",
    instructor: "Co-founder & Q-Grader Rhea Sen",
    price: "₹950 / person",
    seatsRemaining: 6,
    tag: "Tasting Experience",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80",
  },
];

