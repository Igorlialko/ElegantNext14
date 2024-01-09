import s from './MainCard.module.scss';
import Link from 'next/link';
import UnderLineLink from '@/commonUI/UnderLineLink/UnderLineLink';
import clsx from 'clsx';

interface IMainCard {
  linkTitle: string;
  title: string;
  imgUrl: string;
  imgUrlMobile: string;
}

export default function MainCard({ title, imgUrl, linkTitle, imgUrlMobile }: IMainCard) {
  return (
    <div className={s.row1Item}>
      <Link href='/'>
        <picture>
          <source media='(max-width: 799px)' srcSet={imgUrlMobile} />
          <source media='(min-width: 800px)' srcSet={imgUrl} />
          <img src={imgUrl} alt='images' width={548} height={319} />
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
}
