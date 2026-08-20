import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BrandMark from '../components/BrandMark';

const services = [
  { n: '01', title: 'Business Websites', text: 'A polished web presence for a real business — clear structure, responsive UI, strong calls to action and a professional visual system.', tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'] },
  { n: '02', title: 'Landing Pages', text: 'Focused pages for a product, service or campaign where the goal is to communicate quickly and turn attention into enquiries.', tags: ['UI/UX', 'Conversion', 'Performance'] },
  { n: '03', title: 'Website Redesigns', text: 'Modernize an existing website without throwing away what already works. Better hierarchy, layout, mobile experience and credibility.', tags: ['Redesign', 'UX', 'Mobile'] },
  { n: '04', title: 'Python Automation', text: 'Small, practical automation tools for repetitive workflows, data handling and everyday tasks that are better handled by code.', tags: ['Python', 'Automation', 'APIs'] },
  { n: '05', title: 'AI-Assisted Workflows', text: 'Useful AI integrations and workflows where they solve a real problem — not AI added just for the sake of saying AI.', tags: ['AI', 'APIs', 'Automation'] },
  { n: '06', title: 'Launch & Deployment', text: 'Take a finished project from local code to a clean public launch with hosting, domain setup, responsive checks and basic SEO.', tags: ['GitHub', 'Cloudflare', 'SEO'] },
];

const projects = [
  { title: 'Masonry / Construction Website', type: 'Business Website Concept', repo: 'pateljiop/Demo', href: 'https://pateljiop.github.io/Demo/', screenshot: 'https://image.thum.io/get/width/1400/crop/900/https://pateljiop.github.io/Demo/', summary: 'A service-business style website focused on trust, services and enquiry flow.' },
  { title: 'Laundry Service Website', type: 'Local Business Concept', repo: 'pateljiop/Laundry-demo', href: 'https://pateljiop.github.io/Laundry-demo/', screenshot: 'https://image.thum.io/get/width/1400/crop/900/https://pateljiop.github.io/Laundry-demo/', summary: 'A conversion-oriented local service concept with a clear service presentation.' },
  { title: 'Roofing Website', type: 'Service Business Concept', repo: 'pateljiop/Roofing-demo', href: 'https://pateljiop.github.io/Roofing-demo/', screenshot: 'https://image.thum.io/get/width/1400/crop/900/https://pateljiop.github.io/Roofing-demo/', summary: 'A professional roofing-business concept designed around credibility and enquiries.' },
  { title: 'Property Maintenance Website', type: 'Service Business Concept', repo: 'pateljiop/mek-property-maintenance-demo', href: 'https://pateljiop.github.io/mek-property-maintenance-demo/', screenshot: 'https://image.thum.io/get/width/1400/crop/900/https://pateljiop.github.io/mek-property-maintenance-demo/', summary: 'A property-maintenance concept showing a practical service catalogue and contact journey.' },
];

const process = [
  ['01', 'Brief', 'Understand the business, audience, goal and what the website actually needs to achieve.'],
  ['02', 'Direction', 'Choose the right structure, content hierarchy and visual direction before overbuilding.'],
  ['03', 'Build', 'Develop the responsive experience with clean components, interactions and real content.'],
  ['04', 'Refine', 'Test mobile and desktop layouts, links, forms, spacing, performance and edge cases.'],
  ['05', 'Launch', 'Deploy, connect the domain and make the final handoff simple and usable.'],
];

const faqs = [
  ['Are these real client websites?', 'The projects shown here are demo/concept work created to demonstrate how I approach business websites. I do not present demo work as paid client work.'],
  ['What do you need from me?', 'Usually the business details, services, contact information, preferred direction and any existing assets. If you are unsure, I can help define the structure first.'],
  ['Can you work with an existing website?', 'Yes. A redesign can be approached around the existing content and functionality instead of rebuilding everything blindly.'],
  ['Do you also handle deployment?', 'Yes. Deployment, domain connection and basic launch checks can be included when the project requires them.'],
];

export default function FreelancePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden border-b border-border/60">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/.13),transparent_35%),radial-gradient(circle_at_10%_80%,hsl(var(--primary)/.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <BrandMark />
              <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[.18em] text-primary">Hariom Builds · Available for projects</div>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.04em] md:text-7xl lg:text-8xl">I build digital work that looks <span className="text-primary">serious.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">Websites, redesigns and practical automation for businesses and people who need something useful — not another generic template.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:opacity-90">See the work →</a>
                <a href="https://linkedin.com/in/pateljiop" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-background/60 px-6 py-3.5 font-semibold transition hover:border-primary/50 hover:bg-primary/5">Work with me</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground"><span>Web Development</span><span>Python</span><span>Automation</span><span>AI-assisted builds</span></div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-5 rounded-[2rem] bg-primary/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.4rem] border border-border/70 bg-background/80 p-5 md:p-7">
                  <div className="flex items-center justify-between border-b border-border/70 pb-4 font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground"><span>hariom-builds</span><span>01 / 05</span></div>
                  <div className="py-10"><img src="https://raw.githubusercontent.com/pateljiop/pateljiop/main/01_Primary_Mascot_Profile.png" alt="Hariom Builds brand mascot" className="mx-auto h-56 w-56 object-contain md:h-64 md:w-64" /><p className="mt-6 text-center font-mono text-xs uppercase tracking-[.2em] text-primary">Code · Create · Automate</p></div>
                  <div className="grid grid-cols-3 gap-2 border-t border-border/70 pt-4 text-center font-mono text-[10px] text-muted-foreground"><span>BUILD</span><span>REFINE</span><span>DEPLOY</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-card/20">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3 md:px-10">
            {[['01', 'No fake client claims', 'Demo work is clearly labelled. I would rather show what I can build than invent a portfolio.'], ['02', 'Built for the actual goal', 'The design follows the business problem, audience and conversion path — not a random template.'], ['03', 'Practical technology', 'I use code, APIs, Python and AI where they improve the result, not just to make the stack look impressive.']].map(([n, title, text]) => <div key={n} className="border-l border-primary/40 pl-5"><span className="font-mono text-xs text-primary">{n}</span><h2 className="mt-3 text-xl font-bold">{title}</h2><p className="mt-2 leading-7 text-muted-foreground">{text}</p></div>)}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Capabilities</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">What I can build for you.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">A focused set of services that matches the kind of work I actually build and can demonstrate.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <article key={service.n} className="group rounded-3xl border border-border bg-card/35 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/45 hover:bg-card/60"><div className="flex items-start justify-between"><span className="font-mono text-xs text-primary">{service.n}</span><span className="text-lg text-muted-foreground transition group-hover:text-primary">↗</span></div><h3 className="mt-8 text-2xl font-bold tracking-tight">{service.title}</h3><p className="mt-3 min-h-[84px] leading-7 text-muted-foreground">{service.text}</p><div className="mt-6 flex flex-wrap gap-2">{service.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>)}</div></article>)}
          </div>
        </section>

        <section id="work" className="border-y border-border/60 bg-card/20 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Selected work</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">Proof, not promises.</h2></div><a href="https://github.com/pateljiop" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">Browse GitHub →</a></div>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">These are demo/concept projects built to show the quality and direction of my work. Click any preview to open the deployed version.</p>
            <div className="mt-12 grid gap-7 lg:grid-cols-2">
              {projects.map((project, index) => <article key={project.repo} className="group overflow-hidden rounded-[1.7rem] border border-border bg-background/70"><a href={project.href} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden border-b border-border bg-muted" aria-label={`Open ${project.title} live demo`}><div className="absolute left-4 top-4 z-10 rounded-full border border-white/10 bg-black/70 px-3 py-1 font-mono text-[10px] text-white backdrop-blur">LIVE DEMO ↗</div><img src={project.screenshot} alt={`${project.title} website preview`} loading={index > 1 ? 'lazy' : 'eager'} className="h-72 w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]" /></a><div className="p-7"><div className="flex flex-wrap items-center justify-between gap-3"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-primary">{project.type}</span><span className="font-mono text-[10px] text-muted-foreground">{project.repo}</span></div><h3 className="mt-3 text-2xl font-bold">{project.title}</h3><p className="mt-2 leading-7 text-muted-foreground">{project.summary}</p><div className="mt-6 flex flex-wrap gap-3"><a href={project.href} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Open live demo ↗</a><a href={`https://github.com/${project.repo}`} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:border-primary/50">View source</a></div></div></article>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">The outcome</p><h2 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">You get more than a pretty screen.</h2><p className="mt-5 leading-8 text-muted-foreground">The goal is a usable result that can actually leave the portfolio and be used by a real person or business.</p></div><div className="grid gap-3 sm:grid-cols-2">{['Responsive implementation', 'Clear information hierarchy', 'Working navigation & CTAs', 'Mobile-first checks', 'Deployment-ready code', 'Basic SEO foundations', 'Clean project structure', 'Practical handoff'].map((item, i) => <div key={item} className="flex gap-4 rounded-2xl border border-border bg-card/30 p-5"><span className="font-mono text-xs text-primary">0{i + 1}</span><span className="font-semibold">{item}</span></div>)}</div></div>
        </section>

        <section id="process" className="border-y border-border/60 bg-card/20 py-24 md:py-32"><div className="mx-auto max-w-7xl px-6 md:px-10"><div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">How it works</p><h2 className="mt-3 text-4xl font-black md:text-6xl">Simple process. Serious execution.</h2></div><div className="mt-12 grid gap-3 md:grid-cols-5">{process.map(([n, title, text]) => <div key={n} className="rounded-2xl border border-border bg-background/50 p-6"><span className="font-mono text-xs text-primary">{n}</span><h3 className="mt-8 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></div></section>

        <section className="mx-auto max-w-4xl px-6 py-24 md:py-32"><p className="text-center font-mono text-xs uppercase tracking-[.2em] text-primary">FAQ</p><h2 className="mt-3 text-center text-4xl font-black md:text-5xl">Before we build.</h2><div className="mt-10 divide-y divide-border rounded-3xl border border-border bg-card/30 px-6">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold"><span>{question}</span><span className="text-xl text-primary transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-3 leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-28 md:px-10"><div className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-primary/5 p-8 text-center md:p-16"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/.16),transparent_55%)]" /><div className="relative"><BrandMark compact /><p className="mt-6 font-mono text-xs uppercase tracking-[.2em] text-primary">Have a project in mind?</p><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Let's build something worth showing.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">Send the idea, the problem or even a rough requirement. We can figure out the right scope from there.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><a href="https://linkedin.com/in/pateljiop" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20">Message me on LinkedIn ↗</a><Link href="/#contact" className="rounded-xl border border-border bg-background/60 px-7 py-3.5 font-semibold">Back to portfolio</Link></div></div></div></section>
      </main>
      <Footer />
    </div>
  );
}
