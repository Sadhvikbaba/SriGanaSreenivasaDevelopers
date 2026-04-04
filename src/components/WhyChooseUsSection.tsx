"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Orbitron, Plus_Jakarta_Sans } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function WhyChooseUsSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const leftHandX = useTransform(scrollYProgress, [0.0, 0.2], ["-100vw", "0vw"]);
  const rightHandX = useTransform(scrollYProgress, [0.0, 0.2], ["100vw", "0vw"]);

  // Hands fade in early and fade out before text scales
  const handsOpacity = useTransform(scrollYProgress, [0.0, 0.1, 0.4, 0.5], [0, 1, 1, 0]);

  // Container fades in, does not fade out (H2 handles screen fill)
  const containerOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  
  // H3, Paragraph, Buttons, and "Vision" gradient text fade out before the immense scale
  const otherTextOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  // H2 "ELEVATE YOUR" text scales incredibly large, directly pointing at 'T'
  // Utilizing scroll progress up to strictly 0.8 guarantees it completes before the component unsticks
  const h2Scale = useTransform(
    scrollYProgress,
    [0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8],
    [1, 3, 10, 40, 150, 800, 5000]
  );
  
  // Transition text color from white to black synchronously while it scales
  const h2Color = useTransform(scrollYProgress, [0.5, 0.7], ["rgba(255, 255, 255, 0.9)", "rgba(5, 7, 13, 1)"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-space-bg border-t border-white/5"
    >
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Image
            src="/starry sky 3.png"
            alt="Stars Background"
            fill
            className="object-cover float"
            priority
          />
        </div>

        {/* Left Hand */}
        <motion.div
          style={{ x: leftHandX, opacity: handsOpacity }}
          className="absolute z-20 top-[25%] md:top-1/2 -translate-y-1/2 left-0 w-[70vw] md:w-[40vw] max-w-[500px] pointer-events-none drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-full flex items-center">
            <Image
              src="/lefthand.png"
              alt="Left robotic hand"
              width={500}
              height={800}
              className="w-full h-auto ml-0"
              priority
            />
          </div>
        </motion.div>

        {/* Right Hand */}
        <motion.div
          style={{ x: rightHandX, opacity: handsOpacity }}
          className="absolute z-20 top-[75%] md:top-1/2 -translate-y-1/2 right-0 w-[70vw] md:w-[40vw] max-w-[500px] pointer-events-none drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        >
          <div className="relative w-full flex items-center justify-end">
            <Image
              src="/righthand.png"
              alt="Right robotic hand"
              width={500}
              height={800}
              className="w-full h-auto mr-0"
              priority
            />
          </div>
        </motion.div>

        {/* Centered Content */}
        <motion.div 
          style={{ opacity: containerOpacity }}
          className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-0 w-full"
        >
          <motion.h3 style={{ opacity: otherTextOpacity }} className={`${orbitron.className} text-neon-cyan text-sm md:text-2xl font-semibold tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]`}>
            Why Choose Us
          </motion.h3>
          
          <motion.h2 
            style={{ scale: h2Scale, color: h2Color }}
            className={`${orbitron.className} text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider mb-6 leading-tight origin-[78%_20%] md:origin-[48%_25%]`}
          >
            Elevate <br className="block md:hidden" />
            Your <br className="hidden md:block" />
            <motion.span style={{ opacity: otherTextOpacity }} className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text inline-block">Vision</motion.span>
          </motion.h2>

          <motion.p style={{ opacity: otherTextOpacity }} className={`${plusJakarta.className} text-gray-300 text-sm md:text-xl font-light max-w-3xl leading-relaxed mx-auto px-2 md:px-0`}>
            From AI-driven workflows to immersive realities, we shape digital innovations that transform industries. We deliver premium, futuristic freelance services built on modern technologies, breathtaking design, and stellar performance.
          </motion.p>
          
          <motion.div style={{ opacity: otherTextOpacity }} className="mt-10 flex flex-wrap justify-center gap-6">
            <button className={`${orbitron.className} relative px-8 py-4 bg-space-secondary border border-neon-blue/50 text-white font-bold tracking-wider uppercase text-sm md:text-base rounded-full overflow-hidden group hover:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]`}>
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className={`${orbitron.className} px-8 py-4 bg-transparent border border-white/20 text-white font-bold tracking-wider uppercase text-sm md:text-base rounded-full hover:bg-space-secondary hover:border-white/50 transition-all duration-300`}>
              Explore Services
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
