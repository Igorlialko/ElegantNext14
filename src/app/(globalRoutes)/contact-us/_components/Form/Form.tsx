import s from '@/app/(globalRoutes)/contact-us/_components/Form/form.module.scss';

const Form = () => {
  return (
    <section className='_container'>
      <div className={s.form}>
        <div className={s.formForms}>
          <div className={s.formName}>
            <p className={s.title}>Full Name</p>
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
            <textarea
              name='text'
              id='1'
              placeholder='Your message'
              className={s.formMessageText}
             />
          </div>
          <div className={s.formButtonContainer}>
            <button type='submit' className={s.formButton}>
              <span>Send Message</span>
            </button>
          </div>
        </div>
        <div className={s.formMaps}>
          <img src='/images/contact/Maps.webp' alt='googleMap' width={548} height={404} />
        </div>
      </div>
    </section>
  );
};
export default Form;
