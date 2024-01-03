'use client';

import s from './loginForm.module.scss';
import { FormEventHandler } from 'react';

export default function LoginForm({
  children,
  onSubmit,
}: {
  children: any;
  onSubmit: FormEventHandler;
}) {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
