import type { Metadata } from "next";
import { Target, Lightbulb, Shield, Users, Code2, Cpu, Globe, Bot } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import LogoIcon from "@/components/ui/LogoIcon";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NexGen AI Studio — our mission, values, and the team building next-generation AI products.",
};

const values = [
  {
    icon: Target,
    title: "Results Over Hype",
    description:
      "We don't add AI for buzzwords. Every feature we build has a clear business objective — more revenue, less cost, better experience.",
    color: "#6366f1",
  },
  {
    icon: Lightbulb,
    title: "Always Forward",
    description:
      "AI moves fast. We stay at the frontier — testing new models, frameworks, and approaches so our clients always get the best possible solution.",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    title: "Reliability First",
    description:
      "We build production-grade systems with proper error handling, security, testing, and monitoring. No half-baked demos.",
    color: "#06b6d4",
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description:
      "We think of ourselves as your long-term AI partner, not a vendor. Your success is our success — literally.",
    color: "#10b981",
  },
];

const teamMembers = [
  {
    name: "Su Zan",
    role: "Founder & Lead AI Engineer",
    bio: "Full-stack engineer and AI builder with deep expertise in LLMs, autonomous agent systems, Next.js, and production-grade web products. Building the future, one AI product at a time.",
    avatar: "SZ",
    gradient: "from-indigo-600 to-violet-600",
    skills: ["Next.js & React", "AI Agents", "LLMs & Fine-tuning", "Python & APIs"],
    skillIcons: [Code2, Bot, Cpu, Globe],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0a0a0f] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grid opacity-40"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(139,92,246,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-6">
            About Us
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
            We Build the AI Products
            <br />
            <span className="gradient-text">Others Can&apos;t</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            NexGen AI Studio is a boutique AI product studio specializing in
            shipping high-quality, production-grade AI-powered software for
            startups and forward-thinking enterprises.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#0d0d18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Born at the <span className="gradient-text">AI Revolution</span>
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    NexGen AI Studio was founded with one belief: AI should give
                    real businesses real advantages — not just demos and
                    prototypes.
                  </p>
                  <p>
                    We saw too many companies either ignoring AI entirely or
                    getting burned by agencies that slapped a ChatGPT wrapper on
                    something and called it innovation. We built NexGen to be
                    different.
                  </p>
                  <p>
                    Every product we ship is thoughtfully designed, thoroughly
                    engineered, and built to scale. We obsess over the details —
                    from UI micro-interactions to model inference latency to
                    security and data privacy.
                  </p>
                  <p>
                    Today we&apos;re proud to have delivered 100+ AI products that
                    clients actually use, love, and grow with.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual metrics */}
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "100+", label: "Products Shipped" },
                  { number: "50+", label: "Clients Worldwide" },
                  { number: "98%", label: "Satisfaction Rate" },
                  { number: "2024", label: "Founded" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 rounded-2xl bg-[#12121a] border border-[#1e1e2e] text-center"
                  >
                    <div className="text-3xl font-extrabold gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                The principles that guide every decision we make.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 80} direction="up">
                <div className="p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/20 transition-all duration-300 h-full flex gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${value.color}18`,
                      border: `1px solid ${value.color}30`,
                    }}
                  >
                    <value.icon
                      className="w-6 h-6"
                      style={{ color: value.color } as React.CSSProperties}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#0d0d18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                The <span className="gradient-text">Team</span>
              </h2>
              <p className="text-slate-400">
                Small team. Big impact. AI-obsessed builders.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex justify-center">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100} direction="up">
                <div className="relative p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/30 transition-all duration-300 max-w-md w-full">
                  {/* Gradient glow background */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    {/* Avatar with logo nodes aesthetic */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-extrabold shadow-xl shadow-indigo-500/20`}
                      >
                        {member.avatar}
                      </div>
                      {/* Online indicator */}
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#12121a] flex items-center justify-center">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                      </span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-extrabold text-white mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-sm gradient-text font-semibold mb-3">
                        {member.role}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed mb-5">
                        {member.bio}
                      </p>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {member.skills.map((skill, idx) => {
                          const Icon = member.skillIcons[idx];
                          return (
                            <span
                              key={skill}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                            >
                              <Icon className="w-3 h-3" />
                              {skill}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Footer badge */}
                  <div className="relative mt-6 pt-5 border-t border-[#1e1e2e] flex items-center justify-between">
                    <span className="text-xs text-slate-600">
                      Building NexGen AI Studio
                    </span>
                    <div className="flex items-center gap-2">
                      <LogoIcon size={20} />
                      <span className="text-xs gradient-text font-semibold">Founder</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-slate-400 mb-8">
              Book a free 30-minute call and let&apos;s explore what we can build for you.
            </p>
            <Link href="/contact">
              <Button size="lg">Book a Free Call</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
