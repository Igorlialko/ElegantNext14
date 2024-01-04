import s from './h4.module.scss';
import clsx from 'clsx';

export default function H4({ children, className }: { children: string; className?: string }) {
  return <h4 className={clsx(s.h4, className)}>{children}</h4>;
}
