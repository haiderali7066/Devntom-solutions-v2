"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useAnimationFrame } from "framer-motion";
import {
  Mail, Phone, MapPin, MessageCircle, Send,
  Instagram, Facebook, Linkedin, ArrowRight, CheckCircle2,
} from "lucide-react";


// ─── Animated violet/dark blob (reused from footer style) ────────────────────
function AmbientBlob() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);

  useAnimationFrame((_, delta) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    tRef.current += delta * 0.0003;
    const t = tRef.current;
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const blobs = [
      { x: 0.18 + 0.07 * Math.sin(t * 0.9),  y: 0.35 + 0.10 * Math.cos(t * 0.7), r: 0.42, r1: "rgba(109,40,217,0.35)", r2: "rgba(79,20,180,0.12)" },
      { x: 0.82 + 0.05 * Math.cos(t * 1.1),  y: 0.60 + 0.08 * Math.sin(t * 1.3), r: 0.32, r1: "rgba(139,92,246,0.28)", r2: "rgba(109,40,217,0.06)" },
      { x: 0.50 + 0.09 * Math.sin(t * 0.6),  y: 0.15 + 0.06 * Math.cos(t * 1.5), r: 0.22, r1: "rgba(167,139,250,0.20)", r2: "rgba(0,0,0,0)" },
    ];

    for (const b of blobs) {
      const gx = b.x * W, gy = b.y * H, gr = b.r * Math.max(W, H);
      const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      g.addColorStop(0, b.r1);
      g.addColorStop(1, b.r2);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }
  });

  return (
    <canvas
      ref={canvasRef}
      width={1400}
      height={800}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
    />
  );
}

// ─── Contact channels ─────────────────────────────────────────────────────────
const channels = [
  {
    icon: Mail,
    label: "Email Us",
    value: "devntomsolutions@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:devntomsolutions@gmail.com",
    color: "group-hover:text-violet-400",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 325 603 6838",
    sub: "Chat with us directly",
    href: "https://wa.me/923256036838",
    color: "group-hover:text-green-400",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 325 603 6838",
    sub: "Mon – Sat, 9 AM – 7 PM PKT",
    href: "tel:+923256036838",
    color: "group-hover:text-blue-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    sub: "Available for remote & on-site",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    color: "group-hover:text-rose-400",
  },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/devntom.solutions", icon: <Instagram size={17} /> },
  { label: "Facebook",  href: "https://facebook.com/devntomsolutions",    icon: <Facebook  size={17} /> },
  { label: "LinkedIn",  href: "https://linkedin.com/company/devntom",     icon: <Linkedin  size={17} /> },
  {
    label: "X",
    href: "https://x.com/devntom",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/devntom",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "https://reddit.com/u/devntom",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/devntom",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.36 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.751 0z"/>
      </svg>
    ),
  },
];

const services = [
  "Website Development",
  "Digital Marketing",
  "Software Development",
  "App Development",
  "UI/UX Design",
  "AI Automation & Chatbots",
  "Other / Not Sure",
];

const budgets = ["< $500", "$500 – $2k", "$2k – $5k", "$5k – $15k", "$15k+"];

// ─── Form ─────────────────────────────────────────────────────────────────────
type FormState = {
  name: string; email: string; company: string;
  service: string; budget: string; message: string;
};

