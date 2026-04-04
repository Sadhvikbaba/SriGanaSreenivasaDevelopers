"use client";

import { useState } from "react";
import { Orbitron } from "next/font/google";
import { Telescope, Satellite, Rocket, Globe, Check, Minus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const features = [
  "Core Navigation Tools",
  "Standard Telemetry Data",
  "Deep Space Communication",
  "Quantum Encryption",
  "Priority Support Channel",
  "Custom Orbital Paths",
];

const plans = [
  {
    name: "Intro",
    icon: Telescope,
    monthlyPrice: 12,
    annualPrice: 120,
    features: [true, true, true, false, false, false],
    highlight: false,
  },
  {
    name: "Base",
    icon: Satellite,
    monthlyPrice: 32,
    annualPrice: 320,
    features: [true, true, true, true, false, false],
    highlight: false,
  },
  {
    name: "Popular",
    icon: Rocket,
    monthlyPrice: 65,
    annualPrice: 650,
    discount: "30% OFF",
    features: [true, true, true, true, true, false],
    highlight: true,
  },
  {
    name: "Enterprise",
    icon: Globe,
    monthlyPrice: 99,
    annualPrice: 990,
    features: [true, true, true, true, true, true],
    highlight: false,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative w-full py-16 bg-space-bg overflow-hidden flex flex-col items-center z-10">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[40rem] h-[40rem] bg-neon-purple/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[40rem] h-[40rem] bg-neon-blue/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-wider ${orbitron.className}`}
          >
            Cosmic <span className="bg-gradient-to-r from-neon-purple to-neon-cyan text-transparent bg-clip-text">Plans</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-6">
            Select the tier that best suits your intergalactic mission.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span
              className={`text-lg font-medium transition-colors ${
                !isAnnual ? "text-white" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-space-card/50 border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue"
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neon-blue transition-all duration-300 shadow-[0_0_10px_var(--color-neon-blue)] ${
                  isAnnual ? "left-[calc(100%-1.75rem)]" : "left-1"
                }`}
              />
            </button>
            <span
              className={`text-lg font-medium transition-colors ${
                isAnnual ? "text-white" : "text-gray-500"
              }`}
            >
              Annually
            </span>
          </div>
        </motion.div>

        {/* Desktop Table View */}
        <div className="hidden xl:flex relative mx-auto w-full rounded-[2rem] border border-white/10 backdrop-blur-xl bg-space-card/80 shadow-2xl">
          {/* Features Left Column */}
          <div className="w-[25%] flex flex-col border-r border-white/10 bg-space-card/50 rounded-l-[2rem]">
            <div className="h-[180px] flex flex-col items-center justify-center border-b border-white/10">
              <Sparkles className="w-8 h-8 text-neon-blue mb-3" />
              <h3 className={`${orbitron.className} text-xl font-bold tracking-widest text-white text-center`}>
                Galactic<br />Tiers
              </h3>
            </div>
            <div className="flex-1 flex flex-col py-2">
              {features.map((feature, i) => (
                <div key={i} className="flex-1 min-h-[45px] flex items-center px-8 border-b border-white/5 last:border-0">
                  <span className="text-gray-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Columns */}
          <div className="flex-1 flex">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`flex-1 flex flex-col relative transition-all duration-300 hover:bg-space-secondary/50 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-neon-purple/10 to-neon-blue/10 border-x border-neon-blue/30 shadow-[0_0_30px_rgba(59,130,246,0.2)] z-10"
                    : "border-r border-white/10"
                } ${i === plans.length - 1 ? "rounded-r-[2rem] border-r-0" : ""}`}
              >
                {plan.discount && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl">
                    {plan.discount}
                  </div>
                )}
                <div className={`h-[180px] flex flex-col items-center justify-center p-4 border-b border-white/10 ${plan.highlight ? "border-neon-blue/20" : ""}`}>
                  <plan.icon className={`w-6 h-6 mb-2 ${plan.highlight ? "text-neon-blue" : "text-gray-400"}`} />
                  <h4 className={`text-lg font-medium mb-1 ${plan.highlight ? "text-white" : "text-white"}`}>{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                    <span className="text-gray-400 text-xs text-nowrap">/ {isAnnual ? "year" : "month"}</span>
                  </div>
                  <button className={`mt-3 w-28 py-1.5 text-[10px] uppercase tracking-wider rounded-full border transition-all ${plan.highlight ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white font-bold border-transparent hover:opacity-90 shadow-lg shadow-neon-blue/25" : "bg-transparent text-white border-white/30 hover:bg-space-secondary hover:border-white/50"}`}>
                    Choose plan
                  </button>
                </div>

                <div className="flex-1 flex flex-col py-2">
                  {features.map((_, idx) => (
                    <div key={idx} className="flex-1 min-h-[45px] flex items-center justify-center border-b border-white/5 last:border-0">
                      {plan.features[idx] ? (
                        <Check className={`w-5 h-5 ${plan.highlight ? "text-neon-blue" : "text-gray-300"}`} />
                      ) : (
                        <Minus className="w-5 h-5 text-gray-700" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Cards View */}
        <div className="grid xl:hidden grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i}
              className={`rounded-[2rem] border backdrop-blur-xl p-8 flex flex-col relative transform transition-all hover:-translate-y-1 ${
                plan.highlight
                  ? "border-neon-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-gradient-to-b from-neon-purple/10 to-neon-blue/10"
                  : "border-white/10 bg-space-card/80"
              }`}
            >
              {plan.discount && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-xs font-bold px-4 py-1.5 rounded-tr-[2rem] rounded-bl-xl uppercase tracking-wider">
                  {plan.discount}
                </div>
              )}
              <div className="flex items-center gap-5 mb-8">
                <div
                  className={`p-4 rounded-2xl ${
                    plan.highlight
                      ? "bg-neon-blue/20 text-neon-blue shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                      : "bg-space-secondary text-gray-300"
                  }`}
                >
                  <plan.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-1">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400 text-sm">
                      / {isAnnual ? "year" : "month"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-1 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {plan.features[idx] ? (
                      <div
                        className={`p-1 rounded-full ${
                          plan.highlight ? "bg-neon-blue/20" : "bg-space-secondary"
                        }`}
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 ${
                            plan.highlight ? "text-neon-blue" : "text-gray-300"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="p-1 rounded-full bg-transparent">
                        <Minus className="w-4 h-4 shrink-0 text-gray-700" />
                      </div>
                    )}
                    <span
                      className={`text-sm ${
                        plan.features[idx]
                          ? "text-gray-300"
                          : "text-gray-600 line-through decoration-gray-700"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 mt-auto rounded-xl border transition-all text-sm font-semibold uppercase tracking-wider ${
                  plan.highlight
                    ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white border-transparent hover:opacity-90 shadow-lg shadow-neon-blue/25"
                    : "bg-transparent text-white border-white/30 hover:bg-space-secondary hover:border-white/50"
                }`}
              >
                Choose plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
