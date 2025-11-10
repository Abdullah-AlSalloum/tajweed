'use client'

import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'

const distributors = [
  { country: 'United States', flag: '🇺🇸', code: 'US' },
  { country: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
  { country: 'Canada', flag: '🇨🇦', code: 'CA' },
  { country: 'Australia', flag: '🇦🇺', code: 'AU' },
]

export default function Distributors() {
  return (
    <section id="distributors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Distributors Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {distributors.map((distributor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-off-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{distributor.flag}</div>
              <h3 className="text-xl font-league-spartan font-bold text-dark-gray mb-4">
                {distributor.country}
              </h3>
              <motion.a
                href={`mailto:distributor@${distributor.code.toLowerCase()}.com`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-league-spartan font-semibold hover:bg-dark-red transition-colors"
              >
                <FaEnvelope />
                Contact Distributor
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

