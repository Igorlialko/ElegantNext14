'use client';

import s from './header.module.scss';
import { usePathname } from 'next/navigation';
import SearchIcon from '@/app/_icons/SearchIcon';
import UserActivity from '@/app/(globalRoutes)/_components/Header/UserActivity/UserActivity';
import MenuLinks from '@/app/(globalRoutes)/_components/MenuLinks/MenuLinks';
import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useHeaderShadow } from '@/app/(globalRoutes)/_components/Header/useHeaderShadow';

export default function Header() {
  const pathname = usePathname();

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
          <Link href='/Users/abz/Portfolio/ShopHouse/ElegantNext14/public' className={s.logo}>
            <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
          </Link>
          <MenuLinks pathname={pathname} />
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
      </div>
    </header>
  );
}
