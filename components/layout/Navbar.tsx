'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

// Splits "Aneeras" so only the two 'e' chars get the swap animation
function LogoLetters({ hovered }: { hovered: boolean }) {
  const eRef = useRef<HTMLSpanElement>(null)
  const [eW, setEW] = useState(13) // fallback until measured

  useEffect(() => {
    if (eRef.current) setEW(eRef.current.offsetWidth)
  }, [])

  const spring = {
    type: 'spring' as const,
    stiffness: 520,
    damping: 24,
    mass: 0.8,
  }

  return (
    <span className="font-space font-bold text-xl text-white tracking-tight leading-none select-none">
      An
      {/* first e — moves RIGHT on hover */}
      <motion.span
        ref={eRef}
        style={{ display: 'inline-block', verticalAlign: 'baseline' }}
        animate={{ x: hovered ? eW : 0, y: hovered ? -10 : 0 }}
        transition={spring}
      >
        e
      </motion.span>
      {/* second e — moves LEFT on hover, tiny stagger for natural feel */}
      <motion.span
        style={{ display: 'inline-block', verticalAlign: 'baseline' }}
        animate={{ x: hovered ? -eW : 0, y: hovered ? -10 : 0 }}
        transition={{ ...spring, delay: hovered ? 0.025 : 0 }}
      >
        e
      </motion.span>
      ras
    </span>
  )
}

function AneerasIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 112 116"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect fill="white" x="8.08" y="27.56" width="24.23" height="66.84" rx="12.11" ry="12.11" />
      <rect fill="white" x="80.76" y="27.56" width="24.23" height="66.84" rx="12.11" ry="12.11" />
      <path
        fill="#cbd3e5"
        d="M48.16,48.93h8.37s0,21.66,0,21.66h-8.48c-1.42-.22-2.31-1.28-2.41-2.7v-16.21c.01-1.36,1.07-2.75,2.51-2.75Z"
      />
      <path
        fill="#cbd3e5"
        d="M56.53,23.84v14.2h-11.41c-5.59.34-9.92,4.66-10.31,10.25l.06,22.99c.01,5.11,5.02,10.09,9.87,10.11l11.81.06v16.67c0,6.68-5.43,12.11-12.11,12.11s-12.12-5.43-12.12-12.11V23.84c0-6.69,5.43-12.12,12.12-12.12,3.34,0,6.37,1.36,8.55,3.55,2.2,2.19,3.55,5.21,3.55,8.57Z"
      />
      <path
        fill="#9caed9"
        d="M67.4,51.5v16.49c0,1.36-1.19,2.59-2.54,2.59h-8.32s0-21.66,0-21.66h8.31c1.32,0,2.56,1.26,2.56,2.58Z"
      />
      <path
        fill="#9caed9"
        d="M80.76,23.84v74.28c0,6.68-5.41,12.11-12.11,12.11s-12.12-5.43-12.12-12.11v-16.67h.01l3-3c.16-.13.29-.27.43-.44l7.42-7.37.03,10.8h10.84s0-10.84,0-10.84l-10.82-.03,4.75-4.76.83-.83,1.7-1.69,3.53-3.53v-10.85c0-.61-.03-5.57-4.1-8.71-2.77-2.13-5.78-2.16-6.75-2.14h-10.89v-14.2c0-6.69,5.43-12.12,12.12-12.12,3.34,0,6.37,1.36,8.57,3.55,2.19,2.19,3.54,5.21,3.54,8.57Z"
      />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoHovered, setLogoHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={cn(
          'transition-all duration-500',
          scrolled
            ? 'bg-black/50 backdrop-blur-2xl border-b border-white/8 shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <motion.div
                className={cn(
                  'relative w-9 h-9 flex-shrink-0 transition-all duration-300',
                  'drop-shadow-[0_0_8px_rgba(75,74,168,0.5)]',
                  'group-hover:drop-shadow-[0_0_16px_rgba(139,140,201,0.7)]'
                )}
                animate={{ scale: logoHovered ? 1.1 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <AneerasIcon className="w-full h-full" />
              </motion.div>

              <LogoLetters hovered={logoHovered} />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 rounded-lg font-inter text-sm font-medium transition-colors duration-200 group',
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg bg-white/8"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://tripknot.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-inter font-semibold text-sm text-white overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-[1.03]"
              >
                <span className="absolute inset-0 bg-accent-gradient" />
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                <span className="relative">Explore Tripknot</span>
                <ArrowUpRight size={14} className="relative group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </div>

            {/* Mobile burger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-2xl border-b border-white/10"
          >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center py-3 px-4 rounded-xl font-inter text-lg font-medium transition-colors duration-200',
                      pathname === link.href
                        ? 'text-white bg-white/8'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-2"
              >
                <Link
                  href="https://tripknot.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-accent-gradient text-white font-inter font-semibold text-base"
                >
                  Explore Tripknot
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
