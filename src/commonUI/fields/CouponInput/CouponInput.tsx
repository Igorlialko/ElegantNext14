import s from './couponInput.module.scss';
import {
  HTMLInputTypeAttribute,
  useState,
  FocusEvent,
  forwardRef,
  ChangeEvent,
  ReactNode,
} from 'react';
import clsx from 'clsx';
import Coupon from '@/app/_icons/Coupon';

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
  disabled?: boolean;
  buttonSlot?: ReactNode;
}

const CouponInput = forwardRef<HTMLInputElement, IInput>(
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
      disabled,
      buttonSlot,
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
        className={clsx(s.inputBlock, {
          [s.disabled]: disabled,
        })}
      >
        <Coupon />
        <label className={s.label}>
          <input
            type={type}
            className={s.input}
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
        </label>

        {buttonSlot}
      </div>
    );
  }
);

export default CouponInput;
