import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cloud, Brain, Globe, Smartphone, Network, Headphones, GitBranch, ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import GlassCard from '../shared/GlassCard';

const services = [
  { icon: Shield, title: 'Cybersecurity', desc: 'Advanced threat protection, penetration testing, and compliance management for enterprise security.', color: 'text-red-400' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'AWS, Azure & GCP architecture, migration, and optimization for scalable cloud infrastructure.', color: 'text-blue-400' },
  { icon: Brain, title: 'AI & Automation', desc: 'Machine learning, intelligent automation, and AI-driven analytics to transform your business.', color: 'text-purple-400' },
  { icon: Globe, title: 'Web Development', desc: 'Full-stack web applications with modern frameworks, responsive design, and optimal performance.', color: 'text-cyan-400' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile applications for iOS and Android with seamless UX.', color: 'text-green-400' },
  { icon: Network, title: 'Networking', desc: 'Enterprise networking, SD-WAN, and infrastructure solutions for maximum uptime and security.', color: 'text-orange-400' },
  { icon: Headphones, title: 'IT Consulting', desc: 'Strategic technology consulting, digital roadmaps, and IT governance frameworks.', color: 'text-yellow-400' },
  { icon: GitBranch, title: 'DevOps', desc: 'CI/CD pipelines, infrastructure as code, and containerization for agile deployment.', color: 'text-pink-400' },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Services"
          title="Solutions That Drive Innovation"
          description="From cybersecurity to AI, we deliver end-to-end technology solutions that empower your business to thrive in the digital age."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <GlassCard key={service.title} delay={i * 0.05}>
              <service.icon className={`w-10 h-10 ${service.color} mb-4 group-hover:scale-110 transition-transform`} />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <Link to="/services" className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group/link">
                Learn More
                <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}