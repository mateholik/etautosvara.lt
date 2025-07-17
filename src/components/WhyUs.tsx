'use client';

import React from 'react';
import {
  UserGroupIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WhyUs: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: 'Profesionalūs specialistai',
      description:
        'Patyrę specialistai su daugiamete patirtimi automobilio priežiūros srityje',
      icon: <UserGroupIcon className='w-8 h-8' />,
    },
    {
      id: 2,
      title: 'Kokybės garantija',
      description:
        'Garantuojame aukščiausią darbo kokybę ir rezultatų ilgaamžiškumą',
      icon: <ShieldCheckIcon className='w-8 h-8' />,
    },
    {
      id: 3,
      title: 'Greitas aptarnavimas',
      description: 'Operatyviai ir kokybiškai atliekame darbus sutartu laiku',
      icon: <ClockIcon className='w-8 h-8' />,
    },
    {
      id: 4,
      title: 'Konkurencingos kainos',
      description:
        'Teisingos kainos už profesionalias paslaugas be paslėptų mokesčių',
      icon: <CurrencyDollarIcon className='w-8 h-8' />,
    },
    {
      id: 5,
      title: 'Modernūs įrengimai',
      description:
        'Naudojame naujausią įrangą ir aukščiausios kokybės medžiagas',
      icon: <WrenchScrewdriverIcon className='w-8 h-8' />,
    },
  ];

  return (
    <section id='why-us' className='py-20 bg-secondary'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4'>
            Kodėl pasirinkti mus?
          </h2>
          <p className='text-xl text-muted max-w-2xl mx-auto'>
            Mes esame patikimas partneris, kuris rūpinasi jūsų automobilio
            kokybe ir jūsų patogumu
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((benefit) => (
            <div key={benefit.id} className='text-center group'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300'>
                {benefit.icon}
              </div>
              <h3 className='text-xl font-bold mb-4 text-primary'>
                {benefit.title}
              </h3>
              <p className='text-muted leading-relaxed'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='bg-white rounded-2xl p-8 md:p-12 shadow-lg'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              Įsitikinkite patys!
            </h3>
            <p className='text-muted mb-6 max-w-xl mx-auto'>
              Susisiekite su mumis ir sužinokite, kodėl klientai renkasi ET Auto
              Švara jau ne vienus metus.
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
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className='border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 rounded-lg font-medium transition-colors'
              >
                Susisiekti
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
