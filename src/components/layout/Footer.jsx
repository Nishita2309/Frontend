import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  Services: [
    { label: 'Cybersecurity', path: '/services' },
    { label: 'Cloud Solutions', path: '/services' },
    { label: 'AI & Automation', path: '/services' },
    { label: 'Web Development', path: '/services' },
    { label: 'Mobile Apps', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Training', path: '/training' },
    { label: 'Contact', path: '/contact' },
  ],
  Resources: [
    { label: 'Blog', path: '/' },
    { label: 'Case Studies', path: '/' },
    { label: 'Documentation', path: '/' },
    { label: 'Support', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-heading font-bold text-foreground">Tech Elite</span>
                <span className="text-[10px] block -mt-1 text-muted-foreground tracking-widest uppercase">IT Solutions</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Where Technology Meets Excellence. Empowering enterprises with cutting-edge IT solutions and digital transformation services.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@techelite.com</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> San Francisco, CA 94105</div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h4 className="font-heading font-semibold text-foreground">Stay Updated</h4>
              <p className="text-sm text-muted-foreground">Get the latest insights on technology and innovation.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <Input placeholder="Enter your email" className="bg-muted/50 border-border/50 rounded-full md:w-64" />
              <Button className="bg-gradient-to-r from-primary to-secondary text-white rounded-full px-6 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2026 Tech Elite IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-blue transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}