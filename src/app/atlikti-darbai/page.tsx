import React from 'react';
import BeforeAfter from '@/components/BeforeAfter';
import { Image } from '@/types';
import { befoAfterImages } from '@/lib/config';

export default function AtliktiDarbai() {
  const allImages: Image[] = Array.from({ length: 193 }, (_, i) => ({
    id: i + 1,
    src: `/darbu-pavyzdziai/img_${i + 1}.JPG`,
    alt: 'Darbų pavyzdys',
  }));
  return (
    <>
      <BeforeAfter
        images={befoAfterImages}
        title='Prieš ir po'
        subTitle='Pažiūrėkite, kaip keičiasi automobiliai po mūsų profesionalių paslaugų'
      />
      <BeforeAfter
        images={allImages}
        title='Iš darbo eigos'
        subTitle='Daugiau pavyzdžių iš įvairių darbų stadijų'
      />
    </>
  );
}
