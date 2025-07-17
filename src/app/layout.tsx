import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title:
    'ET Auto Švara - Profesionalus automobilio valymas | Vilnius | Kairėnai',
  description:
    'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos. Skambinkite: +370 6 06 47 967',
  keywords:
    'automobilio valymas, cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos, Vilnius, ET Auto Švara',
  authors: [{ name: 'ET Auto Švara' }],
  creator: 'ET Auto Švara',
  publisher: 'ET Auto Švara',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://etautosvara.lt'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ET Auto Švara - Profesionalus automobilio valymas',
    description:
      'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos.',
    url: 'https://etautosvara.lt',
    siteName: 'ET Auto Švara',
    locale: 'lt_LT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ET Auto Švara - Profesionalus automobilio valymas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ET Auto Švara - Profesionalus automobilio valymas',
    description:
      'Profesionalus automobilio valymas Vilniuje. Cheminis salono valymas, kėbulo poliravimas, žibintų poliravimas, keraminės dangos.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='lt' className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#1a1a1a' />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
