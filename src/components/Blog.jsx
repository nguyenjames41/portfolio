import { ArrowRight } from 'lucide-react'
import { blogPosts } from '../data'
import SectionHeader from './SectionHeader'
import { StaggerContainer, StaggerItem } from './AnimatedSection'

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="My Journey"
          title="Blog"
          subtitle="Thoughts, updates, and lessons learned along the way."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogPosts.map((post, i) => (
            <StaggerItem key={i}>
              <article className="group rounded-2xl border border-slate-800/60 bg-slate-900/40
                backdrop-blur-sm overflow-hidden transition-all duration-500
                hover:border-slate-700/80 hover:shadow-2xl hover:shadow-emerald-500/[0.03]
                hover:-translate-y-1 cursor-pointer">
                {/* Gradient placeholder for blog image */}
                <div className="w-full h-44 bg-gradient-to-br from-slate-800 to-slate-900
                  relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.06]
                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-[11px] font-mono text-slate-600 tracking-wide uppercase">
                      {post.date}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-white tracking-[-0.3px] mb-3
                    group-hover:text-emerald-50 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold
                    text-emerald-400 group-hover:gap-3 transition-all duration-300">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
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
