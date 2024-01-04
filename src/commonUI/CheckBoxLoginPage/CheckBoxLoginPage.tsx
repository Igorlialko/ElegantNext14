import Link from 'next/link';
import CheckBox from '@/commonUI/CheckBox/CheckBox';

interface IcheckBoxLoginPage {
  isSignUpOrSignIn: boolean;
  register: any;
}

export default function CheckBoxLoginPage({ isSignUpOrSignIn, register }: IcheckBoxLoginPage) {
  return (
    <>
      {isSignUpOrSignIn ? (
        <CheckBox {...register}>
          <p>
            I agree with <Link href='/'>Privacy Policy</Link> and <Link href='/'>Terms of Use</Link>
          </p>
        </CheckBox>
      ) : (
        <CheckBox {...register}>
          <p>Remember me</p>
          <Link href='/'>Forgot password?</Link>
        </CheckBox>
      )}
    </>
  );
}
