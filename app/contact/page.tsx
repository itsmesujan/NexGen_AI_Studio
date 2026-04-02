"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Send,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "AI Website Development",
  "AI App Development",
  "AI Agent Development",
  "AI Chatbot Integration",
  "AI Workflow Automation",
  "Custom AI Integration",
  "Multiple Services",
  "Not sure yet — need advice",
];

const budgetOptions = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
];

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nexgenai.studio",
    href: "mailto:hello@nexgenai.studio",
  },
  {
    icon: MessageSquare,
    label: "Response Time",
    value: "Within 2 business hours",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote-first · Serving worldwide",
    href: null,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
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
            Get In Touch
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6">
            Let&apos;s Build{" "}
            <span className="gradient-text">Something</span>
            <br />
            Amazing
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">
            Tell us about your project. We&apos;ll respond within 2 hours with a
            tailored strategy and fixed-price quote.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#0a0a0f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Start your project
                  </h2>
                  <p className="text-slate-400 leading-relaxed">
                    Ready to add AI to your product or build something new from
                    scratch? Fill out the form and we&apos;ll jump on a quick
                    discovery call to scope things out.
                  </p>
                </div>
              </ScrollReveal>

              {/* Contact details */}
              <div className="space-y-4">
                {contactDetails.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 80} direction="left">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-[#12121a] border border-[#1e1e2e]">
                      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-white font-medium hover:text-indigo-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-sm text-slate-300 font-medium">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* What to expect */}
              <ScrollReveal direction="left" delay={200}>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-violet-950/20 border border-indigo-500/20">
                  <h3 className="text-sm font-bold text-white mb-4">
                    What happens next?
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "We review your submission (within 2h)",
                      "We book a 30-min discovery call",
                      "You receive a detailed proposal + quote",
                      "We start building — often within days",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-8 rounded-2xl bg-[#12121a] border border-[#1e1e2e] space-y-6"
                  noValidate
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0d0d18] border text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                          errors.name
                            ? "border-red-500/50"
                            : "border-[#2a2a3e] focus:border-indigo-500/50"
                        }`}
                        placeholder="Your name"
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={`w-full px-4 py-3 rounded-lg bg-[#0d0d18] border text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${
                          errors.email
                            ? "border-red-500/50"
                            : "border-[#2a2a3e] focus:border-indigo-500/50"
                        }`}
                        placeholder="you@company.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Service Interested In <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="service"
                      className={`w-full px-4 py-3 rounded-lg bg-[#0d0d18] border text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all appearance-none ${
                        errors.service
                          ? "border-red-500/50"
                          : "border-[#2a2a3e] focus:border-indigo-500/50"
                      }`}
                      {...register("service")}
                      defaultValue=""
                    >
                      <option value="" disabled className="text-slate-600">
                        Select a service...
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-[#0d0d18]">
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Budget Range{" "}
                      <span className="text-slate-600 font-normal">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3 rounded-lg bg-[#0d0d18] border border-[#2a2a3e] text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all appearance-none"
                      {...register("budget")}
                      defaultValue=""
                    >
                      <option value="" className="text-slate-600 bg-[#0d0d18]">
                        Select budget range...
                      </option>
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-[#0d0d18]">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Tell Us About Your Project{" "}
                      <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg bg-[#0d0d18] border text-white placeholder-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none ${
                        errors.message
                          ? "border-red-500/50"
                          : "border-[#2a2a3e] focus:border-indigo-500/50"
                      }`}
                      placeholder="Describe your project, goals, and any specific requirements..."
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Status messages */}
                  {status === "success" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Message sent!</p>
                        <p className="text-sm opacity-80 mt-0.5">
                          We&apos;ll get back to you within 2 hours.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Something went wrong</p>
                        <p className="text-sm opacity-80 mt-0.5">
                          Please try again or email us directly.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>

                  <p className="text-xs text-slate-600 text-center">
                    No spam, ever. Your data is private and secure.
                  </p>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
