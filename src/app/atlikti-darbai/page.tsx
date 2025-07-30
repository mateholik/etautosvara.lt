import React from 'react';
import BeforeAfter from '@/components/BeforeAfter';
import { Image } from '@/types';
import { befoAfterImages } from '@/lib/config';
// app/atlikti-darbai/page.tsx - Before/After Gallery Page Metadata
import type { Metadata } from 'next';

import { getPageSchemas } from '@/lib/structured-data';
import { StructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title:
    'Atlikti darbai - ET Auto Švara | Prieš ir po nuotraukos, darbo eigos pavyzdžiai',
  description:
    'Pažiūrėkite mūsų atliktų darbų rezultatus 📸 Prieš ir po nuotraukos automobilio valymo, kėbulo poliravimo, cheminio valymo. Darbo eigos pavyzdžiai: žibintų poliravimas nuo 25€, keraminės dangos nuo 250€, PPF plėvelės nuo 500€. Profesionalūs rezultatai Vilniuje. ☎️ +370 606 47 967',
  keywords: [
    'automobilių valymo rezultatai Vilnius',
    'prieš ir po nuotraukos detailing',
    'automobilio valymo pavyzdžiai',
    'kėbulo poliravimo rezultatai',
    'cheminio valymo prieš po',
    'žibintų poliravimo rezultatai nuo 25€',
    'keraminių dangų rezultatai nuo 250€',
    'PPF plėvelių pavyzdžiai nuo 500€',
    'darbo eigos pavyzdžiai',
    'automobilio restauravimo nuotraukos',
    'detailing studio rezultatai Vilnius',
    'ET Auto Švara darbų pavyzdžiai',
    'profesionalus automobilio valymas nuotraukos',
    'automobilių estetikos rezultatai',
    'retro automobilių detailing pavyzdžiai',
    'motociklų valymo rezultatai',
  ].join(', '),

  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',

  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://etautosvara.lt/atlikti-darbai',
    siteName: 'ET Auto Švara',
    title: 'Atlikti darbai - Automobilio valymo rezultatai | ET Auto Švara',
    description:
      'Realūs mūsų darbo rezultatai: prieš ir po nuotraukos automobilio valymo, kėbulo poliravimo, cheminio valymo. Darbo eigos pavyzdžiai su skaidriomis kainomis nuo 25€.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara atlikti darbai - automobilio valymo rezultatai',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@etautosvara',
    creator: '@etautosvara',
    title: 'Atlikti darbai - Automobilio valymo rezultatai',
    description:
      'Realūs darbo rezultatai: prieš ir po nuotraukos automobilio valymo, kėbulo poliravimo, cheminio valymo. Žibintų poliravimas nuo 25€, keraminės dangos nuo 250€.',
    images: ['/og.jpg'],
  },

  alternates: {
    canonical: 'https://etautosvara.lt/atlikti-darbai',
    languages: {
      'lt-LT': 'https://etautosvara.lt/atlikti-darbai',
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

export default function AtliktiDarbai() {
  const allImages: Image[] = Array.from({ length: 193 }, (_, i) => ({
    id: i + 1,
    src: `/darbu-pavyzdziai/img_${i + 1}.JPG`,
    alt: 'Darbų pavyzdys',
  }));
  const schemas = getPageSchemas('default', {
    breadcrumbs: [
      { name: 'Pagrindinis', url: 'https://etautosvara.lt' },
      { name: 'Atlikti darbai', url: 'https://etautosvara.lt/atlikti-darbai' },
    ],
  });
  return (
    <>
      <StructuredData schema={schemas} />
      <BeforeAfter
        images={befoAfterImages}
        title='Prieš ir po'
        subTitle='Pažiūrėkite, kaip keičiasi automobiliai po mūsų profesionalių paslaugų'
      />
      <BeforeAfter
        images={allImages}
        title='Iš darbo eigos'
        subTitle='Daugiau pavyzdžių iš įvairių darbų stadijų'
      />
    </>
  );
}
