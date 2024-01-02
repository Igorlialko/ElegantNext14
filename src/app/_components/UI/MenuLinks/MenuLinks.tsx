import s from './menuLinks.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

interface Ilinks {
  links: any[];
  pathname: string;
  footer?: boolean;
}
export default function MenuLinks({ links, pathname, footer = false }: Ilinks) {
  return (
    <ul className={s.links}>
      {links.map((link) => {
        return (
          <li key={link.title}>
            <Link
              href={link.href}
              className={footer ? undefined : clsx(pathname === link.href && s.active)}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
