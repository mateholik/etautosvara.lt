'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

type FAQProps = {
  visibleAmount?: number;
  showAllCta?: boolean;
  showBanner?: boolean;
};
export default function FAQ({
  visibleAmount = 9,
  showAllCta = false,
  showBanner = true,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'Kiek laiko užtrunka automobilio valymas?',
      answer:
        'Priklausomai nuo paslaugos: cheminis interjero valymas 8-15 val., kėbulo poliravimas 16-32 val., pilnas detailing procesas gali užtrukti iki 40 valandų.',
    },
    {
      question: 'Kokius valymo produktus naudojate?',
      answer:
        'Naudojame tik aukščiausios kokybės profesionalius valymo produktus ir chemijos preparatus. Visi produktai yra saugūs automobilio dangoms ir aplinkai, sertifikuoti tarptautiniu mastu. Vaško dangos padengimas - SOFT99. Keramikinėms dangoms - SONAX.',
    },
    {
      question: 'Ar teikiate garantiją savo darbui?',
      answer: 'Taip, jeigu automobilio priežiūrą ir toliau atliekame mes.',
    },
    {
      question: 'Ar reikia iš anksto užsisakyti laiką?',
      answer:
        'Taip, rekomenduojame užsisakyti laiką iš anksto. Skambinkite +370 6 06 47 967 arba užpildykite kontaktų formą. Taip užtikrinsime, kad galėsime jums skirti reikiamą dėmesį ir laiką.',
    },

    {
      question: 'Ar galite atvykti į mano vietą?',
      answer:
        'Ne, paslaugos teikiamos tik adresu Saulėtoji g. 8, Ližiškės, Vilnius',
    },

    {
      question: 'Kaip dažnai reikėtų valyti automobilį?',
      answer:
        'Rekomenduojame: išorės valymas kas 2-3 savaites, interjero valymas kas 1-2 mėnesius, kėbulo poliravimas 2-3 kartus per metus, žibintų poliravimas kas 6 mėnesius arba pagal poreikį. Cheminis valymas 2 kartus į metus',
    },
    {
      question: 'Ar galite pašalinti stiprius kvapus iš salono?',
      answer:
        'Taip, specializuojamės kvapų šalinimo srityje, bet reikėtų situaciją įvartinti apžiūros metu. Efektyviai pašaliname cigarečių, gyvūnų, maisto ir kitus kvapus.',
    },
    {
      question: 'Kiek laiko išlieka poliravimo efektas?',
      answer:
        'Kėbulo poliravimo efektas išlieka 3-6 mėnesius, priklausomai nuo automobilio naudojimo intensyvumo ir saugojimo sąlygų. Keraminės dangos gali išlikti iki 12-24 mėnesiųб priklausomai nuo naudojimo',
    },
    {
      question: 'Ar dirbate žiemos metu?',
      answer:
        'Taip, dirbame visus metus. Žiemos metu ypač svarbu reguliariai valyti automobilį nuo druskos ir reagentų. Turime šildomas patalpas, todėl kokybė nekenčia net šaltuoju metų laiku.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='py-20 bg-secondary'>
      <div className='container mx-auto px-4'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4'>
            Dažnai užduodami klausimai
          </h2>
          <p className='text-xl text-muted max-w-2xl mx-auto'>
            Atsakymai į populiariausius klausimus apie mūsų paslaugas
          </p>
        </div>

        {/* FAQ Items */}
        <div className='max-w-4xl mx-auto'>
          <div className='space-y-4'>
            {faqItems.slice(0, visibleAmount).map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden'
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
                  aria-expanded={openIndex === index}
                >
                  <h3 className='text-lg font-semibold text-primary pr-4'>
                    {item.question}
                  </h3>
                  <div className='flex-shrink-0'>
                    {openIndex === index ? (
                      <ChevronUpIcon className='w-5 h-5 text-accent' />
                    ) : (
                      <ChevronDownIcon className='w-5 h-5 text-muted' />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className='px-6 pb-4'>
                    <div className='border-t border-gray-200 pt-4'>
                      <p className='text-gray-700 leading-relaxed'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {showAllCta && (
          <div className='flex justify-center mt-12'>
            <Link
              href='/duk'
              className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
            >
              Visi klausimai
            </Link>
          </div>
        )}

        {/* Contact Banner */}
        {showBanner && (
          <div className='text-center mt-12'>
            <div className='bg-white rounded-2xl p-8 shadow-sm border border-gray-200'>
              <h3 className='text-2xl font-bold text-primary mb-4'>
                Neradote atsakymo?
              </h3>
              <p className='text-gray-600 mb-6'>
                Susisiekite su mumis ir mielai atsakysime į visus jūsų klausimus
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='tel:+370606047967'
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
                  Rašyti žinutę
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
