import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, TrendingUp, CheckCircle, ArrowRight, Star, GraduationCap, Code, Cloud, Shield, Brain, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SectionHeading from '../components/shared/SectionHeading';
import GlassCard from '../components/shared/GlassCard';
import AnimatedCounter from '../components/shared/AnimatedCounter';
import { toast } from 'sonner';

const courses = [
  { icon: Cloud, title: 'AWS Cloud Architect', duration: '12 weeks', level: 'Advanced', cert: 'AWS SAA-C03' },
  { icon: Shield, title: 'Cybersecurity Professional', duration: '16 weeks', level: 'Intermediate', cert: 'CompTIA Security+' },
  { icon: Code, title: 'Full Stack Development', duration: '24 weeks', level: 'Beginner to Advanced', cert: 'Tech Elite Certified' },
  { icon: Brain, title: 'AI & Machine Learning', duration: '20 weeks', level: 'Advanced', cert: 'Google ML Certificate' },
  { icon: GitBranch, title: 'DevOps Engineering', duration: '14 weeks', level: 'Intermediate', cert: 'Kubernetes CKA' },
  { icon: Cloud, title: 'Azure Solutions', duration: '12 weeks', level: 'Intermediate', cert: 'AZ-104' },
];

const roadmap = [
  { step: 1, title: 'Assessment', desc: 'Evaluate your current skills and career goals.' },
  { step: 2, title: 'Personalized Plan', desc: 'Custom learning path based on your assessment.' },
  { step: 3, title: 'Live Training', desc: 'Expert-led sessions with hands-on labs.' },
  { step: 4, title: 'Project Work', desc: 'Real-world projects to build your portfolio.' },
  { step: 5, title: 'Certification', desc: 'Industry-recognized certification prep and exam.' },
  { step: 6, title: 'Placement', desc: 'Interview prep and guaranteed placement support.' },
];

const testimonials = [
  { name: 'Rahul Patel', course: 'AWS Cloud Architect', text: 'Got placed at a Fortune 500 company within 2 weeks of completing the program. The hands-on labs were incredible.', rating: 5 },
  { name: 'Anna Lee', course: 'Full Stack Development', text: 'From zero coding experience to a full-time developer role. The mentorship at Tech Elite is top-notch.', rating: 5 },
  { name: 'Carlos Rivera', course: 'Cybersecurity Professional', text: 'The curriculum is perfectly aligned with industry demands. I passed CompTIA Security+ on my first attempt.', rating: 5 },
];

export default function Training() {
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '', phone: '', course: '' });

  const handleEnroll = (e) => {
    e.preventDefault();
    toast.success('Enrollment request submitted! Our team will contact you shortly.');
    setEnrollForm({ name: '', email: '', phone: '', course: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-primary tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" /> Training & Placements
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Launch Your{' '}<span className="gradient-text">Tech Career</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-aligned courses, expert mentorship, and guaranteed placement support to accelerate your career in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter end={95} suffix="%" label="Placement Rate" />
              <AnimatedCounter end={5000} suffix="+" label="Students Trained" />
              <AnimatedCounter end={150} suffix="+" label="Hiring Partners" />
              <AnimatedCounter end={8} suffix="LPA" prefix="₹" label="Avg. Package" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Courses" title="Programs We Offer" description="Comprehensive training programs designed by industry experts." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course, i) => (
              <GlassCard key={course.title} delay={i * 0.05}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{course.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between"><span>Duration:</span><span className="text-foreground">{course.duration}</span></div>
                  <div className="flex justify-between"><span>Level:</span><span className="text-foreground">{course.level}</span></div>
                  <div className="flex justify-between"><span>Certification:</span><span className="text-primary">{course.cert}</span></div>
                </div>
                <Button variant="outline" className="w-full border-primary/30 text-primary hover:bg-primary/10 rounded-full text-sm">
                  Learn More <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading badge="Learning Path" title="Your Journey to Success" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 relative"
              >
                <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white flex items-center justify-center">
                  {item.step}
                </span>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 mt-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Success Stories" title="Student Testimonials" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <GlassCard key={t.name} delay={i * 0.05}>
                <div className="flex gap-1 mb-3">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 italic mb-4">"{t.text}"</p>
                <p className="text-sm font-heading font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-primary">{t.course}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Certifications" title="Industry-Recognized Credentials" />
          <div className="flex flex-wrap justify-center gap-4">
            {['AWS Certified', 'Azure Certified', 'Google Cloud', 'CompTIA', 'Kubernetes CKA', 'Terraform Associate', 'Cisco CCNA', 'CISSP'].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl px-5 py-3 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Enroll Now" title="Start Your Journey" description="Fill out the form below and our counselor will contact you within 24 hours." />
          <form onSubmit={handleEnroll} className="glass rounded-2xl p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name" value={enrollForm.name} onChange={(e) => setEnrollForm({...enrollForm, name: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" required />
              <Input type="email" placeholder="Email Address" value={enrollForm.email} onChange={(e) => setEnrollForm({...enrollForm, email: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" required />
            </div>
            <Input placeholder="Phone Number" value={enrollForm.phone} onChange={(e) => setEnrollForm({...enrollForm, phone: e.target.value})} className="bg-muted/50 border-border/50 rounded-xl" />
            <Select value={enrollForm.course} onValueChange={(val) => setEnrollForm({...enrollForm, course: val})}>
              <SelectTrigger className="bg-muted/50 border-border/50 rounded-xl"><SelectValue placeholder="Select Course" /></SelectTrigger>
              <SelectContent>
                {courses.map(c => <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white rounded-full h-12 glow-blue">
              Enroll Now <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}