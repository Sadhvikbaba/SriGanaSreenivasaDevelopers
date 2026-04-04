import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import RocketSection from "../components/RocketSection";
import AstronautSection from "../components/AstronautSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full flex flex-col">
      <Hero />
      <Timeline />
      <WhyChooseUsSection />
      <RocketSection />
      <AstronautSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
}
