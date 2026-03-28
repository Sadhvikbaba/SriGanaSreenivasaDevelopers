import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import RocketSection from "../components/RocketSection";
import AstronautSection from "../components/AstronautSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <Hero />
      <Timeline />
      <RocketSection />
      <AstronautSection />
      
      {/* Section 5 follows immediately after entering the helmet */}
      <section className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-light tracking-wide text-white/50">Section 5</h2>
        <p className="text-white/30 tracking-widest mt-4">Deep Space</p>
      </section>
    </main>
  );
}
