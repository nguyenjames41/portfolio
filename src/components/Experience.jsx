import { experience } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function Experience() {
  return (
    <section id="experience" className="py-8 sm:py-12 bg-[var(--color-surface)]/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Where I've Been"
          title="Experience"
          subtitle="From research labs to startup trenches."
        />

        <StaggerContainer className="max-w-2xl mx-auto relative">
          <div className="absolute left-[11px] top-4 bottom-4 w-px bg-[var(--color-border)]" />

          {experience.map((exp, i) => (
            <StaggerItem key={i} className="relative pl-8 pb-4 last:pb-0">
              <div className={`absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-2
                flex items-center justify-center transition-all
                ${exp.current
                  ? 'border-[var(--color-mocha)] bg-[var(--color-mocha)]/15 shadow-lg shadow-[var(--color-mocha)]/15'
                  : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                }`}
              >
                {exp.current && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-mocha)] animate-pulse" />
                )}
              </div>

              <div>
                {exp.current && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded
                    bg-[var(--color-mocha)]/10 border border-[var(--color-mocha)]/25 text-[var(--color-mocha)]
                    text-[10px] font-mono font-semibold tracking-wide uppercase mb-1">
                    Current
                  </span>
                )}
                <p className="text-[10px] font-mono text-[var(--color-muted)] tracking-wide uppercase mb-0.5">
                  {exp.date}
                </p>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-[var(--color-cloud)] tracking-[-0.3px] mb-0.5">
                  {exp.title}
                </h3>
                <p className="text-xs font-mono text-[var(--color-muted)] mb-1">{exp.org}</p>
                <p className="hidden sm:block text-xs font-mono text-[var(--color-warm)] leading-relaxed">{exp.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
