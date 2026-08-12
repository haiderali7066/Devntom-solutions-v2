import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Globe,
  Zap,
  Search,
  ShieldCheck,
  Cpu,
  Code2,
  Sparkles,
  Bot,
  Layout,
  BarChart3,
  Star,
  MapPin,
  ChevronDown,
  Building2,
  Layers,
  ChevronRight,
} from 'lucide-react';

const SITE_URL = 'https://devntomsolutions.com';

// ─── 1. SEO / AEO / GEO METADATA ─────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'DEVNTOM Solutions | Custom Software, SaaS & AI Automation Company',
  description:
    'DEVNTOM Solutions builds custom software, SaaS platforms, AI automation, and digital products for businesses in Pakistan, Saudi Arabia, and the USA. 150+ projects delivered, 80+ clients worldwide.',
  keywords: [
    'custom software development company',
    'SaaS development company',
    'AI automation agency',
    'web development company Pakistan',
    'software house Lahore',
    'web development company Saudi Arabia',
    'mobile app development company',
    'UI UX design agency',
    'CRM ERP POS development',
    'digital marketing agency',
    'e-commerce development company',
    'custom software development company USA',
    'AI chatbots agency Lahore',
    'Enterprise software engineering',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'DEVNTOM Solutions | Where Systems Become Strategy',
    description:
      'Custom software, SaaS platforms, AI automation, and digital products for businesses across Pakistan, Saudi Arabia, and the USA.',
    url: SITE_URL,
    siteName: 'DEVNTOM Solutions',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80', width: 1200, height: 630, alt: 'DEVNTOM Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEVNTOM Solutions | Where Systems Become Strategy',
    description: 'Custom software, SaaS platforms, AI automation, and digital products for businesses worldwide.',
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: { index: true, follow: true },
  other: {
    'geo.region': 'PK, SA, US',
    'geo.placename': 'Lahore, Pakistan; Riyadh, Saudi Arabia; United States',
    'geo.position': '31.5204;74.3587',
    'ICBM': '31.5204, 74.3587',
  },
};

