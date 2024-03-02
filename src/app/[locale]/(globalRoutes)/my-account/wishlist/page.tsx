'use client';

import s from '../page.module.scss';
import H3 from '@/app/_typography/H3/H3';
import AccountMenu from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountMenu/AccountMenu';
import WishlistContent from '@/app/[locale]/(globalRoutes)/my-account/wishlist/_components/WishlistContent/WishlistContent';

export default function Wishlist() {
  return (
    <main>
      <section className={s.account}>
        <div className='_container'>
          <div className={s.title}>
            <H3>My Account</H3>
          </div>
          <div className={s.content}>
            <AccountMenu />
            <div className={s.contentBlock}>
              <WishlistContent />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
