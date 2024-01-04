import s from './h4.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface IH4 {
  children: string | ReactNode;
  className?: string;
}

export default function H4({ children, className }: IH4) {
  return <h4 className={clsx(s.h4, className)}>{children}</h4>;
}
