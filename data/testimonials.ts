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
    name: "Aanya Sharma",
    role: "Architect, Nashik",
    quote:
      "Café Lily is my favorite spot on Gangapur Road. The Kulhad Chai and Bun Maska remind me of old Mumbai cafes, but with a peaceful garden setting and great Wi-Fi.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    highlight: "Best chai & peaceful garden seating",
  },
  {
    id: "t2",
    name: "Rohan Deshmukh",
    role: "Software Engineer, Pune",
    quote:
      "Whenever I visit Nashik for the weekend, I always stop here. The South Indian Filter Kaapi in the brass dabarah is authentic, and the Misal Pav has just the right kick.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    highlight: "Authentic filter kaapi and spicy misal",
  },
  {
    id: "t3",
    name: "Meera Iyer",
    role: "Food Blogger, Mumbai",
    quote:
      "You have to try their Gulab Jamun Cheesecake! It is the most creative and delicious fusion dessert I have tasted. The staff is always smiling and helpful.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    highlight: "The Gulab Jamun Cheesecake is a must-try",
  },
  {
    id: "t4",
    name: "Kabir Mehta",
    role: "Local Business Owner, Nashik",
    quote:
      "Great place to catch up with friends or sit quietly with a book. The Cold Kaapi and Paneer Tikka Sandwich are my go-to order every Friday evening.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    highlight: "Super friendly team & relaxed atmosphere",
  },
];
