"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqItems } from "@/lib/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Common{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-slate-400">
              Everything you need to know before we start building together.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 50} direction="up">
              <div className="rounded-xl bg-[#12121a] border border-[#1e1e2e] overflow-hidden transition-all duration-200 hover:border-indigo-500/20">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
                  aria-expanded={openId === item.id}
                >
                  <span className="text-sm font-semibold text-white group-hover:gradient-text transition-all">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                      openId === item.id ? "rotate-180 text-indigo-400" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openId === item.id ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
