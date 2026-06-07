import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Award, Users, Globe, CheckCircle, Zap, TrendingUp, Lightbulb, Handshake } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import CTABanner from '../components/home/CTABanner';

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.' },
  { icon: Shield, title: 'Integrity', desc: 'Transparent, ethical practices form the foundation of every client relationship.' },
  { icon: Heart, title: 'Excellence', desc: 'We pursue the highest standards in everything we deliver, exceeding expectations.' },
  { icon: Handshake, title: 'Partnership', desc: 'We build long-term relationships, treating our clients\' success as our own.' },
];

const timeline = [
  { year: '2014', title: 'Founded', desc: 'Tech Elite IT Solutions launched with a team of 5 passionate engineers.' },
  { year: '2016', title: 'Cloud Expansion', desc: 'Became an AWS Advanced Consulting Partner, serving 50+ clients.' },
  { year: '2018', title: 'AI Division', desc: 'Launched our AI & Automation practice, pioneering enterprise AI solutions.' },
  { year: '2020', title: 'Global Reach', desc: 'Expanded operations to 15 countries with 100+ team members.' },
  { year: '2022', title: 'Cybersecurity Hub', desc: 'Established dedicated SOC center, achieving ISO 27001 certification.' },
  { year: '2024', title: 'Industry Leader', desc: '500+ clients, 200+ team members, recognized as a top IT solutions provider.' },
];

const team = [
  { name: 'Alex Thompson', role: 'CEO & Founder', speciality: 'Enterprise Architecture' },
  { name: 'Priya Sharma', role: 'CTO', speciality: 'Cloud & AI Strategy' },
  { name: 'David Kim', role: 'VP of Engineering', speciality: 'Software Development' },
  { name: 'Lisa Wang', role: 'Head of Security', speciality: 'Cybersecurity' },
  { name: 'Marcus Johnson', role: 'VP of Sales', speciality: 'Business Development' },
  { name: 'Sarah Mitchell', role: 'Head of Training', speciality: 'Learning & Development' },
];

const certs = ['AWS Advanced Partner', 'Microsoft Gold Partner', 'ISO 27001', 'ISO 9001', 'CMMI Level 5', 'Google Cloud Partner'];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Building the Future of{' '}<span className="gradient-text">Enterprise Technology</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Since 2014, Tech Elite has been transforming enterprises through innovative technology solutions, growing from a small startup to a global leader in IT consulting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations of all sizes with world-class technology solutions that drive digital transformation, enhance security, and accelerate growth — making cutting-edge technology accessible and actionable for every enterprise.
              </p>
            </GlassCard>
            <GlassCard hover={false}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-purple-400 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the world's most trusted technology partner, recognized for innovation, excellence, and measurable impact. We envision a future where every business can harness the full potential of technology to achieve extraordinary results.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Values" title="What Drives Us" description="Core principles that guide every decision, every project, and every client relationship." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((val, i) => (
              <GlassCard key={val.title} delay={i * 0.05}>
                <val.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading badge="Our Journey" title="A Decade of Growth" />
          <div className="max-w-3xl mx-auto space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold glow-blue">
                    {item.year.slice(2)}
                  </div>
                  {i < timeline.length - 1 && <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />}
                </div>
                <div className="pb-8">
                  <span className="text-xs text-primary font-medium">{item.year}</span>
                  <h3 className="text-lg font-heading font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Leadership" title="Meet Our Team" description="Industry veterans leading the charge in technology innovation." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <GlassCard key={member.name} delay={i * 0.05}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-heading font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.speciality}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Certifications" title="Recognized Excellence" />
          <div className="flex flex-wrap justify-center gap-4">
            {certs.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}