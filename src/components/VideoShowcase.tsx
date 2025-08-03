'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VideoItem {
  id: number;
  src: string;
  title: string;
}

const VideoShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const videoContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      id: 6,
      src: '/video/video_6.mp4',
      title: 'Odos impregnavimas',
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

    {
      id: 10,
      src: '/video/video_10.mp4',
      title: 'Odos impregnavimas',
    },
    // {
    //   id: 7,
    //   src: '/video/video_7.mp4',
    //   title: 'Odos impregnavimas',
    // },
    // {
    //   id: 8,
    //   src: '/video/video_8.mp4',
    //   title: 'Odos impregnavimas',
    // },
    {
      id: 9,
      src: '/video/video_9.mp4',
      title: 'Odos impregnavimas',
    },
    {
      id: 5,
      src: '/video/video_5.mp4',
      title: 'Odos impregnavimas',
    },
  ];

  // Lazy loading for individual videos
  useEffect(() => {
    const videoObservers: IntersectionObserver[] = [];

    videoContainerRefs.current.forEach((container, index) => {
      if (container) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              const videoId = videos[index].id;
              setLoadedVideos((prev) => new Set(prev).add(videoId));
              observer.disconnect(); // Stop observing once loaded
            }
          },
          {
            rootMargin: '100px', // Start loading 100px before entering viewport
            threshold: 0.1,
          }
        );

        observer.observe(container);
        videoObservers.push(observer);
      }
    });

    return () => {
      videoObservers.forEach((observer) => observer.disconnect());
    };
  }, [videos]);

  // Section visibility and video playback control
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Simple autoplay for all loaded videos
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
            Mūsų komanda naudoja pažangiausias technologijas ir metodus, kad
            kiekvienas automobilis būtų išvalytas iki tobulybės. Pažiūrėkite,
            kaip mes dirbame ir kodėl mūsų klientai mumis pasitiki.
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
              className=' relative overflow-hidden rounded-2xl shadow-2xl '
            >
              {/* Video container */}
              <div
                ref={(el) => {
                  videoContainerRefs.current[index] = el;
                }}
                className='relative aspect-[9/16] bg-black rounded-2xl overflow-hidden'
              >
                {loadedVideos.has(video.id) ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className='w-full h-full object-cover'
                    loop
                    muted
                    playsInline
                    autoPlay
                    preload='none'
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
                ) : (
                  // Placeholder while video is not loaded
                  <div className='w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center'>
                    <div className='text-white/30 text-center'>
                      <svg
                        className='w-12 h-12 mx-auto mb-2'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M8 5v10l7-5-7-5z' />
                      </svg>
                      <p className='text-xs'>Loading...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
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
