import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, ChevronDown, ChevronUp, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail, title: 'Email Us', value: 'info@techelite.com', sub: 'support@techelite.com' },
  { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', sub: 'Mon-Fri, 9am-6pm EST' },
  { icon: MapPin, title: 'Visit Us', value: '100 Market Street', sub: 'San Francisco, CA 94105' },
  { icon: Clock, title: 'Business Hours', value: 'Mon - Fri: 9AM - 6PM', sub: 'Sat: 10AM - 2PM' },
];

const faqs = [
  { q: 'What industries do you serve?', a: 'We serve clients across finance, healthcare, retail, education, manufacturing, and technology sectors. Our solutions are tailored to meet industry-specific compliance and performance requirements.' },
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity. Small projects typically take 4-8 weeks, while enterprise-scale implementations may span 3-6 months. We provide detailed timelines during the discovery phase.' },
  { q: 'Do you offer ongoing support?', a: 'Yes! We offer flexible support plans including 24/7 monitoring, dedicated support teams, and SLA-backed response times. Our managed services ensure your systems run smoothly around the clock.' },
  { q: 'What is your pricing model?', a: 'We offer flexible pricing including project-based, retainer, and managed services models. We provide transparent quotes after understanding your requirements during our free consultation.' },
  { q: 'Can you work with our existing systems?', a: 'Absolutely. We specialize in integrating with existing infrastructure, legacy systems, and third-party tools. Our team ensures seamless migration and minimal disruption to your operations.' },
  { q: 'Do you provide training for our team?', a: 'Yes, knowledge transfer and training are integral to our delivery process. We offer customized training programs to ensure your team can effectively manage and maintain the solutions we build.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Let's Start a{' '}<span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Get in touch with our team and let's discuss how we can help transform your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => (
              <GlassCard key={info.title} delay={i * 0.05}>
                <info.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-sm text-foreground/80">{info.value}</p>
                <p className="text-xs text-muted-foreground">{info.sub}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <SectionHeading badge="Contact Form" title="Send Us a Message" center={false} />
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" required />
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" required />
                </div>
                <Input placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" />
                <Select value={formData.service} onValueChange={(val) => setFormData({...formData, service: val})}>
                  <SelectTrigger className="bg-muted/50 border-border/50 rounded-xl"><SelectValue placeholder="Select Service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="cloud">Cloud Solutions</SelectItem>
                    <SelectItem value="ai">AI & Automation</SelectItem>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="mobile">Mobile Apps</SelectItem>
                    <SelectItem value="consulting">IT Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl h-32" required />
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-full h-12 glow-blue">
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <SectionHeading badge="Location" title="Find Us Here" center={false} />
              <div className="glass rounded-2xl overflow-hidden flex-1 min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968975651926!2d-122.39568!3d37.79377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzM3LjYiTiAxMjLCsDIzJzQ0LjQiVw!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tech Elite Location"
                />
              </div>
              <div className="glass rounded-2xl p-6">
                <h4 className="font-heading font-semibold text-foreground mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'Twitter' },
                    { icon: Github, label: 'GitHub' },
                    { icon: Instagram, label: 'Instagram' },
                  ].map(({ icon: SIcon, label }) => (
                    <a key={label} href="#" className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                      <SIcon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" description="Find answers to common questions about our services and process." />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}