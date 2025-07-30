import type { ReactNode } from 'react';
export type Image = {
  id: number;
  src: string;
  alt: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: ReactNode;
  features: string[];
};
