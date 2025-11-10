'use client'

import { motion } from 'framer-motion'
import ReactCountryFlag from 'react-country-flag'

const languages = [
  { name: 'Arabic', code: 'SA' },
  { name: 'English', code: 'GB' },
  { name: 'French', code: 'FR' },
  { name: 'Russian', code: 'RU' },
  { name: 'German', code: 'DE' },
  { name: 'Spanish', code: 'ES' },
  { name: 'Italian', code: 'IT' },
  { name: 'Turkish', code: 'TR' },
]

export default function Languages() {
  return (
    <section className="py-20 bg-gradient-to-br from-off-white to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Available Languages
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {languages.map((language, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-off-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform"
            >
              <div className="text-4xl mb-3 flex justify-center">
                <ReactCountryFlag
                  countryCode={language.code}
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                    borderRadius: '4px',
                  }}
                />
              </div>
              <h3 className="text-lg font-league-spartan font-semibold text-dark-gray">
                {language.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
