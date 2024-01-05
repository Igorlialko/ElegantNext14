import s from './Button.module.scss';
import clsx from 'clsx';
import { MouseEventHandler } from 'react';

interface Ibutton {
  roundedButton?: boolean;
  typeButton?: any;
  children: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  roundedButton = false,
  children,
  className,
  typeButton = 'submit',
  onClick,
}: Ibutton) {
  const classes = clsx(s.button, roundedButton && s.roundedButton, className);
  return (
    <button type={typeButton} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
