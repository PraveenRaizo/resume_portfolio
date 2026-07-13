import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-background py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm border border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]">
              P
            </div>
            <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              © {new Date().getFullYear()} Praveen M. <span className="hidden sm:inline">All systems operational.</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:praveenlee1707@gmail.com" className="p-2.5 bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] backdrop-blur-sm">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/praveen-m-885017168/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] backdrop-blur-sm">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/PraveenRaizo" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] backdrop-blur-sm">
              <Github className="w-4 h-4" />
            </a>
            <a href="tel:+919344839914" className="p-2.5 bg-card/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 border border-border hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.2)] backdrop-blur-sm">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
