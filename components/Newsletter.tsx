'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaEnvelope, FaCheck } from 'react-icons/fa'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 5000)
  }

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center bg-gradient-to-br from-off-white to-white rounded-lg shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Tajweed Newsletter
          </h2>
          <p className="text-lg text-medium-gray mb-8 font-noto-sans">
            Join the Tajweed newsletter to receive lessons and audio examples from Dr. Ayman Suwayd
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gold text-white p-6 rounded-lg"
            >
              <FaCheck className="w-12 h-12 mx-auto mb-4" />
              <p className="text-xl font-league-spartan font-semibold">
                Thank you! Successfully subscribed
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg border-2 border-off-white focus:border-gold focus:outline-none font-noto-sans text-dark-gray"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-white px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              >
                <FaEnvelope />
                Subscribe Now
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

