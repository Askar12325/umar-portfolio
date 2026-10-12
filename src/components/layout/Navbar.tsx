import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, ArrowUpRight, Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 md:px-12 py-3.5 sm:py-4.5 border-b border-white/[0.06] bg-[#050608]/85 backdrop-blur-2xl"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand Lockup */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 rounded-lg border border-white/10 bg-white/[0.03] group-hover:border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.15)] transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="text-xs sm:text-base font-bold tracking-[0.14em] sm:tracking-[0.16em] text-white uppercase font-display group-hover:text-cyan-300 transition-colors whitespace-nowrap">
            UMAR ABUBAKAR
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-1 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Hamburger */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.1] hover:border-cyan-400/40 text-[11px] sm:text-xs font-mono text-white tracking-wider uppercase transition-all duration-300 group shadow-sm active:scale-95 min-h-[40px]"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-white/10 bg-white/[0.04] text-neutral-300 hover:text-white hover:border-white/20 active:scale-95 transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#07090d]/95 backdrop-blur-3xl px-4 pt-3 pb-6 mt-3 space-y-2 rounded-b-2xl shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-xs font-mono tracking-widest uppercase text-neutral-300 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all min-h-[44px]"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-black text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md active:scale-95 min-h-[44px]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
