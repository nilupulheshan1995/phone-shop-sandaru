import { ArrowRight, Smartphone, Tablet, Laptop } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import logo from '../assets/logo.png';

const FRAME_COUNT = 240;
const CANVAS_WIDTH = 1280;
const CANVAS_HEIGHT = 720;
const LERP_FACTOR = 0.12;
const STICKY_TOP = 80;

interface FrameShowcaseProps {
  onOpenBooking: () => void;
  onSelectService: (serviceName: string) => void;
}

const categoryCards = [
  {
    title: 'Smartphone Repair',
    icon: Smartphone,
    description:
      'Fast screen replacements, swollen batteries, charging port cleaning, power loops, and signal baseband restorations.',
  },
  {
    title: 'Tablet Repair',
    icon: Tablet,
    description:
      'Fix cracked glass, faulty digitizers, battery drains, charging port issues, and liquid damage recovery on tablets.',
  },
  {
    title: 'Laptop Repair',
    icon: Laptop,
    description:
      'Motherboard micro-soldering, battery replacements, corrupted BIOS resets, display panel swaps, and hinge restorations.',
  },
];

function getFramePath(index: number) {
  return `/frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;
}

function lerp(start: number, end: number, factor: number) {
  return start + (end - start) * factor;
}

async function preloadFrames() {
  return Promise.all(
    Array.from({ length: FRAME_COUNT }, (_, index) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Failed to load frame ${index + 1}`));
        image.src = getFramePath(index);
      });
    }),
  );
}

export default function FrameShowcase({ onOpenBooking, onSelectService }: FrameShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let animationFrame = 0;
    let cancelled = false;

    const sectionElement = sectionRef.current;
    const canvasElement = canvasRef.current;
    const context = canvasElement?.getContext('2d');

    if (!sectionElement || !canvasElement || !context) {
      return undefined;
    }

    const section = sectionElement;
    const ctx = context;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    preloadFrames()
      .then((images) => {
        if (cancelled) {
          return;
        }

        setStatus('ready');
        let currentFrame = 0;

        function drawFrame(frameIndex: number) {
          const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(frameIndex)));
          ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          ctx.drawImage(images[index], 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }

        function animate() {
          if (cancelled) {
            return;
          }

          const rect = section.getBoundingClientRect();
          const scrollableDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
          const progress = Math.min(Math.max(-rect.top / scrollableDistance, 0), 1);
          const targetFrame = progress * (FRAME_COUNT - 1);

          currentFrame = lerp(currentFrame, targetFrame, LERP_FACTOR);
          drawFrame(currentFrame);
          animationFrame = window.requestAnimationFrame(animate);
        }

        drawFrame(0);
        animationFrame = window.requestAnimationFrame(animate);
      })
      .catch(() => {
        if (!cancelled) {
          setStatus('error');
        }
      });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[280vh] bg-neutral-950 text-white"
    >
      <div
        className="sticky overflow-hidden"
        style={{ top: `${STICKY_TOP}px`, height: `calc(100vh - ${STICKY_TOP}px)` }}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.78),rgba(2,6,23,0.28)_45%,rgba(2,6,23,0.82))]" />
      </div>

      <div className="absolute inset-x-0 top-0 z-10">
        <div
          className="flex items-start"
          style={{ minHeight: `calc(100vh - ${STICKY_TOP}px)` }}
        >
          <div className="mx-auto w-full max-w-none px-4 pt-0 sm:px-6 lg:px-10 xl:px-14">
            <div className="relative min-h-[calc(100vh-5rem)] pt-10 pb-8 sm:pb-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
                id="hero-brand-chip"
              >
                <img src={logo} alt="Best Mobile logo" className="h-7 w-auto object-contain" />
                <span className="flex items-center gap-2">
                  <span className="font-display text-base font-bold tracking-tight sm:text-lg">
                    Best Mobile
                  </span>
                  <span className="hidden h-4 w-px bg-white/20 sm:block" />
                  <span className="hidden text-xs font-medium text-neutral-300 sm:block">
                    Repair Center
                  </span>
                </span>
              </motion.div>

              <div className="grid min-h-[calc(100vh-22rem)] items-center gap-6 pt-2 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                <div className="max-w-4xl self-center justify-self-start text-left">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <motion.span
                      initial={{ opacity: 0, y: -18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-neutral-100 backdrop-blur-md"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                      Available for Repairs
                    </motion.span>

                    <motion.span
                      initial={{ opacity: 0, y: -18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 backdrop-blur-md"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      KOKO Available
                    </motion.span>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="font-display max-w-4xl text-4xl font-extrabold leading-[0.98] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl xl:text-7xl"
                    id="hero-title"
                  >
                    One Day Repair in Mirigama
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="max-w-md self-center justify-self-start pt-2 text-left lg:justify-self-end lg:pt-12"
                  id="hero-side-copy"
                >
                  <p
                    className="text-sm leading-7 text-neutral-200 sm:text-base"
                    id="hero-subtitle"
                  >
                    Best Mobile handles screen fixes, charging issues, battery replacements, and
                    board-level repair work with fast turnarounds and careful diagnostics.
                  </p>

                  <button
                    onClick={onOpenBooking}
                    className="mt-6 inline-flex cursor-pointer items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-neutral-950 shadow-xl shadow-cyan-950/40 transition-all hover:bg-primary-hover active:scale-[0.98]"
                    id="hero-schedule-btn"
                  >
                    <span>Schedule</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-950">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </motion.div>
              </div>

            </div>
          </div>
        </div>

        <div className="relative flex min-h-[160vh] items-end py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="pointer-events-none absolute right-0 left-0 top-[0vh] -mb-2 overflow-hidden pt-6"
            id="hero-watermark"
          >
            <div className="font-display text-[4.1rem] leading-none font-extrabold tracking-[-0.08em] text-white sm:text-[6.5rem] lg:text-[9rem] xl:text-[11rem]">
              BEST MOBILE
            </div>
          </motion.div>
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-100">
                Our Repair Capabilities
              </span>
              <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Professional Device Restorations
              </h2>
              <p className="mt-4 text-base text-neutral-200 sm:text-lg">
                Your content now scrolls directly over the repair sequence. As visitors move
                through the page, the canvas keeps animating underneath these service categories.
              </p>
            </div>

            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3" id="category-cards-grid">
              {categoryCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-black/35 p-8 text-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm"
                    id={`category-card-${index}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-cyan-500/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary-light text-primary dark:text-primary-dark">
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="font-display mb-3 text-xl font-bold tracking-tight text-white">
                        {card.title}
                      </h3>

                      <p className="mb-8 text-sm leading-relaxed text-neutral-200">
                        {card.description}
                      </p>

                      <button
                        onClick={() => onSelectService(card.title)}
                        className="flex cursor-pointer items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-md transition-all hover:bg-primary-hover"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-center backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                  Payment Partner
                </p>
                <div className="mt-3 text-[2.4rem] font-black uppercase leading-none tracking-[-0.12em] text-pink-300 sm:text-[3rem]">
                  <span
                    className="[text-shadow:1px_0_0_#1d4ed8,-1px_0_0_#1d4ed8,0_1px_0_#1d4ed8,0_-1px_0_#1d4ed8]"
                  >
                    KOKO
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Available Here
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-300">Animation Status</p>
                <p className="mt-2 text-3xl font-extrabold text-cyan-200">
                  {status === 'loading' ? 'Loading' : status === 'ready' ? 'Ready' : 'Error'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
