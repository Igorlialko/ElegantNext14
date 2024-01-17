'use client';

import s from './header.module.scss';
import SearchIcon from '@/app/_icons/SearchIcon';
import UserActivity from '@/app/[locale]/(globalRoutes)/_components/Header/UserActivity/UserActivity';
import MenuLinks from '@/app/[locale]/(globalRoutes)/_components/MenuLinks/MenuLinks';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useHeaderShadow } from '@/app/[locale]/(globalRoutes)/_components/Header/useHeaderShadow';
import BurgerMenu from '@/app/[locale]/(globalRoutes)/_components/Header/BurgerMenu/BurgerMenu';
import LocaleSwitcher from '@/app/[locale]/(globalRoutes)/_components/Header/LocaleSwitcher/LocaleSwitcher';

export default function Header() {
  const isShadow = useHeaderShadow();

  const [isAuthorized, setIsAuthorized] = useState(true);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const promiseTimeout = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
        reject('Error for reject');

        // fetch('http://localhost:3000/en/shop')
      });

    promiseTimeout()
      .then((response) => {
        console.log('response', response);
      })
      .catch((reason) => {
        console.log('reason', reason);
      })
      .finally(() => {
        console.log('finally');
      });
    console.log('mount');
  }, []);

  return (
    <header
      className={clsx(s.header, {
        [s.shadow]: isShadow,
      })}
      style={{
        backgroundColor: isRed ? 'red' : undefined,
      }}
    >
      <div className='_container'>
        <div className={s.headerMenu}>
          <Link href='/' className={s.logo}>
            <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
          </Link>
          <MenuLinks />
          {isAuthorized ? (
            <>
              <div className={s.userInterface}>
                <LocaleSwitcher />
                <SearchIcon />
                <UserActivity setIsAuthorized={setIsAuthorized} />
              </div>
            </>
          ) : (
            <div className={s.buttons}>
              <LocaleSwitcher />
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
