'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: "EliteHub", category: "E-Commerce", year: "2025" },
  { id: 2, title: "Lendlly", category: "Startup UI", year: "2025" },
  { id: 3, title: "WorkScheduler", category: "SaaS Product", year: "2025" },
  { id: 4, title: "Friday AI", category: "Intelligence", year: "2024" },
]

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current

      if (!track || !section) return

      // Calculate width to scroll
      const scrollAmount = track.offsetWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000", // Scroll distance
          pin: true,
          scrub: 1,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen bg-rich-black overflow-hidden">
      
      {/* Header */}
      <div className="absolute top-10 left-10 z-20">
        <h2 className="font-serif text-4xl text-soft-cream">Selected Work</h2>
        <p className="font-sans text-xs tracking-widest text-luxury-gold mt-2 uppercase">( 2024 — 2025 )</p>
      </div>

      {/* Horizontal Track */}
      <div ref={trackRef} className="flex h-full items-center gap-10 px-20 w-max">
        {projects.map((project) => (
          <div key={project.id} className="relative group w-[80vw] md:w-[40vw] h-[50vh] md:h-[60vh] bg-[#0a0a0a]">
            
            {/* Number */}
            <span className="absolute -top-12 left-0 font-serif text-6xl text-white/5 group-hover:text-luxury-gold/20 transition-colors">
              0{project.id}
            </span>

            {/* Card Content */}
            <div className="h-full w-full flex flex-col justify-center items-center p-8">
              <div className="w-full h-full bg-black/50 flex items-center justify-center">
                 <p className="text-white/20 font-sans uppercase tracking-widest">Project Image</p>
              </div>
              
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-serif text-soft-cream">{project.title}</h3>
                <p className="font-sans text-xs text-gray-400 mt-1 uppercase tracking-widest">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}