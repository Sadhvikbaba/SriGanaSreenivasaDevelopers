import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import RocketSection from "../components/RocketSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <Hero />
      <Timeline />
      <RocketSection />
      {/* Section 4 to allow scrolling past the Rocket Section and trigger the exit animation */}
      <section className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center border-t border-white/5 relative z-10">
        <h2 className="text-4xl md:text-6xl font-light tracking-wide text-white/50">Section 4</h2>
      </section>
    </main>
  );
}
