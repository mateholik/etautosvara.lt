import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
// import Hero2 from '@/components/Hero2';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import FAQ from '@/components/FAQ';
import VideoShowcase from '@/components/VideoShowcase';
import { befoAfterImages } from '@/lib/config';

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
