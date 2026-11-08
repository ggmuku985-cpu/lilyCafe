import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CafeJsonLd } from "@/components/seo/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cafelily.in"),
  title: {
    default: "Cafe Lily | Specialty Roastery & Botanical Sanctuary | Nashik",
    template: "%s | Cafe Lily",
  },
  description:
    "An artisanal specialty coffee roastery, botanical conservatory, and sourdough bakery on Gangapur Road, Nashik, Maharashtra. Single-origin coffees and mindful hospitality.",
  keywords: [
    "Cafe Lily",
    "specialty coffee Nashik",
    "best cafe in Nashik",
    "single origin coffee Maharashtra",
    "Gangapur Road cafes",
    "artisan sourdough bakery Nashik",
    "botanical cafe",
    "pet friendly cafe Nashik",
  ],
  authors: [{ name: "Cafe Lily Specialty Roasters" }],
  creator: "Cafe Lily",
  publisher: "Cafe Lily",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Cafe Lily | Where Every Cup Blooms",
    description:
      "Specialty coffee roastery, botanical sanctuary, and sourdough bakery in Nashik, Maharashtra.",
    url: "https://cafelily.in",
    siteName: "Cafe Lily",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Cafe Lily Botanical Sanctuary & Coffee Roastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Lily | Specialty Roastery & Botanical Sanctuary",
    description: "Single-origin coffees, fresh artisan bakes, and peaceful mornings in Nashik.",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF6EF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <CafeJsonLd />
      </head>
      <body className="font-sans antialiased bg-cream-100 text-espresso-900 selection:bg-gold-500/30 selection:text-espresso-950">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

