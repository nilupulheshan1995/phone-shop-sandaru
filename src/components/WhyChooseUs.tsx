import { CheckCircle2, Flame, Shield } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    title: 'Same-day repairs',
    description:
      'Most repairs, including screen swaps, batteries, and charging port replacements, are done in under one to two hours while you wait.',
  },
  {
    title: 'Quality guarantee',
    description:
      'We source high-grade parts with internal quality control testing before fitting them onto your device.',
  },
  {
    title: 'Superior warranty',
    description:
      'Every hardware fix is backed by a direct warranty covering touchscreen sensitivity and parts defects.',
  },
  {
    title: 'Free diagnostics',
    description:
      'Not sure what is wrong? Our micro-soldering team inspects the device and gives an upfront quote with no obligation.',
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden border-y border-neutral-800 bg-neutral-900 py-24 text-white dark:bg-neutral-950"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-40px] left-[-40px] h-[300px] w-[300px] rounded-full bg-black/30 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="relative flex h-[420px] justify-center sm:h-[480px] lg:col-span-5" id="why-choose-mockups">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotate: -12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="absolute bottom-6 left-4 flex h-[350px] w-[180px] flex-col justify-between overflow-hidden rounded-[36px] border-4 border-neutral-800 bg-neutral-950 p-2 shadow-2xl sm:left-10 sm:h-[420px] sm:w-[220px]"
              id="phone-mockup-left"
            >
              <div className="mx-auto mt-1 flex h-4 w-20 items-center justify-center rounded-full bg-neutral-800">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
              </div>

              <div className="mt-2 flex flex-1 flex-col justify-between rounded-[28px] border border-neutral-900 bg-gradient-to-tr from-neutral-900 to-neutral-950 p-4 text-center">
                <div className="mt-2 text-left font-display text-[10px] font-black uppercase tracking-widest text-primary">
                  Best Mobile
                </div>

                <div className="my-auto">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary-light text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div className="font-display text-xs font-bold text-white">Quality Guarantee</div>
                  <div className="mt-1 text-[9px] text-neutral-400">Tested parts fitted by experts</div>
                </div>

                <div className="font-mono text-[8px] tracking-wider text-neutral-500">SECURE CHIP REPAIR</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 12, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, rotate: 8, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
              className="absolute top-2 right-4 z-10 flex h-[360px] w-[185px] flex-col justify-between overflow-hidden rounded-[38px] border-[5px] border-neutral-800 bg-neutral-950 p-2.5 shadow-2xl sm:right-10 sm:h-[430px] sm:w-[225px]"
              id="phone-mockup-right"
            >
              <div className="mx-auto flex h-[18px] w-24 items-center justify-center rounded-full bg-neutral-800">
                <div className="h-1 w-2.5 rounded-full bg-neutral-950" />
              </div>

              <div className="mt-2 flex flex-1 flex-col justify-between rounded-[28px] border border-neutral-900 bg-gradient-to-b from-neutral-900 to-neutral-950 p-5 text-center">
                <div className="text-right font-display text-[9px] font-semibold uppercase tracking-wider text-primary-dark">
                  ACTIVE SUPPORT
                </div>

                <div className="my-auto">
                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-neutral-950 shadow-md shadow-cyan-500/20">
                    <Flame className="h-5 w-5" />
                  </div>
                  <div className="font-display text-sm font-extrabold text-white">Fast and Reliable Service</div>
                  <div className="mt-1 text-[10px] text-neutral-300">Micro-Soldering Lab</div>
                </div>

                <div className="rounded-md bg-neutral-800/50 py-1 font-mono text-[8px] text-neutral-400">
                  MIRIGAMA REPAIR SHOP
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7" id="why-choose-content">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base">
              We understand that your smartphone is your lifeline. We do not just swap parts. We
              diagnose deeply and repair professionally.
            </p>

            <div className="mt-8 space-y-6" id="why-choose-bullets">
              {reasons.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                  id={`why-choose-item-${index}`}
                >
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-neutral-950 shadow-md">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="text-base font-bold tracking-wide text-white">{item.title}</h4>
                    <p className="mt-1 max-w-lg text-xs leading-relaxed text-neutral-400 sm:text-sm">
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
