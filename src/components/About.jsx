import { FadeUp } from './AnimatedSection'
import SectionHeader from './SectionHeader'

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Who I Am" title="About Me" subtitle="I see something that could be better, and I build toward it." />

        <FadeUp className="max-w-3xl mx-auto">
          <div className="space-y-6 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            <p>
              As a Mechanical Engineering student at{' '}
              <strong className="text-white font-semibold">UNSW Sydney</strong>, I've spent
              the last few years not just studying how things work — but making things that
              work for real people.
            </p>
            <p>
              In 2022, I noticed students around me struggling without affordable, personalised
              tutoring. So I started{' '}
              <strong className="text-white font-semibold">LQ Tutoring</strong> from my living
              room — and grew it into a business with over 50 students and 3 tutors, entirely
              through word of mouth. That same instinct led me to co-found{' '}
              <strong className="text-white font-semibold">EnerTrade</strong>, a battery
              recycling startup that won{' '}
              <strong className="text-emerald-400 font-semibold">
                $24,000 at the 2024 UAVS national pitch competition
              </strong>.
            </p>
            <p>
              Right now, I'm building{' '}
              <strong className="text-white font-semibold">Cocuna</strong> — an AI-enabled app
              that supports mothers through pregnancy and postpartum care. It's the project
              I'm most passionate about: using tools like Cursor, Lovable, and large language
              models to rapidly prototype something that could genuinely improve lives.
              Alongside that, I'm a research intern at{' '}
              <strong className="text-white font-semibold">RadAIology</strong>, exploring how
              AI can transform medical imaging.
            </p>
            <p>
              Outside the workshop and the lab? You'll find me crossing the finish line of a
              half marathon, mixing drinks at the Casula Powerhouse Arts Centre, or getting
              bossed around by my cat Cookie. I believe the best engineers stay curious about
              people — not just problems.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
