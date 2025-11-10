'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    text: 'This book changed how our students learn Tajweed',
    author: 'Tajweed Teacher',
    rating: 5,
  },
  {
    text: 'The visual explanations made understanding easier and deeper',
    author: 'University Student',
    rating: 5,
  },
  {
    text: 'The best way to understand Tajweed visually and audibly',
    author: 'Quranic Center Director',
    rating: 5,
  },
  {
    text: 'Our students read correctly from the first weeks',
    author: 'Tajweed Professor',
    rating: 5,
  },
]

export default function Testimonials() {
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
            User Reviews
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gold w-5 h-5" />
                ))}
              </div>
              <p className="text-medium-gray font-noto-sans mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="text-dark-gray font-league-spartan font-semibold">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

