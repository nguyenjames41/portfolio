import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function Blog() {
  return (
    <section id="blog" className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="My Journey"
          title="Blog"
          subtitle="Thoughts, updates, and lessons learned along the way."
        />

        <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4">
          {blogPosts.map((post, i) => (
            <StaggerItem key={i}>
              <article className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60
                backdrop-blur-[15px] overflow-hidden transition-all duration-500
                hover:border-[var(--color-border-hover)] hover:shadow-2xl hover:shadow-[var(--color-mocha)]/[0.05]
                hover:-translate-y-1 cursor-pointer">
                <div className="w-full h-20 sm:h-28 bg-gradient-to-br from-[var(--color-surface-raised)] to-[var(--color-surface)]
                  relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-mocha)]/[0.06]
                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-3">
                    <p className="text-[9px] sm:text-[11px] font-mono text-[var(--color-muted)] tracking-wide uppercase">
                      {post.date}
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="font-serif text-xs sm:text-sm font-bold text-[var(--color-cloud)] tracking-[-0.2px] mb-1
                    group-hover:text-[var(--color-mocha-light)] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[11px] text-[var(--color-warm)] font-mono leading-relaxed mb-2 line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold
                    text-[var(--color-mocha)] group-hover:gap-2 transition-all duration-300">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
