import s from './UnderLink.module.scss';
import { ReactNode } from 'react';

interface ILink {
  url: string;
  children: ReactNode;
}

const UnderLineLink = ({ url, children }: ILink) => (
  <a href={url} className={s.underlineLink}>
    {children}
  </a>
);
export default UnderLineLink;
