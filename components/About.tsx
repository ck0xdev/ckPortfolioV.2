// File: components/About.tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const container = useRef(null)
  const titleRef = useRef(null)
  const leftTextRef = useRef(null)
  const rightTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          end: "bottom bottom",
          toggleActions: "play none none reverse"
        }
      })

      tl.from(titleRef.current, { y: 100, opacity: 0, duration: 1.2, ease: "power4.out" })
      tl.from([leftTextRef.current, rightTextRef.current], {
        y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
      }, "-=0.8")

    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative w-full min-h-screen flex flex-col justify-center bg-rich-black text-soft-cream px-6 md:px-12 z-10">
      <div className="w-full max-w-[90vw] mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* TITLE */}
        <div className="border-b border-white/10 pb-8 md:pb-12">
            <h2 ref={titleRef} className="font-serif text-[12vw] leading-[0.8] text-white tracking-tight">
               About <span className="italic text-gray-600 font-light">Me.</span>
            </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24">
            
            {/* LEFT: The Hook (From CV) */}
            <div ref={leftTextRef} className="md:w-1/2">
               <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-gray-200">
                 Motivated BCA scholar specializing in <span className="text-luxury-gold italic">modern web technologies</span> and AI-assisted workflows.
               </h3>
            </div>

            {/* RIGHT: The Bio (From CV) */}
            <div ref={rightTextRef} className="md:w-1/3 flex flex-col justify-end pb-2">
                <p className="font-sans text-base md:text-lg text-gray-500 leading-relaxed font-light">
                   My approach combines foundational knowledge in Python and JavaScript with the speed of modern AI tools. 
                   I build responsive, user-friendly websites efficiently and am eager to apply my skills in a challenging internship environment.
                </p>
            </div>

        </div>
      </div>
    </section>
  )
}