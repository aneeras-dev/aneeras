'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function AneerasIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 112 116"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect fill="#4259A7" x="8.08" y="27.56" width="24.23" height="66.84" rx="12.11" ry="12.11" />
      <rect fill="#4259A7" x="80.76" y="27.56" width="24.23" height="66.84" rx="12.11" ry="12.11" />
      <path
        fill="#CBD3E5"
        d="M48.16,48.93h8.37s0,21.66,0,21.66h-8.48c-1.42-.22-2.31-1.28-2.41-2.7v-16.21c.01-1.36,1.07-2.75,2.51-2.75Z"
      />
      <path
        fill="#CBD3E5"
        d="M56.53,23.84v14.2h-11.41c-5.59.34-9.92,4.66-10.31,10.25l.06,22.99c.01,5.11,5.02,10.09,9.87,10.11l11.81.06v16.67c0,6.68-5.43,12.11-12.11,12.11s-12.12-5.43-12.12-12.11V23.84c0-6.69,5.43-12.12,12.12-12.12,3.34,0,6.37,1.36,8.55,3.55,2.2,2.19,3.55,5.21,3.55,8.57Z"
      />
      <path
        fill="#9CAED9"
        d="M67.4,51.5v16.49c0,1.36-1.19,2.59-2.54,2.59h-8.32s0-21.66,0-21.66h8.31c1.32,0,2.56,1.26,2.56,2.58Z"
      />
      <path
        fill="#9CAED9"
        d="M80.76,23.84v74.28c0,6.68-5.41,12.11-12.11,12.11s-12.12-5.43-12.12-12.11v-16.67h.01l3-3c.16-.13.29-.27.43-.44l7.42-7.37.03,10.8h10.84s0-10.84,0-10.84l-10.82-.03,4.75-4.76.83-.83,1.7-1.69,3.53-3.53v-10.85c0-.61-.03-5.57-4.1-8.71-2.77-2.13-5.78-2.16-6.75-2.14h-10.89v-14.2c0-6.69,5.43-12.12,12.12-12.12,3.34,0,6.37,1.36,8.57,3.55,2.19,2.19,3.54,5.21,3.54,8.57Z"
      />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => { setIsOpen(false) }, [pathname])
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 flex-shrink-0">
              <AneerasIcon className="w-full h-full" />
            </div>
            <span className="font-syne font-bold text-lg text-[#111827] tracking-tight">
              Aneeras
            </span>
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
                    'px-4 py-2 rounded-lg font-inter text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'text-[#111827] bg-gray-100'
                      : 'text-gray-500 hover:text-[#111827] hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://tripknot.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#4259A7] text-white font-inter font-semibold text-sm hover:bg-[#2d3d7c] transition-colors duration-200"
            >
              Explore Tripknot
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center py-2.5 px-4 rounded-xl font-inter text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'text-[#111827] bg-gray-100'
                    : 'text-gray-500 hover:text-[#111827] hover:bg-gray-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="https://tripknot.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#4259A7] text-white font-inter font-semibold text-base"
              >
                Explore Tripknot
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
