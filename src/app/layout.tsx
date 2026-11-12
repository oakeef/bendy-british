import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
});

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Judy Roberts Yoga',
  description:
    'Specialized yoga instruction for all bodies. Private classes, retreats, and more. Join the journey to balance, strength, and inner peace.',
  metadataBase: new URL('https://judyrobertsyoga.com'),
  openGraph: {
    title: 'Judy Roberts Yoga',
    description:
      'Specialized yoga instruction for all bodies. Private classes, retreats, and more. Join the journey to balance, strength, and inner peace.',
    url: 'https://judyrobertsyoga.com',
    siteName: 'Judy Roberts Yoga',
    images: [
      {
        url: '/images/yogacandles.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoga practice with candles',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Judy Roberts Yoga',
    description:
      'Specialized yoga instruction for all bodies.',
    images: ['/images/yogacandles.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/logo.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Judy Roberts Yoga',
    description:
      'Specialized yoga instruction for all bodies',
    url: 'https://judyrobertsyoga.com',
    telephone: '',
    email: 'judyrobertsyoga@gmail.com',
    sameAs: [
      'https://www.instagram.com/judyrobertsyoga/',
      'https://youtube.com',
    ],
    image: '/images/yogacandles.jpg',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: '',
      addressCountry: 'CA',
    },
    areaServed: ['CA'],
    knowsAbout: [
      'Yoga Teaching',
      'Figure Skating Fitness',
      'Yin Yoga',
      'Restorative Yoga',
      'Private Classes',
      'Yoga Retreats',
    ],
    award: 'Certified Yoga Teacher - Yoga Alliance Canada',
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${nunito.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
