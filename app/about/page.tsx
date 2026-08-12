import { Metadata } from "next";
import Link from "next/link";
import { 
  Globe, 
  Target, 
  Rocket, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Clock,
  Layers,
  MapPin
} from "lucide-react";

// ─── 1. SEO, AEO & GEO METADATA ─────────────────────────────────────────────

export const metadata: Metadata = {
  title: "About Us | Global Software & Digital Solutions | DEVNTOM Solutions",
  description:
    "DEVNTOM Solutions is a modern technology company engineering scalable software, automation systems, and digital platforms. Operating globally from Pakistan, Saudi Arabia, and the US.",
  keywords: [
    "DEVNTOM Solutions",
    "software company Pakistan",
    "digital agency Saudi Arabia",
    "tech solutions US",
    "custom software engineering",
    "AI automation company",
    "digital transformation agency"
  ].join(", "),
  alternates: {
    canonical: "https://devntomsolutions.com/about",
  },
  openGraph: {
    title: "About DEVNTOM Solutions | Architecting the Future of Business",
    description: "We don't just build websites — we engineer digital systems that become the strategic backbone of your business.",
    url: "https://devntomsolutions.com/about",
    siteName: "DEVNTOM Solutions",
    images: [
      {
        url: "https://devntomsolutions.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "DEVNTOM Solutions Team and Offices",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DEVNTOM Solutions",
    description: "Where Systems Become Strategy.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "PK, SA, US",
    "geo.placename": "Lahore, Riyadh",
  },
};

// ─── 2. DATA CONSTANTS ──────────────────────────────────────────────────────

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "80+", label: "Clients Worldwide" },
  { value: "15+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

const values = [
  { icon: ShieldCheck, title: "Excellence Over Everything", desc: "We hold ourselves to the highest standard in code quality, design, communication, and delivery. Good enough is never good enough." },
  { icon: TrendingUp, title: "Client Success is Our Success", desc: "We measure our performance by the outcomes our clients achieve. Their growth is our growth." },
  { icon: CheckCircle2, title: "Transparency & Trust", desc: "We communicate openly, set realistic expectations, and deliver on our promises — no surprises, no shortcuts." },
  { icon: Rocket, title: "Innovation by Default", desc: "We stay at the cutting edge of technology so our clients always get modern, future-proof solutions." },
  { icon: Layers, title: "Systems Thinking", desc: "We see beyond individual features and design interconnected systems that scale with your business over time." },
  { icon: Clock, title: "Speed with Substance", desc: "We move fast without sacrificing quality — because in business, timing and excellence both matter." },
];

const process = [
  { step: "01", title: "Discovery & Strategy", desc: "We deeply understand your business goals and technical requirements before a single line of code is written." },
  { step: "02", title: "Architecture & Design", desc: "We plan the system structure and craft pixel-perfect UI/UX prototypes — visual excellence meets technical soundness." },
  { step: "03", title: "Development & Build", desc: "Our engineers build using modern, scalable technologies with clean code standards and full transparency throughout." },
  { step: "04", title: "Quality Assurance", desc: "Every deliverable goes through rigorous functional, performance, security, and cross-platform testing." },
  { step: "05", title: "Launch & Deployment", desc: "We handle the full deployment pipeline — staging to production — ensuring a smooth, zero-downtime launch." },
  { step: "06", title: "Support & Growth", desc: "We monitor, maintain, and continuously improve your system post-launch — because great products are never finished." },
];

// ─── 3. GOOGLE STRUCTURED DATA (JSON-LD) ────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://devntomsolutions.com/#organization",
      "name": "DEVNTOM Solutions",
      "url": "https://devntomsolutions.com",
      "logo": "https://devntomsolutions.com/logo.png",
      "slogan": "Where Systems Become Strategy",
      "description": "DEVNTOM Solutions is a modern technology company focused on building scalable software, automation systems, and digital platforms.",
      "telephone": ["+92 325 6036838", "+966 583 408034", "+1 123 123 1234"],
      "email": "info@devntomsolutions@gmail.com",
      "sameAs": [
        "https://www.linkedin.com/in/devntom-solutions-6b15293b5",
        "https://www.facebook.com/share/18ANCC7uwH/",
        "https://www.instagram.com/devntom.solutions",
        "https://x.com/DevntomS18433"
      ],
      "location": [
        { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "PK" } },
        { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "SA" } },
        { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "US" } }
      ]
    },
    {
      "@type": "AboutPage",
      "@id": "https://devntomsolutions.com/about/#webpage",
      "url": "https://devntomsolutions.com/about",
      "name": "About DEVNTOM Solutions",
      "isPartOf": { "@id": "https://devntomsolutions.com/#website" }
    }
  ]
};

