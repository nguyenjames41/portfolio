import { motion } from 'framer-motion'
import { ArrowDown, Radio } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient orb backgrounds */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full
        bg-emerald-500/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full
        bg-slate-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Live status */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                border border-emerald-500/20 bg-emerald-500/[0.06] mb-8"
            >
              <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
              <span className="text-[13px] font-medium text-emerald-400 tracking-wide">
                Currently: Researching Robotics at UNSW
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-mono text-sm text-slate-500 tracking-widest uppercase mb-4"
            >
              Mechanical Engineering / UNSW Sydney
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95]
                tracking-[-3px] mb-8"
            >
              Le Quang
              <br />
              Nguyen<span className="text-emerald-400">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-8 font-mono"
            >
              <span><strong className="text-slate-300">Age</strong> 21</span>
              <span><strong className="text-slate-300">Major</strong> Mech. Engineering</span>
              <span><strong className="text-slate-300">School</strong> UNSW Sydney</span>
              <span><strong className="text-slate-300">Base</strong> Sydney, AU</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mb-10"
            >
              Engineer, startup founder, and AI researcher building things that
              make a real difference. Currently interning at RadAIology and
              building Cocuna.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  bg-emerald-500 text-slate-950 text-sm font-semibold
                  hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg
                  hover:shadow-emerald-500/20"
              >
                See My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  border border-slate-700 text-slate-300 text-sm font-semibold
                  hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-emerald-500/20
                via-transparent to-slate-500/10 blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80
                bg-slate-900 aspect-[3/4]">
                <img
                  src="/images/profile.webp"
                  alt="Le Quang Nguyen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
