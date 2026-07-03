/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'motion/react';
import { Compass, RotateCw } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingModal from './components/BookingModal';

// Lazy loading lower-fold components for optimized performance
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const Reviews = React.lazy(() => import('./components/Reviews'));
const Footer = React.lazy(() => import('./components/Footer'));

// Custom inline spinner for lazy loading suspense bounds
function SectionLoader() {
  return (
    <div className="py-20 flex justify-center items-center bg-neutral-50 dark:bg-neutral-900 transition-colors">
      <div className="flex flex-col items-center gap-3">
        <RotateCw className="w-8 h-8 text-[#E51A64] animate-spin" />
        <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Optimizing layout...</span>
      </div>
    </div>
  );
}

export default function App() {
  // Check local storage or preference for dark mode, default to dark for premium sleek aesthetics
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Sync state to DOM and persistence
  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans" id="app-root">
      
      {/* Navigation Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenBooking={() => handleOpenBooking()} 
      />

      {/* Main Content Layout with Staggered Entrance Animations */}
      <main id="main-content">
        
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Services & Categories Grid Section */}
        <Services onSelectService={(serviceName) => handleOpenBooking(serviceName)} />

        {/* Suspense wrapped lazy loaded components for better page scores */}
        <Suspense fallback={<SectionLoader />}>
          
          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Customer Testimonials Section */}
          <Reviews />

          {/* Footer & Contacts Section */}
          <Footer />

        </Suspense>

      </main>

      {/* Globally accessible, interactive booking modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={handleCloseBooking} 
        preselectedService={selectedService} 
      />

    </div>
  );
}

