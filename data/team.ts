export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  favoriteDrink: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rhea Sen",
    role: "Founder & Creative Director",
    bio: "Certified Q-Grader and former interior architect who envisioned Cafe Lily as a synthesis of botanical sanctuary and precision specialty coffee roastery.",
    favoriteDrink: "Estate Single-Origin V60 Pour-Over",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kabir Nair",
    role: "Head Barista & Roasting Lead",
    bio: "National Barista Championship finalist with over 9 years mastering extraction curves, roast profiling, and training the next generation of specialty baristas.",
    favoriteDrink: "Lily Botanical Double Espresso",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ananya Verma",
    role: "Executive Pastry Chef",
    bio: "Le Cordon Bleu alumnus dedicated to viennoiserie, sourdough fermentation, and combining traditional French pastry techniques with seasonal Indian botanicals.",
    favoriteDrink: "Pistachio Rose Cortado",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vikram Patil",
    role: "Sourcing & Estate Relations Lead",
    bio: "Spends harvest seasons walking coffee estates in Chikmagalur and Coorg, partnering directly with farmers committed to regenerative shade-grown agriculture.",
    favoriteDrink: "24-Hour Cascara Citrus Tonic",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

export const CAFE_VALUES = [
  {
    title: "Direct-from-Estate Sourcing",
    description: "Every single bean is traced directly to regenerative, bird-friendly shade farms in Southern India, ensuring fair wages above fair-trade baselines.",
    icon: "Sprout",
  },
  {
    title: "Zero Artificial Compromises",
    description: "From our house-steeped vanilla bean syrup to our stone-milled sourdough flour, we craft every ingredient from scratch with zero preservatives.",
    icon: "Sparkles",
  },
  {
    title: "Slow Hospitality & Mindfulness",
    description: "We designed Cafe Lily to encourage slowing down. Warm ceramics made by local potters, acoustic acoustics, and genuine human warmth.",
    icon: "HeartHandshake",
  },
  {
    title: "Eco-Conscious Circular Loop",
    description: "100% of spent coffee grounds are composted into organic fertilizer for local Nashik vineyards and community garden projects.",
    icon: "Recycle",
  },
];

