import { awards } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

function MicrosoftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 21 21">
      <rect x="0" y="0" width="10" height="10" fill="#F25022" />
      <rect x="11" y="0" width="10" height="10" fill="#7FBA00" />
      <rect x="0" y="11" width="10" height="10" fill="#00A4EF" />
      <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
    </svg>
  )
}

export default function Awards() {
  return (
    <section id="awards" className="py-8 sm:py-12 bg-[var(--color-surface)]/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Recognition" title="Awards & Certifications" />

        <StaggerContainer className="grid grid-cols-2 gap-2 sm:gap-3 max-w-3xl mx-auto">
          {awards.map((award, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-2 rounded-xl border border-[var(--color-border)]
                bg-[var(--color-surface)]/60 backdrop-blur-[15px] p-2.5 sm:p-3 transition-all duration-300
                hover:border-[var(--color-border-hover)] hover:shadow-lg hover:shadow-[var(--color-mocha)]/[0.03]">
                <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                  bg-[var(--color-mocha)]/10 border border-[var(--color-mocha)]/25">
                  {award.microsoft ? (
                    <MicrosoftIcon />
                  ) : (
                    <span className="text-[9px] font-mono font-bold text-[var(--color-mocha)]">
                      {award.icon}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs font-serif font-semibold text-[var(--color-cloud)] leading-snug">{award.title}</p>
                  <p className="text-[9px] sm:text-[10px] text-[var(--color-muted)] mt-0.5 font-mono">{award.sub}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
