import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CafeJsonLd } from "@/components/seo/JsonLd";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";
import { siteConfig } from "@/lib/site-config";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Café Lily | Chai, Filter Kaapi & Artisan Bakes | Nashik",
    template: "%s | Café Lily",
  },
  description:
    "A welcoming Indian-style cafe on Gangapur Road, Nashik. Enjoy earthen kulhad chai, South Indian filter kaapi, warm bun maska, homemade snacks, and lush garden seating.",
  keywords: [
    "Café Lily",
    "best cafe in Nashik",
    "specialty coffee Nashik",
    "kulhad chai Nashik",
    "South Indian filter coffee",
    "Gangapur Road cafes",
    "pet friendly cafe Nashik",
    "misal pav",
    "bun maska",
  ],
  authors: [{ name: "Café Lily Team" }],
  creator: "Café Lily",
  publisher: "Café Lily",
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
    title: "Café Lily | Where Every Cup Blooms",
    description:
      "Fresh coffee, warm chai, and homemade snacks in a peaceful garden setting in Nashik, Maharashtra.",
    url: siteConfig.url,
    siteName: "Café Lily",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Café Lily Warm Garden Cafe & Roastery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Café Lily | Chai, Filter Kaapi & Artisan Bakes",
    description: "Your cozy neighborhood cafe on Gangapur Road, Nashik.",
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
      <body className="font-sans antialiased bg-cream-100 text-espresso-900 selection:bg-marigold-500/30 selection:text-espresso-950">
        <CartProvider>
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
            <CartDrawer />
            <WhatsAppFloatingButton />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
