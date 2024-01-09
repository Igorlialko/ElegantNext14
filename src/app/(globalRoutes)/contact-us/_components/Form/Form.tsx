'use client';

import s from '@/app/(globalRoutes)/contact-us/_components/Form/form.module.scss';
import { FormEvent } from 'react';
// import TextInput from '@/commonUI/fields/TextInput/TextInput';
// import Button from '@/commonUI/Button/Button';

const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //any
  };

  // todo: update to global components
  return (
    <section className='_container'>
      <div className={s.form}>
        <form className={s.formForms} onSubmit={handleSubmit}>
          <div className={s.formName}>
            <p className={s.title}>Full Name</p>
            {/*<TextInput placeholder='Your Name' name={'name'} />*/}
            <input type='text' placeholder='Your Name' name={'name'} className={s.formNameInput} />
          </div>
          <div className={s.formMail}>
            <p className={s.title}>Email address</p>
            <input
              type='email'
              placeholder='Your Email'
              name={'email'}
              className={s.formMailInput}
            />
          </div>
          <div className={s.formMessage}>
            <p className={s.title}>message</p>
            <textarea name='text' id='1' placeholder='Your message' className={s.formMessageText} />
          </div>
          <div className={s.formButtonContainer}>
            {/*<Button typeButton='submit' >*/}
            {/*  Send Message*/}
            {/*</Button>*/}
            <button type='submit' className={s.formButton}>
              <span>Send Message</span>
            </button>
          </div>
        </form>
        <div className={s.formMaps}>
          <img src='/images/contact/Maps.webp' alt='googleMap' width={548} height={404} />
        </div>
      </div>
    </section>
  );
};
export default Form;
