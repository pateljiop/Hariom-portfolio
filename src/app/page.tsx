import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Vertical grid lines (T2 technique) */}
      <div className="vertical-grid hidden md:flex">
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
        <div className="vertical-grid-line" />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay fixed inset-0 z-[1] pointer-events-none" />

      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Header />

      {/* Main content */}
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