import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

const technologies = [
  'React', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker',
  'Kubernetes', 'TensorFlow', 'MongoDB', 'PostgreSQL', 'Redis', 'GraphQL',
  'TypeScript', 'Go', 'Terraform', 'Jenkins', 'Ansible', 'Kafka',
];

export default function TechStack() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tech Stack"
          title="Technologies We Master"
          description="We leverage the latest and most reliable technologies to build robust, scalable solutions."
        />

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass rounded-xl px-5 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/30 hover:glow-blue transition-all cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}