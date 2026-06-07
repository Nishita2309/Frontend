import React from 'react';
import { Zap, Lock, Clock, HeadphonesIcon, TrendingUp, Users } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import GlassCard from '../shared/GlassCard';

const reasons = [
  { icon: Lock, title: 'Enterprise Security', desc: 'Military-grade encryption and multi-layered security protocols protect your critical assets.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized infrastructure ensures sub-second response times and 99.9% uptime guarantee.' },
  { icon: Clock, title: 'Rapid Deployment', desc: 'Agile methodology enables quick project turnaround without compromising on quality.' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Round-the-clock dedicated support team with average response time under 15 minutes.' },
  { icon: TrendingUp, title: 'Proven Results', desc: 'Track record of delivering 300%+ ROI for our clients through innovative solutions.' },
  { icon: Users, title: 'Expert Team', desc: '200+ certified professionals with deep expertise across all major technology stacks.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="Built for Enterprise Scale"
          description="We combine deep technical expertise with business acumen to deliver solutions that matter."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <GlassCard key={reason.title} delay={i * 0.05}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}