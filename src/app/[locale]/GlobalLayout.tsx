'use client';

import React, { ReactNode } from 'react';
import Header from '@/app/[locale]/(globalRoutes)/_components/Header/Header';
import Footer from '@/app/[locale]/(globalRoutes)/_components/Footer/Footer';
import { usePathname } from '@/navigation';

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  if (['/sign-in', '/sign-up'].includes(pathname)) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default GlobalLayout;
