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
    bio: "Grew up in Nashik and loved the warmth of traditional Irani and South Indian cafes. She started Café Lily to bring good coffee and honest homemade food together.",
    favoriteDrink: "Adrak Elaichi Chai with Bun Maska",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kabir Nair",
    role: "Head Barista & Roaster",
    bio: "Born in Coorg and trained in Bengaluru. Kabir has spent 8 years perfecting filter kaapi blends and espresso roasts from Chikmagalur estates.",
    favoriteDrink: "South Indian Filter Kaapi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Head Pastry Chef",
    bio: "Passionate about blending Indian mithai flavors with European bakes. She created our famous Gulab Jamun Cheesecake and Rasmalai Tiramisu.",
    favoriteDrink: "Kesar Badam Royal Chai",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vikram Patil",
    role: "Cafe Manager & Guest Host",
    bio: "A proud Nashik local who makes sure every guest feels right at home. If you need a recommendation or extra pav with your misal, Vikram is your person.",
    favoriteDrink: "Lily Classic Cold Coffee",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
];

export const CAFE_VALUES = [
  {
    title: "Fresh & Honest Ingredients",
    description: "Real spices, fresh milk, and whole tea leaves. We do not use artificial syrups or frozen shortcuts.",
    icon: "Sprout",
  },
  {
    title: "Direct from South Indian Estates",
    description: "Our coffee beans come directly from family-owned shade plantations in Chikmagalur and Coorg.",
    icon: "Coffee",
  },
  {
    title: "Warm Indian Hospitality",
    description: "Come as you are. Whether you stay for 10 minutes or 3 hours with a laptop, you are always welcome.",
    icon: "HeartHandshake",
  },
  {
    title: "Pure Comfort Food",
    description: "From warm bun maska and hot pakoras to fresh butter croissants, everything is made to bring a smile.",
    icon: "Smile",
  },
];
