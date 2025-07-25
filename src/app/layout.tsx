import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title:
    'ET Auto Švara - Profesionalus automobilio valymas | Vilnius | Kairėnai',
  description:
    'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos. Skambinkite: +370 6 06 47 967',
  keywords:
    'automobilio valymas, cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos, Vilnius, ET Auto Švara',
  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://etautosvara.lt'),
  alternates: {
    canonical: '/',
    languages: {
      'lt-LT': '/',
    },
  },
  openGraph: {
    title: 'ET Auto Švara - Profesionalus automobilio valymas',
    description:
      'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos.',
    url: 'https://etautosvara.lt',
    siteName: 'ET Auto Švara',
    locale: 'lt_LT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara - Profesionalus automobilio valymas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ET Auto Švara - Profesionalus automobilio valymas',
    description:
      'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Structured Data for LocalBusiness
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ET Auto Švara',
  description: 'Profesionalus automobilio valymas Vilniuje',
  url: 'https://etautosvara.lt',
  telephone: '+370606047967',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Saulėtoji g. 8',
    addressLocality: 'Ližiškės',
    addressRegion: 'Vilnius',
    addressCountry: 'LT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.7,
    longitude: 25.2,
  },
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-15:00'],
  priceRange: '€€',
  areaServed: {
    '@type': 'City',
    name: 'Vilnius',
  },
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 54.7,
      longitude: 25.2,
    },
    geoRadius: '20000',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automobilio valymo paslaugos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automobilio vaškavimas',
          description: 'Profesionalus automobilio vaškavimas',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '80',
          priceCurrency: 'EUR',
          eligibleQuantity: {
            '@type': 'QuantitativeValue',
            unitText: 'projektas',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Žibintų poliravimas',
          description: 'Profesionalus žibintų poliravimas',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '25',
          priceCurrency: 'EUR',
          eligibleQuantity: {
            '@type': 'QuantitativeValue',
            unitText: 'vnt',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cheminis interjero valymas',
          description: 'Profesionalus cheminis interjero valymas',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '150',
          priceCurrency: 'EUR',
          eligibleQuantity: {
            '@type': 'QuantitativeValue',
            unitText: 'projektas',
          },
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
  },
  sameAs: ['https://www.facebook.com/etautosvara'],
};

// Google Analytics ID - replace with actual ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='lt' className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#1a1a1a' />
        <meta
          name='google-site-verification'
          content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `}
        </Script>

        <main className='min-h-screen bg-background'>
          <Header />
          {children}
          <ContactCTA />
        </main>
      </body>
    </html>
  );
}
