import About from '@/components/About';
import type { Metadata } from 'next';

import { getPageSchemas } from '@/lib/structured-data';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title:
    'Apie mus - ET Auto Švara | Profesionalūs automobilio valymo specialistai Vilniuje',
  description:
    'Susipažinkite su ET Auto Švara komanda 👥 Automobilio estetikos specialistai su daugiamate patirtimi. Keraminės dangos, PPF plėvelės, kėbulo poliravimas. Dirbame Kairėnuose ir Ližiškėse. ☎️ +370 606 47 967',
  keywords: [
    'apie ET Auto Švara',
    'automobilio estetikos specialistai',
    'profesionalūs automobilio valytojai Vilnius',
    'keraminės dangos specialistai',
    'PPF plėvelės Vilnius',
    'kėbulo poliravimo meistrai',
    'automobilio valymas Kairėnai',
    'detailing studio komanda',
    'automobilių priežiūros ekspertai',
    'sertifikuoti specialistai',
  ].join(', '),

  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',

  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://etautosvara.lt/apie-mus',
    siteName: 'ET Auto Švara',
    title: 'Apie ET Auto Švara - Automobilio estetikos specialistų komanda',
    description:
      'Susipažinkite su mūsų komanda ir patirtimi automobilio estetikos srityje. Keraminės dangos, PPF plėvelės, profesionalus kėbulo poliravimas Vilniuje.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara komanda - automobilio estetikos specialistai',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@etautosvara',
    creator: '@etautosvara',
    title: 'Apie ET Auto Švara - Profesionalūs automobilio valymo specialistai',
    description:
      'Automobilio estetikos specialistų komanda su daugiamate patirtimi. Keraminės dangos, PPF plėvelės, kėbulo poliravimas Vilniuje. Skambinkite: +370 606 47 967',
    images: ['/og.jpg'],
  },

  alternates: {
    canonical: 'https://etautosvara.lt/apie-mus',
    languages: {
      'lt-LT': 'https://etautosvara.lt/apie-mus',
    },
  },

  other: {
    'geo.region': 'LT-VL',
    'geo.placename': 'Vilnius, Lithuania',
    'geo.position': '54.73336855501128;25.426405239684676',
    ICBM: '54.73336855501128;25.426405239684676',
    'business:contact_data:street_address': 'Saulėtoji g. 8',
    'business:contact_data:locality': 'Ližiškės',
    'business:contact_data:region': 'Vilnius',
    'business:contact_data:postal_code': '13100',
    'business:contact_data:country_name': 'Lithuania',
    'business:contact_data:phone_number': '+370606047967',
    'business:contact_data:email': 'info@etautosvara.lt',
  },
};

export default function ApieMus() {
  const schemas = getPageSchemas('about', {
    breadcrumbs: [
      { name: 'Pagrindinis', url: 'https://etautosvara.lt' },
      { name: 'Apie mus', url: 'https://etautosvara.lt/apie-mus' },
    ],
  });
  return (
    <>
      <StructuredData schema={schemas} />
      <About />
    </>
  );
}
