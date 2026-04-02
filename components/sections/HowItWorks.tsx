import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discover & Strategize",
    description:
      "We start with a deep-dive discovery call to understand your business goals, target users, and technical requirements. You get a detailed proposal, timeline, and fixed-price quote within 24 hours.",
    color: "#6366f1",
    items: ["Free 30-min strategy call", "Detailed scope & proposal", "Fixed price, no surprises"],
  },
  {
    icon: Cpu,
    step: "02",
    title: "Design & Build",
    description:
      "Our AI-first engineers design, build, and test your product in agile sprints. You get weekly demos and full transparency into progress. We use the latest AI models, frameworks, and best practices.",
    color: "#8b5cf6",
    items: ["Weekly progress demos", "Agile development sprints", "Full-stack AI engineering"],
  },
  {
    icon: Rocket,
    step: "03",
    title: "Launch & Scale",
    description:
      "We deploy your product to production, optimize for performance, and provide post-launch support. As your business grows, we're your long-term AI partner — ready to evolve and scale with you.",
    color: "#06b6d4",
    items: ["Production deployment", "Performance tuning", "Ongoing support & growth"],
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 bg-[#0d0d18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              How It{" "}
              <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              A simple, transparent process from first call to live product.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #6366f1 20%, #8b5cf6 50%, #06b6d4 80%, transparent)",
              opacity: 0.3,
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 120} direction="up">
              <div className="relative text-center md:text-left p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/30 transition-all duration-300 h-full">
                {/* Step number */}
                <div className="text-6xl font-black opacity-5 absolute top-4 right-6 leading-none select-none">
                  {step.step}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto md:mx-0"
                  style={{
                    backgroundColor: `${step.color}18`,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  <step.icon
                    className="w-7 h-7"
                    style={{ color: step.color } as React.CSSProperties}
                    strokeWidth={1.6}
                  />
                </div>

                {/* Badge */}
                <div
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold mb-3"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    border: `1px solid ${step.color}25`,
                  }}
                >
                  Step {step.step}
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: step.color }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
