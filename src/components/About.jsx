import { FadeUp } from './AnimatedSection'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label={null} title="About Me" subtitle="I see something that could be better, and I build toward it." />

        <FadeUp className="max-w-3xl mx-auto">
          <div className="space-y-5 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            <p>
              Mech Engineering student at <strong className="text-white font-semibold">UNSW</strong>.
              I like building things that actually help people — whether that's a tutoring business,
              a startup, or a research project.
            </p>
            <p>
              Started <strong className="text-white font-semibold">LQ Tutoring</strong> in 2022,
              grew it to 50+ students. Co-founded{' '}
              <strong className="text-white font-semibold">EnerTrade</strong> (won{' '}
              <strong className="text-emerald-400 font-semibold">$24k at UAVS nationals</strong>).
              Now building <strong className="text-white font-semibold">Cocuna</strong>, an
              AI-powered app for maternal health, and interning at{' '}
              <strong className="text-white font-semibold">RadAIology</strong> doing AI/ML
              research in medical imaging.
            </p>
            <p>
              Outside of that — half marathons, bartending, and my cat Cookie.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
