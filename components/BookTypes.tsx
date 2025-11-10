'use client'

import { motion } from 'framer-motion'
import { FaBook, FaFilePdf, FaHeadphones, FaLanguage } from 'react-icons/fa'

const bookTypes = [
  { icon: FaBook, title: 'Paperback', description: 'Premium printed copy' },
  { icon: FaFilePdf, title: 'Digital', description: 'High-quality PDF version' },
  { icon: FaHeadphones, title: 'Audio', description: 'Complete audio version' },
]

export default function BookTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Book Types
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {bookTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-off-white to-white border-2 border-gold rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <type.icon className="w-16 h-16 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-league-spartan font-bold text-dark-gray mb-2">
                {type.title}
              </h3>
              <p className="text-medium-gray font-noto-sans">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

