import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Poppins, Space_Grotesk } from 'next/font/google';

import '../_styles/globals.scss';
import clsx from 'clsx';
import Header from '@/app/(globalRoutes)/_components/Header/Header';
import Footer from '@/app/(globalRoutes)/_components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--fontFamilyInter',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--fontFamilyPoppins',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--fontFamilySpaceGrotesk',
});

export const metadata: Metadata = {
  title: 'Elegant shop',
  description: 'Buy for free',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={clsx(inter.variable, spaceGrotesk.variable, poppins.variable)}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}