import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#0d0d18] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center">
            {/* Gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-[#0d0d18] to-violet-950/60"
              aria-hidden="true"
            />
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
            {/* Glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Border */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.15), rgba(6,182,212,0.2))",
                padding: "1px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-400 text-sm font-semibold uppercase tracking-wider">
                  Let&apos;s Build Together
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ready to Ship Your
                <br />
                <span className="gradient-text">AI Product?</span>
              </h2>

              <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                Book a free 30-minute strategy call. We&apos;ll map out your project,
                recommend the right AI stack, and give you a fixed-price quote —
                no obligation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="min-w-[200px]">
                    Book Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" className="min-w-[200px]">
                    See Our Work First
                  </Button>
                </Link>
              </div>

              <p className="text-slate-600 text-sm mt-8">
                No commitment required · Response within 2 hours · Fixed pricing
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
