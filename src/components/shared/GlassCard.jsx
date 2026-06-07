import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : {}}
      className={`glass rounded-2xl p-6 group transition-all duration-300 ${hover ? 'hover:glow-blue hover:border-primary/30' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}