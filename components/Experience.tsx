'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const jobs = [
  {
    role: "Senior Front-End Dev",
    company: "TechFlow Studio",
    period: "2023 — Present",
    desc: "Leading the frontend architecture for high-scale SaaS products using Next.js and Tailwind."
  },
  {
    role: "UI/UX Designer",
    company: "Creative Minds",
    period: "2021 — 2023",
    desc: "Designed immersive web interfaces and design systems for fintech startups."
  }
]

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "University of Technology",
    period: "2018 — 2022",
    desc: "Specialized in Software Engineering and Human-Computer Interaction."
  },
  {
    degree: "Full Stack Bootcamp",
    school: "WebAcademy",
    period: "2020",
    desc: "Intensive training in MERN stack and modern web deployment."
  }
]

export default function Experience() {
  const container = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate items when they scroll into view
      gsap.fromTo(".resume-item", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          }
        }
      )
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={container} className="relative py-32 px-10 md:px-20 bg-rich-black text-soft-cream">
      
      <div className="flex flex-col md:flex-row gap-20">
        
        {/* --- LEFT COLUMN: EXPERIENCE --- */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-luxury-gold text-2xl">✦</span>
             <h2 className="font-serif text-4xl md:text-5xl text-soft-cream">Experience</h2>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-8 md:pl-12 gap-16">
            {jobs.map((job, i) => (
              <div key={i} className="resume-item relative">
                {/* Dot on the timeline */}
                <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-rich-black border border-luxury-gold rounded-full"></div>
                
                <span className="font-sans text-xs tracking-widest text-gray-500 uppercase mb-2 block">
                  {job.period}
                </span>
                <h3 className="font-serif text-2xl text-soft-cream mb-1">{job.role}</h3>
                <p className="font-sans text-sm text-luxury-gold mb-4">{job.company}</p>
                <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: EDUCATION --- */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-luxury-gold text-2xl">✦</span>
             <h2 className="font-serif text-4xl md:text-5xl text-soft-cream">Education</h2>
          </div>

          <div className="flex flex-col border-l border-white/10 pl-8 md:pl-12 gap-16">
            {education.map((edu, i) => (
              <div key={i} className="resume-item relative">
                <div className="absolute -left-[37px] md:-left-[53px] top-2 w-3 h-3 bg-rich-black border border-luxury-gold rounded-full"></div>
                
                <span className="font-sans text-xs tracking-widest text-gray-500 uppercase mb-2 block">
                  {edu.period}
                </span>
                <h3 className="font-serif text-2xl text-soft-cream mb-1">{edu.degree}</h3>
                <p className="font-sans text-sm text-luxury-gold mb-4">{edu.school}</p>
                <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">
                  {edu.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}