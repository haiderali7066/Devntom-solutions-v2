import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SchemaMarkup from '@/components/schema'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0066ff',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: 'DEVNTOM Solutions | Web Development, Digital Marketing & AI Automation',
  description: 'Transform your business with cutting-edge web development, digital marketing, software solutions, app development, UI/UX design, and AI automation services.',
  generator: 'v0.app',
  metadataBase: new URL('https://devntom.com'),
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <SchemaMarkup />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800;900&family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
