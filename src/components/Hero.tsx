"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  // Stars get pushed down a lot
  const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Moon surface moves down significantly, creating depth
  const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "140%"]);

  // Astronaut moves UP (negative Y) and scales UP to pop out towards the user
  const astronautY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const astronautScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Text gets pushed down the most
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Stars Background - Moves slowest */}
      <motion.div
        className="absolute inset-0 z-0 w-full h-full"
        style={{ y: starsY }}
      >
        <Image
          src="/starry sky 3.png"
          alt="Stars Background"
          fill
          className="object-cover opacity-90"
          priority
        />
      </motion.div>

      {/* Moon Surface - Covers lower part, full screen width */}
      <motion.div
        className="absolute z-10 w-full h-full bottom-0 left-0"
        style={{ y: moonY }}
      >
        <motion.div 
          initial={{ y: "20vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="w-full h-full relative"
        >
          <Image
            src="/moon.png"
            alt="Moon Surface"
            fill
            className="object-cover object-bottom"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Astronaut - Foreground, mostly anchored to bottom */}
      <motion.div
        className="absolute z-20 w-full h-full left-0 pointer-events-none bottom-[-5vh] lg:bottom-[-15vh]"
        style={{ y: astronautY, scale: astronautScale }}
      >
        <motion.div
          initial={{ y: "30vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="w-full h-full relative"
        >
          <Image
            src="/Untitled.png"
            alt="Astronaut"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] origin-bottom scale-[1.6] md:scale-100"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Typography */}
      <motion.div
        className="absolute z-[5] flex flex-col items-center justify-center h-full w-full top-0 pointer-events-none mt-[-25vh] mix-blend-difference"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          initial={{ y: "-20vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className={`text-[6rem] md:text-[10rem] lg:text-[16rem] font-black text-white tracking-[0.05em] uppercase text-center leading-none ${orbitron.className}`}>
            SGS
          </h1>
          <p className="text-white mt-4 text-2xl md:text-3xl lg:text-5xl font-light tracking-widest max-w-xl text-center">
            Discover the unknown
          </p>
        </motion.div>
      </motion.div>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      {/* Bottom gradient fade for smooth transition to next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
    </section>
  );
}
