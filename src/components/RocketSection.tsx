"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function RocketSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start when top hits bottom of screen, end when bottom hits top of screen
    offset: ["start end", "end start"],
  });

  // Parallax mapped to 4 points over the 300vh container:
  // 0 -> 0.25: scrolling in (rocket flies bottom-left to center)
  // 0.25 -> 0.75: section fills screen (rocket stays pinned in center)
  // 0.75 -> 1.0: scrolling out to Section 4 (rocket flies center to top-right)
  const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["-100vw", "0vw", "0vw", "100vw"]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["100vh", "0vh", "0vh", "-100vh"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-black border-t border-white/5"
    >
      {/* Background decoration for the section */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
      
      {/* Sticky container to lock the text in the center of the viewport while scrolling the 300vh container */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <h2 className="text-white/10 text-6xl md:text-9xl font-black uppercase tracking-widest pointer-events-none text-center">
          Liftoff
        </h2>
      </div>

      {/* The Rocket - Centered wrapper ensures exact geometric translation from bottom-left to top-right */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
        <motion.div 
          className="w-[400px] h-[400px] md:w-[90vw] md:h-[90vh] lg:w-[80vw] lg:h-[80vh]"
          style={{ x, y }} 
        >
          {/* Adds a continuous subtle hover/wiggle to make the rocket feel alive */}
          <motion.div
            animate={{ x: [0, 8, -8, 0], y: [0, -8, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-full h-full relative drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            <Image
              src="/rocket-img.png"
              alt="Rocket flying in parallax"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
}
