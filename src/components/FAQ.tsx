'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { configs } from '@/lib/config';
import { FAQItem } from '@/types';

type FAQProps = {
  visibleAmount?: number;
  showAllCta?: boolean;
  showBanner?: boolean;
  faqItems: FAQItem[];
};
export default function FAQ({
  visibleAmount = 9,
  showAllCta = false,
  showBanner = true,
  faqItems = [],
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
                  href={`tel:${configs.phone}`}
                  className='bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center'
                >
                  📞 Skambinti dabar
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
