import s from '../borderedInput.module.scss';
import { ChangeEvent, FocusEvent, forwardRef, useState } from 'react';
import clsx from 'clsx';
import IInput from '../types';

interface IInputBordered extends IInput {
  value?: string;
}

const EmailInputBordered = forwardRef<HTMLInputElement, IInputBordered>(
  (
    {
      placeholder,
      onFocus,
      onBlur,
      onChange,
      name,
      maxLength,
      min,
      max,
      minLength,
      pattern,
      required,
      className,
      classNameInput,
      value,
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [valueInput, setValueInput] = useState(value);

    const handle = {
      onFocus(e: FocusEvent<HTMLInputElement>) {
        onFocus?.(e);
        setIsFocused(true);
      },
      onBlur(e: FocusEvent<HTMLInputElement>) {
        onBlur?.(e);
        setIsFocused(false);
        setValueInput(e.target.value);
      },
      onChange(e: ChangeEvent<HTMLInputElement>) {
        onChange?.(e);
        setValueInput(e.target.value);
      },
    };

    return (
      <div className={clsx(s.detailsInput, className)}>
        {placeholder && <label htmlFor={name}>{`${placeholder}${required ? ' *' : ''}`}</label>}
        <div className={s.blockInput}>
          <input
            type='email'
            className={clsx(s.input, classNameInput)}
            onBlur={handle.onBlur}
            onFocus={handle.onFocus}
            ref={ref}
            name={name}
            onChange={handle.onChange}
            min={min}
            max={max}
            id={name}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            required={required}
            autoComplete='email'
            value={valueInput}
          />
          {!!placeholder && (
            <p
              className={clsx(s.placeholder, {
                [s.isFocused]: valueInput || isFocused,
              })}
            >
              {placeholder}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default EmailInputBordered;
