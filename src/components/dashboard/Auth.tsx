'use client';

import { supabase } from '@/supabase-client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface AuthFormData {
  email: string;
  password: string;
}

const Auth = () => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
  });
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
    if (success) setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });

        if (error) {
          setError(error.message);
        } else {
          setSuccess(
            'Registracija sėkminga! Patikrinkite savo el. paštą dėl patvirtinimo nuorodos.'
          );
          setFormData({ email: '', password: '' });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) {
          setError(error.message);
        } else {
          setSuccess('Prisijungimas sėkmingas!');
          // Redirect or handle successful login
          window.location.reload();
        }
      }
    } catch (err) {
      setError('Įvyko nenumatyta klaida. Bandykite dar kartą. ' + err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError(null);
    setSuccess(null);
    setFormData({ email: '', password: '' });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-primary via-gray-900 to-black flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Logo/Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {isSignUp ? 'Registracija' : 'Prisijungimas'}
          </h1>
          <p className='text-gray-300'>
            {isSignUp
              ? 'Sukurkite paskyrą administratoriaus skydeliui'
              : 'Prisijunkite prie administratoriaus skydelio'}
          </p>
        </div>

        {/* Main Form Card */}
        <div className='bg-white rounded-2xl shadow-2xl p-8 border border-gray-200'>
          {/* Error Message */}
          {error && (
            <div className='mb-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
              <p className='text-red-600 text-sm'>{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className='mb-6 p-4 bg-green-50 border border-green-200 rounded-lg'>
              <p className='text-green-600 text-sm'>{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                El. pašto adresas *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleInputChange}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 text-gray-900'
                placeholder='jusu@email.com'
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Slaptažodis *
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  name='password'
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className='w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 text-gray-900'
                  placeholder={
                    isSignUp ? 'Bent 6 simboliai' : 'Jūsų slaptažodis'
                  }
                  minLength={6}
                  disabled={isLoading}
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors'
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeSlashIcon className='h-5 w-5' />
                  ) : (
                    <EyeIcon className='h-5 w-5' />
                  )}
                </button>
              </div>
              {isSignUp && (
                <p className='text-xs text-gray-500 mt-1'>
                  Slaptažodis turi būti bent 6 simbolių ilgio
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type='submit'
              variant='primary'
              size='lg'
              className='w-full'
              isLoading={isLoading}
              disabled={isLoading || !formData.email || !formData.password}
            >
              {isLoading
                ? isSignUp
                  ? 'Registruojama...'
                  : 'Prisijungiama...'
                : isSignUp
                ? 'Registruotis'
                : 'Prisijungti'}
            </Button>
          </form>

          {/* Mode Toggle */}
          <div className='mt-6 text-center'>
            <p className='text-gray-600'>
              {isSignUp ? 'Jau turite paskyrą?' : 'Neturite paskyros?'}
            </p>
            <button
              type='button'
              onClick={toggleMode}
              className='mt-2 text-accent hover:text-red-700 font-medium transition-colors duration-200'
              disabled={isLoading}
            >
              {isSignUp ? 'Prisijungti' : 'Registruotis'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className='text-center mt-8'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} ET Auto Švara. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
