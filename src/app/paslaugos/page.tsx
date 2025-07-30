import MercedesShowcase from '@/components/MercedesShowcase';
import MocaiShowcase from '@/components/MocaiShowcase';
import Services from '@/components/Services';

// app/paslaugos/page.tsx - Services Page Metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Paslaugos - ET Auto Švara | Kėbulo poliravimas nuo 250€, cheminis valymas nuo 250€, žibintų poliravimas nuo 25€',
  description:
    'Automobilio priežiūros paslaugos su aiškia kainodara: kėbulo poliravimas nuo 250€, cheminis interjero valymas nuo 250€, keraminės dangos nuo 250€, žibintų poliravimas nuo 25€, vaškavimas nuo 80€, PPF plėvelės nuo 500€. Retro automobilių ir motociklų detailing Vilniuje. ☎️ +370 606 47 967',
  keywords: [
    'automobilio kėbulo poliravimas nuo 250€',
    'cheminis interjero valymas nuo 250€',
    'keraminės dangos nuo 250€',
    'žibintų poliravimas nuo 25€ Vilnius',
    'automobilio vaškavimas nuo 80€',
    'PPF plėvelės nuo 500€',
    'automobilių detailing kainos Vilnius',
    'pigus žibintų poliravimas',
    'retro automobilių detailing',
    'motociklų valymas Vilnius',
    'interjero detalių poliravimas nuo 35€',
    'automobilio išorės valymas nuo 50€',
    'profesionalus detailing Vilnius',
    'ET Auto Švara kainos',
    'automobilių priežiūra Ližiškės',
    'detailing studio kainos',
  ].join(', '),

  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',

  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://etautosvara.lt/paslaugos',
    siteName: 'ET Auto Švara',
    title: 'Automobilio priežiūros paslaugos - ET Auto Švara Vilniuje',
    description:
      'Automobilio priežiūros paslaugos su skaidriomis kainomis: kėbulo poliravimas nuo 250€, cheminis valymas nuo 250€, žibintų poliravimas nuo 25€, vaškavimas nuo 80€. Retro automobilių ir motociklų detailing Vilniuje.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara paslaugos - Automobilio priežiūra Vilniuje',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@etautosvara',
    creator: '@etautosvara',
    title: 'Automobilio priežiūros paslaugos - ET Auto Švara',
    description:
      'Automobilio detailing paslaugos su aiškiomis kainomis: kėbulo poliravimas nuo 250€, cheminis valymas nuo 250€, žibintų poliravimas nuo 25€, vaškavimas nuo 80€, PPF plėvelės nuo 500€.',
    images: ['/og.jpg'],
  },

  alternates: {
    canonical: 'https://etautosvara.lt/paslaugos',
    languages: {
      'lt-LT': 'https://etautosvara.lt/paslaugos',
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

export default function Paslaugos() {
  return (
    <>
      <Services />
      <MercedesShowcase />
      <MocaiShowcase />
    </>
  );
}
