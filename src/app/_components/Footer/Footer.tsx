'use client';

import s from './footer.module.scss';
import MenuLinks from '@/app/_components/UI/MenuLinks/MenuLinks';
import { usePathname } from 'next/navigation';
import Facebook from '@/app/_icons/social/Facebook';
import Instagram from '@/app/_icons/social/Instagram';
import Youtube from '@/app/_icons/social/Youtube';
import Link from 'next/link';

export default function Footer() {
  const pageLinks = [
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
    <footer className={s.footer}>
      <div className='_container'>
        <div className={s.footer__top}>
          <div className={s.footer__top_logoAndAbout}>
            <Link href='/'>
              <img src='/images/logoWhite.webp' alt='logo Elegant' width={105} height={24} />
            </Link>
            <p>Gift & Decoration Store</p>
          </div>
          <div className={s.footer__top_menu}>
            <MenuLinks links={pageLinks} pathname={pathname} footer />
          </div>
        </div>
        <div className={s.footer__bottom}>
          <div className={s.footer__bottom_copyrightAndLinks}>
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
          <ul className={s.footer__bottom_social}>
            <li>
              <Link href='/'>
                <Instagram />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <Youtube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
