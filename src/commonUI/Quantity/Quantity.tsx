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
  onChangeQuantity: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Quantity({
  quantity = 1,
  increase,
  decrease,
  className,
  onChangeQuantity,
}: IQuantity) {
  return (
    <div className={clsx(s.quantity, className)}>
      <button className={s.plus} onClick={decrease}>
        <Minus />
      </button>
      <input type='tel' value={quantity} onChange={onChangeQuantity} />
      <button className={s.minus} onClick={increase}>
        <Plus />
      </button>
    </div>
  );
}
