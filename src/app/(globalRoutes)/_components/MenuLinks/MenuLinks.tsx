import s from './menuLinks.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { pageLinks } from '@/utils/routes';

interface Ilinks {
  pathname: string;
  footer?: boolean;
}

export default function MenuLinks({ pathname, footer = false }: Ilinks) {
  return (
    <ul className={s.links}>
      {pageLinks.map((link) => {
        return (
          <li key={link.title}>
            <Link
              href={link.href}
              className={clsx(pathname === link.href && s.active, footer && s.footer)}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
