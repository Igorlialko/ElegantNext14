'use client';

import s from './formDetails.module.scss';
import TextInputBordered from '@/app/[locale]/(globalRoutes)/my-account/_components/fields/TextInputBordered/TextInputBordered';
import { FieldErrors, useForm } from 'react-hook-form';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });
  const onSubmitForm = (data: FormValues) => console.log(data);
  const handleError = (errors: FieldErrors) => console.log(errors);

  const formOptions = {
    firstName: {
      required: 'First name is required',
      minLength: {
        value: 2,
        message: 'First name must have at least 2 characters',
      },
      maxLength: {
        value: 15,
        message: 'First name must contain less than 15 characters',
      },
      pattern: {
        value: /^[A-Za-z]{1,15}$/,
        message: 'First name must not have numbers or special characters',
      },
    },
    lastName: {
      required: 'Last name is required',
      minLength: {
        value: 2,
        message: 'Last name must have at least 2 characters',
      },
      maxLength: {
        value: 15,
        message: 'Last name must contain less than 15 characters',
      },
      pattern: {
        value: /^[A-Za-z]{1,15}$/,
        message: 'Last name must not have numbers or special characters',
      },
    },
    displayName: {
      minLength: {
        value: 2,
        message: 'Display name must have at least 2 characters',
      },
      maxLength: {
        value: 15,
        message: 'Display name must contain less than 15 characters',
      },
      pattern: {
        value: /^[A-Za-z]{1,15}$/,
        message: 'Display name must not have numbers or special characters',
      },
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
        message: 'Incorrect e-mail format. Example:test@gmail.com',
      },
    },
  };
  return (
    <form
      className={clsx(s.formDetails, className)}
      onSubmit={handleSubmit(onSubmitForm, handleError)}
    >
      <div className={s.block}>
        <p className={s.blockTitle}>Account Details</p>
        <TextInputBordered
          {...register('firstName', formOptions.firstName)}
          placeholder='First name'
          required
          name={'firstName'}
          error={errors.firstName?.message}
        />
        <TextInputBordered
          {...register('lastName', formOptions.lastName)}
          placeholder='Last name'
          required
          name={'lastName'}
          error={errors.lastName?.message}
        />
        <TextInputBordered
          {...register('displayName', formOptions.displayName)}
          placeholder='Display name'
          name={'displayName'}
          prompt='This will be how your name will be displayed in the account section and in reviews'
          error={errors.displayName?.message}
        />
        <EmailInputBordered
          {...register('email', formOptions.email)}
          placeholder='Email'
          required
          name={'email'}
          error={errors.email?.message}
        />
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
