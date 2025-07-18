'use client';

import React, { useState, useEffect } from 'react';
import { StarIcon, SparklesIcon } from '@heroicons/react/24/solid';

const MercedesShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('mercedes-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id='mercedes-showcase'
      className='relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden'
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-500' />
      </div>

      {/* Interactive spotlight effect */}
      <div
        className='absolute pointer-events-none opacity-20'
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: 300,
          height: 300,
          background:
            'radial-gradient(circle, rgba(220, 38, 38, 0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s ease-out',
        }}
      />

      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content Side */}
          <div
            className={`space-y-8 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <SparklesIcon className='w-6 h-6 text-accent' />
                <span className='text-accent font-semibold uppercase tracking-wider text-sm'>
                  Mūsų Darbo Pavyzdys
                </span>
              </div>

              <h2 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
                Klasikinis
                <span className='block text-accent'>Mercedes-Benz</span>
              </h2>

              <p className='text-xl text-gray-300 leading-relaxed'>
                Štai kaip mes grąžiname blizgesį ir elegancją legendiniams
                automobiliams. Kiekvienas detalas yra kruopščiai išvalytas ir
                atnaujintas.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6'>
              <div className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10'>
                <div className='text-2xl font-bold text-accent'>25+</div>
                <div className='text-sm text-gray-400'>Metų patirtis</div>
              </div>
              <div className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10'>
                <div className='text-2xl font-bold text-accent'>100%</div>
                <div className='text-sm text-gray-400'>Kokybės garantija</div>
              </div>
              <div className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10'>
                <div className='text-2xl font-bold text-accent'>500+</div>
                <div className='text-sm text-gray-400'>Patenkintų klientų</div>
              </div>
            </div>

            {/* Features */}
            <div className='space-y-3'>
              {[
                'Profesionalūs valymo produktai',
                'Detalus vidaus valymas',
                'Išorės poliravimas ir apsauga',
                'Odos priežiūra ir kondicionavimas',
              ].map((feature, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <StarIcon className='w-5 h-5 text-accent' />
                  <span className='text-gray-300'>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`relative ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className='relative group'>
              {/* Main image with hover effects */}
              <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                <img
                  src='/mercedes.jpeg'
                  alt='Mercedes-Benz detailing result'
                  className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700'
                />

                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                {/* Floating elements */}
                <div className='absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-full p-2 transform group-hover:scale-110 transition-transform duration-300'>
                  <SparklesIcon className='w-5 h-5 text-white' />
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse' />
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000' />

              {/* Shine effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />
            </div>

            {/* Quote bubble */}
            <div className='absolute -bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl max-w-xs transform group-hover:scale-105 transition-transform duration-300'>
              <div className='text-gray-800 text-sm font-medium'>
                "Puikus darbas! Automobilis atrodo kaip naujas!"
              </div>
              <div className='text-gray-500 text-xs mt-1'>
                - Patenkintų klientų atsiliepimas
              </div>
              <div className='absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles */}
      <div className='absolute inset-0 pointer-events-none'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-accent rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MercedesShowcase;
