import { experience } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Where I've Been"
          title="Experience"
          subtitle="From research labs to startup trenches."
        />

        <StaggerContainer className="max-w-2xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-slate-800" />

          {experience.map((exp, i) => (
            <StaggerItem key={i} className="relative pl-12 pb-12 last:pb-0">
              {/* Dot */}
              <div className={`absolute left-0 top-2 w-[22px] h-[22px] rounded-full border-2
                flex items-center justify-center transition-all
                ${exp.current
                  ? 'border-emerald-500 bg-emerald-500/20 shadow-lg shadow-emerald-500/20'
                  : 'border-slate-700 bg-slate-900'
                }`}
              >
                {exp.current && (
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </div>

              <div>
                {exp.current && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md
                    bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
                    text-[11px] font-mono font-semibold tracking-wide uppercase mb-2">
                    Current
                  </span>
                )}
                <p className="text-xs font-mono text-slate-600 tracking-wide uppercase mb-1.5">
                  {exp.date}
                </p>
                <h3 className="text-lg font-bold text-white tracking-[-0.3px] mb-0.5">
                  {exp.title}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{exp.org}</p>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{exp.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
