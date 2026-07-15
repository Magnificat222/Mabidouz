'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { about, expertise, certifications } from '../../data/siteData'

export default function MabidouzPage() {
  return (
    <main className="bg-mab-offwhite text-mab-black">
      <section className="min-h-screen bg-mab-black px-6 py-24 text-mab-offwhite">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-mab-gold">MABIDOUZ</p>
            <h1 className="font-display text-4xl font-semibold md:text-5xl">Créer. Inspirer. Transformer.</h1>
            <p className="mt-6 text-lg leading-relaxed text-mab-offwhite/75">{about.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span key={item.id} className="rounded-full border border-mab-gold/30 px-4 py-2 text-sm text-mab-gold">{item.title}</span>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 lg:ml-auto">
            <div className="relative h-[500px] w-full overflow-hidden rounded-[1.5rem]">
              <Image src={about.image} alt="Magnificat" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-semibold text-mab-black">Parcours & certifications</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-mab-black/10 bg-white p-8 shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-mab-black">Parcours</h3>
              <p className="mt-4 text-base leading-relaxed text-mab-black/70">{about.journey}</p>
            </div>
            <div className="rounded-2xl border border-mab-black/10 bg-white p-8 shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-mab-black">Certifications</h3>
              <div className="mt-4 space-y-4">
                {certifications.map((item) => (
                  <div key={item.id} className="border-b border-mab-black/10 pb-3 last:border-0">
                    <p className="font-medium text-mab-black">{item.title}</p>
                    <p className="text-sm text-mab-black/60">{item.institution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mab-black px-6 py-16 text-mab-offwhite">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-mab-offwhite/70">Explorer l’univers créatif et technologique de MABIDOUZ.</p>
          <Link href="/kreamag" className="rounded-full border border-mab-gold/40 px-5 py-3 text-sm font-medium text-mab-gold transition hover:bg-mab-gold/10">Découvrir KReaMAG</Link>
        </div>
      </section>
    </main>
  )
}
