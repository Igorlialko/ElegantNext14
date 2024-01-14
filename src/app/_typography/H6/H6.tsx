import s from './h6.module.scss';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface IH6 {
  children: string | ReactNode;
  className?: string;
}

export default function H6({ children, className }: IH6) {
  return <h6 className={clsx(s.h6, className)}>{children}</h6>;
}
