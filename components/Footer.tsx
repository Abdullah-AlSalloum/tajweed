'use client'

import { FaYoutube, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-league-spartan font-bold mb-4">About the Author</h3>
            <p className="text-sm text-gray-400 font-noto-sans mb-4">
              Contains the complete rules of tajweed in the form of illustrative
              panels and pictures, along with the QR Code
            </p>
            <div className="rounded-lg overflow-hidden">
              <Image src="/images/aboutfooter.png" alt="About the Author" width={300} height={200} className="w-full h-auto" style={{ filter: 'brightness(0) saturate(100%) invert(69%) sepia(25%) saturate(625%) hue-rotate(4deg) brightness(100%) contrast(92%)' }} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-league-spartan font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm font-noto-sans text-gray-400">
              <li><a href="#author" className="hover:text-gold transition-colors">Author</a></li>
              <li><a href="#distributors" className="hover:text-gold transition-colors">Distributors</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">FAQ</a></li>
              <li><a href="#newsletter" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-league-spartan font-bold mb-4">Content</h3>
            <ul className="space-y-2 text-sm font-noto-sans text-gray-400">
              <li><a href="#explanations" className="hover:text-gold transition-colors">Book Explanations</a></li>
              <li><a href="#video" className="hover:text-gold transition-colors">Official Channel</a></li>
              <li><a href="#topics" className="hover:text-gold transition-colors">Book Topics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-league-spartan font-bold mb-4">Contact Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <FaEnvelope className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400 font-noto-sans">
          <p>© {new Date().getFullYear()} Illustrated Tajweed - All rights reserved</p>
          {/* <p className="mt-2">Design and Development: Professional Landing Page</p> */}
        </div>
      </div>
    </footer>
  )
}

