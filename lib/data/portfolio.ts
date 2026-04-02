import { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "saas-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "Real-time business intelligence platform with AI-generated insights, predictive charts, and natural language querying for a SaaS startup.",
    category: "Website Dev",
    tags: ["Next.js", "AI Analytics", "Recharts", "PostgreSQL"],
    imageColor: "from-indigo-600 to-violet-700",
  },
  {
    id: "ecommerce-ai",
    title: "AI-Powered E-Commerce",
    description:
      "Full-stack e-commerce with AI product recommendations, smart search, and automated inventory management for a fashion brand.",
    category: "Website Dev",
    tags: ["Next.js", "Stripe", "AI Recommendations", "Prisma"],
    imageColor: "from-violet-600 to-pink-600",
  },
  {
    id: "mobile-fitness",
    title: "FitAI Mobile App",
    description:
      "AI personal trainer app that generates custom workout plans, tracks progress from camera, and adapts in real time.",
    category: "App Dev",
    tags: ["React Native", "TensorFlow", "Expo", "Firebase"],
    imageColor: "from-cyan-600 to-blue-600",
  },
  {
    id: "legal-agent",
    title: "LegalEase AI Agent",
    description:
      "Autonomous AI agent for a law firm that reviews contracts, flags risks, drafts summaries, and routes tasks to the right team.",
    category: "AI Agent",
    tags: ["GPT-4", "LangChain", "Python", "vector DB"],
    imageColor: "from-emerald-600 to-teal-600",
  },
  {
    id: "support-chatbot",
    title: "Support Bot — 10k/day",
    description:
      "Custom-trained chatbot handling 10,000+ daily support queries for an enterprise SaaS, reducing ticket volume by 73%.",
    category: "Chatbot",
    tags: ["OpenAI", "RAG", "Zendesk", "Slack"],
    imageColor: "from-amber-500 to-orange-600",
  },
  {
    id: "hr-automation",
    title: "HR Automation Pipeline",
    description:
      "End-to-end HR workflow automation: resume screening, interview scheduling, offer letter generation, and onboarding.",
    category: "Automation",
    tags: ["n8n", "GPT-4", "Notion", "Google Workspace"],
    imageColor: "from-rose-600 to-pink-600",
  },
];
