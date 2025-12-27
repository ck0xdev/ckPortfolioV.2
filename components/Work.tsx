'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: "EliteHub", category: "E-Commerce", year: "2025" },
  { id: 2, title: "Lendlly", category: "Startup UI", year: "2025" },
  { id: 3, title: "WorkScheduler", category: "SaaS Product", year: "2025" },
]

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind", "GSAP", "WebGL", "Node.js", "Figma"
]

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current

      if (!track || !section) return

      // Use a functional getter for the scroll amount so it updates on resize
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

      gsap.to(track, {
  x: getScrollAmount,
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: "+=3000",
    pin: true, // <--- THIS MUST BE TRUE
    scrub: 1,
    invalidateOnRefresh: true,
  }
})
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen bg-rich-black overflow-hidden">
      
      {/* Track: Added shrink-0 to ALL children to prevent collapsing */}
      <div ref={trackRef} className="flex h-full items-center w-max px-20 gap-20">
        
        {/* --- PART 1: TITLE CARD --- */}
        <div className="w-[30vw] shrink-0 flex flex-col justify-center">
           <h2 className="font-serif text-6xl md:text-8xl text-soft-cream leading-none">
             Selected <br /> <span className="text-luxury-gold italic">Works</span>
           </h2>
           <p className="mt-6 font-sans text-gray-400 max-w-sm">
             A collection of projects that define my journey in digital craftsmanship.
           </p>
        </div>

        {/* --- PART 2: PROJECTS --- */}
        {projects.map((project) => (
          <div key={project.id} className="relative group w-[80vw] md:w-[45vw] h-[60vh] bg-[#111] border border-white/5 overflow-hidden shrink-0">
            <span className="absolute top-4 left-6 font-serif text-4xl text-white/10 group-hover:text-luxury-gold/50 transition-colors">
              0{project.id}
            </span>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-serif text-soft-cream mb-2">{project.title}</h3>
              <div className="flex gap-2">
                 <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-gray-400">
                   {project.category}
                 </span>
                 <span className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-widest text-gray-400">
                   {project.year}
                 </span>
              </div>
            </div>
          </div>
        ))}

        {/* --- PART 3: SKILLS --- */}
        <div className="w-[60vw] md:w-[40vw] flex flex-col justify-center pl-20 border-l border-white/10 shrink-0">
           <h2 className="font-serif text-6xl text-soft-cream mb-10">
             Technical <span className="text-luxury-gold italic">Arsenal</span>
           </h2>
           <div className="flex flex-wrap gap-4">
             {skills.map((skill, index) => (
               <div key={index} className="px-6 py-3 border border-white/20 hover:border-luxury-gold/50 hover:bg-luxury-gold/10 transition-all duration-300 rounded-full">
                 <p className="font-sans text-lg text-gray-300 uppercase tracking-wide">{skill}</p>
               </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  )
}