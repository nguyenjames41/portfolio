import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowRight, X, FileText, ExternalLink, Layers } from 'lucide-react'
import { projects } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium
      bg-[var(--color-surface-raised)] border border-[var(--color-border)] text-[var(--color-warm)] transition-colors
      hover:border-[var(--color-mocha)]/30 hover:text-[var(--color-mocha-light)]">
      {label}
    </span>
  )
}

function ProjectCard({ project, onOpen, className = '' }) {
  return (
    <motion.article
      layout
      layoutId={`card-${project.id}`}
      onClick={() => onOpen(project)}
      className={`group relative rounded-2xl border border-[var(--color-border)]
        bg-[var(--color-surface)]/60 backdrop-blur-[15px] overflow-hidden cursor-pointer
        transition-all duration-500 hover:border-[var(--color-border-hover)]
        hover:shadow-2xl hover:shadow-[var(--color-mocha)]/[0.05] ${className}`}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {/* Image at top — anti-grid: slightly overflows with negative margin */}
      {project.image && (
        <div className="hidden sm:block relative -mx-px -mt-px overflow-hidden rounded-t-2xl">
          <img src={project.image} alt={project.title}
            className="w-full object-cover h-36 opacity-70 group-hover:opacity-90 group-hover:scale-[1.02]
              transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent" />
        </div>
      )}

      <div className="relative p-4 sm:p-5">
        {project.badge && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded
            bg-[var(--color-mocha)]/10 border border-[var(--color-mocha)]/25 text-[var(--color-mocha)]
            text-[9px] sm:text-[10px] font-mono font-semibold tracking-wide uppercase mb-2">
            <Layers className="w-2.5 h-2.5" />
            {project.badge}
          </span>
        )}

        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[var(--color-cloud)] tracking-[-0.3px]
              group-hover:text-[var(--color-mocha-light)] transition-colors">
              {project.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] font-mono text-[var(--color-muted)]">
              {project.role}{project.org ? ` / ${project.org}` : ''} / {project.period}
            </p>
          </div>
          <ArrowRight className="w-4 h-4 text-[var(--color-mocha)] flex-shrink-0 sm:hidden" />
        </div>

        <p className="hidden sm:block text-[12px] text-[var(--color-warm)] font-mono leading-relaxed mt-2 mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="hidden sm:flex flex-wrap gap-1.5 mb-3">
          {project.stack.map(s => <TechBadge key={s} label={s} />)}
        </div>

        <span className="hidden sm:inline-flex items-center gap-2 text-[11px] font-mono font-semibold text-[var(--color-mocha)]
          group-hover:gap-3 transition-all duration-300">
          View project <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9000] flex items-start justify-center overflow-y-auto
        bg-black/70 backdrop-blur-[15px] p-4 sm:p-8 pt-20 sm:pt-24"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl border border-[var(--color-border)]
          bg-[var(--color-surface)]/95 backdrop-blur-[15px] shadow-2xl mb-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-lg text-[var(--color-muted)]
            hover:text-[var(--color-cloud)] hover:bg-[var(--color-surface-raised)] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {project.image && (
          <div className="w-full h-48 sm:h-64 overflow-hidden rounded-t-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-8 sm:p-10">
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg
              bg-[var(--color-mocha)]/10 border border-[var(--color-mocha)]/25 text-[var(--color-mocha)]
              text-[11px] font-mono font-semibold tracking-wide uppercase mb-4">
              <Layers className="w-3 h-3" />
              {project.badge}
            </span>
          )}

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-cloud)] tracking-[-1px] mb-2">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-[var(--color-muted)] mb-8">
            {project.role}{project.org ? ` / ${project.org}` : ''} / {project.period}
          </p>

          <div className="mb-8">
            <h3 className="text-[11px] font-mono text-[var(--color-mocha)] tracking-[2px] uppercase mb-3">
              The Challenge
            </h3>
            <p className="text-[var(--color-warm)] font-mono text-sm leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-[11px] font-mono text-[var(--color-mocha)] tracking-[2px] uppercase mb-3">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => <TechBadge key={s} label={s} />)}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-[11px] font-mono text-[var(--color-mocha)] tracking-[2px] uppercase mb-3">
              The Logic
            </h3>
            <div className="rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface-raised)]/50
              p-8 text-center">
              <p className="text-sm text-[var(--color-muted)] font-mono">
                Process gallery — CAD screenshots, circuit diagrams, and documentation
              </p>
            </div>
          </div>

          {project.pdfs.length > 0 && (
            <div>
              <h3 className="text-[11px] font-mono text-[var(--color-mocha)] tracking-[2px] uppercase mb-3">
                Downloads
              </h3>
              <div className="space-y-2">
                {project.pdfs.map(pdf => (
                  <a
                    key={pdf.url}
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--color-border)]
                      bg-[var(--color-surface-raised)]/50 text-sm text-[var(--color-cloud-dim)] hover:border-[var(--color-mocha)]/30
                      hover:text-[var(--color-mocha)] transition-all duration-200 group"
                  >
                    <FileText className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-mocha)] transition-colors" />
                    <span className="flex-1 font-mono font-medium text-[13px]">{pdf.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[var(--color-muted)] group-hover:text-[var(--color-mocha)] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  )
}

// Bento grid layout — varying sizes for visual asymmetry
const bentoClasses = [
  'md:col-span-2 md:row-span-1',  // EnerTrade — wide
  '',                               // Cocuna
  '',                               // Iron Man
  '',                               // Easy Up
  '',                               // Pill Dispenser
  'md:col-span-2 md:row-span-1',  // Open-Bridge — wide
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-8 sm:py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="What I've Built"
          title="Projects"
          subtitle="From award-winning startups to hands-on engineering."
        />

        <LayoutGroup>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {projects.map((p, i) => (
              <StaggerItem key={p.id} className={bentoClasses[i] || ''}>
                <ProjectCard project={p} onOpen={setSelected} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </LayoutGroup>

        <AnimatePresence>
          {selected && (
            <ProjectModal
              project={selected}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
