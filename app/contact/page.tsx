import { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  Code2,
  Cpu,
  BrainCircuit
} from "lucide-react";

// ==========================================
// 1. SEO & METADATA (Server-Side)
// ==========================================
export const metadata: Metadata = {
  title: "Contact Us | DEVNTOM Solutions - Web, App & AI Experts",
  description:
    "Ready to scale your business? Contact DEVNTOM Solutions for expert website development, custom software, mobile apps, and AI automation. Get a free quote today.",
  keywords: [
    "Contact DEVNTOM Solutions",
    "hire web developers",
    "app development agency contact",
    "custom software quote",
    "AI automation consultants",
    "digital marketing services Pakistan",
    "Lahore software company",
  ],
  alternates: {
    canonical: "https://devntomsolutions.com/contact",
  },
  openGraph: {
    title: "Contact DEVNTOM Solutions | Start Your Next Project",
    description: "Get in touch with our experts for custom web apps, mobile solutions, and digital marketing strategies.",
    url: "https://devntomsolutions.com/contact",
    siteName: "DEVNTOM Solutions",
    locale: "en_US",
    type: "website",
  },
};

// ==========================================
// 2. DATA SOURCES
// ==========================================
const channels = [
  {
    icon: Mail,
    label: "Email Us",
    value: "devntomsolutions@gmail.com",
    sub: "We reply within 24 hours",
    href: "mailto:devntomsolutions@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92 325 603 6838",
    sub: "Chat with us directly",
    href: "https://wa.me/923256036838",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+92 325 603 6838",
    sub: "Mon – Sat, 9 AM – 7 PM PKT",
    href: "tel:+923256036838",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    sub: "Available for remote & on-site",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
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
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
  "AI Automation",
  "Other / Not Sure",
];

const budgets = ["< $500", "$500 – $2k", "$2k – $5k", "$5k – $15k", "$15k+"];

// ==========================================
// 3. MAIN STATIC COMPONENT
// ==========================================
export default function ContactPage() {
  // JSON-LD Schema for SEO Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://devntomsolutions.com/contact/#webpage",
        url: "https://devntomsolutions.com/contact",
        name: "Contact DEVNTOM Solutions",
        description: "Get a free quote for website, app, and software development.",
      },
      {
        "@type": "LocalBusiness",
        name: "DEVNTOM Solutions",
        image: "https://devntomsolutions.com/logo.png",
        email: "devntomsolutions@gmail.com",
        telephone: "+923256036838",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        url: "https://devntomsolutions.com",
      }
    ]
  };

  return (
    <main className="bg-[#030712] text-white min-h-screen font-sans overflow-hidden selection:bg-blue-600/30">
      {/* Inject JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Pure CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .stagger-item { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        `
      }} />

      {/* ── HERO SECTION ──────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        {/* CSS-based Ambient Background (Replaces Canvas) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-700/10 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[30%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-500/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 mb-7 shadow-[0_0_20px_rgba(37,99,235,0.15)]">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold text-blue-300 tracking-wide uppercase">Let's Build the Future</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h1 className="animate-fade-in delay-100 text-[clamp(3rem,7vw,6.5rem)] font-black text-white leading-[0.95] tracking-[-0.03em] max-w-4xl">
              Start Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Digital Transformation
              </span>
            </h1>

            <p className="animate-fade-in delay-200 text-base text-white/50 leading-relaxed max-w-md lg:text-right lg:pb-4 font-medium">
              Ready to scale? We provide top-tier <strong className="text-white/80 font-semibold">custom software</strong>, <strong className="text-white/80 font-semibold">mobile apps</strong>, and <strong className="text-white/80 font-semibold">digital marketing</strong> solutions. Drop us a message to get your free technical consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Thin divider */}
      <div className="w-full border-t border-white/[0.04]" />

      {/* ── CHANNELS ────────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ animationDelay: `${200 + i * 100}ms` }}
              className="stagger-item group p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:border-blue-500/40 hover:bg-blue-900/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-900/20"
            >
              <c.icon size={22} className="mb-4 text-white/30 group-hover:text-blue-400 transition-colors duration-300" />
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/30 mb-1">{c.label}</p>
              <p className="text-sm font-bold text-white/90 leading-snug">{c.value}</p>
              <p className="text-xs text-white/40 mt-1">{c.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── MAIN: FORM + SIDEBAR ────────────────────────────────────────────── */}
      <section className="py-10 px-6 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-10">

          {/* ── FORM (Pure Static HTML & CSS) ─────────────────────────────────── */}
          <div className="animate-fade-in delay-300 relative">
            <form
              action="https://formspree.io/f/your_formspree_id" // Replace with your endpoint
              method="POST"
              className="space-y-6 p-8 lg:p-10 rounded-3xl border border-white/[0.05] bg-[#070d1d] shadow-2xl"
            >
              <div className="border-b border-white/5 pb-6 mb-6">
                <h2 className="text-2xl font-black text-white mb-2">Project Requirements</h2>
                <p className="text-sm text-white/40">Fill out the form below. All fields marked with an asterisk (*) are required.</p>
              </div>

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-blue-300/70">Full Name *</label>
                  <input
                    id="name" name="name" required placeholder="John Smith"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-950/20 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-blue-300/70">Email Address *</label>
                  <input
                    id="email" name="email" type="email" required placeholder="john@company.com"
                    className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-950/20 transition-all"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-widest text-blue-300/70">Company / Brand Name</label>
                <input
                  id="company" name="company" placeholder="Acme Inc. (optional)"
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-950/20 transition-all"
                />
              </div>

              {/* Service picker (Zero JS - Pure CSS Peer Logic) */}
              <div className="flex flex-col gap-3 pt-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-blue-300/70">Service You Need *</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s, idx) => (
                    <div key={s} className="relative">
                      <input type="radio" id={`svc-${idx}`} name="service" value={s} className="peer hidden" required={idx === 0} defaultChecked={idx === 0} />
                      <label htmlFor={`svc-${idx}`} className="cursor-pointer select-none inline-block px-4 py-2.5 rounded-full text-xs font-bold border transition-all bg-black/20 border-white/10 text-white/50 hover:border-blue-500/50 hover:text-white peer-checked:bg-blue-600 peer-checked:border-blue-500 peer-checked:text-white peer-checked:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {s}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget picker (Zero JS - Pure CSS Peer Logic) */}
              <div className="flex flex-col gap-3 pt-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-blue-300/70">Estimated Budget</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b, idx) => (
                    <div key={b} className="relative">
                      <input type="radio" id={`bdg-${idx}`} name="budget" value={b} className="peer hidden" defaultChecked={idx === 1} />
                      <label htmlFor={`bdg-${idx}`} className="cursor-pointer select-none inline-block px-4 py-2.5 rounded-full text-xs font-bold border transition-all bg-black/20 border-white/10 text-white/50 hover:border-blue-500/50 hover:text-white peer-checked:bg-blue-600 peer-checked:border-blue-500 peer-checked:text-white peer-checked:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        {b}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 pt-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-blue-300/70">Message Overview *</label>
                <textarea
                  id="message" name="message" required rows={5}
                  placeholder="Tell us about your technical requirements, goals, timeline, or current bottlenecks..."
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500 focus:bg-blue-950/20 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 mt-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-wide transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message <Send size={16} />
              </button>

              <p className="text-center text-[11px] font-medium text-white/30 pt-2">
                Your data is secure. We never spam or share your information.
              </p>
            </form>
          </div>

          {/* ── SIDEBAR (Internal Linking & Quick Info) ───────────────────────── */}
          <div className="flex flex-col gap-5 animate-fade-in delay-300">

            {/* Quick contact card */}
            <div className="p-7 rounded-3xl border border-white/[0.05] bg-[#070d1d] space-y-5 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Direct Lines</h3>

              <a href="https://wa.me/923256036838" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-950/30 border border-blue-900/30 hover:border-blue-500/50 hover:bg-blue-900/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-400">WhatsApp Sales</p>
                  <p className="text-sm font-semibold text-white/80">+92 325 603 6838</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="mailto:devntomsolutions@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-950/30 border border-blue-900/30 hover:border-blue-500/50 hover:bg-blue-900/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-400">General Email</p>
                  <p className="text-[12px] font-semibold text-white/80 break-all">devntomsolutions@gmail.com</p>
                </div>
                <ArrowRight size={14} className="ml-auto text-white/20 group-hover:text-blue-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
            </div>

            {/* Internal Services Linking (SEO Goldmine) */}
            <div className="p-7 rounded-3xl border border-white/[0.05] bg-[#070d1d] space-y-4 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Explore Our Services</h3>
              <p className="text-xs text-white/40 leading-relaxed mb-4">
                Not ready to contact us yet? Browse our specialized departments to see how we drive enterprise growth.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/services/website-development" className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-black/20 text-xs font-bold text-white/60 hover:text-blue-300 hover:border-blue-500/30 hover:bg-blue-950/30 transition-all group">
                  <span className="flex items-center gap-2"><Code2 size={14} className="text-blue-500" /> Website Development</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform opacity-50" />
                </Link>
                <Link href="/services/software-development" className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-black/20 text-xs font-bold text-white/60 hover:text-blue-300 hover:border-blue-500/30 hover:bg-blue-950/30 transition-all group">
                  <span className="flex items-center gap-2"><Cpu size={14} className="text-blue-500" /> Custom Software</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform opacity-50" />
                </Link>
                <Link href="/services/ai-automation" className="flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-black/20 text-xs font-bold text-white/60 hover:text-blue-300 hover:border-blue-500/30 hover:bg-blue-950/30 transition-all group">
                  <span className="flex items-center gap-2"><BrainCircuit size={14} className="text-blue-500" /> AI Automation</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform opacity-50" />
                </Link>
              </div>
            </div>

            {/* Socials card */}
            <div className="p-7 rounded-3xl border border-white/[0.05] bg-[#070d1d] space-y-4 shadow-xl">
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Connect Digitally</h3>
              <div className="flex flex-wrap gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300 text-xs font-bold shadow-sm"
                  >
                    <span className="flex-shrink-0">{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="p-7 rounded-3xl border border-white/[0.05] bg-[#070d1d] flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-blue-950/50 border border-blue-900/50 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-300/60 mb-0.5">Headquarters</p>
                <p className="text-sm font-bold text-white/90">Lahore, Pakistan</p>
                <p className="text-[11px] text-white/40 mt-0.5">Delivering excellence worldwide</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}