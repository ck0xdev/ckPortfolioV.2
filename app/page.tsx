import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";         // Horizontal Scroll (Projects + Skills)
import Experience from "@/components/Experience"; // Vertical Scroll (Job + Education)
import Certificates from "@/components/Certificates"; // Vertical Scroll
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full min-h-screen bg-rich-black">
      
      {/* 1. Entrance */}
      <Hero />
      
      {/* 2. Energy Transition */}
      <Marquee />
      
      {/* 3. Storytelling */}
      <About />

      {/* 4. The Showcase (Horizontal Scroll) */}
      {/* User scrolls DOWN, content moves RIGHT */}
      <Work />

      {/* 5. Professional Details (Vertical Scroll) */}
      {/* Page resumes normal scrolling here */}
      <Experience />
      
      {/* 6. Social Proof (Vertical Scroll) */}
      <Certificates />

      {/* 7. Footer / CTA */}
      <Contact />
      
    </main>
  );
}