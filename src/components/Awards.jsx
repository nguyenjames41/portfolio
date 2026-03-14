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
    <section id="awards" className="py-16 sm:py-20 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Recognition" title="Awards & Certifications" />

        <StaggerContainer className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
          {awards.map((award, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 rounded-xl border border-slate-800/60
                bg-slate-900/40 backdrop-blur-sm p-5 transition-all duration-300
                hover:border-slate-700/80 hover:shadow-lg hover:shadow-emerald-500/[0.02]">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center
                  bg-emerald-500/10 border border-emerald-500/20">
                  {award.microsoft ? (
                    <MicrosoftIcon />
                  ) : (
                    <span className="text-[11px] font-mono font-bold text-emerald-400">
                      {award.icon}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white leading-snug">{award.title}</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{award.sub}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
