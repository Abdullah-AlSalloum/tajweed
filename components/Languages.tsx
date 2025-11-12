'use client'

import { motion } from 'framer-motion'
import ReactCountryFlag from 'react-country-flag'
import { useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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

        <div className="max-w-6xl mx-auto relative">
          <button
            aria-label="Previous"
            onClick={() => {
              const el = document.getElementById('languages-carousel')
              if (el) el.scrollBy({ left: -el.clientWidth * 0.8, behavior: 'smooth' })
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full  hover:bg-gray-100"
          >
            <FaChevronLeft className="w-5 h-5 text-dark-gray" />
          </button>

          <div
            id="languages-carousel"
            className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-2"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="bg-transparent border-0 rounded-none p-2 text-center transition transform flex-shrink-0 flex flex-col items-center justify-center"
                style={{ minWidth: 140, height: 'auto', scrollSnapAlign: 'start' }}
              >
                <div className="mb-2 flex items-center justify-center">
                  <ReactCountryFlag
                    countryCode={language.code}
                    svg
                    style={{ width: '2.5em', height: '2.5em' }}
                  />
                </div>
                <h3 className="text-base font-league-spartan font-semibold text-dark-gray mt-2">
                  {language.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={() => {
              const el = document.getElementById('languages-carousel')
              if (el) el.scrollBy({ left: el.clientWidth * 0.8, behavior: 'smooth' })
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <FaChevronRight className="w-5 h-5 text-dark-gray" />
          </button>
        </div>
      </div>
    </section>
  )
}
