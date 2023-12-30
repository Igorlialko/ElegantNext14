'use client';

import s from './header.module.scss';
import { usePathname } from 'next/navigation';
import SearchIcon from '@/app/_icons/SearchIcon';
import UserActivity from '@/app/_components/Header/UserActivity/UserActivity';
import MenuLinks from '@/app/_components/UI/MenuLinks/MenuLinks';

export default function Header() {
  const headerLinks = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Shop',
      href: '/shop',
    },
    {
      title: 'All Blogs',
      href: '/all-blogs',
    },
    {
      title: 'Contact Us',
      href: '/contact-us',
    },
  ];

  const pathname = usePathname();

  return (
    <header className={s.header}>
      <div className='_container'>
        <div className={s.headerMenu}>
          <div className={s.logo}>
            <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
          </div>
          <MenuLinks links={headerLinks} pathname={pathname} footer={false} />
          <div className={s.userInterface}>
            <SearchIcon />
            <UserActivity />
          </div>
        </div>
      </div>
    </header>
  );
}
