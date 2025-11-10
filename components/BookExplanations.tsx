'use client'

import { motion } from 'framer-motion'
import { FaYoutube } from 'react-icons/fa'

const playlists = [
  {
    title: 'Illustrated Tajweed Book Explanation - Part 1',
    description: 'Comprehensive playlist explaining the book',
    // Replace with actual YouTube playlist URL
    url: '#',
  },
  {
    title: 'Illustrated Tajweed Book Explanation - Part 2',
    description: 'Continuing the book explanation with practical examples',
    // Replace with actual YouTube playlist URL
    url: '#',
  },
]

export default function BookExplanations() {
  return (
    <section id="explanations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Book Explanations
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {playlists.map((playlist, index) => (
            <motion.a
              key={index}
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-bright-blue to-gold p-8 rounded-lg text-white shadow-lg hover:shadow-xl transition-shadow block"
            >
              <FaYoutube className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-league-spartan font-bold mb-2">{playlist.title}</h3>
              <p className="text-sm opacity-90 font-noto-sans">{playlist.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

