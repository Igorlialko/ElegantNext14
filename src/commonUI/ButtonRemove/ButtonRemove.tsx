import s from './buttonRemove.module.scss';
import Close from '@/app/_icons/Close';
import React from 'react';
import clsx from 'clsx';

interface IButtonRemove {
  remove: React.MouseEventHandler<HTMLButtonElement>;
  isShowText?: boolean;
  className?: string;
}

export default function ButtonRemove({ remove, isShowText = false, className }: IButtonRemove) {
  return (
    <button type='button' className={clsx(s.buttonRemove, className)} onClick={remove}>
      <Close />
      {isShowText && 'Remove'}
    </button>
  );
}
