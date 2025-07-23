'use client';

import React, { useState, useEffect } from 'react';
import {
  StarIcon,
  SparklesIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const MocaiShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [mouseEnd, setMouseEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array of motorcycle images for the slider
  const images = [
    {
      src: '/mocai/img_1.JPG',
      alt: 'Motociklo valymas ir priežiūra',
      title: 'Sportinis motociklas',
    },
    {
      src: '/mocai/img_2.JPG',
      alt: 'Motociklo detailing paslaugos',
      title: 'Klasikinis motociklas',
    },
    // Add more motorcycle images as needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('mocai-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSpotlightMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay is disabled as requested

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.targetTouches[0].clientX;
    setTouchEnd(currentX);

    // Calculate drag offset for visual feedback
    const offset = currentX - touchStart;
    setDragOffset(Math.max(-200, Math.min(200, offset))); // Limit drag distance
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setDragOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Animate back to position
    setIsTransitioning(true);
    setDragOffset(0);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    if (isLeftSwipe && images.length > 1) {
      nextSlide();
    } else if (isRightSwipe && images.length > 1) {
      prevSlide();
    }
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseEnd(0);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    setMouseEnd(currentX);

    // Calculate drag offset for visual feedback
    const offset = currentX - mouseStart;
    setDragOffset(Math.max(-200, Math.min(200, offset))); // Limit drag distance
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (!mouseStart || !mouseEnd) {
      setDragOffset(0);
      return;
    }

    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Animate back to position
    setIsTransitioning(true);
    setDragOffset(0);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    if (isLeftSwipe && images.length > 1) {
      nextSlide();
    } else if (isRightSwipe && images.length > 1) {
      prevSlide();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  return (
    <section
      id='mocai-showcase'
      className='relative py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden'
      onMouseMove={handleSpotlightMove}
    >
      {/* Modern geometric background */}
      <div className='absolute inset-0'>
        {/* Diagonal lines */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
          <div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent transform -skew-x-12' />
          <div className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent to-transparent transform skew-x-12' />
          <div className='absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent transform -skew-x-6' />
        </div>

        {/* Hexagonal shapes */}
        <div className='absolute top-20 left-20 w-32 h-32 border border-accent/20 transform rotate-45 animate-pulse' />
        <div className='absolute bottom-32 right-20 w-24 h-24 border border-white/20 transform rotate-12 animate-pulse delay-1000' />
        <div className='absolute top-1/2 right-1/4 w-16 h-16 border border-accent/20 transform -rotate-45 animate-pulse delay-500' />

        {/* Glowing orbs */}
        <div className='absolute top-40 right-40 w-2 h-2 bg-accent rounded-full animate-ping' />
        <div className='absolute bottom-40 left-40 w-3 h-3 bg-white rounded-full animate-ping delay-700' />
        <div className='absolute top-60 left-60 w-1 h-1 bg-accent rounded-full animate-ping delay-1500' />
      </div>

      {/* Grid overlay */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.5) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        />
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
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center'>
          {/* Image Slider Side */}
          <div
            className={`relative ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div className='relative'>
              {/* Image Slider */}
              <div
                className='relative overflow-hidden rounded-2xl shadow-2xl group cursor-grab active:cursor-grabbing'
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className='relative'
                  style={{
                    transform: `translateX(${dragOffset}px)`,
                    transition: isTransitioning
                      ? 'transform 0.3s ease-out'
                      : 'none',
                  }}
                >
                  <img
                    src={images[currentSlide].src}
                    alt={images[currentSlide].alt}
                    className='w-full h-auto select-none'
                    draggable={false}
                  />

                  {/* Overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  {/* Image title */}
                  <div className='absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2'>
                    <span className='text-white font-medium text-sm'>
                      {images[currentSlide].title}
                    </span>
                  </div>

                  {/* Floating elements */}
                  <div className='absolute top-4 right-4 bg-accent/90 backdrop-blur-sm rounded-full p-2'>
                    <SparklesIcon className='w-5 h-5 text-white' />
                  </div>
                </div>

                {/* Navigation arrows (only show if more than 1 image) */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-colors'
                    >
                      <ChevronLeftIcon className='w-5 h-5 text-white' />
                    </button>
                    <button
                      onClick={nextSlide}
                      className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 transition-colors'
                    >
                      <ChevronRightIcon className='w-5 h-5 text-white' />
                    </button>
                  </>
                )}
              </div>

              {/* Slide indicators (only show if more than 1 image) */}
              {images.length > 1 && (
                <div className='flex justify-center mt-4 space-x-2'>
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide
                          ? 'bg-accent'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Decorative elements */}
              <div className='absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse' />
              <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000' />

              {/* Shine effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none' />
            </div>
          </div>

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
                  Motociklų Valymo Paslaugos
                </span>
              </div>

              <h2 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
                Motociklų
                <span className='block text-accent'>Detailing'as</span>
              </h2>

              <p className='text-xl text-gray-300 leading-relaxed'>
                Specializuojamės ne tik automobilių, bet ir motociklų valymu bei
                priežiūra. Kruopščiai išvalome kiekvieną detalę - nuo variklio
                iki ratų.
              </p>
            </div>

            {/* Features */}
            <div className='space-y-3'>
              {[
                'Variklio išorės valymas',
                'Išmetimo sistemos priežiūra',
                'Ratų ir stabdžių valymas',
                'Odos sėdynės kondicionavimas',
              ].map((feature, index) => (
                <div key={index} className='flex items-center space-x-3'>
                  <StarIcon className='w-5 h-5 text-accent' />
                  <span className='text-gray-300'>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated particles - Fixed positions to avoid hydration mismatch */}
      <div className='absolute inset-0 pointer-events-none'>
        {[
          {
            left: '25%',
            top: '20%',
            delay: '0s',
            duration: '2s',
            color: 'bg-accent',
          },
          {
            left: '75%',
            top: '30%',
            delay: '0.3s',
            duration: '3s',
            color: 'bg-white',
          },
          {
            left: '50%',
            top: '75%',
            delay: '0.6s',
            duration: '2.5s',
            color: 'bg-accent',
          },
          {
            left: '20%',
            top: '65%',
            delay: '0.9s',
            duration: '3.5s',
            color: 'bg-white',
          },
          {
            left: '80%',
            top: '85%',
            delay: '1.2s',
            duration: '2.8s',
            color: 'bg-accent',
          },
          {
            left: '40%',
            top: '40%',
            delay: '1.5s',
            duration: '3.2s',
            color: 'bg-white',
          },
        ].map((particle, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${particle.color} rounded-full animate-ping`}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default MocaiShowcase;
