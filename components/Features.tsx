'use client'

import { motion } from 'framer-motion'
import { FaEye, FaPalette, FaQrcode, FaGraduationCap, FaBook, FaPrint, FaMobile, FaGlobe, FaVideo } from 'react-icons/fa'
import { FaStar, FaShoppingCart } from 'react-icons/fa'

const scientificFeatures = [
  {
    icon: FaVideo,
    title: 'Comprehensive Visual Explanation',
    description: 'All Tajweed rules presented through images and illustrations',
  },
  {
    icon: FaPalette,
    title: 'Precise Illustrations',
    description: 'Letter articulation points and characteristics shown with high accuracy',
  },
  {
    icon: FaQrcode,
    title: 'Interactive Audio Examples',
    description: 'QR codes for direct access to audio examples',
  },
  {
    icon: FaGraduationCap,
    title: 'Scientific Accuracy',
    description: 'Academic review and approved in institutes and universities',
  },
]

const technicalFeatures = [
  {
    icon: FaBook,
    title: '264 Pages',
    description: 'Large format with clear, eye-friendly font',
  },
  {
    icon: FaPrint,
    title: 'Premium Printing',
    description: 'High-quality binding and elegant design',
  },
  {
    icon: FaMobile,
    title: 'Lightweight',
    description: 'Easy to carry and transport',
  },
  {
    icon: FaGlobe,
    title: 'Multilingual',
    description: 'Available in multiple world languages',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-10 bg-gradient-to-br from-white to-off-white">
      <div className="container mx-auto px-4">
        {/* Scientific Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray text-center mb-4">
            Scientific Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {scientificFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <feature.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-league-spartan font-bold text-dark-gray mb-2">
                  {feature.title}
                </h3>
                <p className="text-medium-gray font-noto-sans">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray text-center mb-4">
            Technical Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {technicalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <feature.icon className="w-12 h-12 text-bright-blue mx-auto mb-4" />
                <h3 className="text-xl font-league-spartan font-bold text-dark-gray mb-2">
                  {feature.title}
                </h3>
                <p className="text-medium-gray font-noto-sans">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="flex justify-center mt-10">
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
      </div>
    </section>
  )
}

