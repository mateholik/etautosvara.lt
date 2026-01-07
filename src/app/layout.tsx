import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

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
          content='pPi18SfYFwGxN5jOdWPbXx5Kc1oXvaYMcEWU56AA6mc'
        />
        <Script id='gtm-base' strategy='afterInteractive'>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];
w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KNTKSBWQ');`}
        </Script>
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
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNTKSBWQ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <main className='min-h-screen bg-background'>
          <Header />
          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
