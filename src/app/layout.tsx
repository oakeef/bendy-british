import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const nunito = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Judy Roberts Yoga',
  description: 'Specialized yoga instruction for figure skaters and all bodies. Private classes, retreats, and more. Join the journey to balance, strength, and inner peace.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${nunito.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
