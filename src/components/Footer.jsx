import { Mail, Linkedin } from 'lucide-react'
import { FadeUp } from './AnimatedSection'

function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function KaggleIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.281.18.046.149.034.233-.035.257l-6.555 6.344 6.836 8.507c.095.104.117.208.074.293z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-10">
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

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nguyen.james41@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Gmail
              </a>
              <a
                href="https://www.linkedin.com/in/le-quang-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/lequanng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://kaggle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <KaggleIcon className="w-4 h-4" />
                Kaggle
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <XIcon className="w-4 h-4" />
                X
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
