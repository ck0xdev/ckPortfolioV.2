// File: app/layout.js
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor"; // Import the cursor we just made

// Configure fonts
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

export const metadata = {
  title: "My Portfolio",
  description: "Immersive portfolio created with Next.js and GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning={true} fixes the "attribute mismatch" error 
        caused by browser extensions or font loading differences.
      */}
      <body
        className={`${playfair.variable} ${manrope.variable}`}
        suppressHydrationWarning={true}
      >
        <Cursor /> {/* The mouse tracker sits here, above everything else */}
        {children}
      </body>
    </html>
  );
}