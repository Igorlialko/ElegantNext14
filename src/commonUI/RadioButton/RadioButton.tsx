import s from './radioButton.module.scss';
import React from 'react';

interface IRadioButton {
  name: string;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}

export default function RadioButton({ name, value, onChange, checked }: IRadioButton) {
  return (
    <div className={s.radio}>
      <input
        type='radio'
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
      />
      <div className={s.radioButton} />
    </div>
  );
}
