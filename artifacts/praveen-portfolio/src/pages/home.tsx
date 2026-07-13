import React from 'react';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Summary } from '@/components/summary';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-accent/30 selection:text-foreground">
      <div className="blueprint-grid"></div>
      <Header />
      <main className="flex-1 pt-10">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
