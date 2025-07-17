'use client';

import React from 'react';
import { Button } from './ui/Button';
import { PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { scrollToSection, formatPhoneNumber } from '@/lib/utils';

const Hero: React.FC = () => {
  const phoneNumber = '+370 6 06 47 967';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleLearnMoreClick = () => {
    scrollToSection('services');
  };

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
      <div className='relative z-10 container mx-auto px-4 py-20 text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Main Heading */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in'>
            Profesionalus{' '}
            <span className='text-accent'>automobilio valymas</span>
          </h1>

          {/* Subheading */}
          <p className='text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in max-w-3xl mx-auto'>
            Kokybė, kuri matoma. Patikimas partneris jūsų automobilio
            priežiūrai.
          </p>

          {/* Key Benefits */}
          {/* <div className='flex flex-wrap justify-center gap-4 md:gap-8 mb-12 animate-fade-in'>
            <div className='flex items-center text-white'>
              <span className='text-accent mr-2'>✓</span>
              <span className='text-sm md:text-base'>
                Profesionalūs specialistai
              </span>
            </div>
            <div className='flex items-center text-white'>
              <span className='text-accent mr-2'>✓</span>
              <span className='text-sm md:text-base'>Kokybės garantija</span>
            </div>
            <div className='flex items-center text-white'>
              <span className='text-accent mr-2'>✓</span>
              <span className='text-sm md:text-base'>Modernūs įrengimai</span>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in'>
            <Button
              onClick={handlePhoneClick}
              variant='primary'
              size='lg'
              className='flex items-center gap-3 text-lg px-8 py-4 shadow-2xl hover:shadow-accent/20 transition-all duration-300 transform hover:scale-105'
            >
              <PhoneIcon className='w-6 h-6' />
              Skambinti dabar
            </Button>

            <Button
              onClick={handleLearnMoreClick}
              variant='outline'
              size='lg'
              className='border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 transition-all duration-300 transform hover:scale-105'
            >
              Sužinoti daugiau
            </Button>
          </div>

          {/* Contact Info */}
          <div className='text-center animate-fade-in'>
            <p className='text-gray-400 mb-2'>Skambinkite dabar:</p>
            <a
              href={`tel:${phoneNumber}`}
              className='text-2xl md:text-3xl font-bold text-white hover:text-accent transition-colors'
            >
              {formatPhoneNumber(phoneNumber)}
            </a>
          </div>
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
