import s from './underlineLink.module.scss';
import LinkArrow from '@/app/_icons/arrows/LinkArrow';
import Link from 'next/link';
import clsx from 'clsx';

interface IUnderlineLink {
  children: string;
  url?: string;
  isLink?: boolean;
  className?: string;
}

export default function UnderLineLink({
  children,
  url = '/',
  isLink = true,
  className,
}: IUnderlineLink) {
  const classes = clsx(s.underlineLink, className);

  const inject = (
    <>
      {children}
      <LinkArrow className={s.after} />
    </>
  );

  if (isLink) {
    return (
      <Link href={url} className={classes}>
        {inject}
      </Link>
    );
  }

  return <span className={classes}>{inject}</span>;
}
