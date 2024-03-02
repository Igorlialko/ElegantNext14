import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from 'react';

export default interface IInput {
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
