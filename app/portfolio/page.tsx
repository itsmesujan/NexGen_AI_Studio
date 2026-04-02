"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import { portfolioItems } from "@/lib/data/portfolio";

const categories = ["All", "Website Dev", "App Dev", "AI Agent", "Chatbot", "Automation"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a0a0f] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grid opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(6,182,212,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Our Work
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
            Products We&apos;ve{" "}
            <span className="gradient-text">Shipped</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            100+ AI products built across industries. Here&apos;s a selection of
            our favourite work.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-[#0a0a0f] pb-4 sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white"
                    : "bg-[#12121a] text-slate-400 border border-[#1e1e2e] hover:text-white hover:border-indigo-500/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 60} direction="up">
                <div className="group rounded-2xl overflow-hidden bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col">
                  {/* Image gradient */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${item.imageColor} flex items-center justify-center overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-20 bg-grid" />
                    <span className="text-white/25 text-6xl font-black select-none">
                      {item.title.charAt(0)}
                    </span>
                    <div className="absolute top-3 right-3">
                      <Badge variant="default">{item.category}</Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-4">
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
                    <div className="pt-4 border-t border-[#1e1e2e]">
                      <Link
                        href="/contact"
                        className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1 group/link transition-colors"
                      >
                        Build something similar
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
