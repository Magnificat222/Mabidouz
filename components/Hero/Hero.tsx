'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { hero } from '../../data/siteData'

const typingSequence = [
  'Bonjour, je suis Magnificat.',
  'Je suis AI Creative Strategist.',
  'Je transforme les idées en expériences créatives grâce à la stratégie, au design, au marketing et à l\'intelligence artificielle.'
]

function TypeWriter({ lines }: { lines: string[] }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const currentLine = lines[currentLineIndex]
    let typingTimeout: NodeJS.Timeout

    if (currentText.length < currentLine.length) {
      typingTimeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1))
      }, 30)
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, currentText])
        setCurrentText('')
        setCurrentLineIndex(currentLineIndex + 1)
      }, 800)
    }

    return () => clearTimeout(typingTimeout)
  }, [currentText, currentLineIndex, displayedLines, lines])

  return (
    <div className="space-y-2">
      {displayedLines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg leading-relaxed text-mab-offwhite md:text-2xl"
        >
          {line}
        </motion.p>
      ))}
      {currentLineIndex < lines.length && (
        <p className="h-8 text-lg leading-relaxed text-mab-offwhite md:text-2xl">
          {currentText}
          <span className="animate-pulse">|</span>
        </p>
      )}
    </div>
  )
}

export default function Hero() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-mab-black via-mab-black to-mab-violet/20 pt-20 text-mab-offwhite">
      <div className="absolute inset-0">
        <motion.div animate={{ x: [0, 40, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-10 top-24 h-48 w-48 rounded-full bg-mab-gold/15 blur-3xl" />
        <motion.div animate={{ x: [0, -30, 0], y: [0, 30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-16 right-10 h-56 w-56 rounded-full bg-mab-violet/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={showContent ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-full ring-2 ring-mab-gold/30 shadow-2xl shadow-black/30 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image src={hero.photo} alt="Magnificat" fill className="object-cover object-center" priority />
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={showContent ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 font-display text-3xl font-bold text-mab-gold md:text-5xl">
          {hero.greeting}
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={showContent ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="mt-4 space-y-2">
          <h2 className="font-display text-2xl font-bold text-mab-offwhite md:text-4xl">{hero.title}</h2>
          <p className="text-sm text-mab-gold/80 md:text-lg">{hero.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={showContent ? { opacity: 1 } : {}} transition={{ delay: 1.2 }} className="mx-auto mt-8 min-h-32 max-w-3xl">
          <TypeWriter lines={typingSequence} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={showContent ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 3 }} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <motion.a href="/mabidouz" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-mab-gold to-mab-gold/80 px-8 py-4 font-display font-semibold text-mab-black transition-all duration-300 hover:shadow-lg hover:shadow-mab-gold/30">
            {hero.cta}
          </motion.a>
          <a href="/kreamag" className="text-sm font-medium text-mab-offwhite/70 transition hover:text-mab-gold">Découvrir KReaMAG</a>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="pt-12">
          <p className="text-sm text-mab-offwhite/50">↓ Scroll to explore ↓</p>
        </motion.div>
      </div>
    </section>
  )
}
