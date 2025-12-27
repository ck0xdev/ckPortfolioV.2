'use client'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register the plugin once
gsap.registerPlugin(ScrollTrigger)

function SmoothScroll({ children }) {
  const lenisRef = useRef()

  useEffect(() => {
    // 1. Force ScrollTrigger to update whenever Lenis scrolls
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    // 2. Connect GSAP's ticker to Lenis's animation frame
    gsap.ticker.add(update)

    // 3. Clean up when component unmounts
    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    // autoRaf={false} gives us manual control to sync with GSAP
    <ReactLenis root ref={lenisRef} autoRaf={false} options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll;