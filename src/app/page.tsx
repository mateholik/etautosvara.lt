import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import Hero2 from '@/components/Hero2';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import FAQ from '@/components/FAQ';
import VideoShowcase from '@/components/VideoShowcase';
import { befoAfterImages } from '@/lib/config';
// app/page.tsx - Homepage Metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'ET Auto Švara - Profesionalus automobilio valymas Vilniuje | Detailing Studio',
  description:
    'Premium automobilio valymas Vilniuje ⭐ Cheminis salono valymas nuo 250€, kėbulo poliravimas, keraminės dangos. Profesionalūs specialistai, garantija. ☎️ +370 606 47 967',
  keywords: [
    'automobilio valymas Vilnius',
    'detailing studio Vilnius',
    'cheminis salono valymas',
    'kėbulo poliravimas',
    'keraminės dangos',
    'profesionalus automobilio valymas',
    'ET Auto Švara',
    'automobilių priežiūra Ližiškės',
    'žibintų poliravimas',
    'automobilio vaškavimas',
  ].join(', '),

  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',

  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    url: 'https://etautosvara.lt',
    siteName: 'ET Auto Švara',
    title: 'ET Auto Švara - Detailing Studio Vilniuje',
    description:
      'Profesionalus automobilio valymas ir priežiūra Vilniuje. Cheminis salono valymas, kėbulo poliravimas, keraminės dangos. Geriausių specialistų komanda.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara - Profesionalus automobilio valymas Vilniuje',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@etautosvara',
    creator: '@etautosvara',
    title: 'ET Auto Švara - Detailing Studio Vilniuje',
    description:
      'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas nuo 250€, kėbulo poliravimas, keraminės dangos. Skambinkite: +370 606 47 967',
    images: ['/og.jpg'],
  },

  alternates: {
    canonical: 'https://etautosvara.lt',
    languages: {
      'lt-LT': 'https://etautosvara.lt',
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

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Hero2 /> */}
      <Services visibleAmount={3} showAllCta={true} />
      <VideoShowcase />
      <FAQ visibleAmount={3} showAllCta={true} showBanner={false} />
      <BeforeAfter
        images={befoAfterImages}
        title='Prieš ir po'
        subTitle='Pažiūrėkite, kaip keičiasi automobiliai po mūsų profesionalių paslaugų'
        visibleAmount={10}
        showAllCta={true}
      />
    </>
  );
}
