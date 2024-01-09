import s from './menuLinks.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import { pageLinks } from '@/utils/routes';
import { usePathname } from '@/navigation';

interface Ilinks {
  footer?: boolean;
}

export default function MenuLinks({ footer = false }: Ilinks) {
  const pathname = usePathname();
  return (
    <ul className={clsx(s.links, footer && s.footerLinks)}>
      {pageLinks.map((link) => {
        return (
          <li key={link.title}>
            <Link href={link.href} className={clsx(pathname === link.href && s.active)}>
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
