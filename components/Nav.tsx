'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { href: '#products', label: 'Boards' },
  { href: '#about',    label: 'Our Story' },
  { href: '#contact',  label: 'Inquire' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-200/95 backdrop-blur-sm shadow-sm border-b border-walnut-300/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
          aria-label="Back to top"
        >
          <Logo
            className="h-10 w-auto"
            variant="dark"
            showWordmark={false}
          />
          <span
            className={`hidden sm:block font-display text-sm tracking-widest2 uppercase transition-colors ${
              scrolled ? 'text-walnut-300' : 'text-cream-200'
            }`}
          >
            Kaldfjornia
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <button
                onClick={() => scrollTo(href)}
                className={`font-body text-sm tracking-wider uppercase transition-colors hover:text-amber-300 ${
                  scrolled ? 'text-walnut-200' : 'text-cream-200'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-walnut-300' : 'bg-cream-200'
            } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-walnut-300' : 'bg-cream-200'
            } ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              scrolled ? 'bg-walnut-300' : 'bg-cream-200'
            } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-200 border-t border-walnut-300/10">
          <ul className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className="font-body text-base tracking-wider uppercase text-walnut-300 hover:text-amber-300 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
