import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Abstract', href: '#summary' },
    { name: 'Stack', href: '#skills' },
    { name: 'Log', href: '#experience' },
    { name: 'Deployments', href: '#projects' },
    { name: 'Qualifications', href: '#education' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-primary/20 py-3 shadow-[0_4px_30px_hsl(var(--primary)/0.05)]' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-xl border border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300">
              P
            </div>
            <span className="font-mono font-semibold tracking-tight text-foreground/90 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-300">
              Praveen.sys
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group py-2"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_8px_hsl(var(--primary)/0.8)]"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-border"></div>
            <a 
              href="/Praveen_M_Resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-mono text-sm font-bold transition-all duration-300 border border-primary/40 hover:border-primary hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]"
            >
              <Download className="w-4 h-4" />
              Fetch_Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-[0_10px_30px_hsl(var(--primary)/0.1)]">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-border/50 last:border-0">
                <a 
                  href={link.href} 
                  className="block px-6 py-4 font-mono text-sm text-foreground hover:bg-primary/10 hover:text-primary hover:pl-8 transition-all duration-300 border-l-2 border-transparent hover:border-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="p-6 bg-card/30">
              <a 
                href="/Praveen_M_Resume.pdf" 
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground font-mono text-sm font-bold transition-all duration-300 shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Fetch_Resume(.pdf)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