// ─── 2. DATA CONSTANTS ────────────────────────────────────────────────────────

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Global Clients' },
  { value: '15+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

const services = [
  {
    title: 'AI & Data Innovation',
    category: '01 / AI Automation',
    desc: 'Intelligent AI models, workflow automation pipelines, and custom chatbots designed to reduce operational cost.',
    href: '/services/ai-automation-chatbots',
    gradient: 'from-blue-600/20 to-sky-500/20',
    iconUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'Engineering & Software',
    category: '02 / Engineering',
    desc: 'Bespoke web applications, SaaS products, and custom CRM, ERP & POS platforms engineered for ultimate scale.',
    href: '/services/software-development',
    gradient: 'from-indigo-600/20 to-blue-500/20',
    iconUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'Web & Mobile Apps',
    category: '03 / Web & Mobile',
    desc: 'Blazing fast Next.js websites and high-performance React Native & Flutter mobile applications.',
    href: '/services/website-development',
    gradient: 'from-sky-600/20 to-cyan-500/20',
    iconUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'Digital Strategy & SEO',
    category: '04 / Marketing',
    desc: 'Targeted digital marketing campaigns, performance SEO, and conversion rate optimization that drives ROI.',
    href: '/services/digital-marketing',
    gradient: 'from-blue-700/20 to-indigo-500/20',
    iconUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'UI/UX & Product Design',
    category: '05 / Branding',
    desc: 'User-centered interfaces, full design systems, wireframing, and modern brand identities crafted with precision.',
    href: '/services/ui-ux-design',
    gradient: 'from-cyan-600/20 to-blue-500/20',
    iconUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80',
  },
  {
    title: 'E-Commerce Solutions',
    category: '06 / E-Commerce',
    desc: 'Scalable storefronts, custom checkout funnels, payment gateway integrations, and automated stock systems.',
    href: '/services/website-development',
    gradient: 'from-blue-600/20 to-indigo-600/20',
    iconUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=300&q=80',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We dissect your business goals, target audience, and architecture specs before writing code.' },
  { num: '02', title: 'Architecture & Design', desc: 'Crafting responsive UI/UX prototypes and designing robust database schemas.' },
  { num: '03', title: 'Agile Development', desc: 'Sprint-based engineering utilizing Next.js, React, Node, and Python with continuous deployment.' },
  { num: '04', title: 'QA & Security Audits', desc: 'Rigorous penetration testing, cross-platform validation, and performance tuning.' },
  { num: '05', title: 'Deployment & Launch', desc: 'Zero-downtime deployment setup across Vercel, AWS, or enterprise cloud infrastructures.' },
  { num: '06', title: 'Support & Scaling', desc: 'Continuous monitoring, AI model optimization, and maintenance retainers.' },
];

const faqs = [
  {
    q: 'What software development services does DEVNTOM Solutions offer?',
    a: 'DEVNTOM Solutions specializes in full-stack web development (Next.js, React), custom SaaS platforms, AI automation & chatbots, mobile app development (iOS & Android), custom CRM/ERP/POS systems, UI/UX product design, and growth SEO.',
  },
  {
    q: 'Which locations does DEVNTOM Solutions operate in?',
    a: 'We serve clients globally with key hubs in Lahore (Pakistan), Riyadh (Saudi Arabia), and the United States. We specialize in cross-border software solutions and regional compliance.',
  },
  {
    q: 'How does DEVNTOM incorporate AI automation into business workflows?',
    a: 'We build custom AI pipelines using OpenAI API, LangChain, Python, and automated webhooks to streamline customer service, lead generation, document processing, and internal operational workflows.',
  },
  {
    q: 'What is the average timeline for a project launch?',
    a: 'Websites and MVPs typically take 2 to 4 weeks. Enterprise SaaS systems, custom CRM platforms, and complex mobile apps range from 6 to 12 weeks depending on the technical scope.',
  },
];

// ─── 3. SCHEMA.ORG JSON-LD (AEO & GEO ENHANCED) ────────────────────────────────

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'DEVNTOM Solutions',
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      email: 'info@devntomsolutions@gmail.com',
      telephone: ['+923256036838', '+966583408034', '+11231231234'],
      sameAs: [
        'https://www.instagram.com/devntom.solutions',
        'https://www.facebook.com/share/18ANCC7uwH/',
        'https://www.linkedin.com/in/devntom-solutions-6b15293b5',
        'https://x.com/DevntomS18433',
      ],
      address: [
        {
          '@type': 'PostalAddress',
          addressLocality: 'Lahore',
          addressCountry: 'PK',
        },
        {
          '@type': 'PostalAddress',
          addressLocality: 'Riyadh',
          addressCountry: 'SA',
        },
        {
          '@type': 'PostalAddress',
          addressCountry: 'US',
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'DEVNTOM Solutions',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
};

// ─── 4. REUSABLE UI COMPONENTS ───────────────────────────────────────────────

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold tracking-wide ${
        dark
          ? 'border-blue-400/30 bg-blue-500/10 text-sky-300'
          : 'border-blue-100 bg-blue-50/80 text-blue-700'
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
      {children}
    </div>
  );
}

// ─── 5. MAIN PAGE COMPONENT ──────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      {/* AEO Schema Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#05070F] text-slate-100 font-sans antialiased selection:bg-blue-600 selection:text-white">
        
        

        {/* HERO SECTION */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#05070F]">
          {/* Background Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/20 rounded-full blur-[140px]" />
            <div className="absolute top-10 -left-20 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 text-center space-y-8">
            <Pill dark>Where Systems Become Strategy</Pill>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white max-w-5xl mx-auto">
              Engineering Custom <br />
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Software, SaaS & AI Automation
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-sm sm:text-base font-medium text-slate-400 leading-relaxed">
              DEVNTOM Solutions architects high-performance web platforms, custom SaaS, intelligent AI agent workflows, and mobile apps for scaling companies across <strong className="text-white">Pakistan, Saudi Arabia, and the USA</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-xl shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Schedule Free Tech Audit <ArrowRight size={16} />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 hover:border-white/40 bg-white/5 text-white font-bold text-sm transition-all hover:-translate-y-0.5"
              >
                Explore Selected Projects
              </Link>
            </div>

            <div className="pt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> 150+ Systems Shipped</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> Regional Compliance (PK, SA, US)</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400" /> 24/7 Dedicated Support</span>
            </div>
          </div>
        </section>

       

        {/* STATS SECTION */}
        <section className="py-16 bg-[#05070F] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center space-y-1">
                <div className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE SERVICES SECTION (Inspired by Image 1: serives.jpg) */}
        <section className="py-24 bg-[#f4f7fc] text-slate-900">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <Pill>Our Practice Areas</Pill>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mt-3 text-slate-900">
                  Services We Deliver
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 border border-blue-200 px-5 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all self-start md:self-auto"
              >
                View all services <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Service Cards Layout matching serives.jpg aesthetic */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between min-h-[340px] overflow-hidden"
                >
                  {/* Subtle Gradient & Abstract Graphic Mock */}
                  <div className={`absolute top-0 right-0 w-44 h-44 rounded-full bg-gradient-to-br ${item.gradient} blur-2xl group-hover:scale-150 transition-transform`} />

                  <div className="relative z-10 space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">{item.category}</span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="relative z-10 pt-6 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Explore Solution</span>
                    <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WEBINAR / HIGHLIGHT BANNER SECTION (Inspired by Image 2: banner.jpg) */}
        <section className="py-12 bg-[#05070F] px-5 sm:px-8">
          <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 grid md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500 text-white font-extrabold text-[10px] uppercase tracking-wider">
                  LIVE WORKSHOP / WEBINAR
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  FinOps & AI Workflows: Controlling Enterprise Cloud Costs for Scale
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
                  Learn how DEVNTOM engineers build cost-efficient AI automation agent stacks on AWS & Vercel without overspending on token API usage.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-blue-900 font-extrabold text-xs transition-all hover:bg-slate-100 hover:-translate-y-0.5 shadow-lg"
                  >
                    Register now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Speaker Avatars Representation */}
              <div className="md:col-span-4 flex items-center justify-end gap-4 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
                <div className="text-right">
                  <div className="text-sm font-bold text-white">DEVNTOM Tech Team</div>
                  <div className="text-[11px] text-blue-200">AI & Cloud Architects</div>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-blue-900 flex items-center justify-center font-black text-white text-xl">
                  AI
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* TRUST MARQUEE */}
        <section className="bg-[#070c1c] border-y border-white/10 py-6 overflow-hidden">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Trusted by companies worldwide
          </p>
          <div className="flex justify-around items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all max-w-6xl mx-auto px-5 flex-wrap">
            {['Nexora Corp', 'ShopSprint', 'HealthBridge', 'Skills Aura', 'Hivenox AI', 'Saudi Retail Co'].map((brand) => (
              <span key={brand} className="text-lg font-black tracking-wider text-slate-300">{brand}</span>
            ))}
          </div>
        </section>

        {/* HOW WE WORK / PROCESS */}
        <section className="py-24 bg-white text-slate-900">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Pill>Our Engineering Method</Pill>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
                How We Architect Your Product
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div key={step.num} className="bg-[#f4f7fc] p-8 rounded-3xl border border-slate-200 space-y-3">
                  <span className="text-4xl font-black text-blue-600/30">{step.num}</span>
                  <h3 className="text-lg font-extrabold text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOBAL GEO LOCATIONS SECTION */}
        <section className="py-24 bg-[#05070F] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <Pill dark>Global Delivery, Regional Presence</Pill>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Serving Clients across PK, SA & US
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Pakistan */}
              <div className="bg-[#070c1c] p-8 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-sky-400" />
                  <h3 className="text-xl font-bold text-white">Lahore, Pakistan</h3>
                </div>
                <p className="text-xs text-slate-400">Main Engineering Hub & Delivery Center</p>
                <div className="pt-2 text-xs font-mono text-sky-300">+92 325 6036838</div>
              </div>

              {/* Saudi Arabia */}
              <div className="bg-[#070c1c] p-8 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-sky-400" />
                  <h3 className="text-xl font-bold text-white">Riyadh, Saudi Arabia</h3>
                </div>
                <p className="text-xs text-slate-400">MENA Enterprise & Client Success Hub</p>
                <div className="pt-2 text-xs font-mono text-sky-300">+966 583 408034</div>
              </div>

              {/* USA */}
              <div className="bg-[#070c1c] p-8 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-sky-400" />
                  <h3 className="text-xl font-bold text-white">United States</h3>
                </div>
                <p className="text-xs text-slate-400">North America Business Strategy</p>
                <div className="pt-2 text-xs font-mono text-sky-300">+1 123 123 1234</div>
              </div>
            </div>
          </div>
        </section>

        {/* AEO FAQ SECTION */}
        <section className="py-24 bg-white text-slate-900">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-12">
            <div className="text-center space-y-3">
              <Pill>AEO & Search Knowledge Base</Pill>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-[#f4f7fc] p-6 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex justify-between items-center font-extrabold text-sm sm:text-base cursor-pointer text-slate-900">
                    {faq.q}
                    <ChevronDown size={18} className="group-open:rotate-180 transition-transform text-blue-600" />
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SPLIT CONTACT FORM SECTION (Inspired by Image 3: contact.jpg) */}
        <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Social Proof & Heading */}
              <div className="lg:col-span-5 space-y-8">
                <h2 className="text-4xl sm:text-6xl font-black leading-tight">
                  Power your next AI transformation.
                </h2>

                {/* Clutch rating */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black text-white text-lg">
                    C
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-yellow-300">
                      {'★'.repeat(5)}
                      <span className="text-white text-xs font-bold ml-2">4.9 / 5.0</span>
                    </div>
                    <p className="text-xs text-blue-100">Verified Client Reviews on Clutch</p>
                  </div>
                </div>

                {/* Quote Box */}
                <blockquote className="bg-blue-700/60 border border-white/20 p-6 rounded-3xl text-xs sm:text-sm leading-relaxed text-blue-50">
                  &ldquo;DEVNTOM completely transformed the way we manage our customer relationships. Their customized CRM & SaaS stack streamlined our operations overnight.&rdquo;
                  <div className="mt-4 font-bold text-white">— Nick Drogo, Global Director IT</div>
                </blockquote>
              </div>

              {/* Right Column: Embedded Form (contact.jpg styling) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 text-slate-900 shadow-2xl">
                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">How can we help you?</label>
                    <select className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600">
                      <option>Custom Software Development</option>
                      <option>AI Automation & Chatbots</option>
                      <option>SaaS Platform Engineering</option>
                      <option>Mobile App Development</option>
                      <option>Digital Marketing & SEO</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="text" placeholder="First Name *" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600" required />
                    </div>
                    <div>
                      <input type="text" placeholder="Last Name *" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input type="email" placeholder="Work Email *" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600" required />
                    </div>
                    <div>
                      <input type="text" placeholder="Job Title" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600" />
                    </div>
                  </div>

                  <div>
                    <input type="tel" placeholder="Phone Number" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600" />
                  </div>

                  <div>
                    <textarea rows={3} placeholder="Describe your project" className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600" />
                  </div>

                  <div className="space-y-2 text-[11px] text-slate-500">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      I agree to receive communications regarding project discovery.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs tracking-wider uppercase transition-all shadow-md"
                  >
                    Book Free Consultation
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* SEO CONTENT FOOTER PREVIEW */}
        <section className="py-16 bg-[#05070F] text-slate-400 text-xs border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-4">
            <h3 className="text-white font-bold text-sm">DEVNTOM Solutions — Custom Software House & AI Agency</h3>
            <p className="leading-relaxed">
              DEVNTOM Solutions is a premiere software house specializing in Next.js web platforms, SaaS engineering, enterprise ERP/CRM development, and AI workflow automation. Serving startups, SMEs, and enterprise brands in Pakistan, Saudi Arabia, and the United States.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/services/website-development" className="text-sky-400 hover:underline">Web Development Pakistan</Link> • 
              <Link href="/services/software-development" className="text-sky-400 hover:underline">Custom SaaS Solutions</Link> • 
              <Link href="/services/ai-automation-chatbots" className="text-sky-400 hover:underline">AI Automation Agency Lahore</Link> • 
              <Link href="/services/digital-marketing" className="text-sky-400 hover:underline">SEO Company Saudi Arabia</Link>
            </div>
          </div>
        </section>

       

      </div>
    </>
  );
}