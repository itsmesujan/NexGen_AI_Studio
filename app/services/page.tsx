import type { Metadata } from "next";
import {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Zap,
  Brain,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NexGen AI Studio's full range of AI services: website development, mobile apps, AI agents, chatbots, automation, and custom AI integrations.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Zap,
  Brain,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a0a0f] bg-grid relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Our Services
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            AI-Powered{" "}
            <span className="gradient-text">Services</span>
            <br />
            That Actually Work
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just add AI for the sake of it. Every service we offer
            uses AI to deliver real, measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isEven = i % 2 === 0;

            return (
              <ScrollReveal key={service.id} direction="up" delay={50}>
                <div
                  id={service.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center p-8 md:p-12 rounded-3xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/20 transition-all duration-300`}
                >
                  {/* Visual side */}
                  <div className="lg:w-2/5 flex-shrink-0 w-full">
                    <div
                      className="w-full aspect-square max-w-sm mx-auto rounded-2xl flex flex-col items-center justify-center gap-6 relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      <div className="absolute inset-0 bg-grid opacity-30" />
                      <div
                        className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${service.color}20`,
                          border: `1px solid ${service.color}40`,
                        }}
                      >
                        {Icon && (
                          <Icon
                            className="w-12 h-12"
                            style={{ color: service.color } as React.CSSProperties}
                            strokeWidth={1.4}
                          />
                        )}
                      </div>
                      <span
                        className="text-6xl font-black opacity-5 select-none"
                        style={{ color: service.color }}
                      >
                        AI
                      </span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1">
                    <div
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4"
                      style={{
                        backgroundColor: `${service.color}15`,
                        color: service.color,
                        border: `1px solid ${service.color}25`,
                      }}
                    >
                      {service.title}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <Check
                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                            style={{ color: service.color } as React.CSSProperties}
                          />
                          <span className="text-sm text-slate-300">{f}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/contact">
                      <Button size="lg">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
