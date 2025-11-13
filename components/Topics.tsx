'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { topics } from '@/data/topics'

export default function Topics() {
  return (
    <section id="topics" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
            Main Book Topics
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br p-8 rounded-lg text-black text-center shadow-lg hover:shadow-xl transition cursor-pointer hover:scale-105 transform"
              style={{ backgroundColor: topic.color }}
            >
              <div className="w-16 h-16 mx-auto mb-4 relative" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(25%) saturate(625%) hue-rotate(4deg) brightness(100%) contrast(92%)' }}>
                <Image src={topic.icon} alt={topic.title} width={64} height={64} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-league-spartan font-bold">{topic.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

