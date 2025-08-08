'use client';

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { scrollToSection } from '@/lib/utils';

const Hero: React.FC = () => {
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

      {/* Molecular Pattern Background */}
      <div className='absolute inset-0 opacity-15'>
        <svg
          className='w-full h-full'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 400 400'
        >
          <defs>
            {/* Gradient for molecules */}
            <radialGradient id='moleculeGradient' cx='50%' cy='50%' r='50%'>
              <stop offset='0%' stopColor='currentColor' stopOpacity='0.8' />
              <stop offset='100%' stopColor='currentColor' stopOpacity='0.2' />
            </radialGradient>

            {/* Pattern definition */}
            <pattern
              id='molecularPattern'
              x='0'
              y='0'
              width='200'
              height='200'
              patternUnits='userSpaceOnUse'
            >
              <g className='text-accent'>
                {/* Central molecule cluster */}
                <circle cx='100' cy='100' r='8' fill='url(#moleculeGradient)' />
                <circle cx='130' cy='80' r='5' fill='url(#moleculeGradient)' />
                <circle cx='70' cy='85' r='6' fill='url(#moleculeGradient)' />
                <circle cx='85' cy='140' r='4' fill='url(#moleculeGradient)' />
                <circle cx='145' cy='125' r='7' fill='url(#moleculeGradient)' />

                {/* Connection lines */}
                <line
                  x1='100'
                  y1='100'
                  x2='130'
                  y2='80'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.4'
                />
                <line
                  x1='100'
                  y1='100'
                  x2='70'
                  y2='85'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.4'
                />
                <line
                  x1='100'
                  y1='100'
                  x2='85'
                  y2='140'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.4'
                />
                <line
                  x1='100'
                  y1='100'
                  x2='145'
                  y2='125'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.4'
                />
                <line
                  x1='130'
                  y1='80'
                  x2='145'
                  y2='125'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />

                {/* Secondary cluster */}
                <circle cx='50' cy='50' r='6' fill='url(#moleculeGradient)' />
                <circle cx='30' cy='65' r='4' fill='url(#moleculeGradient)' />
                <circle cx='65' cy='30' r='5' fill='url(#moleculeGradient)' />
                <line
                  x1='50'
                  y1='50'
                  x2='30'
                  y2='65'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />
                <line
                  x1='50'
                  y1='50'
                  x2='65'
                  y2='30'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />

                {/* Third cluster */}
                <circle cx='180' cy='60' r='5' fill='url(#moleculeGradient)' />
                <circle cx='160' cy='40' r='3' fill='url(#moleculeGradient)' />
                <circle cx='195' cy='45' r='4' fill='url(#moleculeGradient)' />
                <line
                  x1='180'
                  y1='60'
                  x2='160'
                  y2='40'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />
                <line
                  x1='180'
                  y1='60'
                  x2='195'
                  y2='45'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />

                {/* Bottom cluster */}
                <circle cx='40' cy='170' r='4' fill='url(#moleculeGradient)' />
                <circle cx='60' cy='185' r='5' fill='url(#moleculeGradient)' />
                <circle cx='25' cy='190' r='3' fill='url(#moleculeGradient)' />
                <line
                  x1='40'
                  y1='170'
                  x2='60'
                  y2='185'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />
                <line
                  x1='40'
                  y1='170'
                  x2='25'
                  y2='190'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />

                {/* Right side cluster */}
                <circle cx='170' cy='160' r='6' fill='url(#moleculeGradient)' />
                <circle cx='185' cy='180' r='4' fill='url(#moleculeGradient)' />
                <circle cx='155' cy='175' r='5' fill='url(#moleculeGradient)' />
                <line
                  x1='170'
                  y1='160'
                  x2='185'
                  y2='180'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />
                <line
                  x1='170'
                  y1='160'
                  x2='155'
                  y2='175'
                  stroke='currentColor'
                  strokeWidth='1'
                  opacity='0.3'
                />
              </g>
            </pattern>
          </defs>

          <rect width='100%' height='100%' fill='url(#molecularPattern)' />
        </svg>
      </div>

      {/* Animated floating molecules */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Large floating molecule */}
        <div className='absolute top-1/4 left-1/4 animate-float'>
          <svg width='60' height='60' className='text-accent opacity-20'>
            <circle cx='30' cy='30' r='8' fill='currentColor' />
            <circle cx='15' cy='15' r='4' fill='currentColor' />
            <circle cx='45' cy='20' r='5' fill='currentColor' />
            <circle cx='20' cy='45' r='3' fill='currentColor' />
            <line
              x1='30'
              y1='30'
              x2='15'
              y2='15'
              stroke='currentColor'
              strokeWidth='1'
            />
            <line
              x1='30'
              y1='30'
              x2='45'
              y2='20'
              stroke='currentColor'
              strokeWidth='1'
            />
            <line
              x1='30'
              y1='30'
              x2='20'
              y2='45'
              stroke='currentColor'
              strokeWidth='1'
            />
          </svg>
        </div>

        {/* Medium floating molecule */}
        <div className='absolute top-3/4 right-1/4 animate-float-delayed'>
          <svg width='40' height='40' className='text-white opacity-15'>
            <circle cx='20' cy='20' r='6' fill='currentColor' />
            <circle cx='10' cy='10' r='3' fill='currentColor' />
            <circle cx='30' cy='15' r='4' fill='currentColor' />
            <line
              x1='20'
              y1='20'
              x2='10'
              y2='10'
              stroke='currentColor'
              strokeWidth='1'
            />
            <line
              x1='20'
              y1='20'
              x2='30'
              y2='15'
              stroke='currentColor'
              strokeWidth='1'
            />
          </svg>
        </div>

        {/* Small floating molecule */}
        <div className='absolute top-1/2 right-1/6 animate-float-slow'>
          <svg width='30' height='30' className='text-accent opacity-25'>
            <circle cx='15' cy='15' r='4' fill='currentColor' />
            <circle cx='8' cy='8' r='2' fill='currentColor' />
            <circle cx='22' cy='10' r='3' fill='currentColor' />
            <line
              x1='15'
              y1='15'
              x2='8'
              y2='8'
              stroke='currentColor'
              strokeWidth='1'
            />
            <line
              x1='15'
              y1='15'
              x2='22'
              y2='10'
              stroke='currentColor'
              strokeWidth='1'
            />
          </svg>
        </div>
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
            <span className='block'>Profesionali</span>
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

      {/* Enhanced Floating Elements with molecular theme */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-pulse backdrop-blur-sm' />
      <div className='absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full animate-pulse delay-1000 backdrop-blur-sm' />
      <div className='absolute top-1/2 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-500 backdrop-blur-sm' />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(360deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
