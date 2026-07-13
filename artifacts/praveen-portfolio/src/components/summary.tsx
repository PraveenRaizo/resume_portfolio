import React from 'react';
import { FadeIn } from './animations';

export const Summary = () => {
  return (
    <section id="summary" className="py-20 border-b border-border bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                Abstract
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <div className="bg-background border border-border p-8 relative shadow-sm hover:border-primary/30 transition-colors duration-300">
                {/* Corner decorative marks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary -translate-x-[1px] -translate-y-[1px]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary translate-x-[1px] -translate-y-[1px]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary -translate-x-[1px] translate-y-[1px]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary translate-x-[1px] translate-y-[1px]"></div>
                
                <p className="text-lg text-foreground leading-relaxed font-sans">
                  Software Engineer with 4+ years of experience building full-stack and backend systems using <strong className="font-mono text-primary font-normal">Node.js (NestJS), Next.js, MySQL, and MongoDB</strong>. 
                </p>
                <p className="text-lg text-foreground leading-relaxed font-sans mt-4">
                  Proven expertise designing and deploying <strong className="font-mono text-primary font-normal">Hyperledger Fabric</strong> blockchain networks on <strong className="font-mono text-primary font-normal">Kubernetes</strong>, authoring 100+ production APIs, and leading development of AI-assisted document management platforms. 
                </p>
                <p className="text-lg text-foreground leading-relaxed font-sans mt-4">
                  Skilled in Microservices Architecture, Scalable Architecture design, REST API design, real-time systems (Socket.IO), Elasticsearch, and mentoring junior engineers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
