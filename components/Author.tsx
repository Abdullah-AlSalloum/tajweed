'use client'

import { motion } from 'framer-motion'

export default function Author() {
  return (
    <section id="author" className="py-20 bg-gradient-to-br from-white to-off-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gold to-dark-red flex items-center justify-center shrink-0">
                <div className="text-white text-center p-4">
                  <p className="text-2xl font-league-spartan font-bold">Dr. Ayman</p>
                  <p className="text-lg font-noto-sans">Rushdi Suwayd</p>
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
                  The Author
                </h2>
                <p className="text-lg text-medium-gray font-noto-sans leading-relaxed">
                  A contemporary Quranic recitation scholar, member of the Quran review committee, and professor of Tajweed science for over 40 years, who has presented dozens of television lessons and educational programs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

