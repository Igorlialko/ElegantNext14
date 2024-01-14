import s from './radioInput.module.scss';
import RadioButton from '@/commonUI/RadioButton/RadioButton';
import React from 'react';

interface IRadioInput {
  name: string;
  nameLabel: string;
  price: number;
  changeTotal: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

export default function RadioInput({ name, nameLabel, price, changeTotal, checked }: IRadioInput) {
  return (
    <label className={s.radioInput}>
      <RadioButton name={name} value={price} checked={checked} onChange={(e) => changeTotal(e)} />
      <span className={s.name}>{nameLabel}</span>
      <span>${price}</span>
    </label>
  );
}
