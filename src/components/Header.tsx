'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { scrollToSection } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    // {
    //   name: 'Pagrindinis',
    //   href: 'hero',
    //   ariaLabel: 'Eiti į pagrindinį puslapį',
    // },
    { name: 'Paslaugos', href: 'services', ariaLabel: 'Peržiūrėti paslaugas' },
    {
      name: 'Kodėl mes',
      href: 'why-us',
      ariaLabel: 'Sužinoti kodėl pasirinkti mus',
    },
    {
      name: 'Prieš/Po',
      href: 'before-after',
      ariaLabel: 'Peržiūrėti prieš ir po nuotraukas',
    },
    {
      name: 'Atsiliepimai',
      href: 'testimonials',
      ariaLabel: 'Skaityti klientų atsiliepimus',
    },
    { name: 'Kontaktai', href: 'contact', ariaLabel: 'Susisiekti su mumis' },
  ];

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+370606047967';
    // Track phone clicks
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: 'header_phone',
        value: 1,
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      role='banner'
    >
      <nav
        className='container mx-auto px-4 py-4'
        role='navigation'
        aria-label='Pagrindinis navigacijos meniu'
      >
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            aria-label='ET Auto Švara - grįžti į pagrindinį puslapį'
          >
            <img
              src='/logo.png'
              alt='ET Auto Švara'
              width='120'
              height='54'
              className='w-28 md:w-32 h-auto'
            />
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8 '>
            <ul className='flex items-center space-x-8' role='menubar'>
              {navigationItems.map((item) => (
                <li key={item.href} role='none'>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className='text-white hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1'
                    role='menuitem'
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Phone Button */}
            <Button
              onClick={handlePhoneClick}
              variant='primary'
              size='sm'
              className='flex items-center gap-2'
              aria-label='Skambinti telefonu +370 6 06 47 967'
            >
              <PhoneIcon className='w-4 h-4' aria-hidden='true' />
              <span className='hidden lg:inline'>+370 6 06 47 967</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-white hover:text-accent transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-md'
            aria-label={isMobileMenuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className='w-6 h-6' aria-hidden='true' />
            ) : (
              <Bars3Icon className='w-6 h-6' aria-hidden='true' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className='md:hidden mt-4 pb-4'
            id='mobile-menu'
            role='menu'
            aria-label='Mobilusis navigacijos meniu'
          >
            <ul className='space-y-2' role='none'>
              {navigationItems.map((item) => (
                <li key={item.href} role='none'>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className='block w-full text-left px-4 py-2 text-white hover:text-accent hover:bg-white/10 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary'
                    role='menuitem'
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Phone Button */}
            <div className='mt-4 px-4'>
              <Button
                onClick={handlePhoneClick}
                variant='primary'
                size='sm'
                className='w-full flex items-center justify-center gap-2'
                aria-label='Skambinti telefonu +370 6 06 47 967'
              >
                <PhoneIcon className='w-4 h-4' aria-hidden='true' />
                +370 6 06 47 967
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
