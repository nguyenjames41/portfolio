import { Mail, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

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
    <footer id="contact" className="py-8 sm:py-12 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-10">
            <div>
              <p className="font-serif text-xl font-bold text-[var(--color-cloud)] tracking-[-0.5px] mb-2 italic">
                Le Quang Nguyen
              </p>
              <p className="text-sm text-[var(--color-muted)] font-mono leading-relaxed">
                Current Research Intern at{' '}
                <span className="text-[var(--color-cloud-dim)]">RadAIology</span>
                <br />
                Open to internship and graduate opportunities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nguyen.james41@gmail.com"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[var(--color-warm)] hover:text-[var(--color-mocha)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Gmail
              </a>
              <a
                href="https://www.linkedin.com/in/le-quang-nguyen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[var(--color-warm)] hover:text-[var(--color-mocha)] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://instagram.com/lequanng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[var(--color-warm)] hover:text-[var(--color-mocha)] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                Instagram
              </a>
              <a
                href="https://kaggle.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[var(--color-warm)] hover:text-[var(--color-mocha)] transition-colors"
              >
                <KaggleIcon className="w-4 h-4" />
                Kaggle
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] font-mono text-[var(--color-warm)] hover:text-[var(--color-mocha)] transition-colors"
              >
                <XIcon className="w-4 h-4" />
                X
              </a>
            </div>
          </div>

          <div className="border-t border-[var(--color-border)] pt-8 text-center">
            <p className="text-[11px] text-[var(--color-muted)] font-mono">
              Designed & engineered by Le Quang Nguyen / 2026
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
