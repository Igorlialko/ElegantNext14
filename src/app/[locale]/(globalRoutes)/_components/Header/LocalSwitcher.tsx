import { usePathname, useRouter } from '@/navigation';
import { locales, TLocale } from '@/config';
import { useLocale } from 'next-intl';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import s from '@/app/[locale]/(globalRoutes)/contact-us/_components/Button/button.module.scss';
import React, { useState } from 'react';

const LocalSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitch = (nextLocale: TLocale) => () => {
    router.replace(pathname, { locale: nextLocale });
  };
  const [open, setOpen] = useState(false);
  const clickFalse = () => {
    setOpen(false);
  };
  const clickOpen = () => {
    setOpen((prev) => !prev);
  };

  // return (
  //   <div style={{ display: 'flex', gap: '8px' }}>
  //     <div>Active locale:{locale}</div>
  //     {locales.map((localeItem) => (
  //       <button
  //         onClick={handleSwitch(localeItem)}
  //         key={localeItem}
  //         style={{ background: localeItem === locale ? 'green' : '#af0000' }}
  //       >
  //         {localeItem}
  //       </button>
  //     ))}
  //   </div>
  // );

  return (
    <div>
      <ClickAwayListener onClickAway={clickFalse}>
        <div className={s.country}>
          <button className={s.button} type='button' onClick={clickOpen}>
            <img
              width='24'
              height='24'
              src='https://img.icons8.com/fluency/24/ukraine-circular.png'
              alt='ukraine-circular'
            />
          </button>
          {open ? (
            <div className={s.countryContainer}>
              {locales.map((localeItem) => (
                <button onClick={handleSwitch(localeItem)} key={localeItem}>
                  {localeItem}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default LocalSwitcher;
