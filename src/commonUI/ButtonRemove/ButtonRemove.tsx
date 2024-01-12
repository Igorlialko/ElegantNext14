import s from './buttonRemove.module.scss';
import Close from '@/app/_icons/Close';
import React from 'react';

interface IButtonRemove {
  remove: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonRemove({ remove }: IButtonRemove) {
  return (
    <button type='button' className={s.buttonRemove} onClick={remove}>
      <Close />
      Remove
    </button>
  );
}
