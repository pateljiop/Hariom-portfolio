'use client';

import { useState } from 'react';

const template = `Hi {{business}},

I came across your business while looking at {{industry}} companies in {{location}}.

I’m Hariom, a web developer behind Hariom Builds. I build modern, mobile-friendly websites for service businesses, focused on making services clearer and enquiries easier.

I’ve recently built several business website concepts, including roofing and property-maintenance projects:
https://hariom-portfolio.pages.dev/

I noticed {{observation}}

If improving your website is something you’re considering, I’d be happy to send over 2–3 specific ideas for your site.

No pressure at all — just thought it might be useful.

Best,
Hariom
Hariom Builds
Web Developer`;

export default function MailerPage() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('Quick website idea for your business');
  const [text, setText] = useState(template);
  const [status, setStatus] = useState('');

  async function send() {
    setStatus('Sending…');
    const response = await fetch('/api/mailer/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ to, subject, text }) });
    const data = await response.json();
    setStatus(response.ok ? '✓ Sent successfully' : `⚠ ${data.error || 'Send failed'}`);
  }

  return (
    <main className="min-h-screen bg-background px-5 py-10 text-foreground md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div><p className="font-mono text-xs uppercase tracking-[.25em] text-primary">Hariom Builds</p><h1 className="mt-2 text-4xl font-black">Private Mailer</h1><p className="mt-2 text-muted-foreground">Review → personalize → send from your own Gmail.</p></div>
          <a href="/api/mailer/auth" className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground">Connect Gmail</a>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <aside className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-bold">Lead checklist</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground"><li>✓ Use a verified public business email.</li><li>✓ Personalize the business, location and observation.</li><li>✓ Review the message before sending.</li><li>✓ Keep outreach relevant and low-volume.</li></ul>
            <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm"><strong>Tip:</strong> One specific observation about their website will make this much stronger than a generic blast.</div>
          </aside>
          <section className="rounded-2xl border border-border bg-card p-6">
            <label className="block text-sm font-medium">Recipient email<input value={to} onChange={e => setTo(e.target.value)} type="email" placeholder="owner@business.com" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" /></label>
            <label className="mt-5 block text-sm font-medium">Subject<input value={subject} onChange={e => setSubject(e.target.value)} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" /></label>
            <label className="mt-5 block text-sm font-medium">Message<textarea value={text} onChange={e => setText(e.target.value)} rows={18} className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 font-sans leading-6 outline-none focus:border-primary" /></label>
            <div className="mt-5 flex flex-wrap items-center gap-4"><button onClick={send} className="rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground">Send email</button><span className="text-sm text-muted-foreground">{status}</span></div>
          </section>
        </div>
      </div>
    </main>
  );
}
