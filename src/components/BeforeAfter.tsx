'use client';

import React, { useState } from 'react';
import { ImageComparison } from './ui/ImageComparison';

interface BeforeAfterExample {
  id: number;
  title: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const BeforeAfter: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Sample data - in real implementation, these would be actual images
  const examples: BeforeAfterExample[] = [
    {
      id: 1,
      title: 'Kėbulo poliravimas',
      service: 'polishing',
      beforeImage: '/before.jpeg',
      afterImage: '/after.jpeg',
      description: 'Automobilio kėbulo poliravimas su įbrėžimų šalinimu',
    },
    {
      id: 2,
      title: 'Žibintų poliravimas',
      service: 'headlights',
      beforeImage: '/before.jpeg',
      afterImage: '/after.jpeg',
      description: 'Priekinių žibintų atkūrimas ir poliravimas',
    },
    {
      id: 3,
      title: 'Interjero valymas',
      service: 'interior',
      beforeImage: '/before.jpeg',
      afterImage: '/after.jpeg',
      description: 'Giluminis automobilio salono valymas',
    },
    {
      id: 4,
      title: 'Nano dangos padengimas',
      service: 'coating',
      beforeImage: '/before.jpeg',
      afterImage: '/after.jpeg',
      description: 'Apsauginio nano dangos padengimas',
    },
    {
      id: 5,
      title: 'Ratų poliravimas',
      service: 'wheels',
      beforeImage: '/before.jpeg',
      afterImage: '/after.jpeg',
      description: 'Ratų valymas ir poliravimas',
    },
    {
      id: 6,
      title: 'PPF plėvelės padengimas',
      service: 'ppf',
      beforeImage: '/before.jpeg',
      afterImage: '/after.jpeg',
      description: 'Apsauginės plėvelės padengimas',
    },
  ];

  const filterOptions = [
    { value: 'all', label: 'Visi darbai' },
    { value: 'polishing', label: 'Poliravimas' },
    { value: 'headlights', label: 'Žibintai' },
    { value: 'interior', label: 'Interjeras' },
    { value: 'coating', label: 'Dangos' },
    { value: 'wheels', label: 'Ratai' },
    { value: 'ppf', label: 'PPF plėvelė' },
  ];

  const filteredExamples =
    selectedFilter === 'all'
      ? examples
      : examples.filter((example) => example.service === selectedFilter);

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

        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedFilter === option.value
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-primary hover:bg-accent hover:text-white'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {filteredExamples.map((example) => (
            <div key={example.id} className='group'>
              <div className='mb-4'>
                <ImageComparison
                  beforeImage={example.beforeImage}
                  afterImage={example.afterImage}
                  beforeAlt={`${example.title} - prieš`}
                  afterAlt={`${example.title} - po`}
                  className='rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300'
                />
              </div>
              <div className='text-center'>
                <h3 className='text-xl font-bold text-primary mb-2'>
                  {example.title}
                </h3>
                <p className='text-muted'>{example.description}</p>
              </div>
            </div>
          ))}
        </div>

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
