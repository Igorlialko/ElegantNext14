import s from '../borderedInput.module.scss';
import { ChangeEvent, FocusEvent, forwardRef, useState } from 'react';
import clsx from 'clsx';
import IInput from '../types';

interface IInputBordered extends IInput {
  value?: string;
}

const PhoneInputBordered = forwardRef<HTMLInputElement, IInputBordered>(
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
      prompt,
      value,
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
            type='tel'
            className={clsx(s.input, classNameInput)}
            onBlur={handle.onBlur}
            onFocus={handle.onFocus}
            ref={ref}
            name={name}
            id={name}
            onChange={handle.onChange}
            min={min}
            max={max}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
            required={required}
            value={value}
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
        {prompt && <p className={s.prompt}>{prompt}</p>}
      </div>
    );
  }
);

export default PhoneInputBordered;
