'use client';

import { configs } from '@/lib/config';
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

type ContactsBlockProps = {
  className?: string;
  trackingLocation?: string;
};

const ContactsBlock = ({
  className,
  trackingLocation = 'contacts_block',
}: ContactsBlockProps) => {
  const pathname = usePathname() || '/';

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
      icon: (
        <Image
          src='/icons/facebook.svg'
          alt='Facebook'
          width={24}
          height={24}
          className='!w-6 !h-6'
          unoptimized
        />
      ),
      label: 'Facebook',
      value: 'ET Auto Švara',
      link: configs.facebookPageLink,
    },
  ];
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
                data-event={
                  item.link.startsWith('tel:') ? 'call_click' : undefined
                }
                data-location={
                  item.link.startsWith('tel:') ? trackingLocation : undefined
                }
                data-page-path={
                  item.link.startsWith('tel:') ? pathname : undefined
                }
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
