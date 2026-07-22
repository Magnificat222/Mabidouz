'use client'

import React from 'react'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import TestimonialCard from '../components/TestimonialCard'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  about,
  expertise,
  certifications,
  kreamag,
  aiCreations,
  aiMedia,
  kreamagCreations,
  testimonials,
  ebooks,
  contact
} from '../data/siteData'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-mab-black text-mab-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title={about.title}
            description={about.bio}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-mab-offwhite/80 text-lg leading-relaxed mb-6">
                {about.journey}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-mab-gold/20"
            >
              <Image
                src={about.image}
                alt="Photo Vogue"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative p-8 bg-black/30">
                <h3 className="font-display text-2xl font-bold text-mab-gold mb-6">
                  Domaines d'expertise
                </h3>
                <div className="space-y-4">
                  {expertise.map((item) => (
                    <div key={item.id} className="pb-4 border-b border-mab-gold/10 last:border-0">
                      <h4 className="text-mab-offwhite font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-mab-offwhite/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-mab-offwhite text-mab-black">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Certifications"
            subtitle="Apprendre. Évoluer. Transmettre."
            description="Chaque certification représente une étape dans ma montée en compétences et mon exploration de nouveaux outils et savoir-faire."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {certifications.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-mab-black/10 bg-white p-6 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-mab-gold">{item.institution}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-mab-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mab-black/70">{item.description}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex text-sm font-medium text-mab-violet hover:text-mab-gold">
                  Voir la certification →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KReaMAG Section */}
      <section id="kreamag" className="py-24 bg-gradient-to-br from-mab-black via-mab-violet/10 to-mab-black text-mab-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title={kreamag.title}
            description={kreamag.description}
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-lg overflow-hidden bg-black"
            >
              {kreamag.academy.video.includes('youtube.com/embed') ? (
                <iframe
                  src={kreamag.academy.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={kreamag.academy.video}
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-mab-black/60 to-transparent flex items-end p-6 pointer-events-none">
                <div>
                  <h3 className="text-2xl font-display font-bold text-mab-gold mb-2">
                    {kreamag.academy.title}
                  </h3>
                  <p className="text-mab-offwhite/80 text-sm">
                    {kreamag.academy.mission}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-mab-offwhite/80 leading-relaxed">
                {kreamag.academy.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl overflow-hidden border border-mab-black/10 bg-mab-offwhite/10">
                  <div className="flex h-48 items-center justify-center bg-mab-offwhite/5 p-6">
                    <div className="relative w-32 h-32">
                      <Image
                        src={kreamag.logo}
                        alt="Logo KReaMAG"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-mab-offwhite/70">Logo KReaMAG</p>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden border border-mab-black/10 bg-white/5">
                  <div className="relative h-48">
                    <Image
                      src={kreamag.academy.welcomeImage}
                      alt="Bienvenue KReaMAG Academy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <motion.a
                  href="/kreamag"
                  whileHover={{ x: 10 }}
                  className="inline-flex items-center gap-2 font-semibold text-mab-gold transition-colors hover:text-mab-offwhite"
                >
                  Découvrir les créations →
                </motion.a>
              </div>
            </motion.div>
          </div>

          {kreamag.gallery && (
            <div className="mt-12 grid grid-cols-2 gap-4">
              {kreamag.gallery.map((src, i) => (
                <div key={i} className="relative h-56 rounded-3xl overflow-hidden border border-mab-black/10 bg-mab-black/20">
                  <Image src={src} alt={`KReaMAG ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* AI Portfolio Section */}
      <section id="portfolio" className="py-24 bg-mab-black text-mab-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="L'intelligence artificielle comme partenaire créatif."
            description="L'IA est un outil d'exploration, d'expérimentation et d'innovation. À travers mes réalisations, je montre comment la technologie peut devenir un véritable partenaire dans le processus créatif."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {aiMedia.map((media, index) => (
              media.type === 'image' ? (
                <ProjectCard
                  key={media.id}
                  title={media.title}
                  image={media.src}
                  index={index}
                />
              ) : (
                <motion.div
                  key={media.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 md:h-80 overflow-hidden rounded-lg bg-black">
                    {media.src.includes('youtube.com/embed') ? (
                      <iframe
                        src={media.src}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={media.src}
                        className="w-full h-full object-cover"
                        controls
                        muted
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                      <h3 className="font-display text-xl font-bold text-white">
                        {media.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* KReaMAG Creations Section */}
      <section className="py-24 bg-gradient-to-br from-mab-violet/10 via-mab-black to-mab-black text-mab-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Quand l'imagination devient matière."
            description="Chaque création raconte une intention. Découvrez des réalisations où créativité, patience et savoir-faire se rencontrent."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {kreamagCreations.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                image={project.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-mab-black text-mab-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Ils racontent leur expérience."
            description="Derrière chaque projet, il y a une collaboration, une rencontre et une histoire."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ebook Section */}
      <section className="py-24 bg-gradient-to-br from-mab-black via-mab-violet/10 to-mab-black text-mab-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Partager la connaissance au-delà des projets."
            description="À travers mes ressources numériques, je partage des méthodes et des outils pour aider chacun à mieux comprendre et utiliser les nouvelles technologies."
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            {ebooks.map((ebook) => (
              <motion.div
                key={ebook.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-6"
              >
                <div className="text-center max-w-md">
                  <h3 className="font-display text-2xl font-bold text-mab-offwhite mb-3">
                    {ebook.title}
                  </h3>
                  <p className="text-mab-offwhite/70 mb-8">
                    {ebook.description}
                  </p>
                  <motion.a
                    href={ebook.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-block px-8 py-4 bg-mab-gold text-mab-black rounded-full font-semibold hover:shadow-lg hover:shadow-mab-gold/30 transition-all"
                  >
                    Lire l'ebook
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-mab-black text-mab-offwhite">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle
            title="Créons quelque chose d'impactant ensemble."
            description={contact.message}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              className="p-6 border border-mab-gold/30 rounded-lg hover:border-mab-gold/60 hover:bg-mab-gold/5 transition-all text-center group"
            >
              <p className="text-mab-gold font-semibold mb-2 group-hover:text-mab-offwhite transition-colors">
                Email
              </p>
              <p className="text-mab-offwhite/70 text-sm break-all">
                {contact.email}
              </p>
            </a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/2290151367676"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Discuter sur WhatsApp
            </motion.a>

            {/* Socials */}
            <div className="p-6 border border-mab-gold/30 rounded-lg hover:border-mab-gold/60 hover:bg-mab-gold/5 transition-all text-center">
              <p className="text-mab-gold font-semibold mb-4">Réseaux</p>
              <div className="flex gap-3 justify-center">
                {contact.socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className="w-8 h-8 rounded-full bg-mab-gold/20 hover:bg-mab-gold/40 flex items-center justify-center transition-colors text-xs font-bold"
                  >
                    {social.platform.slice(0, 1)}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}