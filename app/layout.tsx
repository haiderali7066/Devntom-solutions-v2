import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SchemaMarkup from '@/components/schema'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// ─── Fonts ────────────────────────────────────────────────────────────────────

const geist     = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: dark)',  color: '#080810' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark',
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // Base URL — all relative image paths resolve from here
  metadataBase: new URL('https://devntom.com'),

  // Title — appears in browser tab and Google results
  title: {
    default:  'DEVNTOM Solutions | Web Development, AI Automation & Digital Marketing',
    template: '%s | DEVNTOM Solutions',
  },

  // Description — shown in Google search snippets
  description:
    'DEVNTOM Solutions is a global software & digital agency. We build scalable websites, AI automation systems, custom software (CRM/ERP/POS), mobile apps, and digital marketing strategies for businesses in 15+ countries.',

  // Keywords
  keywords: [
    'web development Pakistan',
    'software house Lahore',
    'AI automation chatbots',
    'digital marketing agency Pakistan',
    'custom CRM ERP software',
    'app development Pakistan',
    'UI UX design agency',
    'Next.js development',
    'SEO agency Pakistan',
    'software company Saudi Arabia',
    'devntom solutions',
    'e-commerce development',
    'SaaS development',
    'mobile app development',
  ],

  // Author / creator
  authors:   [{ name: 'DEVNTOM Solutions', url: 'https://devntom.com' }],
  creator:   'DEVNTOM Solutions',
  publisher: 'DEVNTOM Solutions',

  // Prevent phone / email auto-detection on iOS
  formatDetection: { email: false, address: false, telephone: false },

  // Canonical URL
  alternates: { canonical: 'https://devntom.com' },

  // ── Icons ──────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
    ],
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },

  // ── Web manifest (PWA) ─────────────────────────────────────────────────────
  manifest: '/site.webmanifest',

  // ── Open Graph (Facebook, LinkedIn, WhatsApp previews) ────────────────────
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://devntom.com',
    siteName:    'DEVNTOM Solutions',
    title:       'DEVNTOM Solutions | Where Systems Become Strategy',
    description: 'Global software & digital agency — web development, AI automation, custom software, app development, and digital marketing for businesses worldwide.',
    images: [
      {
        url:    '/og-image.png',   // Place a 1200×630 image in /public/
        width:  1200,
        height: 630,
        alt:    'DEVNTOM Solutions — Where Systems Become Strategy',
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    site:        '@DevntomS18433',
    creator:     '@DevntomS18433',
    title:       'DEVNTOM Solutions | Web Development & AI Automation',
    description: 'Global software agency — web development, AI automation, custom software & digital marketing.',
    images:      ['/og-image.png'],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  // ── Category ──────────────────────────────────────────────────────────────
  category: 'technology',
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <head>
        <SchemaMarkup />

        {/* Geo tags for local SEO */}
        <meta name="geo.region"    content="PK" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="language"      content="English" />

        {/* Google Fonts — Poppins, Lato, Roboto */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}