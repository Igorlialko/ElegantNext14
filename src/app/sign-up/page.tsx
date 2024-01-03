'use client';

import LayoutLogin from '@/app/_components/LayoutLogin/LayoutLogin';
import LoginForm from '@/commonUI/LoginForm/LoginForm';
import Input from '@/commonUI/Input/Input';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckBoxLoginPage from '@/commonUI/CheckBoxLoginPage/CheckBoxLoginPage';

type FormValuesSignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  checkbox: boolean;
};
export default function SignUp() {
  const data = [
    {
      namePage: 'Sign up',
      description: 'Already have an account?',
    },
  ];

  const isLoginPage = true;
  const isSignUpOrSignIn = isLoginPage && data[0].namePage === 'Sign up';

  const { register, handleSubmit } = useForm<FormValuesSignUp>();
  const onSubmitSignUp: SubmitHandler<FormValuesSignUp> = (data) => console.log(data);

  return (
    <main>
      <LayoutLogin pageName={data[0].namePage} description={data[0].description}>
        <LoginForm onSubmit={handleSubmit(onSubmitSignUp)}>
          <Input {...register('firstName')} placeholder='Your name' />
          <Input {...register('lastName')} placeholder='Username' />
          <Input {...register('email')} placeholder='Email address' type='email' />
          <Input {...register('password')} placeholder='Password' type='password' />
          <CheckBoxLoginPage
            register={{ ...register('checkbox') }}
            isSignUpOrSignIn={isSignUpOrSignIn}
          />
          <Button>{data[0].namePage}</Button>
        </LoginForm>
      </LayoutLogin>
    </main>
  );
}