const INIT: FormState = { name: "", email: "", company: "", service: "", budget: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INIT);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400)); // replace with real API call
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <main className="bg-[#080808] min-h-screen font-sans overflow-hidden">

        {/* ── HERO ────────────────────────────────────────────────────────────── */}
        <section className="relative pt-36 pb-20 px-6 overflow-hidden">
          <AmbientBlob />

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/25 bg-violet-500/10 mb-7"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-bold text-violet-300 tracking-wide">Let&apos;s Talk</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                className="text-[clamp(3.2rem,8vw,7rem)] font-black text-white leading-[0.9] tracking-[-0.03em] max-w-3xl"
              >
                Start Your<br />
                <span className="text-violet-400">Next Project</span><br />
                With Us
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.5 }}
                className="text-[0.95rem] text-white/40 leading-relaxed max-w-sm lg:text-right lg:pb-4"
              >
                Whether you have a clear brief or just an idea, drop us a message. We&apos;ll respond within 24 hours and set up a free discovery call.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Thin divider */}
        <div className="w-full border-t border-white/[0.06]" />

        {/* ── CHANNELS ────────────────────────────────────────────────────────── */}
        <section className="py-14 px-6">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-violet-500/30 hover:bg-white/[0.04] transition-all"
              >
                <c.icon size={20} className={`mb-4 text-white/30 transition-colors ${c.color}`} />
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-1">{c.label}</p>
                <p className="text-sm font-bold text-white/80 leading-snug">{c.value}</p>
                <p className="text-xs text-white/30 mt-1">{c.sub}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── MAIN: FORM + SIDEBAR ────────────────────────────────────────────── */}
        <section className="py-10 px-6 pb-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-10">

            {/* ── FORM ──────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.65 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  // Success state
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[500px] flex flex-col items-center justify-center text-center gap-6 p-12 rounded-3xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <div className="w-16 h-16 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-violet-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                      <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                        Thanks for reaching out. We&apos;ll be back in touch within 24 hours. Check your inbox!
                      </p>
                    </div>
                    <button
                      onClick={() => { setForm(INIT); setSubmitted(false); }}
                      className="px-6 py-2.5 rounded-full border border-white/15 text-sm font-bold text-white/60 hover:text-white hover:border-white/40 transition-all"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 p-8 lg:p-10 rounded-3xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <h2 className="text-xl font-black text-white mb-6">Tell Us About Your Project</h2>

                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">Full Name *</label>
                        <input
                          required value={form.name} onChange={set("name")}
                          placeholder="John Smith"
                          className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/60 transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">Email Address *</label>
                        <input
                          required type="email" value={form.email} onChange={set("email")}
                          placeholder="john@company.com"
                          className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/60 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">Company / Brand Name</label>
                      <input
                        value={form.company} onChange={set("company")}
                        placeholder="Acme Inc. (optional)"
                        className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/60 transition-colors"
                      />
                    </div>

                    {/* Service picker */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">Service You Need *</label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((s) => (
                          <button
                            key={s} type="button"
                            onClick={() => setForm((p) => ({ ...p, service: s }))}
                            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                              form.service === s
                                ? "bg-violet-600 border-violet-600 text-white"
                                : "bg-white/[0.03] border-white/10 text-white/40 hover:border-violet-500/40 hover:text-white/70"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget picker */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">Estimated Budget</label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map((b) => (
                          <button
                            key={b} type="button"
                            onClick={() => setForm((p) => ({ ...p, budget: b }))}
                            className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                              form.budget === b
                                ? "bg-violet-600 border-violet-600 text-white"
                                : "bg-white/[0.03] border-white/10 text-white/40 hover:border-violet-500/40 hover:text-white/70"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">Message *</label>
                      <textarea
                        required rows={5} value={form.message} onChange={set("message")}
                        placeholder="Tell us about your project, goals, timeline, or anything else that's helpful..."
                        className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm tracking-wide transition-all active:scale-[0.98] shadow-lg shadow-violet-900/40"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        <>Send Message <Send size={15} /></>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-white/20">
                      We&apos;ll reply within 24 hours · No spam, ever
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── SIDEBAR ───────────────────────────────────────────────────── */}
            <div className="flex flex-col gap-5">

              {/* Quick contact card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.55 }}
                className="p-7 rounded-3xl border border-white/[0.07] bg-white/[0.02] space-y-5"
              >
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Prefer Direct Contact?</h3>

                <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#075e54]/20 border border-[#25d366]/20 hover:border-[#25d366]/50 hover:bg-[#075e54]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25d366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#25d366]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#25d366]">WhatsApp</p>
                    <p className="text-sm font-semibold text-white/70">+92 325 603 6838</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-[#25d366] group-hover:translate-x-1 transition-all" />
                </a>

                <a href="mailto:devntomsolutions@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 hover:border-violet-500/50 hover:bg-violet-500/15 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-violet-400">Email</p>
                    <p className="text-[12px] font-semibold text-white/70 break-all">devntomsolutions@gmail.com</p>
                  </div>
                  <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </a>
              </motion.div>

              {/* Socials card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.38, duration: 0.55 }}
                className="p-7 rounded-3xl border border-white/[0.07] bg-white/[0.02] space-y-4"
              >
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Follow Us</h3>
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 text-white/35 hover:text-white hover:border-violet-500/50 hover:bg-violet-500/10 transition-all text-xs font-semibold"
                    >
                      <span className="flex-shrink-0">{s.icon}</span>
                      {s.label}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* FAQ teaser */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.46, duration: 0.55 }}
                className="p-7 rounded-3xl border border-white/[0.07] bg-white/[0.02] space-y-4"
              >
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Have Questions?</h3>
                <p className="text-xs text-white/35 leading-relaxed">
                  Check our FAQ for quick answers, or browse our services to understand what we offer and how we work.
                </p>
                <div className="flex flex-col gap-2">
                  <Link href="/#faq"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-white/50 hover:text-white hover:border-violet-500/40 transition-all group">
                    View FAQ <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/services"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold text-white/50 hover:text-white hover:border-violet-500/40 transition-all group">
                    Our Services <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.52, duration: 0.55 }}
                className="p-7 rounded-3xl border border-white/[0.07] bg-white/[0.02] flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-violet-400" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-white/25 mb-0.5">Based In</p>
                  <p className="text-sm font-bold text-white/70">Lahore, Pakistan</p>
                  <p className="text-xs text-white/30">Available worldwide · Remote-first</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}