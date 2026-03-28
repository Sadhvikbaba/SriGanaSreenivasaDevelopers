import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="h-screen min-h-[600px] max-h-[1000px] w-full bg-[#050505] flex flex-col items-center justify-center py-8 px-4 sm:px-6 md:px-8 relative z-20 font-sans">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-[#e2e2e2]">
          Get in <span className="bg-gradient-to-r from-[#9b51e0] to-[#c792ea] text-transparent bg-clip-text">touch</span>
        </h2>
        <p className="text-[#a0a0a5] text-[15px] md:text-lg max-w-2xl mx-auto">
          Reach out, and let's create a universe of possibilities together!
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1100px] bg-[#111116] rounded-[2rem] p-5 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 shadow-2xl relative overflow-hidden ring-1 ring-white/5">
        
        {/* Left Side: Form */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2 leading-tight">
              Let's connect constellations
            </h3>
            <p className="text-[#a0a0a5] text-sm md:text-[15px] leading-relaxed max-w-md">
              Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
            </p>
          </div>

          <form className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-[#181820] text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9b51e0] focus:ring-1 focus:ring-[#9b51e0] transition-all placeholder:text-[#6a6a75] text-[15px]"
              />
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-[#181820] text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9b51e0] focus:ring-1 focus:ring-[#9b51e0] transition-all placeholder:text-[#6a6a75] text-[15px]"
              />
            </div>
            
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-[#181820] text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9b51e0] focus:ring-1 focus:ring-[#9b51e0] transition-all placeholder:text-[#6a6a75] text-[15px]"
            />
            
            <input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-[#181820] text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9b51e0] focus:ring-1 focus:ring-[#9b51e0] transition-all placeholder:text-[#6a6a75] text-[15px]"
            />
            
            <textarea 
              placeholder="Message" 
              rows={3}
              className="w-full bg-[#181820] text-white border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:border-[#9b51e0] focus:ring-1 focus:ring-[#9b51e0] transition-all placeholder:text-[#6a6a75] text-[15px] resize-none"
            ></textarea>

            <button 
              type="button" 
              className="w-full mt-2 bg-gradient-to-r from-[#903aff] to-[#a35cf5] hover:from-[#9b51e0] hover:to-[#b370f8] text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] shadow-[0_0_20px_rgba(144,58,255,0.2)] flex items-center justify-center gap-2 text-[15px]"
            >
              Send it to the moon 🚀
            </button>
          </form>
        </div>

        {/* Right Side: Image and Quote */}
        <div className="flex-[0.8] relative rounded-3xl overflow-hidden group min-h-[300px] lg:min-h-auto">
          <Image 
            src="/contact.png" 
            alt="Astronaut sitting on a cosmic surface" 
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent"></div>
          
          <div className="absolute flex flex-col bottom-0 left-0 w-full p-6 md:p-8 text-white z-10">
            <p className="text-[#c4c4c8] text-sm leading-relaxed mb-3">
              "Two lunar months revealed Earth's fragile beauty against vast silence, transforming my view of our place in the universe.
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
