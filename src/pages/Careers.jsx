import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ArrowRight, Heart, TrendingUp, BookOpen, Coffee, Zap, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import { toast } from 'sonner';

const jobs = [
  { title: 'Senior Cloud Architect', dept: 'Cloud Solutions', location: 'San Francisco, CA', type: 'Full-time', level: 'Senior' },
  { title: 'Cybersecurity Analyst', dept: 'Security', location: 'Remote', type: 'Full-time', level: 'Mid-level' },
  { title: 'Full Stack Developer', dept: 'Engineering', location: 'New York, NY', type: 'Full-time', level: 'Mid-level' },
  { title: 'AI/ML Engineer', dept: 'AI & Automation', location: 'Remote', type: 'Full-time', level: 'Senior' },
  { title: 'DevOps Engineer', dept: 'Engineering', location: 'Austin, TX', type: 'Full-time', level: 'Mid-level' },
  { title: 'Product Designer', dept: 'Design', location: 'Remote', type: 'Full-time', level: 'Senior' },
];

const internships = [
  { title: 'Cloud Engineering Intern', dept: 'Cloud Solutions', duration: '3 months' },
  { title: 'Software Development Intern', dept: 'Engineering', duration: '6 months' },
  { title: 'Cybersecurity Intern', dept: 'Security', duration: '3 months' },
];

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health, dental, and vision insurance for you and your family.' },
  { icon: TrendingUp, title: 'Growth & Learning', desc: 'Annual learning budget, certifications, and conference sponsorships.' },
  { icon: Coffee, title: 'Work-Life Balance', desc: 'Flexible hours, remote work options, and unlimited PTO.' },
  { icon: Zap, title: 'Equity & Bonuses', desc: 'Stock options, performance bonuses, and competitive compensation.' },
  { icon: BookOpen, title: 'Education Support', desc: 'Tuition reimbursement and internal mentorship programs.' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work with clients and teams across 25+ countries.' },
];

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', position: '', resume: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Application submitted! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', position: '', resume: '', message: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> We're Hiring
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Build the Future{' '}<span className="gradient-text">With Us</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team of 200+ brilliant minds shaping the future of enterprise technology. We're always looking for exceptional talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Culture" title="Why Work at Tech Elite?" description="We foster a culture of innovation, collaboration, and continuous growth." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => (
              <GlassCard key={benefit.title} delay={i * 0.05}>
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Open Positions" title="Current Openings" />
          <div className="space-y-3 max-w-4xl mx-auto">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{job.type}</span>
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{job.level}</span>
                    </div>
                  </div>
                  {expandedJob === i ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
                </button>
                {expandedJob === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-5 pb-5 border-t border-border/50"
                  >
                    <p className="text-sm text-muted-foreground mt-4 mb-4">
                      We're looking for a talented {job.title} to join our {job.dept} team. You'll work on cutting-edge projects with industry-leading tools and collaborate with brilliant engineers worldwide.
                    </p>
                    <Button className="bg-gradient-to-r from-primary to-secondary text-white rounded-full glow-blue">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Internships" title="Kickstart Your Career" description="Gain real-world experience and mentorship from industry experts." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {internships.map((intern, i) => (
              <GlassCard key={intern.title} delay={i * 0.05}>
                <h3 className="text-base font-heading font-semibold text-foreground mb-1">{intern.title}</h3>
                <p className="text-xs text-muted-foreground mb-1">{intern.dept}</p>
                <p className="text-xs text-primary">{intern.duration}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Apply Now" title="Join Our Team" description="Send us your application and we'll be in touch." />
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" required />
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" required />
            </div>
            <Select value={formData.position} onValueChange={(val) => setFormData({...formData, position: val})}>
              <SelectTrigger className="bg-muted/50 border-border/50 rounded-xl"><SelectValue placeholder="Select Position" /></SelectTrigger>
              <SelectContent>
                {jobs.map(j => <SelectItem key={j.title} value={j.title}>{j.title}</SelectItem>)}
              </SelectContent>
            </Select>
            <Input placeholder="Resume/Portfolio URL" value={formData.resume} onChange={(e) => setFormData({...formData, resume: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" />
            <Textarea placeholder="Tell us about yourself..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl h-28" />
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-full h-12 glow-blue">
              Submit Application <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}