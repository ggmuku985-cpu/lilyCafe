export type GalleryCategory =
  | "All"
  | "Cafe & Garden"
  | "Chai & Kaapi"
  | "Snacks & Bakes"
  | "Community";

export interface GalleryImage {
  id: string;
  title: string;
  category: "Cafe & Garden" | "Chai & Kaapi" | "Snacks & Bakes" | "Community";
  caption: string;
  image: string;
  aspectRatio: "tall" | "wide" | "square";
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Cafe & Garden",
  "Chai & Kaapi",
  "Snacks & Bakes",
  "Community",
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    title: "Sunlit Courtyard Seating",
    category: "Cafe & Garden",
    caption: "Morning sunshine across our garden tables on Gangapur Road.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
  },
  {
    id: "g2",
    title: "Traditional Kulhad Chai",
    category: "Chai & Kaapi",
    caption: "Fresh ginger masala chai served hot in terracotta kulhads.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
  },
  {
    id: "g3",
    title: "Fresh Morning Pastry Counter",
    category: "Snacks & Bakes",
    caption: "Warm butter croissants, mawa tea cake slices, and freshly baked brownies.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
  },
  {
    id: "g4",
    title: "Chai & Good Conversations",
    category: "Community",
    caption: "Friends catching up under the green plants on a relaxed afternoon.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
  },
  {
    id: "g5",
    title: "Latte Art in Action",
    category: "Chai & Kaapi",
    caption: "Pouring tulip and heart latte art using fresh full-cream milk.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
  },
  {
    id: "g6",
    title: "Crispy Bombay Grilled Sandwich",
    category: "Snacks & Bakes",
    caption: "Toasted golden with spiced potatoes, cheese, and spicy green coriander chutney.",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
  },
  {
    id: "g7",
    title: "Acoustic Music Evening",
    category: "Community",
    caption: "Gentle music and fairy lights during our Thursday open mic sessions.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "square",
  },
  {
    id: "g8",
    title: "Quiet Corner for Reading",
    category: "Cafe & Garden",
    caption: "A quiet indoor table with warm lamps, book racks, and power plugs.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "tall",
  },
  {
    id: "g9",
    title: "Our Furry Guests",
    category: "Community",
    caption: "Pet-friendly garden space where your dogs can relax with fresh water bowls.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "wide",
  },
];
