'use client'

import { motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'

export default function BookIntroduction() {
  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-8">
            About the Book
          </h2>
          
          <p className="text-lg md:text-xl text-medium-gray leading-relaxed font-noto-sans mb-6">
            A book that compiles four decades of research and teaching in Tajweed science, presenting recitation rules through audio and visual means via precise scientific diagrams, illustrations of speech organs, and audio examples through QR codes, balancing traditional Tajweed heritage with modern phonetic science.
          </p>

          <p className="text-base md:text-lg text-medium-gray leading-relaxed font-noto-sans">
            The most comprehensive visual reference in Tajweed science, helping readers understand Quranic pronunciation through precise images, simplified scientific explanations, and audio guidance from the author.
          </p>

          <div className="mt-8 flex justify-center">
            <motion.a
              href="#purchase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaShoppingCart />
              Buy the Book Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

