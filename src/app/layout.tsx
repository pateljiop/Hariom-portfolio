import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const siteUrl = 'https://hariom-portfolio.pages.dev';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hariom Builds — Hariom Patel | Web Developer',
    template: '%s | Hariom Builds',
  },
  description:
    'Hariom Builds is the personal technology brand of Hariom Patel — a web developer building websites, Python tools, AI-assisted solutions and practical automation.',
  keywords: [
    'Hariom Builds',
    'Hariom Patel',
    'Hariom Patel developer',
    'Hariom Builds web developer',
    'web developer India',
    'Python developer',
    'web development',
    'Python automation',
    'AI automation',
  ],
  authors: [{ name: 'Hariom Patel', url: 'https://linkedin.com/in/pateljiop' }],
  creator: 'Hariom Patel',
  publisher: 'Hariom Builds',
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Hariom Builds',
    title: 'Hariom Builds — Hariom Patel | Web Developer',
    description:
      'Websites, Python, AI-assisted solutions and practical automation by Hariom Patel.',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hariom Builds — Hariom Patel | Web Developer',
    description:
      'Websites, Python, AI-assisted solutions and practical automation by Hariom Patel.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'yKWRx6xDyhBiOY9X3_IOySFlVa7JZ823bUBKD4ljvw0',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Hariom Patel',
      url: siteUrl,
      jobTitle: 'Web Developer',
      sameAs: [
        'https://github.com/pateljiop',
        'https://linkedin.com/in/pateljiop',
      ],
      worksFor: {
        '@id': `${siteUrl}/#brand`,
      },
    },
    {
      '@type': 'Brand',
      '@id': `${siteUrl}/#brand`,
      name: 'Hariom Builds',
      url: siteUrl,
      description:
        'Personal technology brand of Hariom Patel focused on web development, Python, AI-assisted solutions and automation.',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Hariom Builds',
      url: siteUrl,
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className={manrope.className}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fhariomport2613back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </body>
    </html>
  );
}
