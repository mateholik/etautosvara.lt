'use client';
import { usePathname } from 'next/navigation';
import ContactCTA from './ContactCTA';
import ContactsBlock from './ContactsBlock';

const Footer = () => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  if (isAdmin) return;
  return (
    <>
      <div className='container mx-auto px-4 py-20'>
        <ContactsBlock className='flex justify-between space-x-4 flex-wrap' />
        <p className='text-gray-400 text-sm text-center'>
          © {new Date().getFullYear()} ET Auto Švara. Visos teisės saugomos.
        </p>
      </div>
      <ContactCTA />
    </>
  );
};

export default Footer;
