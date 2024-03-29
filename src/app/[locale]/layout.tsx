import type { Metadata } from 'next';
import { Inter, Poppins, Space_Grotesk } from 'next/font/google';

import '../_styles/globals.scss';
import clsx from 'clsx';
import GlobalLayout from '@/app/[locale]/GlobalLayout';
import { ReactNode } from 'react';
import { locales } from '@/config';
// import { unstable_setRequestLocale } from 'next-intl/server';
import { AuthProvider } from '@/store/authStore';
import { cookies } from 'next/headers';
import { getCookie } from 'cookies-next';

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: any;
}) {
  // Enable static rendering
  // unstable_setRequestLocale(locale);

  const userData = getCookie('userData', { cookies }) as any;

  return (
    <html lang={locale}>
      <head>
        <link rel='icon' href='/favicon.svg' sizes='any' />
      </head>
      <body className={clsx(inter.variable, spaceGrotesk.variable, poppins.variable)}>
        <AuthProvider
          initialState={
            userData
              ? {
                  isAuthorized: true,
                  userData: JSON.parse(userData),
                }
              : {}
          }
        >
          <GlobalLayout>{children}</GlobalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
