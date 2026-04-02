import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "NexGen AI Studio — AI-Powered Digital Products",
    template: "%s | NexGen AI Studio",
  },
  description:
    "NexGen AI Studio builds AI-powered websites, mobile apps, AI agents, chatbots, and automation workflows. Premium AI services for startups and enterprises.",
  keywords: [
    "AI website development",
    "AI app development",
    "AI agent development",
    "chatbot development",
    "AI automation",
    "AI digital products",
    "AI services",
    "Next.js development",
  ],
  authors: [{ name: "NexGen AI Studio" }],
  creator: "NexGen AI Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexgenai.studio",
    siteName: "NexGen AI Studio",
    title: "NexGen AI Studio — AI-Powered Digital Products",
    description:
      "We build AI-powered websites, apps, agents, and automations that give your business an unfair competitive edge.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexGen AI Studio — AI-Powered Digital Products",
    description:
      "Premium AI services: websites, apps, agents, chatbots, and automations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0a0a0f] text-slate-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
