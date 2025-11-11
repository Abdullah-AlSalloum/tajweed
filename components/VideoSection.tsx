// 'use client'

// import { motion } from 'framer-motion'

// export default function VideoSection() {
//   return (
//     <section id="video" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-league-spartan font-bold text-dark-gray mb-4">
//             Learn More About the Book
//           </h2>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="max-w-4xl mx-auto"
//         >
//           <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
//             {/* Fallback decorative background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-gold to-dark-red"></div>

//             {/* Responsive YouTube embed */}
//             <iframe
//               className="absolute inset-0 w-full h-full"
//               src=""
//               title="Illustrated Tajweed - Introductory Video"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/images/tajweedopenbook.png"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
