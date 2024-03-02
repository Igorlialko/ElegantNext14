import React from 'react';
import s from './createAddressButton.module.scss';
import PlusButtonAddress from '@/app/_icons/PlusButtonAddress';
import clsx from 'clsx';

interface ICreateAddressButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function CreateAddressButton({ onClick, className }: ICreateAddressButton) {
  return (
    <button className={clsx(s.button, className)} onClick={onClick}>
      <PlusButtonAddress />
    </button>
  );
}
