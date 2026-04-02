import Link from "next/link";
import { Check, Zap } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { pricingTiers } from "@/lib/data/pricing";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Pricing
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Fixed-price projects. No hourly billing surprises. No hidden fees.
              Choose the plan that fits your stage.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 100} direction="up">
              <div
                className={`relative h-full flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-indigo-950/60 to-violet-950/40 border-2 border-indigo-500/50 shadow-2xl shadow-indigo-500/10"
                    : "bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/20"
                }`}
              >
                {/* Popular badge */}
                {tier.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold whitespace-nowrap">
                      <Zap className="w-3 h-3 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Name */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-sm text-slate-500">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`text-4xl font-extrabold ${
                        tier.highlighted ? "gradient-text" : "text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.price !== "Custom" && (
                      <span className="text-slate-500 text-sm">/ {tier.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          tier.highlighted ? "text-indigo-400" : "text-emerald-500"
                        }`}
                      />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact" className="block">
                  <Button
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full"
                    size="lg"
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <p className="text-center text-sm text-slate-600 mt-8">
            Need something custom?{" "}
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Chat with us
            </Link>{" "}
            — we scope every project individually.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
