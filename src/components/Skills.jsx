import { skills } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function Skills() {
  return (
    <section id="skills" className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="What I Work With" title="Skills" />

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto">
          {skills.map((group, i) => (
            <StaggerItem key={i}>
              <div className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60
                backdrop-blur-[15px] p-3 sm:p-4 transition-all duration-300 h-full
                hover:border-[var(--color-border-hover)] hover:shadow-lg hover:shadow-[var(--color-mocha)]/[0.03]">
                <h4 className="font-serif text-xs sm:text-sm font-bold text-[var(--color-cloud)] mb-2 italic">
                  {group.group}
                </h4>
                <div className="flex flex-wrap gap-1">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-medium
                        bg-[var(--color-surface-raised)] border border-[var(--color-border)] text-[var(--color-warm)]
                        transition-colors hover:border-[var(--color-mocha)]/25 hover:text-[var(--color-mocha-light)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
