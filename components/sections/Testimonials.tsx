import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Client Love
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              What Our Clients{" "}
              <span className="gradient-text">Say</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Don&apos;t take our word for it — here&apos;s what real clients say about working with us.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 80} direction="up">
              <div className="h-full p-6 rounded-2xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/20 transition-all duration-300 flex flex-col group">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-indigo-500/30 mb-4 flex-shrink-0" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#1e1e2e]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
