"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Typewriter from "@/components/ui/Typewriter";
import { ArrowRight, Star } from "lucide-react";

const typewriterWords = [
  "AI Websites",
  "Mobile Apps",
  "AI Agents",
  "Chatbots",
  "Automations",
  "Digital Products",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated particle canvas */}
      <ParticleBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8 animate-pulse-glow">
          <Star className="w-3.5 h-3.5 fill-current" />
          AI-First Digital Studio — Est. 2024
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
          <span className="text-white">We Build</span>
          <br />
          <span className="gradient-text">
            <Typewriter words={typewriterWords} />
          </span>
          <br />
          <span className="text-white">Powered by AI</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          NexGen AI Studio is a premium AI services provider. We design and
          engineer{" "}
          <span className="text-slate-200">
            websites, apps, AI agents, chatbots, and automation workflows
          </span>{" "}
          that give your business an unfair competitive edge.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/contact">
            <Button size="lg" className="min-w-[200px]">
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button variant="secondary" size="lg" className="min-w-[200px]">
              See Our Work
            </Button>
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["SM", "DC", "PN", "JO"].map((initials) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 border-2 border-[#0a0a0f] flex items-center justify-center text-white text-xs font-bold"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>50+ happy clients</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#1e1e2e]" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
            ))}
            <span className="ml-1">5.0 rating</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-[#1e1e2e]" />
          <span>100+ projects delivered</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  );
}
