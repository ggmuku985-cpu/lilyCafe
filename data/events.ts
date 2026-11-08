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
    title: "Sunday Chai & Poetry Circle",
    date: "Every Sunday",
    time: "4:30 PM – 6:30 PM",
    description: "An open circle for poetry, storytelling, and warm conversations over cutting chai and bun maska in our garden courtyard.",
    instructor: "Hosted by Nashik Writers Collective",
    price: "Free Entry (Order your favorite chai)",
    seatsRemaining: 10,
    tag: "Community",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "e2",
    title: "Acoustic Live Open Mic Night",
    date: "Every Thursday",
    time: "7:00 PM – 9:30 PM",
    description: "Enjoy soulful acoustic tunes by local singer-songwriters under fairy lights. Pair with our loaded sandwiches and coolers.",
    instructor: "Live Acoustic Artists",
    price: "Free with table booking",
    seatsRemaining: 6,
    tag: "Music Night",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "e3",
    title: "Hands-on Latte Art & Coffee Workshop",
    date: "Saturday, Nov 28",
    time: "10:30 AM – 1:00 PM",
    description: "Learn how to froth milk perfectly, pour heart and tulip latte art designs, and understand South Indian coffee decoction.",
    instructor: "Led by Head Barista Kabir",
    price: "₹750 / person (includes coffee kit)",
    seatsRemaining: 4,
    tag: "Workshop",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "e4",
    title: "Nashik Slow Weekend Brunch",
    date: "Saturday & Sunday",
    time: "9:00 AM – 2:00 PM",
    description: "Our special weekend breakfast spread: hot dosas, misal pav, fresh mango lassi, and filter kaapi refills.",
    instructor: "Chef Priya's Kitchen Special",
    price: "A la carte menu",
    seatsRemaining: 12,
    tag: "Weekend Special",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70e33f7?auto=format&fit=crop&w=1000&q=80",
  },
];
