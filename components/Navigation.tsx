'use client'

import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-league-spartan font-bold text-dark-gray">
            Illustrated Tajweed
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#video" className="text-dark-gray hover:text-gold transition-colors font-noto-sans">
              Video
            </a>
            <a href="#features" className="text-dark-gray hover:text-gold transition-colors font-noto-sans">
              Features
            </a>
            <a href="#author" className="text-dark-gray hover:text-gold transition-colors font-noto-sans">
              Author
            </a>
            <a href="#purchase" className="bg-gold text-white px-6 py-2 rounded-lg font-league-spartan font-semibold hover:bg-dark-red transition-colors">
              Buy Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-dark-gray"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a
                href="#video"
                onClick={() => setIsOpen(false)}
                className="text-dark-gray hover:text-gold transition-colors font-noto-sans"
              >
                Video
              </a>
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="text-dark-gray hover:text-gold transition-colors font-noto-sans"
              >
                Features
              </a>
              <a
                href="#author"
                onClick={() => setIsOpen(false)}
                className="text-dark-gray hover:text-gold transition-colors font-noto-sans"
              >
                Author
              </a>
              <a
                href="#purchase"
                onClick={() => setIsOpen(false)}
                className="bg-gold text-white px-6 py-2 rounded-lg font-league-spartan font-semibold text-center"
              >
                Buy Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

