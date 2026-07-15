'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { kreamag, kreamagCreations } from '../../data/siteData'

export default function KreamagPage() {
  return (
    <main className="bg-mab-offwhite text-mab-black">
      <section className="min-h-screen bg-mab-black px-6 py-24 text-mab-offwhite">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-mab-gold">KReaMAG</p>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">{kreamag.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-mab-offwhite/75">{kreamag.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-mab-offwhite/70">{kreamag.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {kreamag.pillars?.map((pillar) => (
                <span key={pillar} className="rounded-full border border-mab-gold/30 px-4 py-2 text-sm text-mab-gold">{pillar}</span>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image src={kreamag.image} alt="KReaMAG" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-mab-black">Créations</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kreamagCreations.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="overflow-hidden rounded-2xl border border-mab-black/10 bg-white shadow-sm">
                <div className="relative h-56">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-mab-gold">{project.category}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-mab-black">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mab-black px-6 py-16 text-mab-offwhite">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-mab-offwhite/70">Voir les réalisations IA et les projets numériques de MABIDOUZ.</p>
          <Link href="/" className="rounded-full border border-mab-gold/40 px-5 py-3 text-sm font-medium text-mab-gold transition hover:bg-mab-gold/10">Retour à l’accueil</Link>
        </div>
      </section>
    </main>
  )
}
