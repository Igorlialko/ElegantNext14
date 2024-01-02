'use client';

import s from './footer.module.scss';
import MenuLinks from '@/app/_components/MenuLinks/MenuLinks';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Socials from '@/app/_components/Footer/Socials/Socials';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={s.footer}>
      <div className='_container'>
        <div className={s.top}>
          <div className={s.logoAndAbout}>
            <Link href='/'>
              <img src='/images/logoWhite.webp' alt='logo Elegant' width={105} height={24} />
            </Link>
            <p>Gift & Decoration Store</p>
          </div>
          <div className={s.menu}>
            <MenuLinks pathname={pathname} footer />
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.copyrightAndLinks}>
            <p>Copyright © 2023 3legant. All rights reserved</p>
            <ul>
              <li>
                <Link href='/'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/'>Terms of Use</Link>
              </li>
            </ul>
          </div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
