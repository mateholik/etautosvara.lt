'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface BeforeAfterImage {
  id: number;
  src: string;
  alt: string;
}

const BeforeAfter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Array of before/after images from pries-po folder
  // All 16 images included
  const images: BeforeAfterImage[] = [
    {
      id: 1,
      src: '/pries-po/img_1.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 2,
      src: '/pries-po/img_2.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 3,
      src: '/pries-po/img_3.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 4,
      src: '/pries-po/img_4.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 5,
      src: '/pries-po/img_5.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 6,
      src: '/pries-po/img_6.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 7,
      src: '/pries-po/img_7.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 8,
      src: '/pries-po/img_8.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 9,
      src: '/pries-po/img_9.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 10,
      src: '/pries-po/img_10.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 11,
      src: '/pries-po/img_11.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 12,
      src: '/pries-po/img_12.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 13,
      src: '/pries-po/img_13.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 14,
      src: '/pries-po/img_14.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
    {
      id: 15,
      src: '/pries-po/img_15.JPG',
      alt: 'Automobilio valymo rezultatas',
    },
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

    const element = document.getElementById('before-after');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Mobile detection and force re-render
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Force re-render on mobile after component mount
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 50);
      }, 100);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lightbox functions
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <section id='before-after' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4'>
            Prieš ir po
          </h2>
          <p className='text-xl text-muted max-w-2xl mx-auto'>
            Pažiūrėkite, kaip keičiasi automobiliai po mūsų profesionalių
            paslaugų
          </p>
        </div>

        {/* Images Gallery */}
        <div
          key={isMobile ? 'mobile' : 'desktop'}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 mb-16 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer'
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
              onClick={() => openLightbox(index)}
            >
              <div className='relative overflow-hidden bg-gray-100 aspect-square'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                  style={{
                    minWidth: '100%',
                    minHeight: '100%',
                    display: 'block',
                  }}
                  onLoad={(e) => {
                    // Ensure image is visible after load
                    (e.target as HTMLImageElement).style.opacity = '1';
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', image.src);
                    (e.target as HTMLImageElement).style.display = 'block';
                    (e.target as HTMLImageElement).style.backgroundColor =
                      '#f3f4f6';
                  }}
                  unoptimized
                />
              </div>

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              {/* View indicator */}
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300'>
                  <svg
                    className='w-6 h-6 text-gray-800'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className='fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex'>
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className='absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors'
            >
              <XMarkIcon className='w-6 h-6 text-white' />
            </button>

            {/* Thumbnail navigation - Left side */}
            <div className='hidden md:flex flex-col w-24 bg-black/50 backdrop-blur-sm p-2 gap-2 max-h-full overflow-y-auto'>
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-white scale-105'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <div className='relative w-full h-full'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className='object-cover'
                      unoptimized
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Main content area */}
            <div className='flex-1 flex items-center justify-center relative p-4'>
              {/* Navigation buttons - Enhanced for mobile */}
              <button
                onClick={goToPrevious}
                className='absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-3 md:p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors z-10 border-2 border-white/20 hover:border-white/40'
              >
                <ChevronLeftIcon className='w-8 h-8 md:w-6 md:h-6 text-white' />
              </button>

              <button
                onClick={goToNext}
                className='absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-3 md:p-2 bg-black/60 hover:bg-black/80 rounded-full transition-colors z-10 border-2 border-white/20 hover:border-white/40'
              >
                <ChevronRightIcon className='w-8 h-8 md:w-6 md:h-6 text-white' />
              </button>

              {/* Main image with swipe support */}
              <div
                className='relative max-w-full max-h-full flex items-center justify-center'
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ width: '100%', height: '90vh' }}
              >
                <div className='relative w-full h-full flex items-center justify-center'>
                  <Image
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    fill
                    className='object-contain select-none'
                    style={{ maxHeight: '90vh', maxWidth: '100%' }}
                    draggable={false}
                    unoptimized
                  />
                </div>
              </div>

              {/* Image info */}
              <div className='absolute bottom-20 md:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2'>
                {/* <h3 className='text-white font-semibold text-center'>
                  {images[currentImageIndex].title}
                </h3> */}
                <p className='text-white/80 text-sm text-center mt-1'>
                  {currentImageIndex + 1} / {images.length}
                </p>
                <p className='text-white/60 text-xs text-center mt-1 md:hidden'>
                  👆 Swipe left/right to navigate
                </p>
              </div>
            </div>

            {/* Mobile thumbnail navigation - Bottom */}
            <div className='md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto px-4'>
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? 'border-white scale-110'
                      : 'border-white/30 hover:border-white/60'
                  }`}
                >
                  <div className='relative w-full h-full'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className='object-cover'
                      unoptimized
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className='text-center'>
          <div className='bg-secondary rounded-2xl p-8 md:p-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              Norite tokių pačių rezultatų?
            </h3>
            <p className='text-muted mb-6 max-w-xl mx-auto'>
              Susisiekite su mumis ir aptarkime, kaip galime padėti jūsų
              automobiliui atrodyti kaip naujam.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+370 6 06 47 967'
                className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
              >
                📞 Skambinti dabar
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-medium transition-colors'
              >
                Žiūrėti paslaugas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
