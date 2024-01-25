import s from './accountMenu.module.scss';
import SelectMenu from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountMenu/components/SelectMenu/SelectMenu';
import InputDownload from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountMenu/components/InputDownload/InputDownload';

export default function AccountMenu() {
  return (
    <div className={s.accountMenu}>
      <div className={s.user}>
        <div className={s.avatar}>
          <div className={s.image}>
            <img src='/images/avatar.webp' alt='user avatar' />
            <InputDownload className={s.input} />
          </div>
          <div className={s.name}>
            <p>Sofia Havertz</p>
          </div>
        </div>
      </div>
      <SelectMenu className={s.menu} />
    </div>
  );
}
