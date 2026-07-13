import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';
import { Database, Network, Server } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Digital Credentialing Platform',
    icon: <Network className="w-6 h-6" />,
    description: 'Hyperledger Fabric network on Kubernetes (Quill Audits-approved); 110+ blockchain APIs in NestJS with sub-1s latency; NFS-based pod storage sharing.',
    tags: ['Hyperledger Fabric', 'Kubernetes', 'NestJS', 'NFS']
  },
  {
    title: 'Intelligent Document Management System (Insurance)',
    icon: <Server className="w-6 h-6" />,
    description: 'AI-based document classification platform; 150+ APIs authored end-to-end; Next.js frontend with tree/folder views, Socket.IO notifications, custom workflow query builder, Elasticsearch search.',
    tags: ['Next.js', 'Socket.IO', 'Elasticsearch', 'AI']
  },
  {
    title: 'General-Purpose Document Management System',
    icon: <Database className="w-6 h-6" />,
    description: 'Multi-tenant DMS with configurable folder structures and metadata; React frontend with PDF viewer; integrations with Google Drive, OneDrive, Outlook, LINE; led backend schema design and mentored 2 junior developers; Jest + Swagger-driven quality process.',
    tags: ['React', 'MySQL', 'Jest', 'Swagger']
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b border-primary/20 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                <span className="w-8 h-[2px] bg-accent inline-block shadow-[0_0_8px_hsl(var(--accent)/0.8)]"></span>
                Key Deployments
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <StaggerContainer className="flex flex-col gap-6">
              {PROJECTS.map((project, idx) => (
                <StaggerItem key={idx}>
                  <div className="group border border-primary/20 bg-card/60 backdrop-blur-sm p-6 md:p-8 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] relative overflow-hidden">
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-start gap-6 relative z-10">
                      <div className="p-4 bg-primary/10 text-primary border border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-500 shrink-0">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-foreground mb-3 font-mono group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-xs font-mono px-3 py-1 bg-background/50 border border-primary/20 text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground transition-colors duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
