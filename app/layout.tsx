// File: app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import MouseTracker from "@/components/MouseTracker";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
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
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      {/* ADD suppressHydrationWarning HERE */}
      <body 
        className="bg-rich-black text-soft-cream antialiased"
        suppressHydrationWarning={true} 
      >
        
        {/* GLOBAL NOISE OVERLAY */}
        <div className="fixed inset-0 z-[50] pointer-events-none opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <MouseTracker />

        <SmoothScroll>
          {children}
        </SmoothScroll>
        
      </body>
    </html>
  );
}