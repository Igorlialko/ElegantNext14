'use client';

import s from './formDetails.module.scss';
import DetailsTextInput from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountContent/components/FormDetails/components/fields/DetailsTextInput/DetailsTextInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import Button from '@/commonUI/Button/Button';
import DetailsEmailInput from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountContent/components/FormDetails/components/fields/DetailsEmailInput/DetailsEmailInput';
import DetailsPasswordInput from '@/app/[locale]/(globalRoutes)/my-account/_components/AccountContent/components/FormDetails/components/fields/DetailsPasswordInput/DetailsPasswordInput';

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
        <DetailsTextInput {...register('firstName')} placeholder='First name' name={'firstName'} />
        <DetailsTextInput {...register('lastName')} placeholder='Last name' name={'lastName'} />
        <DetailsTextInput
          {...register('displayName')}
          placeholder='Display name'
          name={'displayName'}
          prompt='This will be how your name will be displayed in the account section and in reviews'
        />
        <DetailsEmailInput {...register('email')} placeholder='Email' name={'email'} />
      </div>
      <div className={s.block}>
        <p className={s.blockTitle}>Password</p>
        <DetailsPasswordInput
          {...register('password')}
          placeholder='Old password'
          name={'oldPassword'}
        />
        <DetailsPasswordInput
          {...register('password')}
          placeholder='New password'
          name={'newPassword'}
        />
        <DetailsPasswordInput
          {...register('password')}
          placeholder='Repeat password'
          name={'RepeatPassword'}
        />
      </div>
      <Button className={s.button}>Save changes</Button>
    </form>
  );
}
