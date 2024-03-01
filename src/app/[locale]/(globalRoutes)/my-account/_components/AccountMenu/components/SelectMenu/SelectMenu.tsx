'use client';

import s from './selectMenu.module.scss';
import clsx from 'clsx';
import Link from 'next/link';
import SelectIcon from '@/app/_icons/SelectIcon';
import { useState } from 'react';
import { usePathname } from '@/navigation';

interface ISelectMenu {
  className?: string;
}

const links = [
  { route: '/my-account', name: 'Account' },
  { route: '/my-account/address', name: 'Address' },
  { route: '/my-account/orders', name: 'Orders' },
  { route: '/my-account/wishlist', name: 'Wishlist' },
];

export default function SelectMenu({ className }: ISelectMenu) {
  const [isSelectToggle, setIsSelectToggle] = useState(false);
  const pathName = usePathname();

  const currentActive = links.find((item) => item.route === pathName) || links[0];

  return (
    <>
      <div className={clsx(s.select, className, isSelectToggle && s.active)}>
        <div
          className={s.selected}
          onClick={() => {
            setIsSelectToggle((prev) => !prev);
          }}
        >
          {currentActive.name}
          <SelectIcon />
        </div>
        <ul className={s.options}>
          {links.map((item) => (
            <li
              className={clsx(s.item, currentActive.route === item.route && s.active)}
              key={item.route}
            >
              <Link
                href={item.route}
                onClick={() => {
                  setIsSelectToggle((prev) => !prev);
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
