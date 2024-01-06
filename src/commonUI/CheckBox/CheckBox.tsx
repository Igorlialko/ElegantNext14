import s from './checkBox.module.scss';
import CheckBoxChecked from '@/app/_icons/CheckBoxChecked';
import React, { ChangeEventHandler, FocusEventHandler, forwardRef } from 'react';
import clsx from 'clsx';

interface IcheckBox {
  value?: string | number;
  name?: string;
  children?: React.ReactNode;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
  optionClassName?: string;
}

type Ref = HTMLInputElement;

const CheckBox = forwardRef<Ref, IcheckBox>((props, ref) => {
  return (
    <label className={clsx(s.checkbox, props.optionClassName)}>
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
