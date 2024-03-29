import s from './textInput.module.scss';
import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useState,
} from 'react';
import clsx from 'clsx';

interface IInput {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: any;

  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;

  buttonSlot?: ReactNode;
  className?: string;
  classNameInput?: string;
}

const TextInput = forwardRef<HTMLInputElement, IInput>(
  (
    {
      type = 'text',
      placeholder,
      onFocus,
      onBlur,
      onChange,
      name,
      value,
      maxLength,
      min,
      max,
      minLength,
      pattern,
      required,
      disabled,
      buttonSlot,
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
      <div
        className={clsx(
          s.inputBlock,
          {
            [s.disabled]: disabled,
          },
          className
        )}
      >
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
          value={value}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          required={required}
          disabled={disabled}
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
        {buttonSlot}
      </div>
    );
  }
);

export default TextInput;
