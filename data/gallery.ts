export type GalleryCategory =
  | "All"
  | "Interior"
  | "Coffee & Bakes"
  | "Events"
  | "Community";

export interface GalleryImage {
  id: string;
  title: string;
  category: "Interior" | "Coffee & Bakes" | "Events" | "Community";
  caption: string;
  image: string;
  aspectRatio: "tall" | "wide" | "square";
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Interior",
  "Coffee & Bakes",
  "Events",
  "Community",
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    title: "Sunlit Glasshouse Seating",
    category: "Interior",
    caption: "Morning golden hour in our botanical conservatory with natural teak and terracotta details.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
  },
  {
    id: "g2",
    title: "Single-Origin Espresso Extraction",
    category: "Coffee & Bakes",
    caption: "Double shot pull on our customized Slayer espresso machine with naked portafilter.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
  },
  {
    id: "g3",
    title: "Fresh Morning Bake Counter",
    category: "Coffee & Bakes",
    caption: "Daily rotation of laminated almond croissants, babka, and basque cheesecakes fresh from the hearth at 7:30 AM.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
  },
  {
    id: "g4",
    title: "Garden Courtyard Conversations",
    category: "Community",
    caption: "Friends gathering amidst lush monstera leaves and limestone planters on a breezy autumn afternoon.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
  },
  {
    id: "g5",
    title: "Latte Art Pour Demonstration",
    category: "Events",
    caption: "Head barista Kabir demonstrating tulip symmetry during our bi-weekly barista masterclass.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
  },
  {
    id: "g6",
    title: "Artisanal Pour-Over Ritual",
    category: "Coffee & Bakes",
    caption: "Slow 3-minute bloom and pour on Hario V60 olive wood stand.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
  },
  {
    id: "g7",
    title: "Twilight Courtyard & Live Acoustic",
    category: "Events",
    caption: "Warm string lighting and gentle acoustic rhythms during our Thursday Sunset Social.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
  },
  {
    id: "g8",
    title: "Quiet Corner for Creators",
    category: "Interior",
    caption: "Dedicated slow workspace nook with natural linen cushions, individual brass lamps, and ergonomic oak chairs.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
  },
  {
    id: "g9",
    title: "Paws & Plants Morning Meetup",
    category: "Community",
    caption: "Pet-friendly garden terrace welcomes furry companions every morning with complimentary oat pup-cups.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
  },
];

