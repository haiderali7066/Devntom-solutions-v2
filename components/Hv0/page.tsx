import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function HomePage() {
  return (
    <>
      <Navbar />

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

      <Footer />
    </>
  );
}
