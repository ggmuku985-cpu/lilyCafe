# Café Lily — Indian Specialty Café & Artisan Roastery

> An award-winning, agency-grade digital experience for **Café Lily**, an artisan Indian specialty cafe, chai bar, and fresh bakery based on College Road, Nashik, Maharashtra.

Designed and engineered as a high-end agency portfolio showcase, this project brings together authentic Indian cafe culture (masala chai, filter kaapi, bun maska, street-style bites, and artisanal desserts) with precision modern web craftsmanship—delivering buttery smooth micro-interactions, rich typography, and production-ready architecture.

---

## ☕ Live Demo & Brand Vision
- **Aesthetic**: Warm, calm, elegant, modern-artisan boutique Indian cafe.
- **Color Palette**:
  - Warm Terracotta (`#C85A32`, `#E07A5F`)
  - Marigold / Saffron (`#EAA023`, `#F3C065`)
  - Deep Espresso Brown (`#231610`, `#170D08`)
  - Deep Indigo / Royal Navy (`#1E2C3D`)
  - Sage Herbal Accent (`#6F8769`)
  - Warm Ivory & Jaali Background (`#FCF9F3`, `#F5EFE4`)
- **Typography**: Playfair Display (editorial serif) paired with DM Sans (clean modern sans).
- **Indian Design Accents**: Subtle jaali (lattice) backgrounds, arch-shaped image frames, lily mandala emblem, and FSSAI veg/non-veg indicator badges.
- **Context**: Authentic Indian cafe landscape with ₹ INR pricing, +91 phone formatting, Nashik address, and WhatsApp instant ordering.

---

