import s from './quantity.module.scss';
import React from 'react';
import Minus from '@/app/_icons/Minus';
import Plus from '@/app/_icons/Plus';
import clsx from 'clsx';

interface IQuantity {
  quantity?: number;
  increase: React.MouseEventHandler<HTMLButtonElement>;
  decrease: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Quantity({ quantity = 1, increase, decrease, className }: IQuantity) {
  return (
    <div className={clsx(s.quantity, className)}>
      <button onClick={decrease}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={increase}>
        <Plus />
      </button>
    </div>
  );
}
