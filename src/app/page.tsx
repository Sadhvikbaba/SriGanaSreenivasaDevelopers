import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import RocketSection from "../components/RocketSection";
import AstronautSection from "../components/AstronautSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <Hero />
      <Timeline />
      <RocketSection />
      <AstronautSection />
      
      <ContactSection />
    </main>
  );
}
