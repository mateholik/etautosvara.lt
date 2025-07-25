'use client';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState, useRef, useEffect } from 'react';

interface ContactOption {
  id: string;
  name: string;
  icon: string;
  color: string;
  url: string;
}

const ContactCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const contactOptions: ContactOption[] = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '/icons/whatsapp.svg',
      color: '#25D366',
      url: 'https://wa.me/+370606047967',
    },
    {
      id: 'messenger',
      name: 'Facebook',
      icon: '/icons/facebook.svg',
      color: '#0084FF',
      url: 'https://www.facebook.com/etautosvara',
    },
    {
      id: 'viber',
      name: 'Viber',
      icon: '/icons/viber.svg',
      color: '#665CAC',
      url: 'viber://chat?number=+370606047967',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleContactClick = (url: string) => {
    window.location.href = url;
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className='fixed bottom-6 right-6 z-50'>
      {/* Contact Options Menu */}
      {isOpen && (
        <div className='absolute bottom-16 right-0 mb-4 space-y-2 animate-in slide-in-from-bottom-4 duration-300'>
          {contactOptions.map((option, index) => (
            <div
              key={option.id}
              className='flex items-center justify-end group cursor-pointer'
              onClick={() => handleContactClick(option.url)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Contact Card */}
              <div className='bg-slate-700 hover:bg-slate-600 transition-colors duration-200 rounded-lg shadow-lg flex items-center p-3 mr-0 min-w-48'>
                {/* Icon */}
                <div
                  className='w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0'
                  style={{ backgroundColor: option.color }}
                >
                  <img src={option.icon} className='w-6 h-6' />
                </div>

                {/* Text Content */}
                <div className='flex flex-col text-left'>
                  <span className='text-white font-medium text-sm'>
                    {option.name}
                  </span>
                  <span className='text-gray-300 text-xs'>Rašyti Žinutę</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main CTA Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-blue-600 hover:bg-blue-700 hover:scale-110'
        }`}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
      >
        {isOpen ? (
          <XMarkIcon className='w-6 h-6' />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className='w-6 h-6' />
        )}
      </button>

      {/* Background Overlay - Minimal */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-transparent -z-10'
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ContactCTA;
