import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// 1. Configure the fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// 2. Define Metadata (SEO)
export const metadata: Metadata = {
  title: "CK | Immersive Portfolio",
  description: "Front-End Developer & UI/UX Designer",
};

// 3. The Layout Component (with TypeScript types)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable} bg-rich-black text-soft-cream`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}