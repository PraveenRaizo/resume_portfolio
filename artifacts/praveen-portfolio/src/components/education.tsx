import React from 'react';
import { FadeIn } from './animations';
import { ExternalLink } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Python Essentials 1',
    issuer: 'Cisco',
    link: 'https://credly.com/badges/9951fa8e-ebef-498e-abc2-d46a161d7eb5'
  },
  {
    title: 'Microsoft SQL Certification Training',
    issuer: 'Intellipaat',
    link: 'https://lms.intellipaat.com/certificate-link/?Yz0yODUzJnU9MzE5MjM1JmV4dD0x',
    detail: 'ID: cus-9307701'
  },
  {
    title: 'Introduction to Sub Agents',
    issuer: 'Skilljar',
    link: 'https://verify.skilljar.com/c/2u9ko9b64b2q'
  },
  {
    title: 'Introduction to MCP',
    issuer: 'Skilljar',
    link: 'https://verify.skilljar.com/c/3tqrm2ozx43j'
  },
  {
    title: 'Claude Code 101',
    issuer: 'Skilljar',
    link: 'https://verify.skilljar.com/c/jsnpgdfrjio9'
  },
  {
    title: 'JavaScript Test',
    issuer: 'TestDome',
    link: 'https://testdome.com/certificates/da6f2c4beb894e46a7d787db7e235420'
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                <span className="w-8 h-[2px] bg-accent inline-block shadow-[0_0_8px_hsl(var(--accent)/0.8)]"></span>
                Qualifications
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <FadeIn className="mb-14">
              <h4 className="text-lg font-mono text-primary mb-6 uppercase tracking-wider border-b border-primary/20 pb-2 inline-block drop-shadow-[0_0_5px_hsl(var(--primary)/0.3)]">Education</h4>
              <div className="bg-card/40 backdrop-blur-sm border border-primary/20 p-6 flex flex-col md:flex-row justify-between md:items-center hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)] group">
                <div>
                  <h5 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">Bachelor of Engineering (B.E.), Computer Science</h5>
                  <p className="text-muted-foreground font-mono text-sm mt-1">Panimalar Engineering College | Chennai, Tamil Nadu, India</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-1.5 bg-primary/10 text-primary font-mono text-sm border border-primary/30 inline-block self-start shadow-[0_0_10px_hsl(var(--primary)/0.05)] group-hover:border-primary/60 transition-colors duration-300">
                  2016 – 2020
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <h4 className="text-lg font-mono text-primary mb-6 uppercase tracking-wider border-b border-primary/20 pb-2 inline-block drop-shadow-[0_0_5px_hsl(var(--primary)/0.3)]">Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {CERTIFICATIONS.map((cert, idx) => (
                  <a 
                    key={idx} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card/40 backdrop-blur-sm border border-primary/20 p-5 hover:border-primary/60 hover:bg-primary/5 transition-all duration-500 group hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] relative overflow-hidden"
                  >
                    <div className="absolute right-0 top-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="flex justify-between items-start relative z-10">
                      <div>
                        <h5 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{cert.title}</h5>
                        <p className="text-sm font-mono text-muted-foreground mt-1.5">{cert.issuer}</p>
                        {cert.detail && <p className="text-xs font-mono text-primary/60 mt-1">{cert.detail}</p>}
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:drop-shadow-[0_0_5px_hsl(var(--accent)/0.5)] transition-all duration-300 shrink-0 ml-4" />
                    </div>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
