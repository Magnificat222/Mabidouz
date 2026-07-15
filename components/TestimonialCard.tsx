'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TestimonialCardProps {
  name: string
  role: string
  text: string
  image?: string
  index?: number
}

export default function TestimonialCard({
  name,
  role,
  text,
  image,
  index = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-mab-black/50 border border-mab-gold/20 rounded-lg p-6 md:p-8 backdrop-blur-sm hover:border-mab-gold/50 transition-colors duration-300"
    >
      <div className="flex items-start gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-mab-gold">★</span>
        ))}
      </div>

      <p className="text-mab-offwhite/80 mb-6 text-base leading-relaxed italic">
        "{text}"
      </p>

      <div className="flex items-center gap-4">
        {image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <p className="text-mab-offwhite font-display font-semibold">
            {name}
          </p>
          <p className="text-mab-gold text-sm">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
