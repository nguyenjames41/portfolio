import { Mail, Phone, Linkedin } from 'lucide-react'
import { FadeUp } from './AnimatedSection'

export default function Footer() {
  return (
    <footer id="contact" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-12">
            <div>
              <p className="text-xl font-extrabold text-white tracking-[-0.5px] mb-2">
                Le Quang Nguyen
              </p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Current Research Intern at{' '}
                <strong className="text-white font-semibold">RadAIology</strong>
                <br />
                Open to internship and graduate opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:nguyen.james41@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400
                  transition-colors"
              >
                <Mail className="w-4 h-4" />
                nguyen.james41@gmail.com
              </a>
              <a
                href="tel:+61466289998"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400
                  transition-colors"
              >
                <Phone className="w-4 h-4" />
                0466 289 998
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400
                  transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-8 text-center">
            <p className="text-xs text-slate-600 font-mono">
              Designed & engineered by Le Quang Nguyen / 2026
            </p>
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
