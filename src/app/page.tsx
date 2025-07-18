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

export default function Home() {
  return (
    <main className='min-h-screen bg-background'>
      <Header />
      <Hero />
      <Hero2 />
      <About />
      <Services />
      <FAQ />
      <MercedesShowcase />
      <WhyUs />
      <BeforeAfter />
      <Testimonials />
      <Contact />
    </main>
  );
}
