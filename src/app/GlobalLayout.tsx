'use client';

import React, { ReactNode } from 'react';
import Header from '@/app/(globalRoutes)/_components/Header/Header';
import Footer from '@/app/(globalRoutes)/_components/Footer/Footer';
import { usePathname } from 'next/navigation';

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
