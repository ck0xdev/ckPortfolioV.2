'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const container = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 100, opacity: 0 }, { 
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 70%" }
      })
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative py-32 px-10 md:px-20 bg-rich-black text-soft-cream overflow-hidden">
      <div className="w-full h-[1px] bg-white/20 mb-20"></div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-20">
        <div className="md:w-1/2 overflow-hidden">
          <h2 ref={titleRef} className="font-serif text-[10vw] leading-[0.9] text-soft-cream">
            Let's <br /> <span className="text-gray-600 italic">Talk</span>.
          </h2>
        </div>
        <div className="md:w-1/3 flex flex-col gap-8 mt-10">
            <a href="mailto:hello@ck0x.dev" className="font-serif text-3xl hover:text-luxury-gold transition-colors">hello@ck0x.dev</a>
            <div className="flex gap-6 font-sans text-sm text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
            <p className="font-sans text-xs text-gray-700 mt-10">© 2025 ck0xDev.</p>
        </div>
      </div>
    </section>
  )
}