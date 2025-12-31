// File: components/Experience.tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// CV Data: Project as Experience
const experience = [
  {
    role: "Web Developer",
    company: "Freelance / Projects",
    period: "2024 — Present",
    desc: "Leveraging AI-assisted workflows to generate optimized CSS layouts and debug JavaScript logic for responsive portfolio websites."
  },
  {
    role: "Internship Seeker",
    company: "Open to Work",
    period: "2025",
    desc: "Eager to contribute to real-world projects and further develop technical expertise in a professional environment."
  }
]

// CV Data: Education
const education = [
  {
    degree: "Bachelor of Computer App.",
    school: "VNSGU, Surat",
    period: "2023 — 2026 (Expected)",
    desc: "Focusing on modern web technologies and software engineering."
  },
  {
    degree: "Higher Secondary (H.S.C)",
    school: "Harekrushna Vidhyalaya",
    period: "Commerce Stream",
    desc: "Completed with a focus on business and commerce fundamentals."
  }
]

export default function Experience() {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".resume-item", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: container.current, start: "top 80%" }
        }
      )
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative py-32 px-10 md:px-20 bg-rich-black text-soft-cream">
      <div className="flex flex-col md:flex-row gap-20">
        
        {/* EXPERIENCE COLUMN */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-luxury-gold text-2xl">✦</span>
             <h2 className="font-serif text-4xl md:text-5xl text-soft-cream">Experience</h2>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-8 md:pl-12 gap-16">
            {experience.map((job, i) => (
              <div key={i} className="resume-item relative">
                <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-rich-black border border-luxury-gold rounded-full"></div>
                <span className="font-sans text-xs tracking-widest text-gray-500 uppercase mb-2 block">{job.period}</span>
                <h3 className="font-serif text-2xl text-soft-cream mb-1">{job.role}</h3>
                <p className="font-sans text-sm text-luxury-gold mb-4">{job.company}</p>
                <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION COLUMN */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-luxury-gold text-2xl">✦</span>
             <h2 className="font-serif text-4xl md:text-5xl text-soft-cream">Education</h2>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-8 md:pl-12 gap-16">
            {education.map((edu, i) => (
              <div key={i} className="resume-item relative">
                <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-rich-black border border-luxury-gold rounded-full"></div>
                <span className="font-sans text-xs tracking-widest text-gray-500 uppercase mb-2 block">{edu.period}</span>
                <h3 className="font-serif text-2xl text-soft-cream mb-1">{edu.degree}</h3>
                <p className="font-sans text-sm text-luxury-gold mb-4">{edu.school}</p>
                <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}