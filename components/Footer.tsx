'use client'

import { motion } from 'framer-motion'
import { footer, contact } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-mab-black border-t border-mab-gold/20 text-mab-offwhite py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-mab-gold/10"
        >
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-mab-gold mb-2">
              MABIDOUZ
            </h3>
            <p className="text-mab-offwhite/70 text-sm">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-mab-offwhite mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footer.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    className="text-mab-offwhite/70 hover:text-mab-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-mab-offwhite mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-mab-offwhite/70 hover:text-mab-gold transition-colors text-sm"
                >
                  {contact.email}
                </a>
              </li>
              {contact.socials.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.url}
                    className="text-mab-offwhite/70 hover:text-mab-gold transition-colors text-sm"
                  >
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-mab-offwhite/50 text-sm">
            {footer.copyright}
          </p>
          <div className="flex gap-4 mt-6 md:mt-0">
            {['Instagram', 'LinkedIn', 'Twitter'].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-mab-gold/10 hover:bg-mab-gold/20 flex items-center justify-center transition-colors text-mab-gold text-xs font-bold"
              >
                {social.slice(0, 1)}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
