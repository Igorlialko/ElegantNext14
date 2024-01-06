import s from './CardMin.module.scss';
import Link from 'next/link';

import clsx from 'clsx';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';

interface CardMin {
  imgUrl: string;
  title: string;
  linkTitle: string;
  imgUrlMobile: string;
}

const CardMin = ({ imgUrl, title, linkTitle, imgUrlMobile }: CardMin) => {
  return (
    <div className={clsx(s.row2Item1)}>
      <Link href='/'>
        <picture>
          <source media='(max-width: 799px)' srcSet={imgUrlMobile} />
          <source media='(min-width: 800px)' srcSet={imgUrl} />
          <img src={imgUrl} alt='ShopImage' width={548} height={319} />
        </picture>
      </Link>
      <div className={s.cardTitle}>
        <div className={s.title}>{title}</div>
        <UnderLineLink url='/' className={clsx(s.underLineLink, s.link)}>
          {linkTitle}
        </UnderLineLink>
      </div>
    </div>
  );
};
export default CardMin;
