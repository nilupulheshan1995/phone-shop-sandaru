import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Award, ArrowRight } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

// Import our generated image asset
import heroImage from '../assets/images/hero_repair_girl_1783040099262.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative h-[80vh] min-h-[550px] max-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-900">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 select-none z-0">
        <img
          src={heroImage}
          alt="Best Mobile customer using smartphone"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
          style={{ objectPosition: 'center 35%' }}
        />
        {/* Dark radial and linear overlays for depth and high text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-neutral-950/40" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating Sparkles/Particle Overlay for polished aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light border border-primary/30 text-primary dark:text-primary-dark font-semibold text-xs tracking-wider uppercase mb-6"
          id="hero-badge"
        >
          <Zap className="w-3.5 h-3.5 fill-primary text-primary" />
          <span>Professional Logic Board & Micro-Soldering Experts</span>
        </motion.div>

        {/* Primary Headline: "Fast & Reliable Service" */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] drop-shadow-md text-white"
          id="hero-title"
        >
          Fast & Reliable Service
        </motion.h1>

        {/* Subtitle location bar */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-sans text-neutral-300 dark:text-neutral-200 text-sm sm:text-base md:text-lg mt-5 max-w-2xl mx-auto tracking-wide font-medium"
          id="hero-subtitle"
        >
          Cell Phone & Tablet Repair Store | <span className="text-white font-bold underline decoration-primary decoration-2 underline-offset-4">Naingala Mirigama</span>
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          id="hero-actions"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-hover text-neutral-950 font-extrabold text-sm tracking-widest uppercase transition-all shadow-xl shadow-cyan-950/40 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 border border-primary"
            id="hero-schedule-btn"
          >
            <span>Schedule Repair</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-sm tracking-widest uppercase transition-all cursor-pointer flex items-center justify-center gap-1 border border-white/20"
            id="hero-view-services-btn"
          >
            View Repair Menu
          </a>
        </motion.div>

        {/* Highlight trust badges in hero footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto border-t border-white/10 pt-6 text-xs text-neutral-400 font-medium"
          id="hero-trust-badges"
        >
          <div className="flex flex-col items-center gap-1.5 text-center">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span>Tested Parts</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center border-x border-white/10">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Same-Day Repair</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center">
            <Award className="w-5 h-5 text-primary" />
            <span>Expert Techs</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
