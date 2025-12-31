// File: tailwind.config.ts
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
        // THEME: Original Luxury (Restored)
        'rich-black': '#0a0a0a',      
        'soft-cream': '#f5f5f0',      
        'luxury-gold': '#d4af37',     
        'charcoal': '#111111',        
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};
export default config;