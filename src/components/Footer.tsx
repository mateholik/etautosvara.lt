import ContactsBlock from './ContactsBlock';

const Footer = () => {
  return (
    <div className='container mx-auto px-4 py-20'>
      <ContactsBlock className='flex justify-between space-x-4 flex-wrap' />
      <p className='text-center'>
        ET Auto Švara © - Visos teisės saugomos {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