## 🛠️ Tech Stack & Key Features

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Language**: TypeScript (strict type checking & interfaces)
- **Styling**: Tailwind CSS with Indian cafe tokens (`terracotta`, `marigold`, `espresso`, `sage`, `indigo`)
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/) for scroll reveals, staggered entry, tab transitions via `AnimatePresence`, floating badges, and cart drawer
  - Respects user accessibility preferences (`prefers-reduced-motion`)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis) smooth scrolling with automatic cleanup and floating scroll-to-top trigger
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) schema validation + [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Image Resilience (`SafeImage`)**:
  - Fixed aspect ratio wrappers preventing layout shifts
  - Shimmer loading skeletons
  - Local SVG fallback (`/images/fallback.svg`) on image load errors
  - Build-time verification script (`npm run check:images`)
- **Interactive Mini-Cart & WhatsApp Ordering**:
  - "Add to order" on any menu card
  - Persistent cart state in `localStorage`
  - Sliding cart drawer with item counter, quantity controls, and total in ₹
  - Instant WhatsApp checkout generating a pre-formatted order message to `siteConfig.whatsappNumber`
  - Floating WhatsApp chat button for direct inquiries
- **SEO & Performance**:
  - Full Open Graph & Twitter metadata per route
  - Google Structured Data (`CafeOrCoffeeShop` JSON-LD schema with Indian cuisine, geo coordinates, opening hours, and menu link)
  - Dynamic `sitemap.ts` and `robots.ts`
  - Custom 404 page (`not-found.tsx`) and error boundary (`error.tsx`)

---

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx              # Root layout with fonts, Lenis, Navbar, Footer, JSON-LD
│   ├── page.tsx                # Homepage (15 comprehensive sections)
│   ├── globals.css             # Base styles, delicate scrollbars, grain texture
│   ├── not-found.tsx           # Custom 404 page
│   ├── error.tsx               # Error boundary
│   ├── robots.ts               # Robots.txt generator
│   ├── sitemap.ts              # XML sitemap generator
│   ├── menu/page.tsx           # Full menu with sticky category & dietary filter
│   ├── about/page.tsx          # Brand story, interactive timeline, team, sourcing
│   ├── gallery/page.tsx        # Full masonry photography gallery with lightbox
│   ├── reservations/page.tsx   # Dedicated validated table booking page
│   ├── contact/page.tsx        # Contact form, Google map, hours & FAQ accordion
│   └── api/
│       ├── reserve/route.ts    # POST endpoint for table reservations
│       └── newsletter/route.ts # POST endpoint for newsletter subscription
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Transparent-to-solid sticky nav with mobile drawer
│   │   ├── Footer.tsx          # Rich footer with links, socials, hours, and credits
│   │   └── PageHeader.tsx      # Atmospheric header for inner routes with breadcrumbs
│   ├── sections/
│   │   ├── HeroSection.tsx             # Fullscreen hero with parallax & scroll hint
│   │   ├── MarqueeSection.tsx          # Infinite marquee highlight banner
│   │   ├── StoryTeaserSection.tsx      # Overlapping image collage & animated counters
│   │   ├── SignatureFavoritesSection.tsx# 6 animated signature item cards
│   │   ├── WhyLilySection.tsx          # 4-card feature grid with custom icons
│   │   ├── MenuPreviewSection.tsx      # Interactive category tabs preview
│   │   ├── HomeGallerySection.tsx      # Masonry preview with lightbox
│   │   ├── TestimonialsSection.tsx     # 5-star review carousel with avatars
│   │   ├── EventsSection.tsx           # Upcoming workshops and live music
│   │   ├── InstagramStripSection.tsx   # 6-photo Instagram feed strip
│   │   ├── HomeReservationSection.tsx  # Interactive table booking section
│   │   ├── LocationHoursSection.tsx    # Hours, valet info, and embedded Google map
│   │   ├── NewsletterSection.tsx       # Morning Bloom newsletter signup
│   │   ├── FullMenuSection.tsx         # Full menu filtering and search
│   │   └── FullGallerySection.tsx      # Full gallery with category filters
│   ├── ui/
│   │   ├── Button.tsx          # Reusable styled button with variants & micro-interactions
│   │   ├── Badge.tsx           # Dietary tags (V, VG, GF, Bestseller, Chef's Pick)
│   │   ├── Counter.tsx         # In-view animated number counter
│   │   ├── Lightbox.tsx        # Accessible keyboard-navigable image lightbox
│   │   ├── Logo.tsx            # SVG Lily mark and brand typography
│   │   ├── MenuCard.tsx        # Card with hover zoom, tags, price, and prep info
│   │   ├── Reveal.tsx          # Framer Motion scroll-triggered fade & slide-up
│   │   ├── ReservationForm.tsx # RHF + Zod booking form with confetti
│   │   ├── ContactForm.tsx     # Validated contact form
│   │   ├── FaqAccordion.tsx    # Animated collapsible FAQ
│   │   ├── SmoothScroll.tsx    # Lenis wrapper with scroll-to-top button
│   │   ├── ScrollProgress.tsx  # Top scroll progress bar
│   │   └── CustomCursor.tsx    # Subtle desktop trailing cursor
│   └── seo/
│       └── JsonLd.tsx          # Schema.org structured data
├── data/
│   ├── menu.ts                 # 36 realistic items across 6 categories (with ₹ prices)
│   ├── testimonials.ts         # Guest reviews with ratings and avatars
│   ├── events.ts               # Workshops and music calendar
│   ├── gallery.ts              # Photography catalog with aspect ratios
│   ├── team.ts                 # Founder, roaster, chef profiles and core values
│   └── faq.ts                  # Frequently asked questions
├── lib/
│   └── utils.ts                # cn helper and Indian Rupee currency formatter
├── public/
│   ├── logo.svg                # Brand logo emblem
│   └── favicon.svg             # Favicon
└── tailwind.config.ts          # Custom color tokens, fonts, and animations
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.18+ or 20+ (Node 24 supported via `@next/swc-wasm-nodejs`)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Development Server
Start the local Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
Verify TypeScript types, route generation, and generate optimized assets:
```bash
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Next.js** (automatically detected).
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click **Deploy**. Vercel will build and assign a global CDN URL (e.g. `https://cafe-lily.vercel.app`).

---

## 🎨 How to Swap Content & Images

### Updating the Menu Items
All menu items, pricing, tags, and descriptions live in `/data/menu.ts`.
To edit or add a dish:
```typescript
{
  id: "c7",
  name: "Cardamom & Brown Sugar Cappuccino",
  description: "Classic creamy cappuccino dusted with freshly ground Kerala green cardamom...",
  price: 260, // Amount in ₹
  category: "Coffee", // "Coffee" | "Tea" | "Cold Drinks" | "Breakfast" | "Sandwiches" | "Desserts & Bakes"
  badges: ["V", "GF"], // "V" | "VG" | "GF"
  isChefsPick: true,
  isBestseller: true,
  image: "https://images.unsplash.com/photo-...",
}
```

### Changing Photography
- **Gallery**: Update image URLs and captions in `/data/gallery.ts`.
- **Hero & Story**: Change the Unsplash URLs in `components/sections/HeroSection.tsx` and `components/sections/StoryTeaserSection.tsx`.
- **Tip**: To use custom self-hosted photos, place images in `/public/images/` and change `image: "/images/your-photo.jpg"`.

### Modifying Cafe Details (Hours, Phone, Address)
- **Address & Coordinates**: In `components/sections/LocationHoursSection.tsx`, `components/layout/Footer.tsx`, and `components/seo/JsonLd.tsx`.
- **Service Hours**: In `data/faq.ts`, `LocationHoursSection.tsx`, and `Footer.tsx`.

### Customizing Brand Colors
Open `tailwind.config.ts` to adjust hex tokens for:
- `cream`: Backgrounds and soft cards (`#FAF6EF`)
- `espresso`: Text, deep headings, and dark accents (`#2B1B14`)
- `sage`: Botanical highlights (`#7A8F6B`)
- `terracotta`: Warm pastry and sunset accents (`#D9A88F`)
- `gold`: Details, badges, and stars (`#C5A059`)

---

## 💼 Client Customization Possibilities

When pitching or delivering this platform to a client, highlight these ready expansion pathways:

1. **POS & Order Management**:
   - Direct integration with Indian cafe POS systems (Petpooja, UrbanPiper, Posist, or Square).
   - "Order Ahead" takeaway pickup flow with Razorpay, Stripe, or PhonePe UPI payment gateway.
2. **Table Reservation System**:
   - Connect the `/api/reserve` endpoint directly to SevenRooms, OpenTable, TableCheck, or a Google Sheets / Airtable booking webhook.
   - Automated WhatsApp / SMS reservation confirmation via Twilio or Gupshup with calendar invite links (.ics).
3. **Retail Whole-Bean & Merch E-Commerce**:
   - Add a `/shop` section for 250g coffee bags, ceramic mugs, and cold brew drippers powered by Shopify Storefront API or Next.js Commerce.
4. **Member Loyalty & Coffee Subscriptions**:
   - Recurring bean subscription tiers (e.g., "The Roaster's Monthly Bloom").
   - Customer loyalty portal with QR scan at the cashier counter.
5. **Private Events & Shoot Bookings**:
   - High-resolution PDF brochure download for pre-wedding photography shoots, book launches, and brand pop-ups.

