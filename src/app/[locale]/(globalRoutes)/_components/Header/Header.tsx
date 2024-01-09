'use client';

import s from './header.module.scss';
import SearchIcon from '@/app/_icons/SearchIcon';
import UserActivity from '@/app/[locale]/(globalRoutes)/_components/Header/UserActivity/UserActivity';
import MenuLinks from '@/app/[locale]/(globalRoutes)/_components/MenuLinks/MenuLinks';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useHeaderShadow } from '@/app/[locale]/(globalRoutes)/_components/Header/useHeaderShadow';
import BurgerMenu from '@/app/[locale]/(globalRoutes)/_components/Header/BurgerMenu/BurgerMenu';
import LocalSwitcher from '@/app/[locale]/(globalRoutes)/_components/Header/LocalSwitcher';

export default function Header() {
  const isShadow = useHeaderShadow();

  const [isAuthorized, setIsAuthorized] = useState(true);

  return (
    <header
      className={clsx(s.header, {
        [s.shadow]: isShadow,
      })}
    >
      <div className='_container'>
        <div className={s.headerMenu}>
          <Link href='/' className={s.logo}>
            <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
          </Link>
          <MenuLinks />
          <LocalSwitcher />
          {isAuthorized ? (
            <>
              <div className={s.userInterface}>
                <SearchIcon />
                <UserActivity setIsAuthorized={setIsAuthorized} />
              </div>
            </>
          ) : (
            <div className={s.buttons}>
              <Link href='/sign-in'>sign in</Link>
              <Link href='/sign-up'>sign up</Link>
            </div>
          )}
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
}
