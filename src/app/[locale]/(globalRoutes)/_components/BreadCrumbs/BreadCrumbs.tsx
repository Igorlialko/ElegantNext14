import s from './breadCrumbs.module.scss';
import { Link } from '@/navigation';
import clsx from 'clsx';

interface IBreadCrumbs {
  className?: string;
  title: string;
}

export default function BreadCrumbs({ className, title }: IBreadCrumbs) {
  return (
    <ul className={clsx(s.breadCrumbs, className)}>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href={'/all-blogs' as '/'}>Blog</Link>
      </li>
      <li className={s.active}>
        <Link href='/'>{title}</Link>
      </li>
    </ul>
  );
}
