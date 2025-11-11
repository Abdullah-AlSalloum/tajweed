'use client'

import { motion } from 'framer-motion'
import { FaPlay, FaShoppingCart } from 'react-icons/fa'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-off-white via-white to-off-white islamic-pattern pt-20">
      <div className="absolute inset-0 pattern-overlay opacity-50"></div>
      
      <div className="container mx-auto px-4 py-5 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book Cover 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="w-70 h-[400px] sm:w-80 sm:h-[500px]"
              >
                {/* Book cover image */}
                <img
                  src="/images/bookcover1.png"
                  alt="Illustrated Tajweed book cover"
                  className="w-full h-full object-cover rounded-lg bg-transparent"
                  onError={(e) => {
                    // hide image if it fails to load to avoid broken icon
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </motion.div>
              {/* Shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black opacity-20 blur-xl rounded-full"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-league-spartan font-bold text-dark-gray mb-6 leading-tight">
              Learn Tajweed with the Most Accurate and Renowned Book in the Islamic World
            </h1>
            
            <p className="text-xl md:text-2xl text-medium-gray mb-8 font-noto-sans">
              By Dr. Ayman Rushdi Suwayd – The World's Premier Reference for Teaching Tajweed
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#purchase"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <FaShoppingCart />
                Buy the Book Now
              </motion.a>
              
              <motion.a
                href="#video"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-bright-blue text-white px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <FaPlay />
                Watch Intro Video
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

