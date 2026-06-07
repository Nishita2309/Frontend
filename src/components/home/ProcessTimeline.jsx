import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const steps = [
  { icon: Search, title: 'Discovery', desc: 'Deep dive into your requirements, business goals, and current infrastructure.' },
  { icon: Lightbulb, title: 'Strategy', desc: 'Craft a tailored technology roadmap with clear milestones and deliverables.' },
  { icon: Code, title: 'Development', desc: 'Agile development with continuous integration, testing, and client feedback.' },
  { icon: Rocket, title: 'Launch & Scale', desc: 'Deploy, monitor, optimize, and scale your solution for maximum impact.' },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="From Vision to Reality"
          description="Our proven four-step methodology ensures every project is delivered on time, on budget, and beyond expectations."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="relative z-10 w-24 h-24 rounded-full glass mx-auto mb-6 flex items-center justify-center group hover:glow-blue transition-all">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors" />
                <step.icon className="w-10 h-10 text-primary relative z-10" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-bold text-white flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}