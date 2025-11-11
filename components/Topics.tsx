'use client'

import { motion } from 'framer-motion'
import { FaBookOpen, FaMicrophone, FaVolumeUp, FaPause, FaQuran, FaPen } from 'react-icons/fa'

const topics = [
  {
    icon: FaBookOpen,
    title: 'Letter Articulation Points',
    color: '#0273D0',
  },
  {
    icon: FaMicrophone,
    title: 'Rules of Noon and Meem',
    color: '#0273D0',
  },
  {
    icon: FaVolumeUp,
    title: 'Elongation and Nasalization',
    color: '#0273D0',
  },
  {
    icon: FaPause,
    title: 'Tafkheem and Tarqeeq',
    color: '#0273D0',
  },
  {
    icon: FaQuran,
    title: 'Stopping and Starting',
    color: '#0273D0',
  },
  {
    icon: FaPen,
    title: 'Quran Script and Diacritics',
    color: '#0273D0',
  },
]

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
              className={`bg-gradient-to-br p-8 rounded-lg text-white text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transform transition-transform`}
              style={{ backgroundColor: topic.color }}
            >
              <topic.icon className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-league-spartan font-bold">{topic.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

