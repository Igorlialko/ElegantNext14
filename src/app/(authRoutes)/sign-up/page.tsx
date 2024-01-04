'use client';

import LayoutLogin from '@/app/(authRoutes)/_components/LayoutLogin/LayoutLogin';
import LoginForm from '@/app/(authRoutes)/_components/LoginForm/LoginForm';
import Input from '@/commonUI/fields/Input/Input';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckBox from '@/commonUI/CheckBox/CheckBox';
import Link from 'next/link';

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
      description: 'Already have an account? ',
    },
  ];

  const { register, handleSubmit } = useForm<FormValuesSignUp>();
  const onSubmitSignUp: SubmitHandler<FormValuesSignUp> = (data) => console.log(data);

  return (
    <main>
      <LayoutLogin
        pageName={data[0].namePage}
        description={data[0].description}
        linkName={'Sign in'}
        linkRoute={'/sign-in'}
      >
        <LoginForm onSubmit={handleSubmit(onSubmitSignUp)}>
          <Input {...register('firstName')} placeholder='Your name' />
          <Input {...register('lastName')} placeholder='Username' />
          <Input {...register('email')} placeholder='Email address' type='email' />
          <Input {...register('password')} placeholder='Password' type='password' />
          <CheckBox {...register('checkbox')}>
            <p>
              I agree with <Link href='/'>Privacy Policy</Link> and{' '}
              <Link href='/'>Terms of Use</Link>
            </p>
          </CheckBox>
          <Button>{data[0].namePage}</Button>
        </LoginForm>
      </LayoutLogin>
    </main>
  );
}
