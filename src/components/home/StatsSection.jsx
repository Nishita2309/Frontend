import React from 'react';
import AnimatedCounter from '../shared/AnimatedCounter';

const stats = [
  { end: 500, suffix: '+', label: 'Happy Clients' },
  { end: 1200, suffix: '+', label: 'Projects Completed' },
  { end: 200, suffix: '+', label: 'Team Members' },
  { end: 99, suffix: '%', label: 'Client Satisfaction' },
];

export default function StatsSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}