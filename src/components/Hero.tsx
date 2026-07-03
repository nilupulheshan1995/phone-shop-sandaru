import { ArrowRight, Award, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/hero_repair_girl_1783040099262.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex h-[80vh] min-h-[550px] max-h-[800px] items-center justify-center overflow-hidden bg-neutral-900"
    >
      <div className="absolute inset-0 z-0 select-none">
        <img
          src={heroImage}
          alt="Best Mobile customer using smartphone"
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60"
          style={{ objectPosition: 'center 35%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-neutral-950/40" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-dark"
          id="hero-badge"
        >
          <Zap className="h-3.5 w-3.5 fill-current" />
          <span>Professional Logic Board and Micro-Soldering Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl"
          id="hero-title"
        >
          Fast and Reliable Service
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-sm font-medium tracking-wide text-neutral-300 sm:text-base md:text-lg"
          id="hero-subtitle"
        >
          Cell Phone and Tablet Repair Store in <span className="font-bold text-white">Naingala Mirigama</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          id="hero-actions"
        >
          <button
            onClick={onOpenBooking}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-8 py-4 text-sm font-extrabold uppercase tracking-[0.22em] text-neutral-950 shadow-xl shadow-cyan-950/40 transition-all active:scale-[0.98] sm:w-auto"
            id="hero-schedule-btn"
          >
            <span>Schedule Repair</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#services"
            className="flex w-full items-center justify-center gap-1 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto"
          >
            View Repair Menu
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs font-medium text-neutral-400"
          id="hero-trust-badges"
        >
          <div className="flex flex-col items-center gap-1.5 text-center">
            <ShieldCheck className="h-5 w-5 text-green-400" />
            <span>Tested Parts</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 border-x border-white/10 text-center">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span>Same-Day Repair</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-center">
            <Award className="h-5 w-5 text-primary" />
            <span>Expert Techs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
