'use client';

import s from './header.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchIcon from '@/app/_icons/SearchIcon';
import UserActivity from '@/app/_components/Header/UserActivity/UserActivity';

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

export default function Header() {
  const pathname = usePathname();
  return (
    <header className='_container'>
      <div className={s.header}>
        <div className={s.logo}>
          <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
        </div>
        <ul className={s.links}>
          {headerLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className={clsx(pathname === link.href && s.active)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={s.userInterface}>
          <SearchIcon />
          <UserActivity />
        </div>
      </div>
    </header>
  );
}
