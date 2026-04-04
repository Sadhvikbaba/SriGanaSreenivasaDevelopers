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

export default function ContactSection() {
  return (
    <section className={`min-h-screen lg:h-screen lg:max-h-[1000px] w-full bg-space-bg flex flex-col items-center justify-center py-16 lg:py-8 px-4 sm:px-6 md:px-8 relative z-20 ${plusJakartaSans.className}`}>
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className={`${orbitron.className} text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-white/90`}>
          Get in <span className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text">touch</span>
        </h2>
        <p className="text-gray-400 text-[15px] md:text-lg max-w-2xl mx-auto">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1200px] bg-space-card rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
        
        {/* Left Side: Form */}
        <div className="flex-1 flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-6">
            <h3 className={`${orbitron.className} text-2xl md:text-3xl lg:text-3xl xl:text-[32px] font-semibold text-white mb-3 leading-tight tracking-wide`}>
              Let's connect constellations
            </h3>
            <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-lg">
              Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
            </p>
          </div>

          <form className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-space-secondary text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-500 text-[15px]"
              />
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-space-secondary text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-500 text-[15px]"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-space-secondary text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-500 text-[15px]"
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-space-secondary text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-500 text-[15px]"
            />
            
            <textarea 
              placeholder="Message" 
              rows={3}
              className="w-full bg-space-secondary text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all placeholder:text-gray-500 text-[15px] resize-none"
            ></textarea>

            <button 
              type="button" 
              className={`${orbitron.className} uppercase tracking-wider w-full mt-2 bg-gradient-to-r from-neon-purple to-neon-blue hover:to-neon-cyan text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] shadow-[0_0_20px_rgba(124,58,237,0.3)] flex items-center justify-center gap-2 text-sm md:text-base`}
            >
              Send it to the moon
            </button>
          </form>
        </div>

        {/* Right Side: Image and Quote */}
        <div className="w-full lg:flex-[0.9] relative rounded-3xl overflow-hidden group min-h-[250px] sm:min-h-[300px] lg:min-h-auto order-1 lg:order-2">
          <Image 
            src="/contact.png" 
            alt="Astronaut sitting on a cosmic surface" 
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-space-card via-space-card/60 to-transparent"></div>
          
          <div className="absolute flex flex-col bottom-0 left-0 w-full p-6 md:p-8 text-white z-10">
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              "Two lunar months revealed Earth's fragile beauty against vast silence, transforming my view of our place in the universe."
            </p>
            <p className="text-white font-medium text-[15px]">
              Irinel Traista
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
