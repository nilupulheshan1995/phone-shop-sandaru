import { Suspense, lazy, useEffect, useState } from 'react';
import Lenis from 'lenis';
import { RotateCw } from 'lucide-react';
import BookingModal from './components/BookingModal';
import FrameShowcase from './components/FrameShowcase';
import Navbar from './components/Navbar';
import Services from './components/Services';

const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Reviews = lazy(() => import('./components/Reviews'));
const Footer = lazy(() => import('./components/Footer'));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center bg-neutral-50 py-20 dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-3">
        <RotateCw className="h-8 w-8 animate-spin text-primary" />
        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-neutral-400">
          Loading section
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.12,
    });

    let frameId = 0;

    function onFrame(time: number) {
      lenis.raf(time);
      frameId = window.requestAnimationFrame(onFrame);
    }

    frameId = window.requestAnimationFrame(onFrame);

    return () => {
      window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  function handleOpenBooking(serviceName?: string) {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  }

  function handleCloseBooking() {
    setIsBookingOpen(false);
    setSelectedService(undefined);
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main id="main-content">
        <FrameShowcase
          onOpenBooking={() => handleOpenBooking()}
          onSelectService={handleOpenBooking}
        />
        <Services onSelectService={handleOpenBooking} />

        <Suspense fallback={<SectionLoader />}>
          <WhyChooseUs />
          <Reviews />
          <Footer />
        </Suspense>
      </main>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
