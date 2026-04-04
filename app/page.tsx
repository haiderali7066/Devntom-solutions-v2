import type { Metadata } from 'next';
// import HomeContent from '@/components/Hv1/page';
import HeroSection from "@/components/Hv0/HeroSection";
import TrustedBanner from "@/components/Hv0/TrustedBanner";
import Overview from "@/components/Hv0/Overview";
import ServicesSection from "@/components/Hv0/ServicesSection";
import WhyUs from "@/components/Hv0/WhyUs";
import TechStack from "@/components/Hv0/TechStack";
import FeaturedWork from "@/components/Hv0/FeaturedWork";
import Industries from "@/components/Hv0/Industries";
import Testimonials from "@/components/Hv0/Testimonials";
import Process from "@/components/Hv0/Process";
import Insights from "@/components/Hv0/Insights";
import FAQ from "@/components/Hv0/FAQ";
import CTA from "@/components/Hv0/CTA";


export const metadata: Metadata = {
  title: 'DEVNTOM Solutions | Web Development, Digital Marketing & AI Automation',
  description: 'Transform your business with cutting-edge web development, digital marketing, software solutions, app development, UI/UX design, and AI automation services.',
  keywords: 'web development, digital marketing, software development, app development, UI/UX design, AI automation, custom software, chatbots, SEO',
  authors: [{ name: 'DEVNTOM Solutions' }],
  creator: 'DEVNTOM Solutions',
  publisher: 'DEVNTOM Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://devntom.com'),
  alternates: {
    canonical: 'https://devntom.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devntom.com',
    title: 'DEVNTOM Solutions | Digital Transformation Experts',
    description: 'Professional web development, digital marketing, software solutions, and AI automation for your business growth.',
    siteName: 'DEVNTOM Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEVNTOM Solutions',
    description: 'Transform your business with cutting-edge digital solutions',
  },
};

export default function Home() {
  return (
  <>
  {/* <HomeContent /> */}

  {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trusted By */}
      <TrustedBanner />

      {/* 3. Overview */}
      <Overview />

      {/* 4. Services */}
      <ServicesSection />

      {/* 5. Why Us */}
      <WhyUs />

      {/* 6. Tech Stack */}
      <TechStack />

      {/* 7. Featured Work */}
      <FeaturedWork />

      {/* 8. Industries */}
      <Industries />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Process */}
      <Process />

      {/* 11. Insights / Blog */}
      <Insights />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. CTA / Get In Touch */}
      <CTA />

  </>
  );
}



