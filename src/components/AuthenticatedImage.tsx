'use client';
import { supabase } from '@/supabase-client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface AuthenticatedImageProps {
  path: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}

export default function AuthenticatedImage({
  path,
  alt,
  className = '',
  fallback,
}: AuthenticatedImageProps) {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getSignedUrl = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Extract the file path from the full URL or use as-is if it's already a path
        let filePath = path;
        if (path.includes('supabase')) {
          // If it's a full URL, extract the path part
          const url = new URL(path);
          const pathParts = url.pathname.split('/');
          filePath = pathParts.slice(-2).join('/'); // Get 'cars/filename.ext'
        }

        // Create signed URL (valid for 1 hour)
        const { data, error: signedUrlError } = await supabase.storage
          .from('cars')
          .createSignedUrl(filePath, 60 * 60); // 1 hour

        if (signedUrlError) {
          throw signedUrlError;
        }

        if (isMounted && data?.signedUrl) {
          setSignedUrl(data.signedUrl);
        }
      } catch (err) {
        console.error('Error creating signed URL:', err);
        if (isMounted) {
          setError('Failed to load image');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (path) {
      getSignedUrl();
    }

    return () => {
      isMounted = false;
    };
  }, [path]);

  if (isLoading) {
    return (
      <div
        className={`${className} bg-gray-100 animate-pulse flex items-center justify-center`}
      >
        <div className='text-sm text-gray-500'>Kraunama...</div>
      </div>
    );
  }

  if (error || !signedUrl) {
    if (fallback) {
      return <>{fallback}</>;
    }
    return (
      <div
        className={`${className} bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300`}
      >
        <div className='text-center p-4'>
          <div className='text-2xl text-gray-400 mb-2'>📷</div>
          <div className='text-sm text-gray-500'>Nuotrauka nepasiekiama</div>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={signedUrl}
      alt={alt}
      className={className}
      fill={false}
      unoptimized
      onError={() => {
        console.error('Image failed to load:', signedUrl);
        setError('Image load failed');
      }}
    />
  );
}
