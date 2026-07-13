import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

const SKILL_CATEGORIES = [
  {
    title: 'Languages & Frameworks',
    skills: ['Node.js', 'NestJS', 'Next.js', 'React', 'JavaScript', 'TypeScript', 'Go (learning)', 'Python']
  },
  {
    title: 'Blockchain',
    skills: ['Hyperledger Fabric', 'Chaincode Development', 'Kubernetes-based Blockchain Network Setup']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Elasticsearch', 'Microsoft SQL Server (SSMS)']
  },
  {
    title: 'Infrastructure & DevOps',
    skills: ['Kubernetes', 'Docker', 'Docker Compose', 'CI/CD (Jenkins)', 'NFS']
  },
  {
    title: 'Cloud Platforms',
    skills: ['AWS (EC2)', 'DigitalOcean', 'Azure (AKS)']
  },
  {
    title: 'APIs & Integration',
    skills: ['REST API Design', 'Microservices Architecture', 'Swagger/OpenAPI', 'Socket.IO', 'Cron Jobs']
  },
  {
    title: 'Tools & Practices',
    skills: ['Jest', 'Test-Driven Development', 'Git', 'PrimeReact', 'Custom Query Builders', 'Agile', 'AI-assisted Development']
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="text-xl font-mono font-semibold uppercase tracking-widest text-primary flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block"></span>
                Technical Stack
              </h3>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SKILL_CATEGORIES.map((category, idx) => (
                <StaggerItem key={idx}>
                  <div className="h-full border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md relative group overflow-hidden">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-muted border-b border-l border-border transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                    </div>
                    
                    <h4 className="font-mono text-primary mb-4 font-semibold text-sm border-b border-border pb-2 inline-block">
                      {category.title}
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <li 
                          key={sIdx}
                          className="text-sm px-2 py-1 bg-secondary text-secondary-foreground font-mono"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
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
