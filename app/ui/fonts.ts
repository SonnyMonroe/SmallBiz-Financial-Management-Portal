import { Inter, Lusitana, Fondamento, Kreon } from 'next/font/google';

export const fondamento = Fondamento({ weight: ['400'], subsets: ['latin'] });
export const kreon = Kreon({ weight: ['400', '700'], subsets: ['latin'] });

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
