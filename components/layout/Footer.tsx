'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Github, Instagram, ArrowUpRight, Mail } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  Products: [
    { label: 'Tripknot', href: 'https://tripknot.in', external: true },
    { label: 'Coming Soon', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/aneeras' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/aneeras' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/aneeras' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/aneeras' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-100 border-t border-white/8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="block mb-5 w-fit group">
              <div className="relative h-10 w-48 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/logo/footer-logo.png"
                  alt="Aneeras Technologies"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="font-inter text-white/50 text-sm leading-relaxed mb-6 max-w-[240px]">
              Building next-generation digital products that move people forward.
            </p>
            {/* Email */}
            <a
              href="mailto:hello@aneeras.com"
              className="inline-flex items-center gap-2 text-white/50 hover:text-soft-lavender font-inter text-sm transition-colors duration-200"
            >
              <Mail size={14} />
              hello@aneeras.com
            </a>
            {/* Socials */}
            <div className="flex items-center gap-2 mt-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 hover:border-royal-purple/40 hover:shadow-glow-soft flex items-center justify-center text-white/50 hover:text-white transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="font-space font-semibold text-white/80 text-sm mb-4 uppercase tracking-wider text-xs">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-inter text-sm text-white/45 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                        <ArrowUpRight size={12} className="opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-inter text-sm text-white/45 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/30 text-sm">
            © {new Date().getFullYear()} Aneeras. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-inter text-white/30 text-sm">Crafted with</span>
            <span className="text-royal-purple text-sm mx-0.5">♥</span>
            <span className="font-inter text-white/30 text-sm">by Aneeras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
