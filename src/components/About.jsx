import { FadeUp } from './AnimatedSection'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label={null} title="About Me" subtitle="I see something that could be better, and I build toward it." />

        <FadeUp className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60
            backdrop-blur-[15px] p-6 sm:p-8 space-y-3 text-xs sm:text-sm text-[var(--color-warm)] font-mono leading-relaxed">
            <p>
              I guess I like seeing a problem and being able to solve it.
            </p>
            <p>
              As a MechEng student at UNSW, I've always been driven by practical impact.
              In 2022, my sister and I started LQ Tutoring and scaled it to 50+ students.
              After co-founding EnerTrade (and winning $24k with the boys), I've moved
              into the AI space. I'm currently building Cocuna to improve maternal health
              and researching AI/ML at RadAIology with a PhD researcher.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
