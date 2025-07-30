// 1. HOMEPAGE ONLY - Full LocalBusiness (Master Entity)
export const getHomePageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://etautosvara.lt/#business',
  name: 'ET Auto Švara',
  alternateName: 'ET Auto Svara',
  description:
    'Profesionalus automobilio valymas, detailing ir kėbulo poliravimas Vilniuje, Kairėnuose, Ližiškėse',
  url: 'https://etautosvara.lt',
  telephone: '+370606047967',
  email: 'info@etautosvara.lt',

  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Saulėtoji g. 8',
    addressLocality: 'Ližiškės',
    addressRegion: 'Vilnius',
    postalCode: '13100',
    addressCountry: 'LT',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 54.73336855501128,
    longitude: 25.426405439684676,
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],

  priceRange: '25€-300€',
  areaServed: 'Vilnius',

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Automobilio valymo paslaugos',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Žibintų poliravimas',
        },
        price: '25',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automobilio vaškavimas',
        },
        price: '80',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cheminis interjero valymas',
        },
        price: '250',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Keramikinių dangų padengimas',
        },
        price: '250',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Automobilio kėbulo poliravimas',
        },
        price: '250',
        priceCurrency: 'EUR',
      },
    ],
  },

  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '48',
  },

  sameAs: ['https://www.facebook.com/etautosvara'],
});

// 2. SERVICE PAGES - Individual Services
export const getServicesPageSchema = (
  services: Array<{
    name: string;
    description: string;
    price: string;
    duration?: string;
  }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Automobilio valymo paslaugos',
  description: 'Pilnas automobilio valymo ir detailing paslaugų sąrašas',
  numberOfItems: services.length,
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      '@id': `https://etautosvara.lt/paslaugos#${service.name
        .toLowerCase()
        .replace(/\s+/g, '-')}`,
      name: service.name,
      description: service.description,
      provider: {
        '@id': 'https://etautosvara.lt/#business',
      },
      category: 'Automotive Detailing',
      areaServed: 'Vilnius',
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
      ...(service.duration && {
        estimatedDuration: service.duration,
      }),
    },
  })),
});

// 3. FAQ PAGE
export const getFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

// 4. CONTACT PAGE
export const getContactSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@id': 'https://etautosvara.lt/#business',
  },
});

// 5. ABOUT PAGE
export const getAboutSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://etautosvara.lt/#business',
  foundingDate: '2020',
  numberOfEmployees: '1-3',
  slogan: 'Profesionalus automobilio valymas Vilniuje',
});

// 6. BREADCRUMBS (for all pages except homepage)
export const getBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// 7. WEBSITE SCHEMA (homepage only)
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://etautosvara.lt/#website',
  url: 'https://etautosvara.lt',
  name: 'ET Auto Švara',
  description: 'Profesionalus automobilio valymas Vilniuje',
  publisher: {
    '@id': 'https://etautosvara.lt/#business',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://etautosvara.lt/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

// Page-specific schema generators
export const getPageSchemas = (pageType: string, data?: any) => {
  const schemas: object[] = [];

  switch (pageType) {
    case 'home':
      schemas.push(getHomePageSchema(), getWebsiteSchema());
      break;

    case 'services':
      schemas.push(
        getServicesPageSchema(data.services),
        getBreadcrumbSchema(data.breadcrumbs)
      );
      break;

    case 'faq':
      schemas.push(
        getFAQSchema(data.faqs),
        getBreadcrumbSchema(data.breadcrumbs)
      );
      break;

    case 'contact':
      schemas.push(getContactSchema(), getBreadcrumbSchema(data.breadcrumbs));
      break;

    case 'about':
      schemas.push(getAboutSchema(), getBreadcrumbSchema(data.breadcrumbs));
      break;

    default:
      if (data?.breadcrumbs) {
        schemas.push(getBreadcrumbSchema(data.breadcrumbs));
      }
  }

  return schemas;
};
