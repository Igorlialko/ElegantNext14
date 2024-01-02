import s from './h7.module.scss';

export default function H7({ children }: { children: string }) {
  return <p className={s.h7}>{children}</p>;
}
