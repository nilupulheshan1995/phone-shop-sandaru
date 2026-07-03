import { useState, type MouseEvent } from 'react';
import { ChevronRight, Menu, Moon, PhoneCall, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import logo from '../assets/logo.png';
import { CONTACT_DETAILS } from '../data';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenBooking: (serviceName?: string) => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

const NAV_OFFSET = 88;

function scrollToSection(href: string) {
  const target = document.querySelector(href);
  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({
    top,
    behavior: 'smooth',
  });
}

export default function Navbar({ darkMode, setDarkMode, onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleScroll(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  }

  return (
    <nav
      className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-neutral-900 dark:bg-neutral-950/95"
      id="main-navbar"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3 select-none sm:gap-4"
          onClick={(event) => handleScroll(event, '#home')}
          aria-label="Best Mobile home"
        >
          <img
            src={logo}
            alt="Best Mobile logo"
            className="h-14 w-auto object-contain sm:h-16"
          />
          <span className="flex flex-col">
            <span className="font-display text-lg font-black uppercase tracking-tight text-neutral-950 transition-colors dark:text-white sm:text-2xl">
              BEST MOBILE
            </span>
            <span className="font-script -mt-1 self-end pr-1 text-sm text-primary transition-transform group-hover:scale-105 dark:text-primary-dark sm:text-lg">
              repair center
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleScroll(event, link.href)}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary dark:text-neutral-300 dark:hover:text-primary-dark"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer rounded-xl border border-neutral-200 p-2.5 text-neutral-700 transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            aria-label="Toggle dark mode"
            id="desktop-dark-mode-toggle"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          <a
            href={`tel:${CONTACT_DETAILS.whatsapp1.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300"
            id="desktop-phone-link"
          >
            <PhoneCall className="h-3.5 w-3.5 text-primary" />
            <span>{CONTACT_DETAILS.whatsapp1}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="cursor-pointer rounded-xl bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-neutral-950 shadow-md transition-all hover:bg-primary-hover"
            id="desktop-schedule-repair-btn"
          >
            Schedule Repair
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer rounded-xl border border-neutral-200 p-2.5 text-neutral-700 transition-all dark:border-neutral-800 dark:text-neutral-300"
            aria-label="Toggle dark mode"
            id="mobile-dark-mode-toggle"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-500" />
            )}
          </button>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="cursor-pointer rounded-xl border border-neutral-200 p-2.5 text-neutral-800 transition-all dark:border-neutral-800 dark:text-neutral-200"
            aria-label="Open mobile menu"
            id="mobile-hamburger-btn"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-neutral-100 bg-white dark:border-neutral-900 dark:bg-neutral-950 md:hidden"
            id="mobile-nav-drawer"
          >
            <div className="space-y-4 px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(event) => handleScroll(event, link.href)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 dark:text-neutral-200 dark:hover:bg-neutral-900"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-900">
                <a
                  href={`tel:${CONTACT_DETAILS.whatsapp1.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 font-semibold text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                  id="mobile-call-btn"
                >
                  <PhoneCall className="h-4 w-4 text-primary" />
                  <span>Call: {CONTACT_DETAILS.whatsapp1}</span>
                </a>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full cursor-pointer rounded-xl bg-primary px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-neutral-950 shadow-lg"
                  id="mobile-booking-btn"
                >
                  Schedule Repair Now
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
