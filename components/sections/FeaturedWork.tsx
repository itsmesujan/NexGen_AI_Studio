import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { portfolioItems } from "@/lib/data/portfolio";

export default function FeaturedWork() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Featured Work
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Products We've{" "}
              <span className="gradient-text">Shipped</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Real AI products built for real businesses — delivering measurable results.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100} direction="up">
              <div className="group rounded-2xl overflow-hidden bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col">
                {/* Image placeholder with gradient */}
                <div
                  className={`relative h-52 bg-gradient-to-br ${item.imageColor} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20 bg-grid" />
                  <span className="text-white/30 text-5xl font-black select-none">
                    {item.title.charAt(0)}
                  </span>
                  <div className="absolute top-3 right-3">
                    <Badge variant="default">{item.category}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-500 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[#1e1e2e]">
                    <Link
                      href="/portfolio"
                      className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center gap-1 group/link"
                    >
                      View case study
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="secondary" size="lg">
                View All Projects
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
