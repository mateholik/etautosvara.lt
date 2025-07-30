import Contact from '@/components/Contact';

// app/kontaktai/page.tsx - Contact Page Metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontaktai - Susisiekite su mumis | ET Auto Švara Vilnius',
  description:
    'Susisiekite su ET Auto Švara profesionalaus automobilio valymo paslaugoms. ☎️ +370 606 47 967 📧 info@etautosvara.lt 📍 Saulėtoji g. 8, Ližiškės, Vilnius. Užsisakykite paslaugą patogiu būdu - skambinkite arba rašykite.',
  keywords: [
    'ET Auto Švara kontaktai',
    'automobilio valymas Vilnius kontaktai',
    'telefono numeris automobilio valymui',
    'automobilio valymo paslaugų užsakymas',
    'ET Auto Švara telefonas',
    'automobilio valymas Ližiškės',
    'detailing paslaugos Vilnius kontaktai',
    'Saulėtoji gatvė automobilio valymas',
    'automobilio valymo įmonės kontaktai',
    'profesionalus automobilio valymas telefonas',
    'kėbulo poliravimas kontaktai',
    'cheminis automobilio valymas užsakymas',
    '+370 606 47 967',
    'info@etautosvara.lt',
    'automobilio valymas arti manęs',
    'automobilio valymo paslaugų užklausos forma',
  ].join(', '),

  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',

  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://etautosvara.lt/kontaktai',
    siteName: 'ET Auto Švara',
    title: 'Kontaktai - ET Auto Švara Vilnius',
    description:
      'Susisiekite su ET Auto Švara profesionalaus automobilio valymo paslaugoms. Telefonas: +370 606 47 967. Adresas: Saulėtoji g. 8, Ližiškės, Vilnius. Užsisakykite paslaugą lengvai.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara kontaktai - automobilio valymas Vilnius',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@etautosvara',
    creator: '@etautosvara',
    title: 'Kontaktai - ET Auto Švara Vilnius',
    description:
      'Susisiekite dėl profesionalaus automobilio valymo: ☎️ +370 606 47 967 📧 info@etautosvara.lt 📍 Saulėtoji g. 8, Ližiškės, Vilnius',
    images: ['/og.jpg'],
  },

  alternates: {
    canonical: 'https://etautosvara.lt/kontaktai',
    languages: {
      'lt-LT': 'https://etautosvara.lt/kontaktai',
    },
  },

  other: {
    'geo.region': 'LT-VL',
    'geo.placename': 'Vilnius, Lithuania',
    'geo.position': '54.73336855501128;25.426405439684676',
    ICBM: '54.73336855501128;25.426405239684676',
    'business:contact_data:street_address': 'Saulėtoji g. 8',
    'business:contact_data:locality': 'Ližiškės',
    'business:contact_data:region': 'Vilnius',
    'business:contact_data:postal_code': '13100',
    'business:contact_data:country_name': 'Lithuania',
    'business:contact_data:phone_number': '+370606047967',
    'business:contact_data:email': 'info@etautosvara.lt',
    'business:contact_data:facebook': 'https://www.facebook.com/etautosvara',
  },
};

export default function Home() {
  return <Contact />;
}
