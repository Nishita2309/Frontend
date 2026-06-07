import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const testimonials = [
  { name: 'Sarah Chen', role: 'CTO, Nexus Finance', text: 'Tech Elite transformed our entire cloud infrastructure. Their AWS expertise saved us 40% on costs while improving performance by 200%. Exceptional team and delivery.', rating: 5 },
  { name: 'Michael Roberts', role: 'VP Engineering, DataFlow', text: 'The cybersecurity audit and implementation was world-class. They identified critical vulnerabilities and deployed a comprehensive security framework in record time.', rating: 5 },
  { name: 'Emily Zhao', role: 'CEO, GreenTech Solutions', text: 'Their AI automation solutions reduced our manual processes by 75%. The ROI exceeded our expectations within the first quarter. Highly recommend for any enterprise.', rating: 5 },
  { name: 'James Anderson', role: 'Director of IT, Meridian Corp', text: 'From consultation to deployment, Tech Elite delivered a flawless digital transformation. Their team\'s professionalism and technical depth is unmatched.', rating: 5 },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          description="Trusted by 500+ companies worldwide to deliver mission-critical technology solutions."
        />

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 md:p-12 text-center relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <div className="flex justify-center gap-1 mb-6">
                {Array(testimonials[current].rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-8">
                "{testimonials[current].text}"
              </p>
              <div>
                <p className="font-heading font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-blue transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:glow-blue transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}