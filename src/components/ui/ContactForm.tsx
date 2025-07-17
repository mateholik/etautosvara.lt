'use client';

import React, { useState } from 'react';
import { Button } from './Button';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vardas yra privalomas';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefono numeris yra privalomas';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Neteisingas telefono numerio formatas';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Neteisingas el. pašto formatas';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Žinutė yra privaloma';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In real implementation, you would send the data to your backend
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });

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
    <form onSubmit={handleSubmit} className='space-y-6'>
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
          name='name'
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          placeholder='Jūsų vardas'
        />
        {errors.name && (
          <p className='text-red-300 text-sm mt-1'>{errors.name}</p>
        )}
      </div>

      {/* Phone Field */}
      <div>
        <label
          htmlFor='phone'
          className='block text-sm font-medium text-white mb-2'
        >
          Telefono numeris *
        </label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleInputChange}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          placeholder='+370 xxx xxxxx'
        />
        {errors.phone && (
          <p className='text-red-300 text-sm mt-1'>{errors.phone}</p>
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
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent`}
          placeholder='jusu@email.com'
        />
        {errors.email && (
          <p className='text-red-300 text-sm mt-1'>{errors.email}</p>
        )}
      </div>

      {/* Service Field */}
      <div>
        <label
          htmlFor='service'
          className='block text-sm font-medium text-white mb-2'
        >
          Paslauga
        </label>
        <select
          id='service'
          name='service'
          value={formData.service}
          onChange={handleInputChange}
          className='w-full p-3 rounded-lg text-primary bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent'
        >
          <option value=''>Pasirinkite paslaugą</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
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
          name='message'
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className={`w-full p-3 rounded-lg text-primary bg-white border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical`}
          placeholder='Aprašykite savo poreikius...'
        />
        {errors.message && (
          <p className='text-red-300 text-sm mt-1'>{errors.message}</p>
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
        Paspaudę "Siųsti užklausą" sutinkate su asmens duomenų tvarkymu.
      </p>
    </form>
  );
};

export default ContactForm;
