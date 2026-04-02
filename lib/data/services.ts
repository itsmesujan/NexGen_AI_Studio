import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "website-dev",
    icon: "Globe",
    title: "AI Website Development",
    description:
      "Blazing-fast, SEO-optimized websites built with AI-assisted design and development. From landing pages to full-scale web apps.",
    features: [
      "Next.js & React architecture",
      "AI-generated UI/UX designs",
      "SEO & Core Web Vitals optimized",
      "CMS integration",
      "Custom animations & interactions",
      "Mobile-first responsive layout",
    ],
    color: "#6366f1",
  },
  {
    id: "app-dev",
    icon: "Smartphone",
    title: "AI App Development",
    description:
      "Cross-platform mobile and web applications powered by AI, built for performance, scalability, and user engagement.",
    features: [
      "React Native & Expo",
      "iOS & Android deployment",
      "AI-powered features & recommendations",
      "Real-time sync & offline support",
      "Push notifications",
      "App Store optimization",
    ],
    color: "#8b5cf6",
  },
  {
    id: "ai-agent",
    icon: "Bot",
    title: "AI Agent Development",
    description:
      "Custom autonomous AI agents that automate complex workflows, make decisions, and execute tasks with minimal human oversight.",
    features: [
      "LLM-powered reasoning (GPT-4, Claude, Gemini)",
      "Multi-step task execution",
      "Tool & API integrations",
      "Memory & context management",
      "Human-in-the-loop controls",
      "Monitoring & observability",
    ],
    color: "#06b6d4",
  },
  {
    id: "chatbot",
    icon: "MessageSquare",
    title: "AI Chatbot Integration",
    description:
      "Intelligent conversational AI for customer support, lead generation, and internal knowledge bases — deployed anywhere.",
    features: [
      "Custom-trained on your data",
      "Multi-channel (web, WhatsApp, Slack)",
      "Natural language understanding",
      "CRM & helpdesk integration",
      "Analytics & conversation insights",
      "Multilingual support",
    ],
    color: "#10b981",
  },
  {
    id: "automation",
    icon: "Zap",
    title: "AI Workflow Automation",
    description:
      "Eliminate repetitive tasks with intelligent automation pipelines that connect your tools, data, and teams.",
    features: [
      "n8n, Make & Zapier workflows",
      "Document processing & extraction",
      "Email & calendar automation",
      "Data enrichment pipelines",
      "Scheduled & event-driven triggers",
      "Error handling & retry logic",
    ],
    color: "#f59e0b",
  },
  {
    id: "custom-ai",
    icon: "Brain",
    title: "Custom AI Integration",
    description:
      "Embed AI capabilities directly into your existing systems — recommendation engines, predictive models, and more.",
    features: [
      "Fine-tuned models on your data",
      "REST API & SDK delivery",
      "Image, text, and audio AI",
      "Recommendation engines",
      "Predictive analytics",
      "Ongoing model retraining",
    ],
    color: "#ec4899",
  },
];
