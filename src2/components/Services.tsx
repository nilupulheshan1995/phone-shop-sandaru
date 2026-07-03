import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Tablet, Laptop, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_COLUMNS } from '../data';
import { RepairService } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  
  // The three device cards from the screenshot
  const categoryCards = [
    {
      title: "Smartphone Repair",
      icon: Smartphone,
      description: "Fast screen replacements, swollen batteries, charging port cleaning, power loops, and signal baseband restorations.",
      bgImage: "https://picsum.photos/seed/smartphonerep/600/400"
    },
    {
      title: "Tablet Repair",
      icon: Tablet,
      description: "Fix cracked glass, faulty digitizers, battery drains, charging port issues, and liquid damage recovery on iPads and tablets.",
      bgImage: "https://picsum.photos/seed/tabletrep/600/400"
    },
    {
      title: "Laptop Repair",
      icon: Laptop,
      description: "Motherboard micro-soldering, battery replacements, corrupted BIOS resets, display panel swops, and hinge restorations.",
      bgImage: "https://picsum.photos/seed/laptoprep/600/400"
    }
  ];

  return (
    <section id="services" className="py-24 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary dark:text-primary-dark uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full">
            Our Repair Capabilities
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white mt-3 tracking-tight">
            Professional Device Restorations
          </h2>
          <p className="font-sans text-neutral-500 dark:text-neutral-400 mt-4 text-base sm:text-lg">
            No matter the fault, our certified micro-soldering technicians possess the diagnostic tools and premium replacement parts to restore your tech.
          </p>
        </div>

        {/* 3 Categories Cards Grid (Directly modeled on the reference screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" id="category-cards-grid">
          {categoryCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group h-[380px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-white"
                id={`category-card-${idx}`}
              >
                {/* Background Image with strong overlay */}
                <img
                  src={card.bgImage}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-900/30" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="p-3 w-12 h-12 rounded-xl bg-primary-light border border-primary/30 text-primary dark:text-primary-dark mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold tracking-tight text-white mb-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  <div>
                    <button
                      onClick={() => onSelectService(card.title)}
                      className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/10"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed 13 Services in Exactly Three Columns */}
        <div className="bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/60 rounded-2xl p-8 sm:p-12 shadow-sm" id="detailed-services-container">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Our Specific Fixes & Specializations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" id="three-bullet-columns">
            {SERVICES_COLUMNS.map((column, colIdx) => (
              <div key={colIdx} className="space-y-6 flex flex-col" id={`service-column-${colIdx}`}>
                {column.map((service) => (
                  <motion.div
                    key={service.name}
                    whileHover={{ x: 4 }}
                    onClick={() => onSelectService(service.name)}
                    className="group cursor-pointer select-none text-left"
                    id={`service-item-${service.name.replace(/[^a-zA-Z0-9]/g, '')}`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkmark icon act as bullets */}
                      <span className="mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-primary-light text-primary dark:text-primary-dark group-hover:bg-primary group-hover:text-neutral-950 transition-all duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <div>
                        <h4 className="font-sans font-bold text-sm text-neutral-800 dark:text-neutral-200 group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="mt-12 pt-8 border-t border-neutral-100 dark:border-neutral-900 text-center">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">
              💡 Click on any of the specific fixes listed above to instantly pre-select it in our smart booking system.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
