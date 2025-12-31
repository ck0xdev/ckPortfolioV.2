// File: app/page.tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel") as HTMLElement[]
      
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + containerRef.current!.offsetWidth
        }
      })
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className="overflow-hidden bg-rich-black text-soft-cream">
      <Preloader />
      <Cursor />
      
      <div ref={wrapperRef} className="overscroll-none">
        <div ref={containerRef} className="flex w-[500vw] h-screen">
          <div className="panel w-screen h-screen"><Hero /></div>
          <div className="panel w-screen h-screen"><About /></div>
          <div className="panel w-screen h-screen"><Work /></div>
          <div className="panel w-screen h-screen"><Experience /></div>
          <div className="panel w-screen h-screen"><Contact /></div>
        </div>
      </div>
    </main>
  );
}