'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import Image from 'next/image'

const bookPages = [
  {
    id: 1,
    title: 'Letter Articulation Points',
    description: 'Precise illustrations of letter articulation points and their characteristics',
    image: '/images/tajweedopenbook.png',
  },
  {
    id: 2,
    title: 'Rules of Noon and Meem',
    description: 'Comprehensive explanation of assimilation, conversion, and concealment rules',
    image: '/images/tajweedopenbook.png',
  },
  {
    id: 3,
    title: 'Elongation and Nasalization',
    description: 'Details of elongation types with audio examples',
    image: '/images/tajweedopenbook.png',
  },
  {
    id: 4,
    title: 'Tafkheem and Tarqeeq',
    description: 'Explanation of phonetic differences through colors and illustrations',
    image: '/images/tajweedopenbook.png',
  },
]

export default function BookContent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % bookPages.length)
  }

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + bookPages.length) % bookPages.length)
  }

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
            Book Content
          </h2>
          <p className="text-lg text-medium-gray font-noto-sans">
            Browse pages from inside the book
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {bookPages.map((page, index) => (
                  <div key={page.id} className="min-w-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative p-12 md:p-20 aspect-video flex items-center justify-center rounded-lg overflow-hidden"
                      style={{
                        backgroundImage: `url(${page.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="text-center text-blue-800 relative z-10">
                        <h3 className="text-3xl md:text-4xl font-league-spartan font-bold mb-4">
                          {page.title}
                        </h3>
                        <p className="text-lg md:text-xl font-noto-sans opacity-90">
                          {page.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-dark-gray p-3 rounded-full shadow-lg hover:bg-gold hover:text-white transition-colors z-10"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-dark-gray p-3 rounded-full shadow-lg hover:bg-gold hover:text-white transition-colors z-10"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {bookPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-gold' : 'bg-medium-gray'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

