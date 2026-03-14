import { skills } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="What I Work With" title="Skills" />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {skills.map((group, i) => (
            <StaggerItem key={i}>
              <div className="group rounded-2xl border border-slate-800/60 bg-slate-900/40
                backdrop-blur-sm p-6 transition-all duration-300 h-full
                hover:border-slate-700/80 hover:shadow-lg hover:shadow-emerald-500/[0.02]">
                <h4 className="text-sm font-bold text-white mb-4 tracking-[-0.2px]">
                  {group.group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium
                        bg-slate-800/60 border border-slate-700/30 text-slate-400
                        transition-colors hover:border-emerald-500/20 hover:text-emerald-400"
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
