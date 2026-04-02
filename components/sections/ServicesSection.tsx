import Link from "next/link";
import {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Zap,
  Brain,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Zap,
  Brain,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
              What We Build
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              AI-Powered{" "}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From idea to launch, we deliver complete AI-powered digital
              solutions that automate, engage, and scale your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} delay={i * 80} direction="up">
                <div className="gradient-border group h-full p-6 rounded-xl bg-[#12121a] hover:bg-[#14142a] transition-all duration-300 cursor-pointer">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}18`, border: `1px solid ${service.color}30` }}
                  >
                    {Icon && (
                      <Icon
                        className="w-6 h-6"
                        style={{ color: service.color } as React.CSSProperties}
                        strokeWidth={1.8}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-1.5 mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className="text-xs text-slate-500 flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: service.color }}
                          aria-hidden="true"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: service.color }}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium group"
            >
              View all services & details
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
