import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import { siteMeta } from '../data/siteData'

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  author: siteMeta.author,
  metadataBase: new URL('https://mabidouz.com'),
  alternates: { canonical: 'https://mabidouz.com' },
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: 'https://mabidouz.com',
    siteName: 'MABIDOUZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.title,
    description: siteMeta.description,
  },
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-mab-black text-mab-offwhite">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
