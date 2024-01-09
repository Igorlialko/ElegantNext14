import s from './HeaderTitle.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import clsx from 'clsx';

function HeaderTitle() {
  const t = useTranslations('Home.interiorSolutions');
  const locale = useLocale();
  return (
    <div className={s.titleWrap}>
      <h3 className={clsx(s.title, s[locale])}>
        {t.rich('title', {
          spanPrimary: (chunks) => <span>{chunks}</span>,
          spanPrimary2: (chunks) => <span>{chunks}</span>,
        })}
      </h3>
      <div className={s.subTitle}>
        <span>3legant</span> is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
      </div>
    </div>
  );
}

export default HeaderTitle;
