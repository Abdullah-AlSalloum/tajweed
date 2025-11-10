'use client'

import { motion } from 'framer-motion'

export default function UserVideos() {
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
            User Experiences
          </h2>
          <p className="text-lg text-medium-gray font-noto-sans">
            See how readers have benefited from the book
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              className="aspect-[9/16] bg-gradient-to-br from-gold to-dark-red rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center p-4">
                  <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-noto-sans">User Experience Video {item}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

