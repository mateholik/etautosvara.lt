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
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary via-gray-900 to-gray-800' />

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+CjwvZz4KPC9nPgo8L3N2Zz4=')] bg-repeat" />
      </div>

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 py-12 md:py-16 text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Main Heading */}
          <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight'>
            <span className='block mb-1'>Profesionalus</span>
            <span className='text-accent'>automobilio valymas</span>
          </h1>

          {/* Detailing Studio Badge */}
          <div className='mb-6 md:mb-8 animate-fade-in'>
            <span className='inline-block bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-accent font-medium text-xs md:text-xs uppercase tracking-wider'>
              Detailing Studio
            </span>
          </div>

          {/* Subheading */}
          <p className='text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-0 animate-fade-in max-w-3xl mx-auto leading-relaxed px-4'>
            Kokybė, kuri matoma. <br /> Patikimas partneris jūsų automobilio
            priežiūrai.
          </p>
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

export default Hero;
