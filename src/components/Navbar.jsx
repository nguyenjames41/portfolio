import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        current = 'contact'
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] h-14 transition-all duration-300
          ${scrolled
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleClick('hero') }}
            className="font-mono text-sm font-semibold text-emerald-400 tracking-tight hover:text-emerald-300 transition-colors"
          >
            LQN<span className="text-slate-600">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(n => (
              <li key={n.id}>
                <button
                  onClick={() => handleClick(n.id)}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200 cursor-pointer
                    ${active === n.id
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/50'
                    }`}
                >
                  {n.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 left-0 right-0 bottom-0 z-[999]
              bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((n, i) => (
              <motion.button
                key={n.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleClick(n.id)}
                className="text-2xl font-semibold text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                {n.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
