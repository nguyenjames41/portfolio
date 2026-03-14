import { motion } from 'framer-motion'
import { ArrowDown, Radio } from 'lucide-react'

function UNSWLogo() {
  return (
    <svg viewBox="0 0 120 28" className="inline-block h-[16px] w-auto align-middle" aria-label="UNSW">
      <text x="0" y="23" fontFamily="'Times New Roman',Georgia,serif" fontWeight="700" fontSize="26" fill="#FFD600" letterSpacing="2">UNSW</text>
    </svg>
  )
}

export default function Hero() {
  const spring = { type: 'spring', stiffness: 100, damping: 20 }

  return (
    <section id="hero" className="relative pt-16 pb-8 sm:pt-20 sm:pb-16 overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full
        bg-[var(--color-mocha)]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full
        bg-emerald-900/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...spring, delay: 0.1 }}
          className="text-[11px] text-[var(--color-muted)] font-mono mb-4 pt-2"
        >
          Hi there, welcome to my website where I just keep track of my projects and share my ups and downs.
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_260px] gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Live status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...spring, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                border border-[var(--color-mocha)]/25 bg-[var(--color-mocha)]/8 mb-2"
            >
              <Radio className="w-3 h-3 text-[var(--color-mocha)] animate-pulse" />
              <span className="text-[11px] sm:text-[13px] font-mono font-medium text-[var(--color-mocha-light)] tracking-wide">
                Currently: AI/ML Researching at RadAIology
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.3 }}
              className="font-mono text-[11px] sm:text-xs text-[var(--color-muted)] tracking-[3px] uppercase mb-2 flex items-center flex-wrap gap-1"
            >
              Mechanical Engineering at <UNSWLogo /> Sydney
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.4 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--color-cloud)] leading-[0.92]
                tracking-[-1px] sm:tracking-[-2px] mb-3"
            >
              Le Quang
              <br />
              Nguyen<span className="text-[var(--color-mocha)]">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.55 }}
              className="flex flex-wrap gap-x-4 gap-y-0.5 text-[11px] text-[var(--color-muted)] mb-3 font-mono"
            >
              <span><strong className="text-[var(--color-cloud-dim)]">Age</strong> 22</span>
              <span><strong className="text-[var(--color-cloud-dim)]">Major</strong> Mech. Engineering</span>
              <span><strong className="text-[var(--color-cloud-dim)]">School</strong> UNSW Sydney</span>
              <span><strong className="text-[var(--color-cloud-dim)]">Base</strong> Sydney, AU</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.65 }}
              className="text-sm text-[var(--color-warm)] font-mono leading-relaxed max-w-xl mb-4"
            >
              Engineer, startup founder, and AI researcher building things that
              kinda solve problems and I'm passionate about. Currently interning
              at RadAIology and building Cocuna.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  bg-[var(--color-mocha)] text-[var(--color-base)] text-xs font-mono font-semibold
                  hover:bg-[var(--color-mocha-light)] transition-all duration-300 hover:shadow-lg
                  hover:shadow-[var(--color-mocha)]/20"
              >
                See My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                  border border-[var(--color-border-hover)] text-[var(--color-cloud-dim)] text-xs font-mono font-semibold
                  hover:border-[var(--color-mocha)]/40 hover:text-[var(--color-mocha)] transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Photo — anti-grid overlap */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...spring, delay: 0.6 }}
            className="mx-auto w-28 sm:w-44 lg:w-auto order-first lg:order-last"
          >
            <div className="relative lg:-mr-4 lg:rotate-1">
              <div className="absolute -inset-1 rounded-full lg:rounded-2xl bg-gradient-to-br from-[var(--color-mocha)]/20
                via-transparent to-emerald-900/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--color-border)]
                bg-[var(--color-surface)] aspect-square lg:aspect-[3/4] rounded-full lg:rounded-2xl">
                <img
                  src="/images/profile.webp"
                  alt="Le Quang Nguyen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
