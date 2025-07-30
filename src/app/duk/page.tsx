import React from 'react';

import FAQ from '@/components/FAQ';

import { getPageSchemas } from '@/lib/structured-data';
import { StructuredData } from '@/components/StructuredData';

// app/duk/page.tsx - FAQ Page Metadata
import type { Metadata } from 'next';
import { faqItems } from '@/lib/config';

export const metadata: Metadata = {
  title: 'DUK - Dažnai užduodami klausimai | ET Auto Švara Vilnius',
  description:
    'Atsakymai į populiariausius klausimus apie automobilio valymą, kėbulo poliravimą, cheminio valymo trukmę, kainas nuo 25€. Garantija, valymo produktai, vizitų užsakymas. Kiek laiko trunka valymas? Ar atvykstate į vietą? ☎️ +370 606 47 967',
  keywords: [
    'automobilio valymo klausimai',
    'detailing DUK Vilnius',
    'kiek trunka automobilio valymas',
    'automobilio valymo kainos klausimai',
    'cheminio valymo trukmė',
    'kėbulo poliravimo garantija',
    'automobilio valymo produktai',
    'vizito užsakymas automobilio valymui',
    'automobilio valymas namie',
    'kvapų šalinimas iš salono',
    'poliravimo efekto trukmė',
    'automobilio valymas žiemą',
    'ET Auto Švara klausimai',
    'automobilio priežiūros dažnumas',
    'profesionalus automobilio valymas Vilnius',
    'automobilio valymo garantija',
  ].join(', '),

  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',

  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://etautosvara.lt/duk',
    siteName: 'ET Auto Švara',
    title: 'Dažnai užduodami klausimai - ET Auto Švara',
    description:
      'Atsakymai į populiariausius klausimus apie automobilio valymą, kėbulo poliravimą, cheminio valymo trukmę, kainas. Sužinokite viską apie mūsų paslaugas.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara DUK - dažnai užduodami klausimai',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@etautosvara',
    creator: '@etautosvara',
    title: 'Dažnai užduodami klausimai - ET Auto Švara',
    description:
      'Atsakymai į populiariausius klausimus apie automobilio valymą: trukmė, kainos nuo 25€, garantija, valymo produktai. Susisiekite: +370 606 47 967',
    images: ['/og.jpg'],
  },

  alternates: {
    canonical: 'https://etautosvara.lt/duk',
    languages: {
      'lt-LT': 'https://etautosvara.lt/duk',
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
  },
};

export default function Duk() {
  const schemas = getPageSchemas('faq', {
    breadcrumbs: [
      { name: 'Pagrindinis', url: 'https://etautosvara.lt' },
      { name: 'DUK', url: 'https://etautosvara.lt/duk' },
    ],
    faqs: faqItems,
  });
  return (
    <>
      <StructuredData schema={schemas} />
      <FAQ faqItems={faqItems} />;
    </>
  );
}
