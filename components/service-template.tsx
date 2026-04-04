'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Navigation from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ServicePageProps {
  title: string;
  description: string;
  hero: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  caseStudies: { title: string; description: string; result: string }[];
}

export default function ServiceTemplate({
  title,
  description,
  hero,
  features,
  benefits,
  process,
  caseStudies,
}: ServicePageProps) {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-8">{hero}</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2 group"
          >
            Get Started
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <Check className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-foreground mb-2">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-8 bg-card border border-border rounded-xl h-full">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-foreground text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="p-8 bg-card border border-border rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-foreground">{study.title}</h3>
                <p className="text-muted-foreground mb-6">{study.description}</p>
                <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-sm font-medium text-primary">Result:</p>
                  <p className="text-foreground mt-2">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you transform your business with our expert {title.toLowerCase()} services.
          </p>
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all inline-flex items-center gap-2 group"
          >
            Schedule a Consultation
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
