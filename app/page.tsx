import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import MouseTracker from "@/components/MouseTracker"; // <--- Import this
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "CK | Immersive Portfolio",
  description: "Front-End Developer & UI/UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${manrope.variable} bg-rich-black text-soft-cream`}>
        <SmoothScroll>
          <MouseTracker /> {/* <--- Add it here, inside SmoothScroll or outside, doesn't matter */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}