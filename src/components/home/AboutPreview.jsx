import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'ISO 27001 Certified Security',
  'AWS Advanced Consulting Partner',
  '24/7 Dedicated Support Team',
  '99.9% Uptime Guarantee',
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-6">
              10+ Years of{' '}
              <span className="gradient-text">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tech Elite IT Solutions has been at the forefront of digital transformation since 2014. We partner with enterprises globally to deliver innovative technology solutions that drive measurable results and sustainable growth.
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-full px-8 glow-blue group">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Award, label: 'Awards Won', value: '50+', color: 'from-primary to-blue-400' },
              { icon: Users, label: 'Happy Clients', value: '500+', color: 'from-secondary to-purple-400' },
              { icon: Globe, label: 'Countries', value: '25+', color: 'from-accent to-cyan-400' },
              { icon: CheckCircle, label: 'Projects Done', value: '1200+', color: 'from-green-500 to-emerald-400' },
            ].map((stat, i) => (
              <div key={stat.label} className={`glass rounded-2xl p-6 text-center ${i === 1 ? 'mt-8' : ''} ${i === 2 ? '-mt-8' : ''}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}