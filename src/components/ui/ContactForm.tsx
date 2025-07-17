'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './Button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const services = [
    'Automobilio vaškavimas',
    'Žibintų poliravimas',
    'Nano dangos dengimas',
    'Automobilio kėbulo poliravimas',
    'Interjero bei kitų blizgių detalių poliravimas',
    'Hibridinių/nano/keramikinių dangų aplikavimas',
    'Cheminis interjero valymas',
    'Detalus išorės valymas ir komplektas',
    'Kėbulo dengimas apsaugine PPF plėvele',
    'Meninis lyginimas',
    'Kita paslauga',
  ];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In real implementation, you would send the data to your backend
      console.log('Form submitted:', data);

      // Track form submission for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'contact',
          event_label: 'contact_form',
          value: 1,
        });
      }

      setIsSubmitted(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='bg-green-50 border border-green-200 rounded-lg p-6 text-center'>
        <div className='text-green-600 text-4xl mb-4'>✅</div>
        <h3 className='text-xl font-bold text-green-800 mb-2'>
          Ačiū už jūsų užklausą!
        </h3>
        <p className='text-green-700'>
          Susisieksime su jumis per artimiausias 24 valandas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      {/* Name Field */}
      <div>
        <label
          htmlFor='name'
          className='block text-sm font-medium text-white mb-2'
        >
          Vardas *
        </label>
        <input
          type='text'
          id='name'
          {...register('name', {
            required: 'Vardas yra privalomas',
            minLength: {
              value: 2,
              message: 'Vardas turi būti bent 2 simbolių ilgio',
            },
          })}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          placeholder='Jūsų vardas'
        />
        {errors.name && (
          <p className='text-red-300 text-sm mt-1'>{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-white mb-2'
        >
          El. paštas
        </label>
        <input
          type='email'
          id='email'
          {...register('email', {
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Įveskite teisingą el. pašto adresą',
            },
          })}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          placeholder='jusu@email.com'
        />
        {errors.email && (
          <p className='text-red-300 text-sm mt-1'>{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor='message'
          className='block text-sm font-medium text-white mb-2'
        >
          Žinutė *
        </label>
        <textarea
          id='message'
          {...register('message', {
            required: 'Žinutė yra privaloma',
            minLength: {
              value: 10,
              message: 'Žinutė turi būti bent 10 simbolių ilgio',
            },
          })}
          rows={4}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical`}
          placeholder='Aprašykite savo poreikius...'
        />
        {errors.message && (
          <p className='text-red-300 text-sm mt-1'>{errors.message.message}</p>
        )}
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
        {isSubmitting ? 'Siunčiama...' : 'Siųsti užklausą'}
      </Button>

      {/* Privacy Notice */}
      <p className='text-sm text-gray-300 text-center'>
        Paspaudę &quot;Siųsti užklausą&quot; sutinkate su{' '}
        <a
          href='#'
          className='text-accent hover:text-red-300 underline'
          onClick={(e) => {
            e.preventDefault();
            // Add privacy policy modal or page
          }}
        >
          asmens duomenų tvarkymu
        </a>
        .
      </p>
    </form>
  );
};

export default ContactForm;
