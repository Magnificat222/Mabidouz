'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const stored = window.localStorage.getItem('mabidouz-theme')
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
    window.localStorage.setItem('mabidouz-theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      className="rounded-full border border-mab-gold/30 bg-white/10 px-3 py-2 text-sm font-medium text-mab-offwhite transition hover:border-mab-gold/60 hover:bg-mab-gold/10"
      aria-label="Basculer le thème"
    >
      {theme === 'dark' ? '☀︎' : '☾'}
    </button>
  )
}
