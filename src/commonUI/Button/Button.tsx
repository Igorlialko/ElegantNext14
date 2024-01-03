import s from './Button.module.scss';
import clsx from 'clsx';

interface Ibutton {
  typeButton?: any;
  children: string;
  className?: string;
}

export default function Button({ children, className, typeButton = 'submit' }: Ibutton) {
  return (
    <button type={typeButton} className={clsx(s.button, className)}>
      {children}
    </button>
  );
}
