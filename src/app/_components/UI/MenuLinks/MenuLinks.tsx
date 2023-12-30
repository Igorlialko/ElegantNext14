import s from './menuLinks.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export default function MenuLinks({
  links,
  pathname,
  footer = false,
}: {
  links: any[];
  pathname: string;
  footer: boolean;
}) {
  return (
    <ul className={s.links}>
      {links.map((link) => (
        <li key={link.title}>
          <Link
            href={link.href}
            className={footer ? undefined : clsx(pathname === link.href && s.active)}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
