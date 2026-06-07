import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield, Cloud, Brain, Globe, Smartphone, Network, Headphones,
  GitBranch, Settings, ArrowRight, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '../components/shared/SectionHeading';
import CTABanner from '../components/home/CTABanner';

const services = [
  {
    icon: Shield, title: 'Cybersecurity', color: 'from-red-500 to-orange-500',
    desc: 'Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving cyber threats.',
    benefits: ['24/7 Security Monitoring', 'Penetration Testing', 'Compliance Management', 'Incident Response', 'Security Audits'],
  },
  {
    icon: Cloud, title: 'Cloud Infrastructure', color: 'from-blue-500 to-cyan-500',
    desc: 'Design, migrate, and optimize cloud environments on AWS, Azure, and GCP for maximum performance and cost efficiency.',
    benefits: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Auto-Scaling', 'Disaster Recovery'],
  },
  {
    icon: Brain, title: 'AI & Automation', color: 'from-purple-500 to-pink-500',
    desc: 'Harness the power of artificial intelligence and intelligent automation to transform business processes and decision-making.',
    benefits: ['Machine Learning Models', 'Process Automation', 'Predictive Analytics', 'NLP Solutions', 'Computer Vision'],
  },
  {
    icon: Globe, title: 'Web Development', color: 'from-cyan-500 to-teal-500',
    desc: 'Full-stack web applications built with modern frameworks, optimized for performance, SEO, and user experience.',
    benefits: ['React & Next.js', 'Progressive Web Apps', 'E-Commerce', 'CMS Development', 'API Integration'],
  },
  {
    icon: Smartphone, title: 'Mobile Apps', color: 'from-green-500 to-emerald-500',
    desc: 'Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.',
    benefits: ['React Native', 'Flutter Development', 'App Store Optimization', 'Push Notifications', 'Offline Support'],
  },
  {
    icon: Network, title: 'Networking', color: 'from-orange-500 to-amber-500',
    desc: 'Enterprise networking solutions including SD-WAN, VPN, and infrastructure design for secure, high-performance connectivity.',
    benefits: ['Network Design', 'SD-WAN Implementation', 'Network Security', 'WiFi Solutions', 'Network Monitoring'],
  },
  {
    icon: Headphones, title: 'Managed IT Support', color: 'from-indigo-500 to-violet-500',
    desc: 'Proactive IT management and support services to keep your infrastructure running smoothly 24/7.',
    benefits: ['Help Desk Support', 'System Monitoring', 'Patch Management', 'Asset Management', 'Vendor Management'],
  },
  {
    icon: GitBranch, title: 'DevOps & CI/CD', color: 'from-pink-500 to-rose-500',
    desc: 'Streamline your development lifecycle with automated pipelines, containerization, and infrastructure as code.',
    benefits: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging', 'Release Management'],
  },
  {
    icon: Settings, title: 'IT Consulting', color: 'from-slate-400 to-zinc-500',
    desc: 'Strategic technology consulting to align IT investments with business objectives and drive digital transformation.',
    benefits: ['Digital Strategy', 'Technology Roadmaps', 'IT Governance', 'Vendor Selection', 'Change Management'],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              End-to-End{' '}<span className="gradient-text">Technology Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategy to implementation, we deliver comprehensive IT services that transform your business and drive competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-6 md:p-8 hover:glow-blue transition-all group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((b) => (
                        <span key={b} className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-muted/50 rounded-full px-3 py-1">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-2 lg:text-right">
                    <Link to="/contact">
                      <Button variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 rounded-full group/btn">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}