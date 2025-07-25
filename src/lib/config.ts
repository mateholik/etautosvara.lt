// Application Configuration
export const config = {
  // Site Information
  site: {
    name: 'ET Auto Švara',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://etautosvara.lt',
    description: 'Profesionalus automobilio valymas Vilniuje',
  },

  // Contact Information
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+370606047967',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@etautosvara.lt',
    address:
      process.env.NEXT_PUBLIC_ADDRESS || 'Saulėtoji g. 8, Ližiškės, Vilnius',
  },

  // Business Hours
  businessHours: {
    weekdays: 'I-V 9:00 - 18:00',
    saturday: 'VI 10:00 - 15:00',
    sunday: 'Nedirbame',
  },

  // Social Media
  social: {
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ||
      'https://www.facebook.com/etautosvara',
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX',
  },

  // Maps
  maps: {
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    coordinates: {
      lat: 54.7,
      lng: 25.2,
    },
  },

  // Form Configuration
  forms: {
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '',
  },

  // Services Configuration
  services: [
    {
      name: 'Automobilio vaškavimas',
      price: 'nuo 80 €',
      unit: 'projektas',
    },
    {
      name: 'Žibintų poliravimas',
      price: 'nuo 25 €',
      unit: 'vnt.',
    },
    {
      name: 'Nano dangos dengimas',
      price: 'nuo 200 €',
      unit: 'projektas',
    },
    {
      name: 'Automobilio kėbulo poliravimas',
      price: 'nuo 250 €',
      unit: 'projektas',
    },
    {
      name: 'Interjero bei kitų blizgių detalių poliravimas',
      price: 'nuo 35 €',
      unit: 'vnt.',
    },
    {
      name: 'Hibridinių/nano/keramikinių dangų aplikavimas',
      price: 'nuo 250 €',
      unit: 'projektas',
    },
    {
      name: 'Cheminis interjero valymas',
      price: 'nuo 150 €',
      unit: 'projektas',
    },
    {
      name: 'Detalus išorės valymas ir komplektas',
      price: 'nuo 50 €',
      unit: 'projektas',
    },
    {
      name: 'Kėbulo dengimas apsaugine PPF plėvele',
      price: 'nuo 500 €',
      unit: 'projektas',
    },
    {
      name: 'Meninis lyginimas',
      price: 'nuo 30 €',
      unit: 'vnt.',
    },
  ],
};

export const configs = {
  phone: '+370 6 06 47 967',
  email: 'tamaseviciuserikas@gmail.com',
  address: 'Saulėtoji g. 8, Ližiškės, Vilnius',
  facebookPageLink: 'https://www.facebook.com/etautosvara',
};
