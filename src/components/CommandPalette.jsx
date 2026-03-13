import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, User, FolderKanban, Briefcase, Award, BookOpen, Mail,
  Wrench, ArrowRight, Command, X,
} from 'lucide-react'
import { navItems } from '../data'

const iconMap = {
  about: User,
  projects: FolderKanban,
  experience: Briefcase,
  skills: Wrench,
  blog: BookOpen,
  contact: Mail,
}

const actions = [
  ...navItems.map(n => ({
    id: n.id,
    label: `Go to ${n.label}`,
    section: 'Navigation',
    icon: iconMap[n.id] || ArrowRight,
    action: () => {
      const el = document.getElementById(n.id)
      el?.scrollIntoView({ behavior: 'smooth' })
    },
  })),
  {
    id: 'resume',
    label: 'Download Resume',
    section: 'Actions',
    icon: ArrowRight,
    action: () => window.open('/images/EnerTrade PDF.pdf', '_blank'),
  },
  {
    id: 'email',
    label: 'Send Email',
    section: 'Actions',
    icon: Mail,
    action: () => window.location.href = 'mailto:nguyen.james41@gmail.com',
  },
  {
    id: 'awards',
    label: 'Go to Awards',
    section: 'Navigation',
    icon: Award,
    action: () => {
      const el = document.getElementById('awards')
      el?.scrollIntoView({ behavior: 'smooth' })
    },
  },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)

  const filtered = actions.filter(a =>
    a.label.toLowerCase().includes(query.toLowerCase())
  )

  const toggle = useCallback(() => {
    setOpen(prev => !prev)
    setQuery('')
    setSelected(0)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, toggle])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(s => Math.min(s + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(s => Math.max(s - 1, 0))
    } else if (e.key === 'Enter' && filtered[selected]) {
      filtered[selected].action()
      setOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5
          rounded-xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-xl
          text-slate-400 text-sm font-medium hover:border-emerald-500/30
          hover:text-slate-200 transition-all duration-300 shadow-2xl
          hover:shadow-emerald-500/5 group cursor-pointer"
        aria-label="Open command palette"
      >
        <Command className="w-4 h-4 group-hover:text-emerald-400 transition-colors" />
        <span className="hidden sm:inline">Command</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded
          bg-slate-800 border border-slate-700/50 text-[11px] text-slate-500 font-mono">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9999] w-[90vw] max-w-[560px]
                rounded-2xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-2xl
                shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800">
                <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={e => { setQuery(e.target.value); setSelected(0) }}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent text-slate-200 text-base outline-none
                    placeholder:text-slate-600 font-medium"
                />
                <button onClick={() => setOpen(false)} className="text-slate-600 hover:text-slate-400 cursor-pointer">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-[320px] overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <p className="text-center text-slate-600 py-8 text-sm">No results found.</p>
                )}
                {filtered.map((action, i) => {
                  const Icon = action.icon
                  return (
                    <button
                      key={action.id}
                      onClick={() => { action.action(); setOpen(false) }}
                      onMouseEnter={() => setSelected(i)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                        transition-all duration-150 cursor-pointer
                        ${i === selected
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'text-slate-400 hover:text-slate-200'
                        }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span className="flex-1 text-sm font-medium">{action.label}</span>
                      {i === selected && (
                        <kbd className="text-[10px] text-emerald-500/60 font-mono">Enter</kbd>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="flex items-center justify-between px-5 py-3 border-t border-slate-800 text-[11px] text-slate-600">
                <span>Navigate with arrow keys</span>
                <span>Press <kbd className="font-mono">Esc</kbd> to close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
