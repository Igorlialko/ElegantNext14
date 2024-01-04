import s from './newsletter.module.scss';
import Email from '@/app/_icons/Email';
import H4 from '@/app/_typography/H4/H4';

export default function Newsletter() {
  return (
    <section className={s.newsletter}>
      <img src='/images/newsLetter/homeNewsletter.webp' alt='Newsletter' />
      <div className='_container'>
        <div className={s.newsletterBlock}>
          <div className={s.header}>
            <H4>Join Our Newsletter</H4>
            <p>Sign up for deals, new products and promotions</p>
          </div>
          <form action='' className={s.form}>
            <Email />
            <input type='email' placeholder='Email address' />
            <button type='submit'>Signup</button>
          </form>
        </div>
      </div>
    </section>
  );
}
