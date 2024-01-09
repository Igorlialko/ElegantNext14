'use client';

import s from './loginForm.module.scss';
import { FormEventHandler, ReactNode } from 'react';

export default function LoginForm({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: FormEventHandler;
}) {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
