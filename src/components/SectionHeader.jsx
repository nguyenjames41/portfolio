import { FadeUp } from './AnimatedSection'

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <FadeUp className="text-center mb-16">
      {label && (
        <p className="font-mono text-xs tracking-[3px] uppercase text-emerald-400 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-2px] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-500 font-light mt-4 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </FadeUp>
  )
}
