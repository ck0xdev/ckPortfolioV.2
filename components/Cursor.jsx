// File: app/components/Cursor.jsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Safety check: ensure element exists
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    // Function to move the cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1, 
        ease: "power2.out",
      });
    };

    // Add listener
    window.addEventListener("mousemove", moveCursor);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-dot" />;
}