'use client'

import { motion } from 'framer-motion'
import { FaDownload, FaMobile } from 'react-icons/fa'

export default function DigitalVersion() {
  return (
    <section className="py-10 bg-gradient-to-br from-off-white to-white relative">
      <div className="container relative mx-auto px-4 -mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 items-center">

            <div className='relative -top-20 sm:pt-20 flex justify-center'>
              <div
                className=" w-[320px] h-[550px] sm:w-[400px] sm:h-[650px] lg:w-[480px] lg:h-[750px] rounded-2xl"
                style={{
                  backgroundImage: 'url(/images/tajweedtablet.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left lg:mt-10"
            >
              <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-6">
                Digital Version
              </h2>
              <p className="text-lg text-medium-gray mb-8 font-noto-sans leading-relaxed">
                Browse the Illustrated Tajweed book digitally with the same quality as the printed version. Available on all devices with the same scientific accuracy and illustrations.
              </p>
              <motion.a
                id="download"
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-bright-blue text-white px-8 py-4 rounded-lg font-league-spartan font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <FaDownload />
                Download Digital Version
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

