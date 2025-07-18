'use client';

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { scrollToSection } from '@/lib/utils';

const Hero: React.FC = () => {
  const handleScrollDown = () => {
    scrollToSection('about');
  };

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Mercedes Background Image */}
      <div className='absolute inset-0'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: 'url(/mercedes.jpeg)',
            filter: 'brightness(0.4) contrast(1.1)',
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40' />
      </div>

      {/* Animated floating particles */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse opacity-60' />
        <div className='absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-300 opacity-40' />
        <div className='absolute bottom-40 left-20 w-3 h-3 bg-accent/60 rounded-full animate-pulse delay-700' />
        <div className='absolute bottom-60 right-10 w-2 h-2 bg-white/60 rounded-full animate-pulse delay-1000' />
      </div>

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 py-12 md:py-16 text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Main Heading */}
          <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight'>
            <span className='block mb-1'>Profesionalus</span>
            <span className='text-accent drop-shadow-lg'>
              automobilio valymas
            </span>
          </h1>

          {/* Detailing Studio Badge */}
          <div className='mb-6 md:mb-8 animate-fade-in'>
            <span className='inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-accent font-medium text-xs md:text-xs uppercase tracking-wider shadow-lg'>
              Detailing Studio
            </span>
          </div>

          {/* Subheading */}
          <p className='text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-0 animate-fade-in max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-md'>
            Kokybė, kuri matoma. <br /> Patikimas partneris jūsų automobilio
            priežiūrai.
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition-colors animate-bounce drop-shadow-lg'
        aria-label='Scroll down'
      >
        <ChevronDownIcon className='w-8 h-8' />
      </button>

      {/* Corner accent elements */}
      <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent' />
      <div className='absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/15 to-transparent' />
    </section>
  );
};

export default Hero;
