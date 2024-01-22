'use client';

import LayoutLogin from '@/app/[locale]/(authRoutes)/_components/LayoutLogin/LayoutLogin';
import LoginForm from '@/app/[locale]/(authRoutes)/_components/LoginForm/LoginForm';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import PasswordInput from '@/commonUI/fields/PasswordInput/PasswordInput';
import CheckBox from '@/commonUI/CheckBox/CheckBox';
import Link from 'next/link';
import CheckBoxContainer from '@/commonUI/CheckBoxContainer/CheckBoxContainer';
import { authLogin } from '@/modules/auth/api';
import EmailInput from '@/commonUI/fields/EmailInput/EmailInput';
import { useRouter } from '@/navigation';
import { useAuthStore } from '@/store/authStore';

type FormValuesSignIn = {
  email: string;
  password: string;
  checkbox: boolean;
};
export default function SignIn() {
  const router = useRouter();
  const addUserData = useAuthStore((state) => state.addUserData);
  const data = [
    {
      namePage: 'Sign in',
      description: 'Don’t have an account yet? ',
    },
  ];

  const { register, handleSubmit } = useForm<FormValuesSignIn>();
  const onSubmitSignIn: SubmitHandler<FormValuesSignIn> = (data) => {
    console.log(data);
    if (data.email && data.password) {
      authLogin({ email: data.email, password: data.password })
        .then((res) => {
          addUserData(res.data);
          router.push('/');
        })
        .catch((error) => {
          console.log('error', error);
          if (error?.response?.status === 400) {
            //todo: update to snackbar
            alert(error?.response?.data?.message);
          }
        });
    }
  };

  return (
    <main>
      <LayoutLogin
        pageName={data[0].namePage}
        description={data[0].description}
        linkRoute={'/sign-up'}
        linkName={'Sign up'}
      >
        <LoginForm onSubmit={handleSubmit(onSubmitSignIn)}>
          <EmailInput {...register('email')} placeholder='Email address' type='email' />
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
