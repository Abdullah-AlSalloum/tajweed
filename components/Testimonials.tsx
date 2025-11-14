'use client'

import { motion } from 'framer-motion'
import { FaStar, FaShoppingCart } from 'react-icons/fa'

const testimonials = [
  {
    text: 'The book is a comprehensive reference that fully covers all aspects of the correct recitation of the Noble Qur\'an.',
    author: 'Amsha Hussein',
    role: 'Tajweed Student',
    rating: 5,
  },
  {
    text: 'It is accurate and contains illustrations that help me explain Tajweed to my students, especially the articulation points and characteristics of the letters. It is smooth, simple, and beautifully presented.',
    author: 'Ayat Salah al-Din',
    role: 'Tajweed Teacher',
    rating: 5,
  },
  {
    text: 'It is simple, yet contains all the information a reader needs, and the illustrations greatly help in understanding.',
    author: 'Nadia Fahmy',
    role: 'Quran Teacher',
    rating: 5,
  },
  {
    text: 'It is clear and easy to comprehend; I consider it a reference for the science of Tajweed.',
    author: 'Iman Soubra',
    role: 'Tajweed Teacher',
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
          className="text-center mb-8"
        >
           <div className="flex justify-center mb-6">
            <motion.a
              href="#purchase"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-white px-6 py-3 rounded-lg font-league-spartan font-semibold text-base flex items-center gap-2 shadow-lg hover:shadow-xl transition"
            >
              <FaShoppingCart />
              Buy the Book Now
            </motion.a>
          </div>
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
              <p className="text-sm text-medium-gray font-noto-sans">
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

