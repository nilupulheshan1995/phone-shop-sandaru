import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-primary dark:text-primary-dark uppercase tracking-widest bg-primary-light px-3 py-1 rounded-full">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white mt-3 tracking-tight">
            Customer Reviews
          </h2>
          <p className="font-sans text-neutral-500 dark:text-neutral-400 mt-4 text-base sm:text-lg">
            Hear from our satisfied clients in Mirigama. We take pride in restoring your devices to absolute factory perfection.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="reviews-grid">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col justify-between p-6 rounded-2xl border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/30 hover:border-neutral-200 dark:hover:border-neutral-800 transition-all duration-300 relative group"
              id={`review-card-${review.id}`}
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-10 h-10 text-neutral-900 dark:text-white" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 border-t border-neutral-100 dark:border-neutral-900/60 pt-4 mt-auto">
                {/* Letter Avatar with glowing primary accent */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-cyan-500 text-neutral-950 font-black text-sm flex items-center justify-center shadow-md shadow-cyan-500/10">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-neutral-800 dark:text-neutral-100">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-neutral-400 dark:text-neutral-500 font-medium">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local trust score indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-sm">
            <span className="flex items-center gap-1 font-bold text-neutral-800 dark:text-neutral-100">
              ⭐️ 4.9 out of 5 Stars
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="text-neutral-500 dark:text-neutral-400 font-medium">
              Based on over 450+ physical store bookings in Mirigama.
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-green-600 dark:text-green-400">
              <ThumbsUp className="w-3.5 h-3.5" /> 100% Recommended
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
