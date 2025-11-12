'use client'

import { motion } from 'framer-motion'
import { FaYoutube } from 'react-icons/fa'

const playlists = [
  {
    title: 'Illustrated Tajweed Book Explanation - Part 1',
    description: 'Comprehensive playlist explaining the book',
    url: 'https://www.youtube.com/watch?v=H6WTnSZ6G-0&list=PLJi21Zen45zQ-p3e38-Wb94LhDKIZ7sac',
    videoId: 'H6WTnSZ6G-0',
  },
  {
    title: 'Illustrated Tajweed Book Explanation - Part 2',
    description: 'Continuing the book explanation with practical examples',
    url: 'https://www.youtube.com/watch?v=LzflYxNwe7s&list=PLJi21Zen45zQypNEah29M-YUORNUvRE-k',
    videoId: 'LzflYxNwe7s',
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
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Book Explanations
          </h2>
        </motion.div>

        {/* Cards removed - showing embedded videos only */}

        {/* Embedded videos */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {playlists.map((p) => (
            <motion.div
              key={p.videoId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${p.videoId}`}
                  title={p.title}
                  className="absolute inset-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-sm text-medium-gray mt-2 font-noto-sans">{p.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

