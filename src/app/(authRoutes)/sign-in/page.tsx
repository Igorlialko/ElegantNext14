'use client';

import LayoutLogin from '@/app/(authRoutes)/_components/LayoutLogin/LayoutLogin';
import LoginForm from '@/app/(authRoutes)/_components/LoginForm/LoginForm';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextInput from '@/commonUI/fields/TextInput/TextInput';
import PasswordInput from '@/commonUI/fields/PasswordInput/PasswordInput';
import CheckBox from '@/commonUI/CheckBox/CheckBox';
import Link from 'next/link';
import CheckBoxContainer from '@/commonUI/CheckBoxContainer/CheckBoxContainer';

type FormValuesSignIn = {
  firstNameOrEmail: string;
  password: string;
  checkbox: boolean;
};
export default function SignIn() {
  const data = [
    {
      namePage: 'Sign in',
      description: 'Don’t have an account yet? ',
    },
  ];

  const { register, handleSubmit } = useForm<FormValuesSignIn>();
  const onSubmitSignIn: SubmitHandler<FormValuesSignIn> = (data) => console.log(data);

  return (
    <main>
      <LayoutLogin
        pageName={data[0].namePage}
        description={data[0].description}
        linkRoute={'/sign-up'}
        linkName={'Sign up'}
      >
        <LoginForm onSubmit={handleSubmit(onSubmitSignIn)}>
          <TextInput
            {...register('firstNameOrEmail')}
            placeholder='Your username or email address'
          />
          <PasswordInput register={register} />
          <CheckBoxContainer>
            <CheckBox {...register('checkbox')}>
              <p>Remember me</p>
            </CheckBox>
            <Link href='/'>Forgot password?</Link>
          </CheckBoxContainer>
          <Button typeButton='submit'>{data[0].namePage}</Button>
        </LoginForm>
      </LayoutLogin>
    </main>
  );
}
