// File: components/Certificates.tsx
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

  return (
    <section ref={container} className="relative py-32 px-6 md:px-20 bg-rich-black text-soft-cream">
      <div className="flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
           <span className="text-luxury-gold text-xl">✦</span>
           <h2 className="font-serif text-4xl mt-4">Certifications</h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="flex items-center justify-between p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300">
               <div>
                 <h3 className="font-serif text-xl text-gray-200">{cert.name}</h3>
                 <p className="font-sans text-xs text-gray-500 uppercase tracking-widest mt-1">{cert.issuer}</p>
               </div>
               <span className="font-sans text-xs text-luxury-gold border border-luxury-gold/20 px-2 py-1 rounded">
                 {cert.year}
               </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}