'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { cn, scrollToSection, formatPhoneNumber } from '@/lib/utils';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Paslaugos', href: '#services' },
    { label: 'Kodėl mes', href: '#why-us' },
    { label: 'Prieš/Po', href: '#before-after' },
    { label: 'Atsiliepimai', href: '#testimonials' },
    { label: 'Kontaktai', href: '#contact' },
  ];

  const phoneNumber = '+370 6 06 47 967';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-primary shadow-lg backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <div className='flex items-center'>
            <button onClick={() => handleNavClick('#hero')}>
              <img
                src='/logo.png'
                alt='ET Auto Švara'
                width='120'
                height='54'
                className='w-28 md:w-32 h-auto'
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className='text-white hover:text-accent transition-colors font-medium'
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Phone CTA */}
          <div className='hidden md:flex items-center space-x-4'>
            <Button
              onClick={handlePhoneClick}
              variant='primary'
              size='md'
              className='flex items-center gap-2'
            >
              <PhoneIcon className='w-5 h-5' />
              {formatPhoneNumber(phoneNumber)}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden text-white hover:text-accent transition-colors p-2'
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3Icon className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden transition-all duration-300 overflow-hidden',
            isMobileMenuOpen
              ? 'max-h-screen opacity-100 pb-6'
              : 'max-h-0 opacity-0'
          )}
        >
          <nav className='flex flex-col space-y-4 pt-4 border-t border-gray-700'>
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className='text-white hover:text-accent transition-colors font-medium text-left py-2'
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Phone CTA */}
            <div className='pt-4'>
              <Button
                onClick={handlePhoneClick}
                variant='primary'
                size='md'
                className='w-full flex items-center justify-center gap-2'
              >
                <PhoneIcon className='w-5 h-5' />
                {formatPhoneNumber(phoneNumber)}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
