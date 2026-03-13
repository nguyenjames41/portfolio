import { funFacts } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function FunFacts() {
  return (
    <section id="fun" className="py-24 sm:py-32 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Beyond The Resume" title="A Few Fun Facts" />

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {funFacts.map((fact, i) => (
            <StaggerItem key={i}>
              <div className="group rounded-2xl border border-slate-800/60 bg-slate-900/40
                backdrop-blur-sm overflow-hidden text-center transition-all duration-300
                hover:border-slate-700/80 hover:shadow-lg hover:shadow-emerald-500/[0.02]
                hover:-translate-y-1">
                <div className="w-full h-36 overflow-hidden">
                  <img
                    src={fact.img}
                    alt={fact.alt}
                    className="w-full h-full object-cover transition-transform duration-500
                      group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-white">{fact.title}</p>
                  <p className="text-xs text-slate-500 mt-1 font-mono">{fact.sub}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
