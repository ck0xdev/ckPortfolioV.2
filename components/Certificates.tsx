'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const certs = [
  { name: "Meta Front-End Developer", issuer: "Coursera", year: "2024" },
  { name: "JavaScript Algorithms", issuer: "FreeCodeCamp", year: "2023" },
  { name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2023" },
]

export default function Certificates() {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cert-item", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
          }
        }
      )
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative py-32 px-10 md:px-20 bg-rich-black text-soft-cream border-t border-white/5">
      
      <div className="flex flex-col md:flex-row gap-20">
        {/* Title */}
        <div className="md:w-1/3">
          <h2 className="font-serif text-4xl md:text-5xl text-soft-cream">
            Certifications
          </h2>
          <p className="mt-4 font-sans text-sm text-gray-500 max-w-xs leading-relaxed">
            Continuous learning is the core of my growth. Here are the milestones I've achieved.
          </p>
        </div>

        {/* List */}
        <div className="md:w-2/3 flex flex-col gap-8">
          {certs.map((cert, i) => (
            <div key={i} className="cert-item group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover:border-luxury-gold/50 transition-colors duration-500">
              
              <div>
                <h3 className="font-serif text-2xl md:text-3xl text-gray-200 group-hover:text-soft-cream transition-colors">
                  {cert.name}
                </h3>
                <p className="font-sans text-sm text-gray-500 mt-2 uppercase tracking-widest group-hover:text-luxury-gold transition-colors">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 md:mt-0">
                <span className="font-sans text-sm text-gray-600 border border-gray-800 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}