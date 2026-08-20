import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BrandMark from '../components/BrandMark';

const services = [
  ['01', 'Business Websites', 'Modern, responsive websites built around what a business actually needs.'],
  ['02', 'Landing Pages', 'Focused pages designed to explain an offer clearly and drive enquiries.'],
  ['03', 'Website Redesign', 'Turn an outdated website into a cleaner, faster and more credible experience.'],
  ['04', 'Python & Automation', 'Practical tools and workflows that reduce repetitive manual work.'],
  ['05', 'AI-Assisted Solutions', 'Useful AI workflows and lightweight tools where automation makes sense.'],
  ['06', 'Deployment & Setup', 'Help with hosting, domains, responsive testing and a clean launch.'],
];

const projects = [
  { title: 'Masonry & Roofing Website', type: 'Business Website Concept', repo: 'pateljiop/Demo', href: 'https://pateljiop.github.io/Demo/' },
  { title: 'Laundry Service Website', type: 'Local Business Concept', repo: 'pateljiop/Laundry-demo', href: 'https://pateljiop.github.io/Laundry-demo/' },
  { title: 'Roofing Website', type: 'Service Business Concept', repo: 'pateljiop/Roofing-demo', href: 'https://pateljiop.github.io/Roofing-demo/' },
  { title: 'Property Maintenance Website', type: 'Service Business Concept', repo: 'pateljiop/mek-property-maintenance-demo', href: 'https://pateljiop.github.io/mek-property-maintenance-demo/' },
];

export default function FreelancePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <div className="mb-7"><BrandMark /></div>
              <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-primary">Hariom Builds</p>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Websites & digital solutions that <span className="text-primary">make sense.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">I build modern websites, practical automation and useful digital experiences for businesses, creators and people with an idea worth building.</p>
              <div className="mt-9 flex flex-wrap gap-4"><a href="#contact" className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Start a Project</a><a href="#work" className="rounded-xl border border-border px-6 py-3 font-semibold transition hover:border-primary/60">See My Work</a></div>
            </div>
            <div className="rounded-3xl border border-primary/20 bg-card/50 p-7 shadow-2xl backdrop-blur-xl"><div className="mb-6 flex items-center gap-3 font-mono text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-primary" /> /hariom-builds</div><div className="space-y-4 font-mono text-sm"><p><span className="text-primary">const</span> goal = <span className="text-muted-foreground">"build something useful"</span>;</p><p><span className="text-primary">const</span> focus = [<br />&nbsp;&nbsp;<span className="text-muted-foreground">"web"</span>, <span className="text-muted-foreground">"python"</span>, <span className="text-muted-foreground">"AI"</span>, <span className="text-muted-foreground">"automation"</span><br />];</p><p><span className="text-primary">return</span> <span className="text-muted-foreground">betterDigitalExperience</span>;</p></div></div>
          </div>
        </section>
        <section className="border-y border-border/70 bg-card/20"><div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-3"><div><div className="text-3xl font-black">Built around you</div><p className="mt-2 text-muted-foreground">No unnecessary template feeling. The solution follows the actual goal.</p></div><div><div className="text-3xl font-black">Responsive by default</div><p className="mt-2 text-muted-foreground">Designed to work cleanly across phones, tablets and desktops.</p></div><div><div className="text-3xl font-black">Clear communication</div><p className="mt-2 text-muted-foreground">Simple updates, sensible scope and no unnecessary technical confusion.</p></div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-24"><div className="mb-12"><p className="font-mono text-sm text-primary">WHAT I BUILD</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Services</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([num, title, desc]) => <article key={num} className="rounded-2xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-primary/50"><span className="font-mono text-xs text-primary">{num}</span><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{desc}</p></article>)}</div></section>
        <section id="work" className="bg-card/20 py-24"><div className="mx-auto max-w-6xl px-6"><div className="mb-12"><p className="font-mono text-sm text-primary">SELECTED WORK</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Business website concepts</h2><p className="mt-4 max-w-2xl text-muted-foreground">A few demo projects showing how I approach real-world service businesses. These are presented as concepts, not false client claims.</p></div><div className="grid gap-6 md:grid-cols-3">{projects.map((project) => <article key={project.repo} className="group rounded-3xl border border-border bg-background/60 p-6"><div className="flex h-40 items-center justify-center rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/10 to-transparent"><BrandMark compact /></div><p className="mt-6 font-mono text-xs text-primary">{project.type}</p><h3 className="mt-2 text-2xl font-bold">{project.title}</h3><p className="mt-2 text-sm text-muted-foreground">Responsive business website concept focused on clear services, trust and enquiries.</p><a className="mt-6 inline-flex font-semibold text-primary" href={project.href} target="_blank" rel="noreferrer">View project →</a></article>)}</div></div></section>
        <section className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-12 md:grid-cols-2"><div><p className="font-mono text-sm text-primary">PROCESS</p><h2 className="mt-3 text-4xl font-black">From idea to launch.</h2></div><div className="space-y-5">{['Tell me about the project', 'Understand the goal', 'Plan the right solution', 'Design & develop', 'Test & refine', 'Launch'].map((step, i) => <div key={step} className="flex items-center gap-5 border-b border-border pb-4"><span className="font-mono text-xs text-primary">0{i + 1}</span><span className="font-semibold">{step}</span></div>)}</div></div></section>
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-28"><div className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-16"><div className="flex flex-col items-center text-center"><BrandMark /><h2 className="mx-auto mt-8 max-w-3xl text-4xl font-black md:text-6xl">Have something worth building?</h2><p className="mx-auto mt-5 max-w-xl text-muted-foreground">Tell me what you need, what you are trying to achieve, and I’ll help turn it into a practical solution.</p><Link href="/#contact" className="mt-8 inline-flex rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground">Start a Project</Link></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
