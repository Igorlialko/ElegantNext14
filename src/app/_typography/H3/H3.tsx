import s from './h3.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface Ih3 {
  children: string | ReactNode;
  className?: string;
}

const H3 = ({ children, className }: Ih3) => {
  return <h3 className={clsx(s.h3, className)}>{children}</h3>;
};

export default H3;
