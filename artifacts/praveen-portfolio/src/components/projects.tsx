import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';
import { Database, Network, Server } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Digital Credentialing Platform',
    icon: <Network className="w-5 h-5" />,
    description: 'Hyperledger Fabric network on Kubernetes (Quill Audits-approved); 110+ blockchain APIs in NestJS with sub-1s latency; NFS-based pod storage sharing.',
    tags: ['Hyperledger Fabric', 'Kubernetes', 'NestJS', 'NFS']
  },
  {
    title: 'Intelligent Document Management System (Insurance)',
    icon: <Server className="w-5 h-5" />,
    description: 'AI-based document classification platform; 150+ APIs authored end-to-end; Next.js frontend with tree/folder views, Socket.IO notifications, custom workflow query builder, Elasticsearch search.',
    tags: ['Next.js', 'Socket.IO', 'Elasticsearch', 'AI']
  },
  {
    title: 'General-Purpose Document Management System',
    icon: <Database className="w-5 h-5" />,
    description: 'Multi-tenant DMS with configurable folder structures and metadata; React frontend with PDF viewer; integrations with Google Drive, OneDrive, Outlook, LINE; led backend schema design and mentored 2 junior developers; Jest + Swagger-driven quality process.',
    tags: ['React', 'MySQL', 'Jest', 'Swagger']
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                Key Deployments
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <StaggerContainer className="flex flex-col gap-6">
              {PROJECTS.map((project, idx) => (
                <StaggerItem key={idx}>
                  <div className="group border border-border bg-card p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary text-primary border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-3 font-mono">
                          {project.title}
                        </h4>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tIdx) => (
                            <span 
                              key={tIdx} 
                              className="text-xs font-mono px-2 py-1 border border-border/60 text-muted-foreground group-hover:border-primary/30 transition-colors"
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
