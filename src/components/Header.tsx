'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Apie mus',
      href: '/apie-mus',
      ariaLabel: 'Sužinoti apie mūsų komandą',
    },
    {
      name: 'Paslaugos',
      href: '/paslaugos',
      ariaLabel: 'Peržiūrėti paslaugas',
    },
    // {
    //   name: 'Kodėl mes',
    //   href: 'why-us',
    //   ariaLabel: 'Sužinoti kodėl pasirinkti mus',
    // },
    {
      name: 'Prieš/Po',
      href: '/pries-po',
      ariaLabel: 'Peržiūrėti prieš ir po nuotraukas',
    },
    // {
    //   name: 'Atsiliepimai',
    //   href: 'testimonials',
    //   ariaLabel: 'Skaityti klientų atsiliepimus',
    // },
    {
      name: 'DUK',
      href: '/duk',
      ariaLabel: 'Dažnai užduodami klausimai',
    },
    { name: 'Kontaktai', href: '/kontaktai', ariaLabel: 'Susisiekti su mumis' },
  ];

  const handleNavClick = (href: string) => {
    // scrollToSection(href);
    router.push(href);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-24 ${
          isScrolled || !isHomepage
            ? 'bg-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
        role='banner'
      >
        <nav
          className='w-full px-4 py-4'
          role='navigation'
          aria-label='Pagrindinis navigacijos meniu'
        >
          <div className='relative flex items-center justify-center'>
            {/* Desktop Navigation - Left Side */}
            <div className='hidden lg:flex items-center absolute left-4'>
              <ul className='flex items-center space-x-4' role='menubar'>
                {navigationItems.slice(0, 3).map((item) => (
                  <li key={item.href} role='none'>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className='text-white hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1 text-sm'
                      role='menuitem'
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo - Center */}
            <button
              onClick={() => handleNavClick('/')}
              aria-label='ET Auto Švara - grįžti į pagrindinį puslapį'
            >
              <Image
                src='/logo.svg'
                alt='ET Auto Švara'
                width={120}
                height={54}
                className='w-28 md:w-32'
                style={{ height: 'auto' }}
                priority
              />
            </button>

            {/* Right Side Navigation + CTA (Desktop) */}
            <div className='hidden lg:flex items-center space-x-4 absolute right-4'>
              <ul className='flex items-center space-x-4' role='menubar'>
                {navigationItems.slice(3).map((item) => (
                  <li key={item.href} role='none'>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className='text-white hover:text-accent transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-md px-2 py-1 text-sm'
                      role='menuitem'
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
              <Button
                onClick={handlePhoneClick}
                variant='primary'
                size='sm'
                className='flex items-center justify-center w-10 h-10 p-0'
                aria-label='Skambinti telefonu +370 6 06 47 967'
              >
                <PhoneIcon className='w-5 h-5' aria-hidden='true' />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='lg:hidden text-white hover:text-accent transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-md absolute right-4'
              aria-label={
                isMobileMenuOpen ? 'Uždaryti meniu' : 'Atidaryti meniu'
              }
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
              className='lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md shadow-lg border-t border-gray-700 z-50'
              id='mobile-menu'
              role='menu'
              aria-label='Mobilusis navigacijos meniu'
            >
              <div className='p-4'>
                <ul className='space-y-2' role='none'>
                  {navigationItems.map((item) => (
                    <li key={item.href} role='none'>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className='block w-full text-left px-4 py-3 text-white hover:text-accent hover:bg-white/10 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary'
                        role='menuitem'
                        aria-label={item.ariaLabel}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Mobile Phone Button */}
                <div className='mt-4'>
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
            </div>
          )}
        </nav>
      </header>
      {!isHomepage && <div className='mb-16'></div>}
    </>
  );
};

export default Header;
