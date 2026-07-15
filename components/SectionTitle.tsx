'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  id?: string
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
}

export default function SectionTitle({
  id,
  title,
  subtitle,
  description,
  centered = true
}: SectionTitleProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="font-display text-4xl md:text-5xl font-bold text-mab-offwhite mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-mab-gold text-lg md:text-xl font-medium mb-4">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-mab-offwhite/70 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
