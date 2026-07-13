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
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                Qualifications
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <FadeIn className="mb-12">
              <h4 className="text-lg font-mono text-muted-foreground mb-6 uppercase tracking-wider border-b border-border pb-2 inline-block">Education</h4>
              <div className="bg-background border border-border p-6 flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <h5 className="font-semibold text-lg text-foreground">Bachelor of Engineering (B.E.), Computer Science</h5>
                  <p className="text-primary font-mono text-sm mt-1">Panimalar Engineering College | Chennai, Tamil Nadu, India</p>
                </div>
                <div className="mt-4 md:mt-0 px-3 py-1 bg-secondary text-secondary-foreground font-mono text-sm border border-border inline-block self-start">
                  2016 – 2020
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <h4 className="text-lg font-mono text-muted-foreground mb-6 uppercase tracking-wider border-b border-border pb-2 inline-block">Certifications</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert, idx) => (
                  <a 
                    key={idx} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-background border border-border p-5 hover:border-primary/50 hover:bg-muted/30 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cert.title}</h5>
                        <p className="text-sm font-mono text-muted-foreground mt-1">{cert.issuer}</p>
                        {cert.detail && <p className="text-xs font-mono text-muted-foreground/70 mt-1">{cert.detail}</p>}
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
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
