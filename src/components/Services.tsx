'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import {
  SparklesIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  BeakerIcon,
  TruckIcon,
  FilmIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

type ServicesProps = {
  showDetails?: boolean;
  visibleAmount?: number;
  showAllCta?: boolean;
};
export default function Services({
  showDetails = true,
  visibleAmount = 9,
  showAllCta = false,
}: ServicesProps) {
  const services: Service[] = [
    {
      id: 4,
      title: 'Automobilio kėbulo poliravimas',
      description:
        'Profesionalus kėbulo poliravimas, šalinant įbrėžimus ir grąžinant blizgesį.',
      price: 'nuo 250 €',
      icon: <PaintBrushIcon className='w-8 h-8' />,
      features: ['Įbrėžimų šalinimas', 'Blizgesio atkūrimas', 'Lako apsauga'],
    },
    {
      id: 7,
      title: 'Cheminis interjero valymas',
      description:
        'Giluminis automobilio salono valymas naudojant profesionalius chemijos produktus.',
      price: 'nuo 250 €',
      icon: <TruckIcon className='w-8 h-8' />,
      features: ['Dėmių šalinimas', 'Dezinfekavimas', 'Kvapų neutralizavimas'],
    },
    {
      id: 6,
      title: 'Keramikinių dangų padengimas',
      description:
        'Aukščiausios kokybės apsauginių dangų padengimas ilgalaikei automobilio apsaugai.',
      price: 'nuo 250 €',
      icon: <BeakerIcon className='w-8 h-8' />,
      features: ['Ilgalaikė apsauga', 'Profesionalus padengimas'],
    },
    {
      id: 2,
      title: 'Žibintų poliravimas',
      description:
        'Priekinių ir galinių žibintų poliravimas, grąžinant jiems pradinį skaidrumą ir blizgesį.',
      price: 'nuo 25 € už vnt.',
      icon: <LightBulbIcon className='w-8 h-8' />,
      features: [
        'Geresnė šviesos sklaida',
        'Estetiška išvaizda',
        'Saugumo didinimas',
      ],
    },
    {
      id: 1,
      title: 'Automobilio vaškavimas',
      description:
        'Aukščiausios kokybės vaško dangos padengimas (SOFT99), kuris apsaugo automobilio laką nuo išorinių poveikių.',
      price: 'nuo 80 €',
      icon: <SparklesIcon className='w-8 h-8' />,
      features: [
        'Apsauga nuo UV spindulių',
        'Vandeniui atsparus',
        'Ilgalaikis poveikis (3-6 mėn.)',
      ],
    },

    // {
    //   id: 3,
    //   title: 'Nano dangos dengimas',
    //   description:
    //     'Pažangiausia nano technologija, kuri formuoja apsauginę plėvelę ant automobilio paviršiaus.',
    //   price: 'nuo 250 €',
    //   icon: <ShieldCheckIcon className='w-8 h-8' />,
    //   features: [
    //     'Hidrofobinis efektas',
    //     'Apsauga nuo purvo',
    //     'Lengvas valymas',
    //   ],
    // },

    {
      id: 5,
      title: 'Interjero bei kitų blizgių detalių poliravimas',
      description:
        'Vidaus plastikinių ir blizgių detalių atnaujinimas ir poliravimas.',
      price: 'nuo 35 € už vnt.',
      icon: <WrenchScrewdriverIcon className='w-8 h-8' />,
      features: [
        'Plastikinių detalių atnaujinimas',
        'Blizgių paviršių poliravimas',
        'Interjero atgaivinimas',
      ],
    },

    {
      id: 8,
      title: 'Detalus išorės valymas',
      description:
        'Išsamus automobilio išorės valymas su visais reikalingais procesais.',
      price: 'nuo 50 €',
      icon: <SparklesIcon className='w-8 h-8' />,
      features: ['Išorės plovimas', 'Ratų valymas', 'Stiklų valymas'],
    },
    {
      id: 9,
      title: 'Kėbulo dengimas apsaugine PPF plėvele',
      description:
        'Aukščiausios kokybės apsauginės plėvelės padengimas automobilio kėbului.',
      price: 'nuo 500 €',
      icon: <FilmIcon className='w-8 h-8' />,
      features: [
        'Apsauga nuo akmenėlių',
        'Savarankiškas gijimas',
        'Skaidri plėvelė',
      ],
    },
  ];

  return (
    <section id='services' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4'>
            Mūsų paslaugos
          </h2>
          <p className='text-xl text-muted max-w-2xl mx-auto'>
            Teikiame visas automobilio priežiūros paslaugas aukščiausiu lygiu
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.slice(0, visibleAmount).map((service) => (
            <Card
              key={service.id}
              variant='elevated'
              className='h-full flex flex-col'
            >
              <CardHeader>
                <div className='flex items-center mb-4'>
                  <div className='p-3 bg-accent/10 rounded-lg text-accent'>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className='text-xl font-bold text-primary'>
                  {service.title}
                </CardTitle>
                <div className='text-2xl font-bold text-accent mt-2'>
                  {service.price}
                </div>
              </CardHeader>

              <CardContent className='flex-grow'>
                <p className='text-muted mb-4'>{service.description}</p>

                {showDetails && (
                  <ul className='space-y-2'>
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className='flex items-center text-sm text-muted'
                      >
                        <span className='text-accent mr-2'>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {showAllCta && (
          <div className='flex justify-center mt-12'>
            <Link
              href='/paslaugos'
              className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
            >
              Visos paslaugos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
