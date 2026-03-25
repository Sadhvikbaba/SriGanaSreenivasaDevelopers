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
  const x = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["-100vw", "0vw", "0vw", "100vw"]);
  const y = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], ["100vh", "0vh", "0vh", "-100vh"]);

  // Opacity for the hexagon tags: fade in shortly after rocket stops, fade out before it moves
  const hexOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0]);
  // Scale bulge effect for the hexagon tags: pop in to 1.15 then settle to 1
  const hexScale = useTransform(scrollYProgress, [0.24, 0.25, 0.28, 0.3, 0.7, 0.75], [0.5, 0.5, 1.15, 1, 1, 0.8]);


  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[200vh] bg-black border-t border-white/5"
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
          className="relative w-[400px] h-[400px] md:w-[90vw] md:h-[90vh] lg:w-[80vw] lg:h-[80vh]"
          style={{ x, y }} 
        >
          {/* Hexagon 1: Top Left relative to rocket (md), Top Center (mobile) */}
          <motion.div 
            style={{ opacity: hexOpacity, scale: hexScale }}
            className="absolute z-0 w-28 h-32 md:w-32 md:h-36 flex items-center justify-center -top-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-[12%] md:left-[10%] 2xl:left-[15%] pointer-events-none"
          >
            <svg className="absolute inset-0 w-full h-full text-white/30 drop-shadow-lg" viewBox="0 0 100 115" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="1">
              <polygon points="50,2 98,29 98,86 50,113 2,86 2,29" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="relative z-10 text-white font-mono text-xs md:text-sm tracking-widest">IGNITE</span>
          </motion.div>

          {/* Hexagon 2: Bottom Right relative to rocket (md), Bottom Center (mobile) */}
          <motion.div 
            style={{ opacity: hexOpacity, scale: hexScale }}
            className="absolute z-0 w-28 h-32 md:w-32 md:h-36 flex items-center justify-center -bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:bottom-[12%] md:left-auto md:right-[10%] 2xl:right-[15%] pointer-events-none"
          >
            <svg className="absolute inset-0 w-full h-full text-white/30 drop-shadow-lg" viewBox="0 0 100 115" fill="rgba(255,255,255,0.05)" stroke="currentColor" strokeWidth="1">
              <polygon points="50,2 98,29 98,86 50,113 2,86 2,29" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="relative z-10 text-white font-mono text-xs md:text-sm tracking-widest">SOAR</span>
          </motion.div>

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
