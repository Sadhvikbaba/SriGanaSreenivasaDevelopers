"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Orbitron, Plus_Jakarta_Sans } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const timelineData = [
  { phase: "Phase 1", title: "Logo Redesign", startWeek: 1, endWeek: 1 },
  { phase: "Phase 2", title: "Social Media Banners & Thumbnails", startWeek: 2, endWeek: 3 },
  { phase: "Phase 3", title: "Website Redesign", startWeek: 3, endWeek: 4 },
  { phase: "Phase 4", title: "Course promo Shorts", startWeek: 4, endWeek: 4 },
];

export default function Timeline() {
  return (
    <section className={`relative w-full min-h-screen bg-black text-white py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center overflow-hidden ${plusJakartaSans.className}`}>
      
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

      <div className="max-w-[1200px] w-full relative z-10">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${orbitron.className} text-5xl md:text-6xl font-black tracking-widest uppercase text-white`}
          >
            Timeline
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="hidden md:block text-white/50 font-light"
          >
            Project Proposal
          </motion.div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:block w-full relative mt-10">
          <div className="grid grid-cols-5 w-full h-full relative border-t border-white/10">
            
            {/* Background Vertical Grid Lines */}
            <div className="absolute inset-0 pointer-events-none flex">
              <div className="w-1/5 border-r border-white/5 h-full"></div>
              <div className="w-1/5 border-r border-white/5 h-full"></div>
              <div className="w-1/5 border-r border-white/5 h-full"></div>
              <div className="w-1/5 border-r border-white/5 h-full"></div>
              <div className="w-1/5 h-full"></div>
            </div>

            {/* Headers */}
            <div className="col-span-1 border-b border-white/10 pb-6 pt-6 flex items-end">
              <span className="text-white/50 text-xs tracking-wider uppercase pl-2">Phases</span>
            </div>
            {[1, 2, 3, 4].map((week) => (
              <div key={week} className="col-span-1 border-b border-white/10 pb-6 pt-6 text-white/70 text-sm pl-6 flex items-end">
                Week {week}
              </div>
            ))}

            {/* Rows */}
            {timelineData.map((item, index) => (
              <React.Fragment key={item.phase}>
                {/* Phase Label */}
                <div className="col-span-1 py-10 text-white/90 text-xl font-light border-b border-white/5 flex items-center pr-4 relative">
                  {item.phase}
                </div>
                {/* Task Card Container */}
                <div className="col-span-4 py-8 border-b border-white/5 relative flex items-center">
                   <div 
                     className="absolute h-[64px] pr-4 z-10 top-1/2 -translate-y-1/2"
                     style={{
                       left: `${((item.startWeek - 1) / 4) * 100}%`,
                       width: `${((item.endWeek - item.startWeek + 1) / 4) * 100}%`,
                       paddingLeft: '1.5rem', // Aligns with Week pl-6
                     }}
                   >
                     <TimelineCard item={item} index={index} />
                   </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-6 mt-10">
          {timelineData.map((item, index) => (
            <div key={item.phase} className="flex flex-col gap-3 relative before:absolute before:inset-0 before:bg-white/[0.02] before:rounded-2xl before:-z-10 p-4 border border-white/[0.05] rounded-2xl">
              <div className="flex justify-between items-end pb-2">
                <span className="text-white/90 text-lg font-medium">{item.phase}</span>
                <span className="text-white/50 text-xs px-2 py-1 bg-white/10 rounded-full">
                  {item.startWeek === item.endWeek 
                    ? `Week ${item.startWeek}` 
                    : `W${item.startWeek} - W${item.endWeek}`}
                </span>
              </div>
              <div className="h-[64px]">
                <TimelineCard item={item} index={index} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

type TimelineItem = {
  phase: string;
  title: string;
  startWeek: number;
  endWeek: number;
};

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={{
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: (i) => ({
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: i * 0.15,
            type: "spring",
            bounce: 0.5,
            duration: 0.8
          }
        })
      }}
      className="w-full h-full rounded-xl bg-[#1A1A1A] hover:bg-[#222222] transition-colors border border-white/10 flex items-center justify-start px-6 text-white/90 shadow-xl overflow-hidden relative group cursor-default"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="font-medium text-sm tracking-wide whitespace-nowrap text-ellipsis overflow-hidden relative z-10">
        {item.title}
      </span>
    </motion.div>
  );
}
