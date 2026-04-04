'use client';

import Navigation from '@/components/navigation';
import Hero from '@/components/sections/hero';
import TrustedBy from '@/components/sections/trusted-by';
import Overview from '@/components/sections/overview';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import TechStack from '@/components/sections/tech-stack';
import FeaturedWork from '@/components/sections/featured-work';
import Industries from '@/components/sections/industries';
import Testimonials from '@/components/sections/testimonials';
import Process from '@/components/sections/process';
import BlogSection from '@/components/sections/blog';
import FAQ from '@/components/sections/faq';
import CTA from '@/components/sections/cta';
import Footer from '@/components/footer';

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Overview />
      <Services />
      <WhyUs />
      <TechStack />
      <FeaturedWork />
      <Industries />
      <Testimonials />
      <Process />
      <BlogSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
