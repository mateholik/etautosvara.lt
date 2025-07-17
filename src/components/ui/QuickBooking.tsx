'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './Button';
import { PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';

interface QuickBookingData {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
}

const QuickBooking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuickBookingData>();

  const services = [
    'Automobilio vaškavimas',
    'Žibintų poliravimas',
    'Nano dangos dengimas',
    'Automobilio kėbulo poliravimas',
    'Interjero poliravimas',
    'Cheminis interjero valymas',
    'Detalus išorės valymas',
    'Kita paslauga',
  ];

  const timeSlots = [
    '9:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
  ];

  const onSubmit: SubmitHandler<QuickBookingData> = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Quick booking submitted:', data);

      // Track quick booking for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'quick_booking', {
          event_category: 'booking',
          event_label: data.service,
          value: 1,
        });
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Quick booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
        <div className='text-green-600 text-4xl mb-4'>📅</div>
        <h3 className='text-xl font-bold text-green-800 mb-2'>
          Rezervacija pateikta!
        </h3>
        <p className='text-green-700 mb-4'>
          Susisieksime su jumis per 2 valandas rezervacijos patvirtinimui.
        </p>
        <p className='text-sm text-green-600'>
          Skubiu atveju skambinkite: +370 6 06 47 967
        </p>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-xl p-6 shadow-lg'>
      <div className='text-center mb-6'>
        <CalendarIcon className='w-12 h-12 text-accent mx-auto mb-3' />
        <h3 className='text-xl font-bold text-primary mb-2'>
          Greita rezervacija
        </h3>
        <p className='text-gray-600'>
          Užsisakykite paslaugą greitai ir patogiai
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        {/* Name Field */}
        <div>
          <label
            htmlFor='quick-name'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Vardas *
          </label>
          <input
            type='text'
            id='quick-name'
            {...register('name', {
              required: 'Vardas yra privalomas',
            })}
            className={`w-full p-3 rounded-lg border ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
            placeholder='Jūsų vardas'
          />
          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor='quick-phone'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Telefonas *
          </label>
          <input
            type='tel'
            id='quick-phone'
            {...register('phone', {
              required: 'Telefono numeris yra privalomas',
              pattern: {
                value: /^(\+370|370|8)?[0-9\s\-\(\)]{8,}$/,
                message: 'Įveskite teisingą telefono numerį',
              },
            })}
            className={`w-full p-3 rounded-lg border ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
            placeholder='+370 xxx xxxxx'
          />
          {errors.phone && (
            <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
          )}
        </div>

        {/* Service Field */}
        <div>
          <label
            htmlFor='quick-service'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Paslauga *
          </label>
          <select
            id='quick-service'
            {...register('service', {
              required: 'Pasirinkite paslaugą',
            })}
            className={`w-full p-3 rounded-lg border ${
              errors.service ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          >
            <option value=''>Pasirinkite paslaugą</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.service.message}
            </p>
          )}
        </div>

        {/* Date Field */}
        <div>
          <label
            htmlFor='quick-date'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Pageidaujama data
          </label>
          <input
            type='date'
            id='quick-date'
            {...register('preferredDate')}
            min={new Date().toISOString().split('T')[0]}
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
          />
        </div>

        {/* Time Field */}
        <div>
          <label
            htmlFor='quick-time'
            className='block text-sm font-medium text-gray-700 mb-1'
          >
            Pageidaujamas laikas
          </label>
          <select
            id='quick-time'
            {...register('preferredTime')}
            className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
          >
            <option value=''>Pasirinkite laiką</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <Button
          type='submit'
          variant='primary'
          size='lg'
          className='w-full'
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Rezervuojama...' : 'Rezervuoti'}
        </Button>

        {/* Call Option */}
        <div className='text-center pt-4 border-t border-gray-200'>
          <p className='text-sm text-gray-600 mb-2'>
            Arba skambinkite tiesiogiai:
          </p>
          <a
            href='tel:+370606047967'
            className='text-accent hover:text-red-700 font-medium inline-flex items-center'
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_call', {
                  event_category: 'contact',
                  event_label: 'quick_booking_phone',
                  value: 1,
                });
              }
            }}
          >
            <PhoneIcon className='w-4 h-4 mr-1' />
            +370 6 06 47 967
          </a>
        </div>
      </form>
    </div>
  );
};

export default QuickBooking;
