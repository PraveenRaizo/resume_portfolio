import React from 'react';
import { FadeIn } from './animations';

const EXPERIENCE = [
  {
    title: 'Software Engineer',
    company: 'BU Soft Tech',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Jan 2026 – Present',
    achievements: [
      'Led backend schema design for a configurable, general-purpose Document Management System (DMS).',
      'Mentored 2 junior engineers on API logic implementation, resolved merge conflicts, and finalized releases.',
      'Built 4 configurable document upload/destination integrations (Google Drive, OneDrive, Outlook, LINE), supporting flexible folder structures and metadata per client.',
      'Delivered 23 GET, 20 POST, 7 PATCH, and 4 DELETE APIs to date on an ongoing project, using AI-assisted development agents to speed up delivery cycles.',
      'Identified a performance bottleneck in dashboard statistics APIs and proposed a Redis caching layer to reduce response latency; deferred due to infrastructure budget constraints.',
      'Maintained 100% test-pass discipline pre-commit using Jest, applying Test-Driven Development for critical modules; kept API docs in sync via Swagger.',
      'Built and maintained Docker images and Docker Compose configurations consumed by the DevOps team\'s Jenkins-based CI/CD pipelines for deployment; published images to Docker Hub for versioning and team reuse.'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Agira Technologies',
    location: 'Chennai, Tamil Nadu, India',
    period: 'May 2025 – Jan 2026',
    achievements: [
      'Engineered the Hyperledger Fabric blockchain network on Kubernetes for a Digital Credentialing platform, independently designing and implementing the full network setup, later audited and approved by Quill Audits.',
      'Developed 110+ blockchain-integration APIs in NestJS, containerized as Kubernetes pods, bridging chaincode and application backend with sub-1-second response times for high-volume blockchain data retrieval.',
      'Implemented NFS-based shared storage between pods to support reliable inter-pod data access within the blockchain network.',
      'Provisioned containerized application deployments on AWS EC2 and DigitalOcean using Docker and Docker Compose, maintaining images on Docker Hub for versioning.',
      'Set up a self-managed Kubernetes cluster on DigitalOcean and authored deployment manifests (pods, services, PV/PVC) for an organization-managed Azure AKS cluster.',
      'Built core backend and frontend logic for an AI-powered Intelligent Document Management System for an insurance client; authored complete logic for 150+ of 348 total APIs and enhanced/debugged the remainder.',
      'Led design and development of nested folder/tree-view navigation in Next.js using PrimeReact.',
      'Built real-time features with Socket.IO for live notifications and automatic session logout across frontend and backend.',
      'Designed a custom query-builder engine (adapted from react-query-builder) powering automated workflows that auto-create and assign department tasks on document upload.',
      'Integrated Elasticsearch indexing APIs (add/update/delete) for fast document search and retrieval; connected to MongoDB (owned by the AI team) for AI-classification data alongside MySQL as the primary backend database.',
      'Exposed NFS-stored documents through a dedicated backend static file server, cutting document retrieval time from several seconds to under one second compared to routing reads through the application database layer.',
      'Set up scheduled cron jobs for reminder notifications to support workflow and task SLAs.'
    ]
  },
  {
    title: 'Junior Software Engineer',
    company: 'Multiple / Early Career',
    location: 'Chennai, Tamil Nadu, India',
    period: 'Sep 2022 – May 2025',
    achievements: [
      'Built foundational backend and full-stack development skills, contributing to early-stage feature development and bug fixes across Node.js and React-based projects.'
    ]
  },
  {
    title: 'Career Break',
    company: 'Study',
    location: 'India',
    period: 'Jan 2021 – Sep 2022',
    achievements: [
      'Prepared for competitive government examinations.'
    ]
  },
  {
    title: 'Customer Service Associate',
    company: 'Customer Support Operations',
    location: 'India',
    period: 'Jun 2020 – Jan 2021',
    achievements: [
      'Delivered customer support operations, building foundational communication and problem-solving skills prior to transitioning into software engineering.'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 border-b border-primary/20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] sticky top-24">
                <span className="w-8 h-[2px] bg-accent inline-block shadow-[0_0_8px_hsl(var(--accent)/0.8)]"></span>
                Experience Log
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <div className="relative border-l border-primary/30 ml-4 md:ml-0 pb-8">
              {EXPERIENCE.map((exp, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} className="mb-14 relative pl-8 md:pl-10 last:mb-0 group">
                  {/* Timeline node */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-none border border-primary bg-background -translate-x-[6.5px] group-hover:scale-125 group-hover:border-accent transition-all duration-300 group-hover:shadow-[0_0_10px_hsl(var(--accent)/0.8)]">
                    <div className={`w-full h-full transition-colors duration-300 ${idx < 2 ? 'bg-accent' : 'bg-transparent group-hover:bg-accent/50'}`}></div>
                  </div>
                  
                  {/* Connection line horizontal */}
                  <div className="absolute left-0 top-[11px] w-6 border-t border-primary/30 border-dashed -translate-x-0 group-hover:border-accent/50 transition-colors duration-300"></div>
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5 gap-3">
                    <div>
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{exp.title}</h4>
                      <div className="text-accent font-mono text-sm mt-1 drop-shadow-[0_0_3px_hsl(var(--accent)/0.3)]">
                        {exp.company} <span className="text-muted-foreground mx-2">|</span> <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary font-mono text-xs border border-primary/30 self-start shadow-[0_0_10px_hsl(var(--primary)/0.05)] group-hover:border-primary/60 transition-colors duration-300">
                      {exp.period}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mt-4 text-foreground/80 text-[0.95rem]">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="relative pl-6 before:content-['>'] before:absolute before:left-0 before:text-primary before:font-mono before:drop-shadow-[0_0_5px_hsl(var(--primary)/0.5)]">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
