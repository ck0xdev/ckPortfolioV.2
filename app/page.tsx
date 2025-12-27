import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";         
import Experience from "@/components/Experience"; 
import Certificates from "@/components/Certificates"; 
import Contact from "@/components/Contact";
import Preloader from "@/components/Preloader"; 

export default function Home() {
  return (
    <main className="relative block w-full min-h-screen bg-rich-black">
      
      <Preloader />

      <Hero />
      
      {/* FIX 2: Massive Spacer Wrapper (py-40) */}
      <div className="w-full py-40">
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