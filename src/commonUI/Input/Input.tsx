import s from './input.module.scss';
import Password from '@/app/_icons/Password';
import { ChangeEventHandler, FocusEventHandler, forwardRef, useState } from 'react';

interface Iinput {
  type?: string;
  placeholder?: string;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Iinput>((props, ref) => {
  const [type, setType] = useState(props.type);
  const onClickPasswordButton = function () {
    console.log('click');
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
    console.log(type);
  };

  return (
    <div className={s.inputBlock}>
      <input
        ref={ref}
        type={type}
        className={s.input}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {props.type === 'password' && (
        <button type='button' className={s.passwordButton} onClick={onClickPasswordButton}>
          <Password />
        </button>
      )}
    </div>
  );
});

export default Input;
