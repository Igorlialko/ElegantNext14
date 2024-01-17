import s from './Button.module.scss';
import clsx from 'clsx';
import React from 'react';

interface IButton {
  roundedButton?: boolean;
  typeButton?: 'submit' | 'reset' | 'button';
  children: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  roundedButton = false,
  children,
  className,
  typeButton = 'button',
  onClick,
}: IButton) {
  const classes = clsx(s.button, roundedButton && s.roundedButton, className);
  return (
    <button type={typeButton} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