// ─── 4. REUSABLE SERVER COMPONENTS ──────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full border ${dark ? "border-blue-500/30 bg-blue-500/10" : "bg-white border-slate-200 shadow-sm"}`}>
      <div className={`w-2 h-2 rounded-full ${dark ? "bg-blue-400 animate-pulse" : "bg-blue-600"}`} />
      <span className={`text-xs font-black uppercase tracking-widest ${dark ? "text-blue-300" : "text-slate-600"}`}>{children}</span>
    </div>
  );
}

// ─── 5. MAIN PAGE COMPONENT ─────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Pure CSS SSR Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}} />

      <main className="overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white bg-slate-50">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex flex-col justify-center bg-[#05070F] overflow-hidden pt-24 pb-20 rounded-b-[3rem] sm:rounded-b-[5rem] shadow-2xl z-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <Pill dark>Company Profile</Pill>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white animate-fade-in-up delay-100 mb-6">
              Where Systems<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                Become Strategy.
              </span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-medium mb-12">
              We don&apos;t just build websites or write code — we engineer digital systems that become the strategic backbone of your business. Architecting the future of global business from Pakistan, Saudi Arabia, and the United States.
            </p>
            
            {/* STATS STRIP - Rounded UI */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto animate-scale-in delay-300">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center hover:bg-white/10 hover:border-blue-500/50 transition-colors duration-300">
                  <span className="text-3xl sm:text-4xl font-black text-white mb-1">{stat.value}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-24 px-6 relative z-0 -mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
              <div className="bg-white rounded-[2.5rem] p-10 sm:p-14 border border-slate-200 shadow-xl shadow-slate-200/40 hover:border-blue-300 transition-colors animate-fade-in-up">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 text-blue-600">
                  <Target size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  To empower businesses worldwide with high-quality, scalable, and intelligent digital solutions — turning complex challenges into competitive advantages through technology and design.
                </p>
              </div>
              <div className="bg-blue-600 rounded-[2.5rem] p-10 sm:p-14 shadow-xl shadow-blue-900/20 text-white hover:bg-blue-700 transition-colors animate-fade-in-up delay-100">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <Globe size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-4">Our Vision</h2>
                <p className="text-blue-50 leading-relaxed font-medium">
                  To be the technology partner of choice for forward-thinking businesses globally — building the systems and platforms that define the next era of digital business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR VALUES */}
        <section className="py-24 px-6 bg-white rounded-t-[4rem] sm:rounded-t-[6rem] border-t border-slate-200 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-5 animate-fade-in-up">
              <Pill>Our Core Principles</Pill>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight">
                The Values That Drive Us
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((val, i) => (
                <div key={i} className="group bg-slate-50 border border-slate-100 rounded-[2rem] p-8 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-500 animate-fade-in-up">
                  <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-blue-600 transition-all duration-500">
                    <val.icon size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK (PROCESS) */}
        <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-5 animate-fade-in-up">
              <Pill>Delivery Process</Pill>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-black text-slate-900 tracking-tight leading-tight">
                How We Deliver Excellence
              </h2>
              <p className="text-slate-600 font-medium max-w-2xl mx-auto">
                Our proven 6-phase delivery process ensures every project is completed on time, within scope, and to a standard that exceeds expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((p, i) => (
                <div key={i} className="relative bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-xl transition-all duration-300 z-10 animate-fade-in-up">
                  <div className="text-5xl font-black text-slate-100 absolute top-6 right-6 -z-10 select-none">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 mt-4">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL PRESENCE */}
        <section className="py-24 px-6 bg-white rounded-[4rem] sm:rounded-[6rem] border border-slate-200 shadow-xl max-w-[95%] mx-auto my-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-50/50 pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Global Delivery, Local Understanding</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { country: "Pakistan", region: "South Asia HQ", phone: "+92 325 6036838" },
                { country: "Saudi Arabia", region: "Middle East", phone: "+966 583 408034" },
                { country: "United States", region: "North America", phone: "+1 123 123 1234" }
              ].map((loc, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-6 border border-slate-200 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <MapPin size={20} strokeWidth={2.5} />
                  </div>
                  <h4 className="font-black text-slate-900 text-lg">{loc.country}</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{loc.region}</p>
                  <p className="text-sm font-semibold text-blue-600">{loc.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#05070F] rounded-[3rem] p-10 sm:p-16 lg:p-20 overflow-hidden shadow-2xl text-center">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.4),transparent_70%)]" />
              
              <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                <div className="space-y-6 max-w-2xl">
                  <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-black leading-[1.1] tracking-tight text-white">
                    Ready to Build Your<br />Next Digital System?
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                    Partner with DEVNTOM Solutions and let&apos;s architect a scalable, future-proof platform tailored strictly to your business objectives.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-black text-sm tracking-wide uppercase transition-all shadow-lg shadow-blue-900/50 hover:-translate-y-1">
                    Start a Project <ArrowRight size={16} />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white font-black text-sm tracking-wide uppercase transition-all backdrop-blur-md">
                    Explore Services <Cpu size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}