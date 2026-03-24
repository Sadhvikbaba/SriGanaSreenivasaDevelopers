import Hero from "../components/Hero";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-black w-full overflow-hidden">
      <Hero />
      <Timeline />
    </main>
  );
}
