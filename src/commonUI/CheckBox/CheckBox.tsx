import s from './checkBox.module.scss';
import CheckBoxChecked from '@/app/_icons/CheckBoxChecked';
import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';

interface IcheckBox {
  value?: string | number;
  name?: string;
  children?: React.ReactNode;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
}

type Ref = HTMLInputElement;

const CheckBox = forwardRef<Ref, IcheckBox>((props, ref) => {
  return (
    <label className={s.checkbox}>
      <input
        type='checkbox'
        ref={ref}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      <span className={s.checkmark}>
        <CheckBoxChecked />
      </span>
      {props.children}
    </label>
  );
});

export default CheckBox;
