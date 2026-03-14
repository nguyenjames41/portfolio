import { FadeUp } from './AnimatedSection'

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <FadeUp className="text-center mb-8">
      {label && (
        <p className="font-mono text-[10px] tracking-[3px] uppercase text-[var(--color-mocha)] mb-1">
          {label}
        </p>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--color-cloud)] tracking-[-0.5px] leading-tight italic">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs text-[var(--color-muted)] font-mono mt-2 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </FadeUp>
  )
}
