'use client'

import { motion } from 'framer-motion'

export default function VideoSection() {
  return (
    <section id="video" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Learn More About the Book
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-gold to-dark-red flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-lg font-noto-sans">Introductory Video</p>
                <p className="text-sm mt-2 opacity-90">Video link will be added here</p>
              </div>
            </div>
            {/* Placeholder for actual video embed */}
            {/* <iframe
              className="w-full h-full"
              src="YOUTUBE_EMBED_URL"
              title="Illustrated Tajweed - Introductory Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

