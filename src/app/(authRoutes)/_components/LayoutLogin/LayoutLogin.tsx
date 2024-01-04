import s from './LayoutLogin.module.scss';
import Link from 'next/link';
import H4 from '@/app/_typography/H4/H4';
import { ReactNode } from 'react';

const LayoutLogin = ({
  pageName,
  description,
  children,
  linkName,
  linkRoute,
}: {
  pageName: string;
  linkName: string;
  linkRoute: string;
  description: string;
  children: ReactNode;
}) => {
  return (
    <section className={s.layoutLogin}>
      <div className={s.blockLeft}>
        <Link href='/'>
          <img src='/images/logo.webp' alt='logo elegant' width={105} height={24} />
        </Link>
        <img src='/images/layoutLogin/loginImage.webp' alt='iamge' />
      </div>
      <div className={s.blockRight}>
        <div className={s.content}>
          <H4 className={s.title}>{pageName}</H4>
          <p className={s.description}>
            <span>{description}</span>
            <Link href={linkRoute}>{linkName}</Link>
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default LayoutLogin;
