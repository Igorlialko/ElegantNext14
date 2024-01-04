import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

import '../_styles/globals.scss';
import clsx from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--fontFamilyInter',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--fontFamilyPoppins',
});

export const metadata: Metadata = {
  title: 'Elegant shop',
  description: 'Buy for free',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={clsx(inter.variable, poppins.variable)}>{children}</body>
    </html>
  );
}
