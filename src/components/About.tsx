'use client';

import React from 'react';
import {
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <section id='about' className='py-20 bg-primary text-white'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='flex justify-center mb-6'>
            <div className='w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center'>
              <ShieldCheckIcon className='w-8 h-8 text-accent' />
            </div>
          </div>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6'>
            KAS MES?
          </h2>
        </div>

        {/* Main Content */}
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <p className='text-xl md:text-2xl text-gray-300 leading-relaxed mb-8'>
              <span className='text-accent font-semibold'>ET Auto Švara</span> –
              tai automobilio estetikos specialistų komanda, kurios tikslas
              suteikti ilgaamžius, kokybiškus automobilio estetikos sprendimus.
            </p>
          </div>

          {/* Services Description */}
          <div className='bg-gray-800/50 rounded-2xl p-8 mb-12'>
            <p className='text-lg text-gray-300 leading-relaxed text-center'>
              Padėsime Jūsų automobiliui atrodyti vėl kaip naujam:{' '}
              <span className='text-white font-medium'>
                atliekame kėbulo poliravimo darbus, pasirūpinsime ilgalaike
                apsauga, padengsime kėbulą Jūsų automobiliui tinkamiausia danga
                bei nepriekaištingai išvalysime saloną.
              </span>
            </p>
          </div>

          {/* Key Features */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <SparklesIcon className='w-6 h-6 text-accent' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Profesionalūs sprendimai
              </h3>
              <p className='text-gray-400 text-sm'>
                Naudojame tik aukščiausios kokybės produktus ir įrangą
              </p>
            </div>

            <div className='text-center'>
              <div className='w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <ShieldCheckIcon className='w-6 h-6 text-accent' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>Ilgalaikė apsauga</h3>
              <p className='text-gray-400 text-sm'>
                Keraminės dangos ir PPF plėvelės apsaugos
              </p>
            </div>

            <div className='text-center'>
              <div className='w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <ClockIcon className='w-6 h-6 text-accent' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>Patikimas laikas</h3>
              <p className='text-gray-400 text-sm'>
                Laikomės sutartų terminų ir darbo kokybės
              </p>
            </div>

            <div className='text-center'>
              <div className='w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                <HeartIcon className='w-6 h-6 text-accent' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>Meilė automobilių</h3>
              <p className='text-gray-400 text-sm'>
                Kiekvienas automobilis yra unikalus projektas
              </p>
            </div>
          </div>

          {/* Location & Experience */}
          <div className='mt-16 text-center'>
            <div className='bg-accent/10 border border-accent/20 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-4 text-accent'>
                Mūsų patirtis – Jūsų automobilio nauda
              </h3>
              <p className='text-gray-300 mb-6 leading-relaxed'>
                Dirbame Vilniuje, Kairėnuose ir Ližiškėse. Mūsų komanda turi
                daugiametę patirtį automobilių estetikos srityje ir nuolat
                tobulėja, sekdama naujausias technologijas bei metodus.
                Kiekvienas darbas atliekamas su meile ir dėmesiu detalėms.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='tel:+370606047967'
                  className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
                >
                  📞 Susisiekti dabar
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
      </div>
    </section>
  );
};

export default About;
