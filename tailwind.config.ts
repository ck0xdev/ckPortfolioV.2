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
        // THEME: Original Luxury (Black & Gold)
        'rich-black': '#0a0a0a',      // Deepest Charcoal (The original background)
        'luxury-gold': '#d4af37',     // Classic Gold (The original accent)
        'soft-cream': '#f5f5f0',      // Off-white text (The original text)
        'forest-green': '#1a2e1a',    // Subtle background accent
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-manrope)'],
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
};
export default config;