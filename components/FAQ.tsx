'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: 'Is it suitable for beginners?',
    answer: 'Yes, the book is designed to be suitable for both beginners and advanced learners. The visual explanations and audio examples make learning Tajweed easier for everyone.',
  },
  {
    question: 'Is there a digital version?',
    answer: 'Yes, the book is available in a high-quality digital (PDF) version that preserves all illustrations and audio examples.',
  },
  {
    question: 'How do I listen to the examples?',
    answer: 'You can scan the QR codes in the book using your smartphone to directly access audio examples on the internet.',
  },
  {
    question: 'Is international shipping available?',
    answer: 'Yes, the book is available for shipping worldwide through our authorized distributors in over 70 countries.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-off-white to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-off-white transition-colors"
              >
                <span className="text-lg font-league-spartan font-semibold text-dark-gray">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`w-5 h-5 text-gold transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-medium-gray font-noto-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

