import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Shield, Flame, RotateCcw, Award } from 'lucide-react';

export default function WhyChooseUs() {
  
  const reasons = [
    {
      title: "Same-day-repairs",
      description: "Most repairs, including screen swaps, battery and charging port replacements, are done in under 1-2 hours while you wait."
    },
    {
      title: "Quality Guarantee",
      description: "We source high-grade OEM components with rigorous internal quality control testing before fitting them onto your device."
    },
    {
      title: "Superior Warranty",
      description: "Every hardware fix is backed by our direct, worry-free warranty covering touchscreen sensitivity and parts defect issues."
    },
    {
      title: "Free Diagnostics",
      description: "Not sure what's wrong? Our micro-soldering experts will inspect, diagnose, and offer an upfront quote with zero obligation."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-neutral-900 dark:bg-neutral-950 text-white overflow-hidden relative border-t border-b border-neutral-800">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] rounded-full bg-black/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Stunning interactive CSS Smartphone Mockups */}
          <div className="lg:col-span-5 relative flex justify-center h-[420px] sm:h-[480px]" id="why-choose-mockups">
            
            {/* Phone 1 (Backwards slant, overlapping) */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotate: -12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="absolute left-4 sm:left-10 bottom-6 w-[180px] sm:w-[220px] h-[350px] sm:h-[420px] rounded-[36px] bg-neutral-950 border-4 border-neutral-800 shadow-2xl p-2 flex flex-col justify-between overflow-hidden"
              id="phone-mockup-left"
            >
              {/* Speaker & camera slot */}
              <div className="w-20 h-4 bg-neutral-800 rounded-full mx-auto mt-1 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              </div>

              {/* Screen Content */}
              <div className="flex-1 bg-gradient-to-tr from-neutral-900 to-neutral-950 rounded-[28px] mt-2 p-4 text-center flex flex-col justify-between border border-neutral-900">
                <div className="text-left font-display font-black text-[10px] uppercase text-primary tracking-widest mt-2">
                  Best Mobile
                </div>
                
                <div className="my-auto">
                  <div className="w-10 h-10 rounded-full bg-primary-light border border-primary/30 text-primary mx-auto flex items-center justify-center mb-2">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="font-display font-bold text-xs text-white">Quality Guarantee</div>
                  <div className="text-[9px] text-neutral-400 mt-1">Tested Parts fitted by experts</div>
                </div>

                <div className="text-[8px] text-neutral-500 font-mono tracking-wider">
                  SECURE CHIP REPAIR
                </div>
              </div>
            </motion.div>

            {/* Phone 2 (Forefront, overlapping rightwards) */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 12, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotate: 8, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="absolute right-4 sm:right-10 top-2 w-[185px] sm:w-[225px] h-[360px] sm:h-[430px] rounded-[38px] bg-neutral-950 border-[5px] border-neutral-800 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden z-10"
              id="phone-mockup-right"
            >
              {/* Dynamic Island style slot */}
              <div className="w-24 h-4.5 bg-neutral-800 rounded-full mx-auto flex items-center justify-center">
                <div className="w-2.5 h-1 rounded-full bg-neutral-950" />
              </div>

              {/* Screen Content */}
              <div className="flex-1 bg-gradient-to-b from-neutral-900 to-neutral-950 rounded-[28px] mt-2 p-5 text-center flex flex-col justify-between border border-neutral-900">
                <div className="text-right font-display font-semibold text-[9px] uppercase text-primary-dark tracking-wider">
                  ● ACTIVE SUPPORT
                </div>

                <div className="my-auto">
                  <div className="w-11 h-11 rounded-full bg-primary text-neutral-950 mx-auto flex items-center justify-center mb-3 shadow-md shadow-cyan-500/20 animate-pulse">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div className="font-display font-extrabold text-sm text-white">Fast & Reliable Service</div>
                  <div className="text-[10px] text-neutral-300 mt-1">Micro-Soldering Lab</div>
                </div>

                <div className="text-[8px] text-neutral-400 bg-neutral-800/50 py-1 rounded-md font-mono">
                  MIRIGAMA #1 SHOP
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Key Reasons */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="why-choose-content">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Why Choose Us
            </h2>
            <p className="font-sans text-neutral-300 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
              We understand that your smartphone is your lifeline. That's why we don't just 'swap parts' — we diagnose deeply and repair professionally.
            </p>

            <div className="mt-8 space-y-6" id="why-choose-bullets">
              {reasons.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4 items-start"
                  id={`why-choose-item-${idx}`}
                >
                  {/* Circled check icon exactly as referenced in image */}
                  <span className="flex-shrink-0 mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-neutral-950 shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <div>
                    <h4 className="font-sans font-bold text-base text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-1 leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
