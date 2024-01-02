'use client';

import s from './header.module.scss';
import { usePathname } from 'next/navigation';
import SearchIcon from '@/app/_icons/SearchIcon';
import UserActivity from '@/app/_components/Header/UserActivity/UserActivity';
import MenuLinks from '@/app/_components/MenuLinks/MenuLinks';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <div className='_container'>
        <div className={s.headerMenu}>
          <div className={s.logo}>
            <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
          </div>
          <MenuLinks pathname={pathname} />
          <div className={s.userInterface}>
            <SearchIcon />
            <UserActivity />
          </div>
        </div>
      </div>
    </header>
  );
}
