import s from '../borderedInput.module.scss';
import { ChangeEvent, FocusEvent, forwardRef, useState } from 'react';
import clsx from 'clsx';
import IInput from '../types';

const PasswordInputBordered = forwardRef<HTMLInputElement, IInput>(
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
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHaveValue, setIsHaveValue] = useState(false);

    const handle = {
      onFocus(e: FocusEvent<HTMLInputElement>) {
        onFocus?.(e);
        setIsFocused(true);
      },
      onBlur(e: FocusEvent<HTMLInputElement>) {
        onBlur?.(e);
        setIsFocused(false);
        setIsHaveValue(!!e.target.value);
      },
      onChange(e: ChangeEvent<HTMLInputElement>) {
        onChange?.(e);
        setIsHaveValue(!!e.target.value);
      },
    };

    return (
      <div className={clsx(s.detailsInput, className)}>
        {placeholder && <label htmlFor={name}>{`${placeholder}${required ? ' *' : ''}`}</label>}
        <div className={s.blockInput}>
          <input
            type='password'
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
          />
          {!!placeholder && (
            <p
              className={clsx(s.placeholder, {
                [s.isFocused]: isHaveValue || isFocused,
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

export default PasswordInputBordered;
