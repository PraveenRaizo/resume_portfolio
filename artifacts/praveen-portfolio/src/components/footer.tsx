import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-xs border border-primary-foreground/20">
              P
            </div>
            <span className="font-mono text-sm text-muted-foreground">
              © {new Date().getFullYear()} Praveen M. All systems operational.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:praveenlee1707@gmail.com" className="p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors border border-transparent hover:border-border">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/praveen-m-885017168/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors border border-transparent hover:border-border">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/PraveenRaizo" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors border border-transparent hover:border-border">
              <Github className="w-4 h-4" />
            </a>
            <a href="tel:+919344839914" className="p-2 text-muted-foreground hover:text-primary hover:bg-muted transition-colors border border-transparent hover:border-border">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
