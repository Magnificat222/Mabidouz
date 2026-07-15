'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description?: string
  category?: string
  image: string
  index?: number
}

export default function ProjectCard({
  title,
  description,
  category,
  image,
  index = 0
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
    >
      <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-mab-black/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-mab-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          {category && (
            <p className="text-mab-gold text-sm font-semibold mb-2 uppercase tracking-wide">
              {category}
            </p>
          )}
          <h3 className="font-display text-xl font-bold text-mab-offwhite mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-mab-offwhite/80 text-sm line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
