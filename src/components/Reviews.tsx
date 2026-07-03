import { Quote, Star, ThumbsUp } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-24 transition-colors duration-300 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary dark:text-primary-dark">
            Testimonials
          </span>
          <h2 className="font-display mt-3 text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Customer Reviews
          </h2>
          <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400 sm:text-lg">
            Hear from our clients in Mirigama. We take pride in restoring devices to reliable
            working condition.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" id="reviews-grid">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-100 bg-neutral-50/50 p-6 transition-all duration-300 hover:border-neutral-200 dark:border-neutral-900 dark:bg-neutral-900/30 dark:hover:border-neutral-800"
              id={`review-card-${review.id}`}
            >
              <div className="absolute top-6 right-6 opacity-5 transition-opacity group-hover:opacity-10">
                <Quote className="h-10 w-10 text-neutral-900 dark:text-white" />
              </div>

              <div>
                <div className="mb-4 flex gap-0.5 text-amber-500">
                  {Array.from({ length: review.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="mb-6 text-sm leading-relaxed italic text-neutral-600 dark:text-neutral-300">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-auto flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-900/60">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-cyan-500 text-sm font-black text-neutral-950 shadow-md shadow-cyan-500/10">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-100">
                    {review.name}
                  </h4>
                  <p className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-900/40 sm:flex-row">
            <span className="font-bold text-neutral-800 dark:text-neutral-100">4.9 out of 5 stars</span>
            <span className="hidden text-neutral-300 sm:inline">|</span>
            <span className="font-medium text-neutral-500 dark:text-neutral-400">
              Trusted by customers across walk-ins, same-day fixes, and board-level repairs.
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-green-600 dark:text-green-400">
              <ThumbsUp className="h-3.5 w-3.5" /> Highly recommended
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
