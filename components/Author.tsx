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
              <div
                className=" w-60 h-60 rounded-full flex items-center justify-center"
                style={{
                  backgroundImage: 'url(/images/Dr_Ayman-2m.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >

              </div>

              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
                  Author: Dr. Ayman Suwaid
                </h2>
                <p className="text-lg text-medium-gray font-noto-sans leading-relaxed">
                  A member of the International Council of Quran Recitation Masters (Shuyukh al-Iqra), Professor of the Holy Quran and Quranic Recitations, and a dedicated teacher of Tajweed science for over 40 years. He has presented dozens of television lessons and educational programs and authored extremely important books in the sciences of the Quran.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

