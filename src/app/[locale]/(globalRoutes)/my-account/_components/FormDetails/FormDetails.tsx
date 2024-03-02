'use client';

import s from './formDetails.module.scss';
import TextInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/TextInputBordered/TextInputBordered';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import Button from '@/commonUI/Button/Button';
import EmailInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/EmailInputBordered/EmailInputBordered';
import PasswordInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/PasswordInputBordered/PasswordInputBordered';

type FormValues = {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  password: string;
};

interface IFormDetails {
  className?: string;
}

export default function FormDetails({ className }: IFormDetails) {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmitForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <form className={clsx(s.formDetails, className)} onSubmit={handleSubmit(onSubmitForm)}>
      <div className={s.block}>
        <p className={s.blockTitle}>Account Details</p>
        <TextInputBordered {...register('firstName')} placeholder='First name' name={'firstName'} />
        <TextInputBordered {...register('lastName')} placeholder='Last name' name={'lastName'} />
        <TextInputBordered
          {...register('displayName')}
          placeholder='Display name'
          name={'displayName'}
          prompt='This will be how your name will be displayed in the account section and in reviews'
        />
        <EmailInputBordered {...register('email')} placeholder='Email' name={'email'} />
      </div>
      <div className={s.block}>
        <p className={s.blockTitle}>Password</p>
        <PasswordInputBordered
          {...register('password')}
          placeholder='Old password'
          name={'oldPassword'}
        />
        <PasswordInputBordered
          {...register('password')}
          placeholder='New password'
          name={'newPassword'}
        />
        <PasswordInputBordered
          {...register('password')}
          placeholder='Repeat password'
          name={'RepeatPassword'}
        />
      </div>
      <Button className={s.button} typeButton='submit'>
        Save changes
      </Button>
    </form>
  );
}
