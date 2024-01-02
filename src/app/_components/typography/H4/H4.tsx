import s from './h4.module.scss';

export default function H4({ children }: { children: string }) {
  return <h4 className={s.h4}>{children}</h4>;
}
