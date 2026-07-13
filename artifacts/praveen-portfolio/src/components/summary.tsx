import React from 'react';
import { FadeIn } from './animations';

export const Summary = () => {
  return (
    <section id="summary" className="py-20 border-b border-primary/20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                <span className="w-8 h-[2px] bg-accent inline-block shadow-[0_0_8px_hsl(var(--accent)/0.8)]"></span>
                Abstract
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <FadeIn delay={0.1}>
              <div className="bg-card/40 backdrop-blur-sm border border-primary/20 p-8 relative hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] group">
                {/* Corner decorative marks */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary -translate-x-[1px] -translate-y-[1px] group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary translate-x-[1px] -translate-y-[1px] group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary -translate-x-[1px] translate-y-[1px] group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary translate-x-[1px] translate-y-[1px] group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <p className="text-lg text-foreground/90 leading-relaxed font-sans relative z-10">
                  Software Engineer with 4+ years of experience building full-stack and backend systems using <strong className="font-mono text-primary font-normal drop-shadow-[0_0_5px_hsl(var(--primary)/0.4)]">Node.js (NestJS), Next.js, MySQL, and MongoDB</strong>. 
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-sans mt-4 relative z-10">
                  Proven expertise designing and deploying <strong className="font-mono text-accent font-normal drop-shadow-[0_0_5px_hsl(var(--accent)/0.4)]">Hyperledger Fabric</strong> blockchain networks on <strong className="font-mono text-primary font-normal drop-shadow-[0_0_5px_hsl(var(--primary)/0.4)]">Kubernetes</strong>, authoring 100+ production APIs, and leading development of AI-assisted document management platforms. 
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-sans mt-4 relative z-10">
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
