export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aanya Deshmukh",
    role: "Architect & Coffee Connoisseur",
    quote:
      "Cafe Lily is an oasis. The Pistachio Rose Cortado is an absolute masterpiece of balance, and the natural light streaming through the botanical conservatory makes every morning sketch session feel sacred.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    highlight: "An oasis of calm & botanical elegance",
  },
  {
    id: "t2",
    name: "Rohan Kapoor",
    role: "Product Designer, Mumbai",
    quote:
      "Whenever I drive up to Nashik for the weekend, Lily is my first stop. Their avocado tartine on house sourdough and the estate pour-over rival the finest specialty roasters in Melbourne and Tokyo.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    highlight: "Rivals top cafes in Melbourne & Tokyo",
  },
  {
    id: "t3",
    name: "Dr. Meera Sen",
    role: "Botanist & Author",
    quote:
      "The plant curation alone is worth the visit, but the Basque cheesecake with real vanilla bean and floral berry coulis completely stole my heart. You can feel the intention in every single detail.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    highlight: "You feel the intention in every detail",
  },
  {
    id: "t4",
    name: "Kabir Mehta",
    role: "Founder, Nashik Creative Lab",
    quote:
      "Our team hosts weekly brainstorming mornings here. Seamless Wi-Fi, quiet garden seating, world-class brew equipment, and the warmest hospitality team in Maharashtra.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    highlight: "Warmest hospitality team in Maharashtra",
  },
];

