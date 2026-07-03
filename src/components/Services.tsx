import { CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_COLUMNS } from '../data';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
      className="bg-neutral-50 py-24 transition-colors duration-300 dark:bg-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-sm dark:border-neutral-800/60 dark:bg-neutral-950 sm:p-12"
          id="detailed-services-container"
        >
          <div className="mb-8 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Our Specific Fixes and Specializations
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12" id="three-bullet-columns">
            {SERVICES_COLUMNS.map((column, columnIndex) => (
              <div key={columnIndex} className="flex flex-col space-y-6" id={`service-column-${columnIndex}`}>
                {column.map((service) => (
                  <motion.div
                    key={service.name}
                    whileHover={{ x: 4 }}
                    onClick={() => onSelectService(service.name)}
                    className="group cursor-pointer select-none text-left"
                    id={`service-item-${service.name.replace(/[^a-zA-Z0-9]/g, '')}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-light text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-neutral-950 dark:text-primary-dark">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-neutral-800 transition-colors group-hover:text-primary dark:text-neutral-200 dark:group-hover:text-primary-dark">
                          {service.name}
                        </h4>
                        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-neutral-100 pt-8 text-center dark:border-neutral-900">
            <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
              Click any specific repair to pre-select it in the booking form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
