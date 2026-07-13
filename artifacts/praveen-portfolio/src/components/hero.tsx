import React from 'react';
import { Download, Github, Linkedin, Mail, Phone, Terminal } from 'lucide-react';
import { FadeIn } from './animations';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-medium uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              System Status: Online
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
              Praveen M.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
              Software Engineer — Full Stack Development | Backend Systems | Blockchain
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-foreground/80 font-mono leading-relaxed mb-10 max-w-3xl border-l-2 border-accent pl-4">
              Seeking a backend/full-stack engineering role to deepen expertise in distributed systems, blockchain infrastructure, and scalable platform architecture, while continuing to mentor junior engineers.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-wrap gap-4 items-center">
            <a href="mailto:praveenlee1707@gmail.com" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 font-mono text-sm font-medium transition-colors border border-transparent">
              <Mail className="w-4 h-4" />
              praveenlee1707@gmail.com
            </a>
            
            <a href="https://linkedin.com/in/praveenm-885017168" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent hover:bg-muted text-foreground px-6 py-3 font-mono text-sm font-medium transition-colors border border-border">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            
            <a href="https://github.com/PraveenRaizo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent hover:bg-muted text-foreground px-6 py-3 font-mono text-sm font-medium transition-colors border border-border">
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a href="tel:+919344839914" className="inline-flex items-center gap-2 bg-transparent hover:bg-muted text-foreground px-6 py-3 font-mono text-sm font-medium transition-colors border border-border">
              <Phone className="w-4 h-4" />
              +91 9344839914
            </a>
          </FadeIn>
        </div>
      </div>
      
      {/* Decorative technical elements */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none hidden lg:block">
        <Terminal className="w-64 h-64 text-primary" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </section>
  );
};
