'use client'

import { motion } from 'framer-motion'
import { FaShoppingCart, FaDownload, FaMapMarkerAlt } from 'react-icons/fa'

export default function FinalCTA() {
  return (
  <section id="purchase" className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#7A1F2A' }}>
      <div className="absolute inset-0 pattern-overlay opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-league-spartan font-bold mb-6">
            Start Your Journey with Correct Tajweed Today
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              href="#purchase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gold px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaShoppingCart />
              Buy Paperback
            </motion.a>
            
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-bright-blue px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaDownload />
              Download Digital Version
            </motion.a>
            
            <motion.a
              href="#distributors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-dark-red px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaMapMarkerAlt />
              Contact Nearby Distributor
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

