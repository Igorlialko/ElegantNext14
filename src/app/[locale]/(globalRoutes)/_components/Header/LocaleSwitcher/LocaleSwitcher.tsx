import { usePathname, useRouter } from '@/navigation';
import { locales, TLocale } from '@/config';
import { useLocale } from 'next-intl';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import s from './locale.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';

const localesData = [
  {
    src: '/images/country/usa.png',
    locale: locales[0],
  },
  {
    src: '/images/country/fr.png',
    locale: locales[1],
  },
  {
    src: '/images/country/ukr.png',
    locale: locales[2],
  },
];

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitch = (nextLocale: TLocale) => () => {
    router.replace(pathname, { locale: nextLocale });
  };

  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleSelect = {
    close() {
      setIsOpenSelect(false);
    },
    switcher() {
      setIsOpenSelect((prev) => !prev);
    },
  };

  const activeLocaleData = localesData.find((item) => item.locale === locale);

  return (
    <ClickAwayListener onClickAway={handleSelect.close}>
      <div className={s.country}>
        <button className={s.button} type='button' onClick={handleSelect.switcher}>
          <img width={24} height={24} src={activeLocaleData?.src} alt={locale} />
        </button>

        <div
          className={clsx(s.countryContainer, {
            [s.isOpen]: isOpenSelect,
          })}
        >
          {localesData.map((data) => (
            <button
              key={data.locale}
              onClick={handleSwitch(data.locale)}
              className={clsx(s.locale, data.locale === locale && s.active)}
            >
              <img width={24} height={24} src={data.src} alt={data.locale} />
            </button>
          ))}
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default LocaleSwitcher;
