import s from './breadCrumbs.module.scss';
import { Link } from '@/navigation';
import clsx from 'clsx';

interface IBreadCrumbs {
  className?: string;
}

export default function BreadCrumbs({ className }: IBreadCrumbs) {
  return (
    <ul className={clsx(s.breadCrumbs, className)}>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/'>Blog</Link>
      </li>
      <li className={s.active}>
        <Link href='/'>How to make a busy bathroom a place to relax</Link>
      </li>
    </ul>
  );
}
