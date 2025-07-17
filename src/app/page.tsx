import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <Services />
      <FAQ />
      <WhyUs />
      <BeforeAfter />
      <Testimonials />
      <Contact />
    </main>
  );
}
