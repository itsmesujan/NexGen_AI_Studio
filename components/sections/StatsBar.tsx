import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "3×", label: "Avg. ROI for Clients" },
  { value: "48h", label: "Avg. Response Time" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0d0d18] border-y border-[#1e1e2e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 80} direction="up">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
