'use client';

import { configs } from '@/lib/config';
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const ContactsBlock = ({ className }: { className?: string }) => {
  const contactInfo = [
    {
      icon: <PhoneIcon className='w-6 h-6' />,
      label: 'Telefonas',
      value: configs.phone,
      link: `tel:${configs.phone}`,
    },
    {
      icon: <MapPinIcon className='w-6 h-6' />,
      label: 'Adresas',
      value: configs.address,
      link: 'https://maps.google.com?q=Saulėtoji+g.+8,+Ližiškės,+Vilnius',
    },
    {
      icon: <EnvelopeIcon className='w-6 h-6' />,
      label: 'El. paštas',
      value: configs.email,
      link: `mailto:${configs.email}`,
    },
    {
      icon: <img src='/icons/facebook.svg' className='!w-6 !h-6' />,
      label: 'Facebook',
      value: 'ET Auto Švara',
      link: configs.facebookPageLink,
    },
  ];
  const handlePhoneClick = (phoneNumber: string) => {
    // Track phone clicks for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'contact',
        event_label: phoneNumber,
        value: 1,
      });
    }
  };
  return (
    <div className={`space-y-6 mb-8 ${className}`}>
      {contactInfo.map((item, index) => (
        <div key={index} className='flex items-start'>
          <div className='flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white mr-4'>
            {item.icon}
          </div>
          <div>
            <p className='font-medium text-gray-300'>{item.label}</p>
            {item.link ? (
              <a
                href={item.link}
                className='text-white hover:text-accent transition-colors text-lg'
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.link.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                onClick={() => {
                  if (item.link?.startsWith('tel:')) {
                    handlePhoneClick(item.value);
                  }
                }}
              >
                {item.value}
              </a>
            ) : (
              <p className='text-white text-lg'>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsBlock;
