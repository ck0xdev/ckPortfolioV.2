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
        'rich-black': '#0a0a0a',      // Deepest Charcoal
        'luxury-gold': '#d4af37',     // Classic Gold
        'soft-cream': '#f5f5f0',      // Off-white text
        'forest-green': '#1a2e1a',    // Subtle background accent
      },
      fontFamily: {
        serif: ['var(--font-playfair)'], // For Headlines
        sans: ['var(--font-manrope)'],   // For UI/Code
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
      }
    },
  },
  plugins: [],
};
export default config;