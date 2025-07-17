'use client';

import React, { useState } from 'react';
import { Card, CardContent } from './ui/Card';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  location?: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Tomas Petrauskas',
      service: 'Kėbulo poliravimas',
      rating: 5,
      comment:
        'Puikus aptarnavimas ir kokybė! Automobilis atrodo kaip naujas. Darbuotojai profesionalūs ir malonūs. Tikrai rekomenduoju!',
      date: '2024-01-15',
      location: 'Vilnius',
    },
    {
      id: 2,
      name: 'Ingrida Kazlauskienė',
      service: 'Cheminis interjero valymas',
      rating: 5,
      comment:
        'Neįtikėtina, kaip išvalė saloną! Buvo labai nešvarus, o dabar kvepuoja kaip naujame automobilyje. Labai dėkoju!',
      date: '2024-01-10',
      location: 'Kairėnai',
    },
    {
      id: 3,
      name: 'Mindaugas Jonaitis',
      service: 'Nano dangos padengimas',
      rating: 5,
      comment:
        'Profesionalus darbas, greitas aptarnavimas. Nano danga tikrai veikia - vanduo tiesiog nuteka. Patiko kainos ir kokybė.',
      date: '2024-01-08',
      location: 'Vilnius',
    },
    {
      id: 4,
      name: 'Rūta Stankevičienė',
      service: 'Žibintų poliravimas',
      rating: 5,
      comment:
        'Žibintai buvo labai aptemę, dabar šviečia kaip nauji! Greitas ir kokybiškas darbas. Rekomenduoju visiems.',
      date: '2024-01-05',
      location: 'Ližiškės',
    },
    {
      id: 5,
      name: 'Darius Vaitkus',
      service: 'PPF plėvelės padengimas',
      rating: 5,
      comment:
        'Aukščiausia kokybė! Plėvelė padėta idealiai, nė vieno burbulo. Dabar nebijau akmenėlių kelyje. Ačiū už puikų darbą!',
      date: '2024-01-03',
      location: 'Vilnius',
    },
    {
      id: 6,
      name: 'Gintarė Mockutė',
      service: 'Automobilio vaškavimas',
      rating: 5,
      comment:
        'Automobilis blizga kaip veidrodis! Darbo kokybė puiki, kaina teisinga. Tikrai grįšiu dar ne kartą.',
      date: '2023-12-28',
      location: 'Kairėnai',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(testimonials.length / 3)) %
        Math.ceil(testimonials.length / 3)
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-xl ${i < rating ? 'text-accent' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * 3,
    (currentIndex + 1) * 3
  );

  return (
    <section id='testimonials' className='py-20 bg-secondary'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4'>
            Klientų atsiliepimai
          </h2>
          <p className='text-xl text-muted max-w-2xl mx-auto'>
            Sužinokite, ką apie mūsų paslaugas sako patenkinti klientai
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} variant='elevated' className='h-full'>
                <CardContent className='p-6'>
                  {/* Rating */}
                  <div className='flex mb-4'>
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Comment */}
                  <p className='text-muted mb-6 leading-relaxed'>
                    &quot;{testimonial.comment}&quot;
                  </p>

                  {/* Customer Info */}
                  <div className='border-t border-border pt-4'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='font-bold text-primary'>
                          {testimonial.name}
                        </p>
                        <p className='text-sm text-muted'>
                          {testimonial.service}
                        </p>
                        {testimonial.location && (
                          <p className='text-sm text-muted'>
                            📍 {testimonial.location}
                          </p>
                        )}
                      </div>
                      <div className='text-right'>
                        <p className='text-sm text-muted'>
                          {new Date(testimonial.date).toLocaleDateString(
                            'lt-LT'
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-center gap-4'>
            <button
              onClick={prevTestimonial}
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-primary hover:text-accent'
              aria-label='Previous testimonials'
            >
              <ChevronLeftIcon className='w-6 h-6' />
            </button>
            <button
              onClick={nextTestimonial}
              className='p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow text-primary hover:text-accent'
              aria-label='Next testimonials'
            >
              <ChevronRightIcon className='w-6 h-6' />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className='flex justify-center mt-6 gap-2'>
            {Array.from(
              { length: Math.ceil(testimonials.length / 3) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentIndex ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='text-4xl font-bold text-accent mb-2'>500+</div>
            <p className='text-muted'>Patenkintų klientų</p>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-accent mb-2'>5.0</div>
            <p className='text-muted'>Vidutinis įvertinimas</p>
          </div>
          <div className='text-center'>
            <div className='text-4xl font-bold text-accent mb-2'>3+</div>
            <p className='text-muted'>Metų patirtis</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='bg-white rounded-2xl p-8 md:p-12 shadow-lg'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              Tapkite kitu patenkintu klientu!
            </h3>
            <p className='text-muted mb-6 max-w-xl mx-auto'>
              Prisijunkite prie šimtų patenkintų klientų, kurie pasitiki ET Auto
              Švara.
            </p>
            <a
              href='tel:+370 6 06 47 967'
              className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
            >
              📞 Užsisakyti paslaugą
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
