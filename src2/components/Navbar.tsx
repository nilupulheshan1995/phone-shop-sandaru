import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, PhoneCall, ChevronRight } from 'lucide-react';
import { CONTACT_DETAILS } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900 transition-colors duration-300" id="main-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Main Branding Logo */}
          <a href="#home" className="flex flex-col select-none group" id="nav-brand-logo">
            <span className="font-display font-black text-2xl tracking-tighter text-neutral-950 dark:text-white uppercase transition-colors">
              BEST MOBILE
            </span>
            <span className="font-script text-lg -mt-1 text-primary dark:text-primary-dark self-end pr-2 transform rotate-[-4deg] group-hover:scale-105 transition-transform origin-left">
              repair center
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-sans font-medium text-sm text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-dark transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Area: Dark Mode, Phone Link & CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all cursor-pointer"
              aria-label="Toggle dark mode"
              id="desktop-dark-mode-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Direct Phone Line */}
            <a 
              href={`tel:${CONTACT_DETAILS.whatsapp1.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300"
              id="desktop-phone-link"
            >
              <PhoneCall className="w-3.5 h-3.5 text-primary" />
              <span>{CONTACT_DETAILS.whatsapp1}</span>
            </a>

            {/* Repair Scheduling CTA Button */}
            <button
              onClick={() => onOpenBooking()}
              className="py-2.5 px-5 rounded-xl bg-primary hover:bg-primary-hover text-neutral-950 dark:text-neutral-950 font-bold text-xs tracking-wide uppercase transition-all shadow-md hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              id="desktop-schedule-repair-btn"
            >
              Schedule Repair
            </button>
          </div>

          {/* Mobile Right Controls: Dark Mode & Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Dark Mode Toggle (Mobile) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 transition-all cursor-pointer"
              aria-label="Toggle dark mode"
              id="mobile-dark-mode-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 transition-all cursor-pointer"
              aria-label="Open mobile menu"
              id="mobile-hamburger-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-900 font-sans font-semibold text-base transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex flex-col gap-3">
                <a
                  href={`tel:${CONTACT_DETAILS.whatsapp1.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-semibold"
                  id="mobile-call-btn"
                >
                  <PhoneCall className="w-4 h-4 text-primary" />
                  <span>Call: {CONTACT_DETAILS.whatsapp1}</span>
                </a>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-primary text-neutral-950 font-bold tracking-wide uppercase text-center shadow-lg shadow-cyan-500/20 cursor-pointer"
                  id="mobile-booking-btn"
                >
                  Schedule Repair Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
