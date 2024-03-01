'use client';

import React from 'react';
import s from './menu.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from '@/navigation';

interface IMenuMenu {
  className?: string;
}

const links = [
  { route: '/my-account', name: 'Account' },
  { route: '/my-account/address', name: 'Address' },
  { route: '/my-account/orders', name: 'Orders' },
  { route: '/my-account/wishlist', name: 'Wishlist' },
];
export default function Menu({ className }: IMenuMenu) {
  const pathName = usePathname();

  const currentActive = links.find((item) => item.route === pathName) || links[0];

  return (
    <ul className={clsx(s.menu, className)}>
      {links.map((link) => (
        <li
          className={clsx(s.item, currentActive.route === link.route && s.active)}
          key={link.route}
        >
          <Link href={link.route}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
