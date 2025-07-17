'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from './ui/Card';
import { Button } from './ui/Button';
import {
  SparklesIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  BeakerIcon,
  TruckIcon,
  FilmIcon,
  WrenchIcon,
} from '@heroicons/react/24/outline';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Automobilio vaškavimas',
      description:
        'Aukščiausios kokybės vaško dangos padengimas, kuris apsaugo automobilio lakų nuo išorinių poveikių.',
      price: 'nuo 80 €',
      icon: <SparklesIcon className='w-8 h-8' />,
      features: [
        'Apsauga nuo UV spindulių',
        'Vandeniui atsparus',
        'Ilgalaikis poveikis',
      ],
    },
    {
      id: 2,
      title: 'Žibintų poliravimas',
      description:
        'Priekinio ir galinio žibintų poliravimas, grąžinant jiems pradinį skaidrumą ir blizgesį.',
      price: 'nuo 25 € už vnt.',
      icon: <LightBulbIcon className='w-8 h-8' />,
      features: [
        'Geresnė šviesos sklaida',
        'Estetiška išvaizda',
        'Saugumo didinimas',
      ],
    },
    {
      id: 3,
      title: 'Nano dangos dengimas',
      description:
        'Pažangiausia nano technologija, kuri formuoja apsauginę plėvelę ant automobilio paviršiaus.',
      price: 'nuo 200 €',
      icon: <ShieldCheckIcon className='w-8 h-8' />,
      features: [
        'Hidrofobinis efektas',
        'Apsauga nuo purvo',
        'Lengvas valymas',
      ],
    },
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
      id: 6,
      title: 'Hibridinių/nano/keramikinių dangų aplikavimas',
      description:
        'Aukščiausios kokybės apsauginių dangų padengimas ilgalaikei automobilio apsaugai.',
      price: 'nuo 250 €',
      icon: <BeakerIcon className='w-8 h-8' />,
      features: [
        'Ilgalaikė apsauga',
        'Atsparumas chemijai',
        'Profesionalus padengimas',
      ],
    },
    {
      id: 7,
      title: 'Cheminis interjero valymas',
      description:
        'Giluminis automobilio salono valymas naudojant profesionalius chemijos produktus.',
      price: 'nuo 150 €',
      icon: <TruckIcon className='w-8 h-8' />,
      features: ['Dėmių šalinimas', 'Dezinfekavimas', 'Kvapų neutralizavimas'],
    },
    {
      id: 8,
      title: 'Detalus išorės valymas ir komplektas',
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
    {
      id: 10,
      title: 'Meninis lyginimas',
      description:
        'Profesionalus automobilio kėbulo įdubų lyginimas be dažymo.',
      price: 'nuo 30 € už vnt.',
      icon: <WrenchIcon className='w-8 h-8' />,
      features: [
        'Be dažymo',
        'Pradinės formos atkūrimas',
        'Profesionalūs įrankiai',
      ],
    },
  ];

  const handleBookService = () => {
    const phoneNumber = '+370 6 06 47 967';
    // Future enhancement: could include service-specific messaging
    window.location.href = `tel:${phoneNumber}`;
  };

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
          {services.map((service) => (
            <Card
              key={service.id}
              variant='elevated'
              hover={true}
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
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => handleBookService()}
                  variant='primary'
                  size='md'
                  className='w-full'
                >
                  Užsisakyti
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='bg-secondary rounded-2xl p-8 md:p-12'>
            <h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
              Neradote tinkamos paslaugos?
            </h3>
            <p className='text-muted mb-6 max-w-xl mx-auto'>
              Susisiekite su mumis ir aptarsime jūsų poreikius. Individualiems
              projektams sudarome specialias sąlygas.
            </p>
            <Button
              onClick={() => handleBookService()}
              variant='primary'
              size='lg'
              className='mx-auto'
            >
              Susisiekti dabar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
