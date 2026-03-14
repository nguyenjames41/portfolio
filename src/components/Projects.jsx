import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ArrowRight, X, FileText, ExternalLink, Layers } from 'lucide-react'
import { projects } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-mono font-medium
      bg-slate-800/80 border border-slate-700/40 text-slate-400 transition-colors
      hover:border-emerald-500/30 hover:text-emerald-400">
      {label}
    </span>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      layoutId={`card-${project.id}`}
      onClick={() => onOpen(project)}
      className={`group relative rounded-2xl border border-slate-800/60
        bg-slate-900/40 backdrop-blur-sm overflow-hidden cursor-pointer
        transition-all duration-500 hover:border-slate-700/80
        hover:shadow-2xl hover:shadow-emerald-500/[0.03]
        ${project.featured ? 'md:col-span-2' : ''}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glass gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className={`relative p-8 sm:p-10 ${project.featured ? 'md:grid md:grid-cols-2 md:gap-10' : ''}`}>
        <div>
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg
              bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
              text-[11px] font-mono font-semibold tracking-wide uppercase mb-4">
              <Layers className="w-3 h-3" />
              {project.badge}
            </span>
          )}

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-[-0.5px] mb-2
            group-hover:text-emerald-50 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-slate-500 mb-4">
            {project.role}{project.org ? ` / ${project.org}` : ''} / {project.period}
          </p>

          <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map(s => <TechBadge key={s} label={s} />)}
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400
            group-hover:gap-3 transition-all duration-300">
            View case study <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        {project.image && (
          <div className={`${project.featured ? 'hidden md:flex items-center justify-center' : 'mt-4'}`}>
            <div className="rounded-xl overflow-hidden border border-slate-800/60 bg-slate-900">
              <img src={project.image} alt={project.title}
                className={`w-full object-cover ${project.featured ? 'h-64' : 'h-32 opacity-60 group-hover:opacity-80 transition-opacity duration-500'}`} />
            </div>
          </div>
        )}
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
        bg-black/70 backdrop-blur-md p-4 sm:p-8 pt-20 sm:pt-24"
      onClick={onClose}
    >
      <motion.article
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl border border-slate-800/60
          bg-slate-900/95 backdrop-blur-2xl shadow-2xl mb-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-lg text-slate-500
            hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        {project.image && (
          <div className="w-full h-48 sm:h-64 overflow-hidden rounded-t-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="p-8 sm:p-10">
          {project.badge && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg
              bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
              text-[11px] font-mono font-semibold tracking-wide uppercase mb-4">
              <Layers className="w-3 h-3" />
              {project.badge}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-1px] mb-2">
            {project.title}
          </h2>
          <p className="text-sm font-mono text-slate-500 mb-8">
            {project.role}{project.org ? ` / ${project.org}` : ''} / {project.period}
          </p>

          {/* The Challenge */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-emerald-400 tracking-[2px] uppercase mb-3">
              The Challenge
            </h3>
            <p className="text-slate-400 font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Technical Stack */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-emerald-400 tracking-[2px] uppercase mb-3">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => <TechBadge key={s} label={s} />)}
            </div>
          </div>

          {/* The Logic / Process Gallery placeholder */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-emerald-400 tracking-[2px] uppercase mb-3">
              The Logic
            </h3>
            <div className="rounded-xl border border-dashed border-slate-700/60 bg-slate-800/30
              p-8 text-center">
              <p className="text-sm text-slate-600 font-mono">
                Process gallery — CAD screenshots, circuit diagrams, and documentation
              </p>
            </div>
          </div>

          {/* Downloads */}
          {project.pdfs.length > 0 && (
            <div>
              <h3 className="text-xs font-mono text-emerald-400 tracking-[2px] uppercase mb-3">
                Downloads
              </h3>
              <div className="space-y-2">
                {project.pdfs.map(pdf => (
                  <a
                    key={pdf.url}
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-800/60
                      bg-slate-800/30 text-sm text-slate-300 hover:border-emerald-500/30
                      hover:text-emerald-400 transition-all duration-200 group"
                  >
                    <FileText className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    <span className="flex-1 font-medium">{pdf.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-400 transition-colors" />
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

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="What I've Built"
          title="Projects"
          subtitle="From award-winning startups to hands-on engineering."
        />

        <LayoutGroup>
          <StaggerContainer className="grid md:grid-cols-2 gap-5">
            {projects.map(p => (
              <StaggerItem key={p.id}>
                <ProjectCard project={p} onOpen={setSelected} />
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
