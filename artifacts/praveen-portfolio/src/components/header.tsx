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
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-border py-3 shadow-sm' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-mono font-bold text-lg border border-primary-foreground/20">
              P
            </div>
            <span className="font-mono font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Praveen.sys
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="h-6 w-px bg-border"></div>
            <a 
              href="/Praveen_M_Resume.pdf" 
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-mono text-sm font-medium transition-colors border border-border"
            >
              <Download className="w-4 h-4" />
              Fetch Resume
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-border/50 last:border-0">
                <a 
                  href={link.href} 
                  className="block px-6 py-4 font-mono text-sm text-foreground hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="p-6">
              <a 
                href="/Praveen_M_Resume.pdf" 
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Fetch Resume (.pdf)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
