'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const container = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate the text sliding up
      gsap.fromTo(".about-text", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%", // Animation starts when top of section hits 70% of viewport
            toggleActions: "play none none reverse"
          }
        }
      )

    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative w-full py-32 px-10 md:px-20 bg-rich-black text-soft-cream overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* LEFT COLUMN: Label */}
        <div className="md:w-1/4">
          <p className="about-text font-sans text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
            ( 001 — About )
          </p>
          <div className="about-text h-[1px] w-full bg-white/10 origin-left"></div>
        </div>

        {/* RIGHT COLUMN: The Content */}
        <div className="md:w-3/4 flex flex-col gap-10">
          
          {/* Large Headline */}
          <h3 className="about-text font-serif text-4xl md:text-6xl leading-[1.1] text-soft-cream">
            I craft immersive digital experiences that merge <span className="text-luxury-gold italic">art</span> with <span className="text-luxury-gold italic">engineering</span>.
          </h3>

          <div className="flex flex-col gap-6 md:w-3/4 ml-auto">
            <p className="about-text font-sans text-base md:text-lg text-gray-400 leading-relaxed">
              Based in the digital realm, I specialize in building high-performance web applications using Next.js and WebGL. My work is defined by fluid animations, precise typography, and interaction design that feels natural.
            </p>

            <p className="about-text font-sans text-base md:text-lg text-gray-400 leading-relaxed">
              I believe a website shouldn't just display information—it should tell a story. By combining technical depth with aesthetic sensibility, I help brands leave a lasting impression.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}