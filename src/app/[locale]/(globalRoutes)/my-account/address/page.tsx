'use client';

import s from '../page.module.scss';
import H3 from '@/app/_typography/H3/H3';
import AccountMenu from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountMenu/AccountMenu';
import AddressContent from '@/app/[locale]/(globalRoutes)/my-account/address/_components/AddressContent/AddressContent';

export default function Address() {
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
              <AddressContent />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
