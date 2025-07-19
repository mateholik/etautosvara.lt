'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/supabase-client';
import { User } from '@supabase/supabase-js';
import Admin from '@/components/dashboard/Admin';
import Auth from '@/components/dashboard/Auth';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-primary via-gray-900 to-black flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4'></div>
          <p className='text-white text-lg'>Kraunama...</p>
        </div>
      </div>
    );
  }

  // Render Admin if user is authenticated, otherwise render Auth
  return <div className='min-h-screen'>{user ? <Admin /> : <Auth />}</div>;
}
