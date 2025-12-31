// File: app/page.tsx
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";         
import Experience from "@/components/Experience"; 
import Certificates from "@/components/Certificates"; 
import Contact from "@/components/Contact";
// import Preloader from "@/components/Preloader"; // Don't forget this import!

export default function Home() {
  return (
    // FIX 1: "block" is required for GSAP Pinning to work correctly.
    // "flex flex-col" causes the pinned sections to collapse.
    <main className="relative block w-full min-h-screen bg-rich-black">
      
      {/* <Preloader /> */}

      <Hero />
      
      {/* FIX 2: Added a Wrapper with padding (py-32) to create space */}
      {/* py-32 = 8rem = 128px of space above and below the slider */}
      <div className="w-full py-32 relative z-10 bg-rich-black">
        <Marquee />
      </div>

      <About />
      <Work />
      <Experience />
      <Certificates />
      <Contact />
      
    </main>
  );
}