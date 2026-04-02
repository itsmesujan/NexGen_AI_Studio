import ScrollReveal from "@/components/ui/ScrollReveal";

const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI" },
  { name: "React Native", category: "Mobile" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "AI/Backend" },
  { name: "OpenAI GPT-4o", category: "AI Model" },
  { name: "Anthropic Claude", category: "AI Model" },
  { name: "LangChain", category: "AI Framework" },
  { name: "CrewAI", category: "AI Agents" },
  { name: "Pinecone", category: "Vector DB" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
  { name: "Supabase", category: "Backend" },
  { name: "Stripe", category: "Payments" },
  { name: "Vercel", category: "Deploy" },
  { name: "n8n", category: "Automation" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
];

// Duplicate for seamless infinite scroll
const doubled = [...technologies, ...technologies];

export default function TechStack() {
  return (
    <section id="tech" className="py-20 bg-[#0a0a0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Stack
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Built With the{" "}
              <span className="gradient-text">Best Tools</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              We use the latest and most powerful AI and web technologies to build production-grade products.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap gap-4 py-2">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="inline-flex flex-col items-center justify-center min-w-[140px] px-5 py-4 rounded-xl bg-[#12121a] border border-[#1e1e2e] hover:border-indigo-500/30 transition-colors duration-200 flex-shrink-0"
            >
              <span className="text-white text-sm font-semibold whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-slate-600 text-xs mt-0.5">{tech.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
