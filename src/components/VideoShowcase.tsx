'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const VideoShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Array of cleaning process videos
  const videos: VideoItem[] = [
    {
      id: 1,
      src: '/video/video_1.MP4',
      title: 'Interjero valymas',
    },
    {
      id: 2,
      src: '/video/video_2.MP4',
      title: 'Odos valymas putomis',
    },
    {
      id: 3,
      src: '/video/video_3.MP4',
      title: 'Odos valymas',
    },
    {
      id: 4,
      src: '/video/video_4.MP4',
      title: 'Odos impregnavimas',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Simple autoplay for all browsers
          videoRefs.current.forEach((video) => {
            if (video) {
              video.muted = true; // Ensure muted for autoplay
              const playPromise = video.play();
              if (playPromise !== undefined) {
                playPromise.catch((error) => {
                  console.log('Autoplay failed:', error);
                });
              }
            }
          });
        } else {
          // Pause videos when section is not visible
          videoRefs.current.forEach((video) => {
            if (video) {
              video.pause();
            }
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('video-showcase');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='video-showcase'
      className='py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden'
    >
      {/* Background effects */}
      <div className='absolute inset-0'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse' />
        <div className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-500' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
            Valymo procesas
          </h2>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto mb-8'>
            Pažiūrėkite, kaip vyksta profesionalus automobilio valymas.
            Kiekvienas žingsnis kruopščiai atliekamas.
          </p>
        </div>

        {/* Videos Grid */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              className='group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105'
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Video container */}
              <div className='relative aspect-[9/16] bg-black rounded-2xl overflow-hidden'>
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className='w-full h-full object-cover'
                  loop
                  muted
                  playsInline
                  autoPlay
                  preload='metadata'
                  webkit-playsinline='true'
                  x5-playsinline='true'
                  x5-video-player-type='h5'
                  x5-video-player-fullscreen='true'
                  x5-video-orientation='portrait'
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                  onError={(e) => {
                    console.error('Video error:', e);
                  }}
                >
                  <source src={video.src} type='video/mp4' />
                  <source
                    src={video.src.replace('.MP4', '.webm')}
                    type='video/webm'
                  />
                  <source
                    src={video.src.replace('.MP4', '.mov')}
                    type='video/quicktime'
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Video info */}
              <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                <h3 className='text-white font-semibold text-lg mb-1'>
                  {video.title}
                </h3>
                {/* <p className='text-gray-300 text-sm'>{video.description}</p> */}
              </div>

              {/* Decorative border */}
              <div className='absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-accent via-blue-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none' />
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className='text-center mt-16'>
          <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Profesionalus procesas
            </h3>
            <p className='text-gray-300 max-w-3xl mx-auto'>
              Mūsų komanda naudoja pažangiausias technologijas ir metodus, kad
              kiekvienas automobilis būtų išvalytas iki tobulybės. Pažiūrėkite,
              kaip mes dirbame ir kodėl mūsų klientai mums pasitiki.
            </p>
          </div>
        </div>
      </div>

      {/* Floating particles - Fixed positions to avoid hydration mismatch */}
      <div className='absolute inset-0 pointer-events-none'>
        {[
          { left: '10%', top: '20%', delay: '0s', duration: '3s' },
          { left: '90%', top: '30%', delay: '1s', duration: '4s' },
          { left: '70%', top: '70%', delay: '2s', duration: '3.5s' },
          { left: '20%', top: '80%', delay: '0.5s', duration: '2.5s' },
        ].map((particle, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-accent rounded-full animate-ping'
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoShowcase;
