import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Talentrelo — PR Agency for EB-1 & O-1 Visa Applicants',
  description: 'We build the public profile that immigration attorneys need. Media features, conference speaking, and expert judging — engineered for EB-1 and O-1 visa approval.',
  metadataBase: new URL('https://talentrelo.com'),
  alternates: { canonical: 'https://talentrelo.com/' },
  openGraph: {
    type: 'website',
    url: 'https://talentrelo.com/',
    title: 'Talentrelo — PR Agency for EB-1 & O-1 Visa Applicants',
    description: 'We build the public profile that immigration attorneys need. Media features, conference speaking, and expert judging — engineered for EB-1 and O-1 visa approval.',
    images: [{ url: 'https://talentrelo.com/og-image.jpg', width: 1200, height: 630 }],
    siteName: 'Talentrelo',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talentrelo — PR Agency for EB-1 & O-1 Visa Applicants',
    description: 'We build the public profile that immigration attorneys need. Media features, conference speaking, and expert judging — engineered for EB-1 and O-1 visa approval.',
    images: ['https://talentrelo.com/og-image.jpg'],
  },
  icons: { icon: '/favicon.svg' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://talentrelo.com/#organization',
      name: 'Talentrelo',
      url: 'https://talentrelo.com/',
      description: 'A PR agency specializing in building public profiles for EB-1 and O-1 visa applicants — media placements, conference speaking, and expert judging evidence.',
      foundingDate: '2022',
      areaServed: 'Worldwide',
      knowsAbout: ['EB-1A visa', 'O-1A visa', 'EB-1B visa', 'immigration evidence', 'PR for visa applications'],
      sameAs: ['https://github.com/wethti/immigram'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://talentrelo.com/#website',
      url: 'https://talentrelo.com/',
      name: 'Talentrelo',
      publisher: { '@id': 'https://talentrelo.com/#organization' },
    },
    {
      '@type': 'Service',
      name: 'EB-1 & O-1 Visa PR Strategy',
      provider: { '@id': 'https://talentrelo.com/#organization' },
      description: 'Evidence-building for extraordinary ability visa petitions: major media placements, Tier-1 conference speaking, and expert judging credits.',
      serviceType: 'Public Relations',
      audience: { '@type': 'Audience', audienceType: 'EB-1A, EB-1B, O-1A, O-1B visa applicants' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GZ8LLGWNE2" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GZ8LLGWNE2');
        `}</Script>
      </body>
    </html>
  )
}
