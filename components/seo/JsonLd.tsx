import { siteConfig } from "@/lib/site-config";

export function CafeJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    image: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    ],
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "₹₹",
    menu: `${siteConfig.url}/menu`,
    servesCuisine: [
      "Specialty Chai",
      "South Indian Filter Kaapi",
      "Indian Breakfast & Street Snacks",
      "Artisanal Bakery & Desserts",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 14, Serene Boulevard, Gangapur Road",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422005",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.9975,
      longitude: 73.7898,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "23:30",
      },
    ],
    sameAs: [
      "https://instagram.com/cafelily.nashik",
      "https://facebook.com/cafelilynashik",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
