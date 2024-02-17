import s from '../detailsInput.module.scss';
import { ChangeEvent, FocusEvent, forwardRef, HTMLInputTypeAttribute, useState } from 'react';
import clsx from 'clsx';

interface IInput {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;

  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;

  className?: string;
  classNameInput?: string;
  prompt?: string;
}

const DetailsTextInput = forwardRef<HTMLInputElement, IInput>(
  (
    {
      type = 'text',
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
        {placeholder && <label>{`${placeholder}${required ? ' *' : ''}`}</label>}
        <div className={s.blockInput}>
          <input
            type={type}
            className={clsx(s.input, classNameInput)}
            onBlur={handle.onBlur}
            onFocus={handle.onFocus}
            ref={ref}
            name={name}
            onChange={handle.onChange}
            min={min}
            max={max}
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
        {prompt && <p className={s.prompt}>{prompt}</p>}
      </div>
    );
  }
);

export default DetailsTextInput;
