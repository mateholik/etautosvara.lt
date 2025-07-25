import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Hero2 from '@/components/Hero2';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import MercedesShowcase from '@/components/MercedesShowcase';
import MocaiShowcase from '@/components/MocaiShowcase';
import VideoShowcase from '@/components/VideoShowcase';
import Link from 'next/link';

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
