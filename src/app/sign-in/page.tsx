'use client';

import LayoutLogin from '@/app/_components/LayoutLogin/LayoutLogin';
import LoginForm from '@/commonUI/LoginForm/LoginForm';
import Input from '@/commonUI/Input/Input';
// import CheckBox from "@/commonUI/CheckBox/CheckBox";
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckBoxLoginPage from '@/commonUI/CheckBoxLoginPage/CheckBoxLoginPage';

type FormValuesSignIn = {
  firstNameOrEmail: string;
  password: string;
  checkbox: boolean;
};
export default function SignIn() {
  const data = [
    {
      namePage: 'Sign in',
      description: 'Don’t have an account yet?',
    },
  ];
  const isSignUpOrSignIn = data[0].namePage === 'Sign up';

  const { register, handleSubmit } = useForm<FormValuesSignIn>();
  const onSubmitSignIn: SubmitHandler<FormValuesSignIn> = (data) => console.log(data);

  return (
    <main>
      <LayoutLogin pageName={data[0].namePage} description={data[0].description}>
        <LoginForm onSubmit={handleSubmit(onSubmitSignIn)}>
          <Input {...register('firstNameOrEmail')} placeholder='Your username or email address' />
          <Input {...register('password')} placeholder='Password' type='password' />
          <CheckBoxLoginPage
            register={{ ...register('checkbox') }}
            isSignUpOrSignIn={isSignUpOrSignIn}
          />
          {/*<CheckBox {...register('checkbox')}  isSignUpOrSignIn={isSignUpOrSignIn}/>*/}
          <Button>{data[0].namePage}</Button>
        </LoginForm>
      </LayoutLogin>
    </main>
  );
}
