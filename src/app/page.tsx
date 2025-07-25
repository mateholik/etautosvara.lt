import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import FAQ from '@/components/FAQ';
import VideoShowcase from '@/components/VideoShowcase';

export default function Home() {
  return (
    <>
      <Header />

      <Hero />
      {/* <Hero2 /> */}
      <Services visibleAmount={3} showAllCta={true} />

      <VideoShowcase />
      <FAQ visibleAmount={3} showAllCta={true} showBanner={false} />
      {/* <MercedesShowcase />
      <MocaiShowcase /> */}

      <BeforeAfter />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </>
  );
}
