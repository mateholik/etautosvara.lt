'use client';

import React from 'react';
import ContactForm from './ui/ContactForm';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const Contact: React.FC = () => {
  const handlePhoneClick = (phoneNumber: string) => {
    // Track phone clicks for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: phoneNumber,
        value: 1,
      });
    }
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className='w-6 h-6' />,
      label: 'Telefonas',
      value: '+370 6 06 47 967',
      link: 'tel:+370606047967',
    },
    {
      icon: <MapPinIcon className='w-6 h-6' />,
      label: 'Adresas',
      value: 'Saulėtoji g. 8, Ližiškės, Vilnius',
      link: 'https://maps.google.com?q=Saulėtoji+g.+8,+Ližiškės,+Vilnius',
    },
    {
      icon: <ClockIcon className='w-6 h-6' />,
      label: 'Darbo laikas',
      value: 'I-V 9:00 - 18:00, VI 10:00 - 15:00',
      link: null,
    },
    {
      icon: <GlobeAltIcon className='w-6 h-6' />,
      label: 'Aptarnaujamos zonos',
      value: 'Vilnius, Kairėnai, Ližiškės',
      link: null,
    },
  ];

  const quickServices = [
    'Skubus automobilio valymas',
    'Žibintų poliravimas per 30 min',
    'Greitas kėbulo poliravimas',
    'Nano dangos padengimas',
    'Cheminis interjero valymas',
  ];

  return (
    <section id='contact' className='py-20 bg-primary text-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Kontaktai
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
            Susisiekite su mumis arba užsisakykite paslaugą patogiu būdu
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <h3 className='text-2xl font-bold mb-8'>Susisiekite su mumis</h3>

            {/* Contact Details */}
            <div className='space-y-6 mb-8'>
              {contactInfo.map((item, index) => (
                <div key={index} className='flex items-start'>
                  <div className='flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white mr-4'>
                    {item.icon}
                  </div>
                  <div>
                    <p className='font-medium text-gray-300 mb-1'>
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className='text-white hover:text-accent transition-colors text-lg'
                        target={
                          item.link.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          item.link.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        onClick={() => {
                          if (item.link?.startsWith('tel:')) {
                            handlePhoneClick(item.value);
                          }
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className='text-white text-lg'>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Services */}
            <div className='bg-gray-800 rounded-xl p-6 mb-8'>
              <h4 className='text-xl font-bold mb-4'>Greitos paslaugos</h4>
              <ul className='space-y-2'>
                {quickServices.map((service, index) => (
                  <li key={index} className='flex items-center text-gray-300'>
                    <span className='text-accent mr-2'>⚡</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className='bg-accent/10 border border-accent/20 rounded-xl p-6'>
              <h4 className='text-xl font-bold mb-2 text-accent'>
                Skubūs atvejai
              </h4>
              <p className='text-gray-300 mb-4'>
                Reikalinga skubi pagalba? Skambinkite bet kuriuo paros metu!
              </p>
              <a
                href='tel:+370606047967'
                className='bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center'
                onClick={() => handlePhoneClick('+370606047967')}
              >
                <PhoneIcon className='w-5 h-5 mr-2' />
                Skambinti dabar
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className='text-2xl font-bold mb-8'>Užsisakykite paslaugą</h3>
            <div className='bg-gray-800 rounded-xl p-6'>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className='mt-16'>
          <h3 className='text-2xl font-bold mb-8 text-center'>
            Kaip mus rasti
          </h3>
          <div className='bg-gray-800 rounded-xl p-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='aspect-square bg-gray-700 rounded-lg overflow-hidden'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.5!2d25.2!3d54.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94c0e0a0a0a0%3A0x0!2sSaul%C4%97toji%20g.%208%2C%20Li%C5%BEi%C5%A1k%C4%97s%2C%20Vilnius!5e0!3m2!1sen!2slt!4v1620000000000!5m2!1sen!2slt'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                  title='ET Auto Švara lokacija - Saulėtoji g. 8, Ližiškės, Vilnius'
                  className='rounded-lg'
                />
              </div>
              <div className='aspect-square bg-gray-700 rounded-lg overflow-hidden'>
                <img
                  src='/kur_mus_rasti.jpg'
                  alt='Kaip mus rasti'
                  className='w-full !h-full object-cover object-center'
                  loading='lazy'
                />
              </div>
            </div>
            <div className='mt-4 text-center'>
              <p className='text-gray-300 mb-4'>
                Saulėtoji g. 8, Ližiškės, Vilnius
              </p>
              <a
                href='https://maps.google.com?q=Saulėtoji+g.+8,+Ližiškės,+Vilnius'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center'
              >
                <MapPinIcon className='w-5 h-5 mr-2' />
                Atidaryti žemėlapyje
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='bg-gray-800 rounded-2xl p-8 md:p-12'>
            <h3 className='text-2xl md:text-3xl font-bold mb-4'>
              Pasiruošę pradėti?
            </h3>
            <p className='text-gray-300 mb-6 max-w-xl mx-auto'>
              Susisiekite su mumis šiandien ir suteikite savo automobiliui
              profesionalų priežiūrą, kurios jis nusipelno.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='tel:+370606047967'
                className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
                onClick={() => handlePhoneClick('+370606047967')}
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

export default Contact;
