"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function AstronautSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animate width: from a small distant size to a massive close-up
  // At 1000vw wide, the astronaut helmet completely fills the screen
  const width = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1.0],
    ["50vw", "300vw", "1000vw", "12500vw"]
  );

  // Fade out image once helmet fills the screen — black bg shows through naturally
  const imageOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  return (
    <section ref={containerRef} className="h-[200vh] w-full relative bg-black overflow-hidden">
      <div className="sticky top-0 w-full h-screen">
        {/* Starry Sky Background */}
        <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
          <Image
            src="/starry sky 3.png"
            alt="Stars Background"
            fill
            className="object-cover float"
            priority
          />
        </div>
        {/*
          APPROACH: Position the image absolutely at viewport center (top:50%, left:50%).
          
          After analyzing the actual PNG:
          - Image dimensions: roughly landscape (wider than tall)
          - Helmet visor center: approximately at 45% from left, 30% from top of the PNG
          
          The `transformTemplate` completely controls the CSS transform string.
          We use translate(-45%, -30%) which pins the helmet to the viewport center:
          - -45% of image width from left = places helmet center at left:50% anchor
          - -30% of image height from top = places helmet center at top:50% anchor  
          
          As `width` animates (Framer Motion sets width as a CSS property, not a transform),
          the image grows. The static translate(-45%, -30%) is always relative to the CURRENT
          image dimensions, so the helmet stays at viewport center at every size.
        */}
        {/* Desktop Version */}
        <motion.img
          src="/float astrounaut.png"
          alt="Floating Astronaut"
          draggable={false}
          transformTemplate={() => `translate(-44%, -27%)`}
          style={{
            width,
            opacity: imageOpacity,
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "auto",
            zIndex: 10,
          }}
          className="hidden md:block select-none pointer-events-none max-w-none"
        />

        {/* Mobile Version: Offset adjusted (-24%) to move the image further up on small screens */}
        <motion.img
          src="/float astrounaut.png"
          alt="Floating Astronaut"
          draggable={false}
          transformTemplate={() => `translate(-44%, -24%)`}
          style={{
            width,
            opacity: imageOpacity,
            position: "absolute",
            top: "50%",
            left: "50%",
            height: "auto",
            zIndex: 10,
          }}
          className="block md:hidden select-none pointer-events-none max-w-none"
        />
      </div>
    </section>
  );
}
