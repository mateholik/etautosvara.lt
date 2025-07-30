'use client';

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { scrollToSection } from '@/lib/utils';

const HeroOption1: React.FC = () => {
  const handleScrollDown = () => {
    scrollToSection('services');
  };

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-gray-800' />

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 py-12 md:py-16 text-center'>
        <div className='max-w-5xl mx-auto'>
          {/* Detailing Studio Badge - Smaller, Supporting Role */}
          <div className='mb-4 animate-fade-in'>
            <span className='inline-block bg-accent/15 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 text-accent font-semibold text-sm uppercase tracking-wider'>
              Detailing Studio
            </span>
          </div>

          {/* Main Value Proposition - Dominant */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight'>
            <span className='block mb-2'>Profesionali</span>
            <span className='text-accent block'>automobilių priežiūra</span>
            <span className='block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-300 mt-4'>
              Jūsų automobilis nusipelno geriausio
            </span>
          </h1>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-accent transition-colors animate-bounce'
        aria-label='Scroll down'
      >
        <ChevronDownIcon className='w-8 h-8' />
      </button>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-pulse' />
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full animate-pulse delay-1000' />
      <div className='absolute top-1/2 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500' />
    </section>
  );
};

export default HeroOption1;
