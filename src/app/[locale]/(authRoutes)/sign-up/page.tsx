'use client';

import LayoutLogin from '@/app/[locale]/(authRoutes)/_components/LayoutLogin/LayoutLogin';
import LoginForm from '@/app/[locale]/(authRoutes)/_components/LoginForm/LoginForm';
import Button from '@/commonUI/Button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckBox from '@/commonUI/CheckBox/CheckBox';
import Link from 'next/link';
import TextInput from '@/commonUI/fields/TextInput/TextInput';
import PasswordInput from '@/commonUI/fields/PasswordInput/PasswordInput';
import EmailInput from '@/commonUI/fields/EmailInput/EmailInput';
import { authRegistration } from '@/modules/auth/api';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from '@/navigation';

type FormValuesSignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  checkbox: boolean;
};
export default function SignUp() {
  const router = useRouter();
  const addUserData = useAuthStore((state) => state.addUserData);
  const data = [
    {
      namePage: 'Sign up',
      description: 'Already have an account? ',
    },
  ];

  const { register, handleSubmit } = useForm<FormValuesSignUp>();
  const onSubmitSignUp: SubmitHandler<FormValuesSignUp> = (data) => {
    console.log(data);
    if (data.email && data.password) {
      authRegistration({ email: data.email, password: data.password })
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
        linkName={'Sign in'}
        linkRoute={'/sign-in'}
      >
        <LoginForm onSubmit={handleSubmit(onSubmitSignUp)}>
          <TextInput {...register('firstName')} placeholder='Your name' name={'firstName'} />
          <TextInput {...register('lastName')} placeholder='Username' name={'lastName'} />
          <EmailInput {...register('email')} placeholder='Email address' type='email' />
          <PasswordInput register={register} />
          <CheckBox {...register('checkbox')}>
            <p>
              I agree with <Link href='/'>Privacy Policy</Link> and{' '}
              <Link href='/'>Terms of Use</Link>
            </p>
          </CheckBox>
          <Button typeButton='submit'>{data[0].namePage}</Button>
        </LoginForm>
      </LayoutLogin>
    </main>
  );
}
