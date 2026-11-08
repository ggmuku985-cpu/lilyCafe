import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FCFAF6",
          100: "#FAF6EF", // primary warm background
          200: "#F5EFEB",
          300: "#EBE3D7",
          400: "#DFCDB5",
        },
        espresso: {
          50: "#F5EFEA",
          100: "#E5D7CE",
          200: "#C8B1A2",
          400: "#8B6551",
          700: "#442A1D",
          800: "#341E14",
          900: "#24140D", // rich deep brown
          950: "#170C08",
        },
        terracotta: {
          50: "#FCF6F2",
          100: "#F7E9E1",
          200: "#EFD0C2",
          300: "#E3B19A",
          400: "#D3886A",
          500: "#C46845", // warm Indian terracotta
          600: "#A94F2E",
          700: "#883D21",
        },
        marigold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // warm marigold / saffron
          600: "#D97706",
          700: "#B45309",
        },
        sage: {
          50: "#F4F6F2",
          100: "#E5ECE0",
          200: "#CDDBC5",
          400: "#99B28D",
          500: "#708E62", // Indian leaf / botanical
          600: "#59744D",
          700: "#43583A",
        },
        indigo: {
          800: "#1E2A38",
          900: "#131C27", // deep royal indigo accent
          950: "#0C121B",
        },
        teal: {
          700: "#134E5E",
          800: "#0F3E4B",
          900: "#0A2F39",
        },
        gold: {
          100: "#FCF8EC",
          200: "#F8ECCF",
          300: "#EED799",
          400: "#E3BE63",
          500: "#D4A338", // artisan warm gold
          600: "#B88625",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
      },
      borderRadius: {
        arch: "160px 160px 16px 16px",
        "arch-lg": "240px 240px 24px 24px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      boxShadow: {
        warm: "0 10px 30px -10px rgba(36, 20, 13, 0.08), 0 4px 6px -2px rgba(36, 20, 13, 0.04)",
        "warm-lg": "0 20px 40px -15px rgba(36, 20, 13, 0.12), 0 8px 16px -4px rgba(36, 20, 13, 0.06)",
        "warm-xl": "0 25px 50px -12px rgba(36, 20, 13, 0.18)",
        glow: "0 0 25px rgba(245, 158, 11, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
