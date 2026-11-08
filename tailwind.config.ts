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
          100: "#FAF6EF", // primary background
          200: "#F4EDE0",
          300: "#ECE2D0",
          400: "#DFCDB5",
        },
        espresso: {
          50: "#F3EEEB",
          100: "#E2D5CD",
          200: "#C4AA9B",
          400: "#8B6551",
          700: "#4A3024",
          800: "#36221A",
          900: "#2B1B14", // primary brand espresso
          950: "#1A100C", // deepest espresso
        },
        sage: {
          50: "#F4F6F2",
          100: "#E6ECE2",
          200: "#D0DCC9",
          400: "#9FB392",
          500: "#7A8F6B", // primary sage accent
          600: "#637655",
          700: "#4D5C43",
          800: "#384331",
        },
        terracotta: {
          50: "#FCF6F3",
          100: "#F7EBE4",
          200: "#EFD5C8",
          300: "#E4BAA6",
          400: "#D9A88F", // soft blush / terracotta highlight
          500: "#C68E73",
          600: "#AD7155",
        },
        gold: {
          100: "#FBF5E5",
          200: "#F4E5BE",
          300: "#E8CD8B",
          400: "#DCB862",
          500: "#C5A059", // warm gold
          600: "#A9823F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "sans-serif"],
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
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
      boxShadow: {
        warm: "0 10px 30px -10px rgba(43, 27, 20, 0.08), 0 4px 6px -2px rgba(43, 27, 20, 0.04)",
        "warm-lg": "0 20px 40px -15px rgba(43, 27, 20, 0.12), 0 8px 16px -4px rgba(43, 27, 20, 0.06)",
        "warm-xl": "0 25px 50px -12px rgba(43, 27, 20, 0.18)",
        glow: "0 0 25px rgba(197, 160, 89, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;

