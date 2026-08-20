import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkspaceSection from './components/WorkspaceSection';
import SkillsSection from './components/SkillsSection';
import JourneySection from './components/JourneySection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import DeveloperIdentitySection from './components/DeveloperIdentitySection';
import LiveFeedSection from './components/LiveFeedSection';
import ContactSection from './components/ContactSection';
import ScrollObserver from './components/ScrollObserver';
import ParticleBackground from './components/ParticleBackground';
import BrandMark from './components/BrandMark';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <div className="vertical-grid hidden md:flex">
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
      </div>

      <div className="noise-overlay fixed inset-0 z-[1] pointer-events-none" />
      <ParticleBackground />

      <div className="fixed bottom-5 left-5 z-40 hidden md:block rounded-2xl border border-primary/20 bg-background/80 px-3 py-2 backdrop-blur-xl shadow-lg">
        <BrandMark compact />
      </div>

      <Header />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WorkspaceSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <EducationSection />
        <DeveloperIdentitySection />
        <LiveFeedSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollObserver />
    </div>
  );
}
