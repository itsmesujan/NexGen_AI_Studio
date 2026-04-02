import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import LogoIcon from "@/components/ui/LogoIcon";

const footerLinks = {
  Services: [
    { label: "AI Website Development", href: "/services#website-dev" },
    { label: "AI App Development", href: "/services#app-dev" },
    { label: "AI Agent Development", href: "/services#ai-agent" },
    { label: "AI Chatbot Integration", href: "/services#chatbot" },
    { label: "AI Automation", href: "/services#automation" },
    { label: "Custom AI Integration", href: "/services#custom-ai" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "Twitter / X", href: "https://twitter.com", char: "𝕏" },
  { label: "LinkedIn", href: "https://linkedin.com", char: "in" },
  { label: "GitHub", href: "https://github.com/itsmesujan", char: "gh" },
  { label: "Email", href: "mailto:hello@nexgenai.studio", useIcon: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#080810] border-t border-[#1e1e2e] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#1e1e2e]">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <LogoIcon size={38} />
              <div className="flex flex-col leading-none">
                <span className="gradient-text text-base font-extrabold tracking-tight">NexGen AI</span>
                <span className="text-slate-500 text-[10px] font-medium tracking-widest uppercase">Studio · by Su Zan</span>
              </div>
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-xs">
              We build AI-powered digital products — websites, apps, agents, and automations — that give your business an unfair advantage.
            </p>
            <p className="mt-3 text-xs text-slate-600">
              Designed &amp; built by{" "}
              <span className="text-indigo-400 font-semibold">Su Zan</span>
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ label, href, char, useIcon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-[#1e1e2e] flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-200"
                >
                  {useIcon ? (
                    <Mail className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-bold leading-none">{char}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {label}
                      {href.startsWith("http") && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NexGen AI Studio. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Crafted with ❤️ by{" "}
            <span className="gradient-text font-semibold">Su Zan</span>
            <span className="mx-1 text-slate-700">·</span>
            Powered by AI
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
}
