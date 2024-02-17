import s from './accountInfo.module.scss';
import H3 from '@/app/_typography/H3/H3';
import AccountMenu from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountMenu/AccountMenu';
import AccountContent from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountContent/AccountContent';

export default function AccountInfo() {
  return (
    <section className={s.accountInfo}>
      <div className='_container'>
        <div className={s.title}>
          <H3>My Account</H3>
        </div>
        <div className={s.infoContent}>
          <AccountMenu />
          <AccountContent />
        </div>
      </div>
    </section>
  );
}
