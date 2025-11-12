'use client'

import { motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'

export default function BookIntroduction() {
  return (
    <section className="py-10 bg-gradient-to-br from-off-white to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* ✅ Left side: Book image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/images/bookcover2.png"
              alt="Illustrated Tajweed Book Cover"
              width={400}
              height={600}
              className="rounded-2xl object-cover"
              priority
            />
          </motion.div>

          {/* ✅ Right side: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
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

            <div className="mt-8 flex justify-center md:justify-start">
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
      </div>
    </section>
  )
}
